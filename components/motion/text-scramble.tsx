'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#'

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]!
}

/**
 * Decrypt-style morph from `from` → `to`. Characters settle left-to-right as
 * progress goes 0→1; unsettled slots tick through junk glyphs.
 */
function decryptFrame(from: string, to: string, progress: number): string {
  const len = Math.max(from.length, to.length)
  let out = ''
  for (let i = 0; i < len; i++) {
    const target = to[i] ?? ''
    // Each index settles on a staggered slice of the timeline.
    const settleAt = i / Math.max(len, 1)
    if (progress >= settleAt + 0.12 || progress >= 1) {
      out += target
    } else if (progress < settleAt) {
      out += from[i] ?? randomChar()
    } else {
      // Keep spaces stable so the word shape doesn't thrash into noise.
      out += target === ' ' ? ' ' : randomChar()
    }
  }
  return out
}

export type TextScrambleProps = {
  text: string
  nickname: string
  className?: string
  /** Hold each resolved name before the next decrypt (seconds). */
  holdDuration?: number
  /** Length of one decrypt morph (seconds). */
  scrambleDuration?: number
  /** Parent-gated start (e.g. after the hero reveal). */
  active?: boolean
}

/**
 * Cycles `text` ↔ `nickname` through a decrypt scramble.
 * Pauses off-screen and when reduced motion is requested.
 */
export function TextScramble({
  text,
  nickname,
  className,
  holdDuration = 2.5,
  scrambleDuration = 1.5,
  active = true,
}: TextScrambleProps) {
  const reduce = !!useReducedMotion()
  const [display, setDisplay] = useState(text)
  const [scrambling, setScrambling] = useState(false)
  const rootRef = useRef<HTMLSpanElement>(null)
  const inViewRef = useRef(true)
  const rafRef = useRef<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cancelledRef = useRef(false)

  const clearTimers = () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    if (timeoutRef.current != null) clearTimeout(timeoutRef.current)
    rafRef.current = null
    timeoutRef.current = null
  }

  useEffect(() => {
    cancelledRef.current = false

    if (reduce || !active) {
      clearTimers()
      setDisplay(text)
      setScrambling(false)
      return
    }

    const node = rootRef.current
    const io =
      node &&
      new IntersectionObserver(
        ([entry]) => {
          inViewRef.current = entry?.isIntersecting ?? true
        },
        { threshold: 0.2 },
      )
    if (node && io) io.observe(node)

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutRef.current = setTimeout(resolve, ms)
      })

    const morph = (from: string, to: string) =>
      new Promise<void>((resolve) => {
        setScrambling(true)
        const start = performance.now()
        const durationMs = scrambleDuration * 1000
        let pausedAt: number | null = null
        let pausedTotal = 0

        const tick = (now: number) => {
          if (cancelledRef.current) {
            resolve()
            return
          }
          // Freeze progress while off-screen (don't let wall-clock skip the morph).
          if (!inViewRef.current) {
            if (pausedAt == null) pausedAt = now
            rafRef.current = requestAnimationFrame(tick)
            return
          }
          if (pausedAt != null) {
            pausedTotal += now - pausedAt
            pausedAt = null
          }
          const t = Math.min(1, (now - start - pausedTotal) / durationMs)
          setDisplay(decryptFrame(from, to, t))
          if (t < 1) {
            rafRef.current = requestAnimationFrame(tick)
          } else {
            setDisplay(to)
            setScrambling(false)
            resolve()
          }
        }
        rafRef.current = requestAnimationFrame(tick)
      })

    const loop = async () => {
      setDisplay(text)
      // Let the entrance reveal finish before the first swap.
      await wait(holdDuration * 1000)
      while (!cancelledRef.current) {
        if (!inViewRef.current) {
          await wait(200)
          continue
        }
        await morph(text, nickname)
        if (cancelledRef.current) break
        await wait(holdDuration * 1000)
        if (cancelledRef.current) break
        if (!inViewRef.current) {
          await wait(200)
          continue
        }
        await morph(nickname, text)
        if (cancelledRef.current) break
        await wait(holdDuration * 1000)
      }
    }

    void loop()

    return () => {
      cancelledRef.current = true
      clearTimers()
      io?.disconnect()
    }
  }, [text, nickname, holdDuration, scrambleDuration, active, reduce])

  // Invisible sizer = longer of the two names, so the line doesn't jump mid-morph.
  const sizer = text.length >= nickname.length ? text : nickname

  return (
    <span
      ref={rootRef}
      className={cn('relative inline-grid align-baseline', className)}
      aria-hidden="true"
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
        {sizer}
      </span>
      <span
        className={cn(
          'col-start-1 row-start-1 whitespace-nowrap transition-colors duration-200',
          scrambling && 'text-primary',
        )}
      >
        {display}
      </span>
    </span>
  )
}
