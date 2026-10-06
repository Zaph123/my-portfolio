'use client'

import { useRef, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from 'framer-motion'
import { viewport } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

/** Same curve the local Reveal copies used — keep entrance feel identical. */
const EASE = [0.22, 1, 0.36, 1] as const

type MaskTag = 'span' | 'div'
type InnerTag = 'span' | 'div' | 'p'

export type RevealProps = {
  children: ReactNode
  /** Delay in seconds before the slide starts. */
  delay?: number
  /** Classes on the static overflow mask. */
  className?: string
  /** Classes on the sliding inner element. */
  innerClassName?: string
  /**
   * When set, drives the reveal instead of IntersectionObserver.
   * Use for parent-gated entrances (e.g. hero after the overlay lifts).
   */
  active?: boolean
  /** Outer mask element. Prefer `div` when you need grid/layout or motion styles. */
  as?: MaskTag
  /** Sliding inner element — keep semantic tags (`p`, etc.) on the text itself. */
  innerAs?: InnerTag
  /** Motion styles on the mask (parallax `x`, etc.). */
  style?: HTMLMotionProps<'div'>['style']
  duration?: number
  /** Starting `y` offset of the slide. Default clears the mask fully. */
  y?: string | number
  /** Extra props for the sliding element (hover handlers, aria-hidden, …). */
  innerProps?: Omit<
    HTMLMotionProps<'p'>,
    'children' | 'className' | 'animate' | 'initial' | 'transition' | 'style'
  >
}

/**
 * Slides content up from behind a mask. The observer watches the static mask, not
 * the moving child: a child translated fully below an overflow-hidden parent has
 * zero visible area and would never be reported as in view.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  innerClassName,
  active,
  as = 'span',
  innerAs = 'span',
  style,
  duration = 0.8,
  y = '105%',
  innerProps,
}: RevealProps) {
  const reduce = !!useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, viewport)
  const show = reduce || (active !== undefined ? active : inView)

  const maskClassName = cn('block overflow-hidden pb-[0.12em]', className)
  const sliding = (
    <RevealInner
      as={innerAs}
      className={innerClassName}
      delay={delay}
      duration={duration}
      innerProps={innerProps}
      reduce={reduce}
      show={show}
      y={y}
    >
      {children}
    </RevealInner>
  )

  if (as === 'div') {
    return (
      <motion.div ref={ref} style={style} className={maskClassName}>
        {sliding}
      </motion.div>
    )
  }

  return (
    <motion.span ref={ref} style={style} className={maskClassName}>
      {sliding}
    </motion.span>
  )
}

function RevealInner({
  as,
  children,
  className,
  delay,
  duration,
  innerProps,
  reduce,
  show,
  y,
}: {
  as: InnerTag
  children: ReactNode
  className?: string
  delay: number
  duration: number
  innerProps?: RevealProps['innerProps']
  reduce: boolean
  show: boolean
  y: string | number
}) {
  const props = {
    ...innerProps,
    className: cn('block', className),
    initial: reduce ? (false as const) : { y },
    animate: { y: show ? 0 : y },
    transition: { duration, delay, ease: EASE },
  }

  if (as === 'p') return <motion.p {...props}>{children}</motion.p>
  if (as === 'div') return <motion.div {...props}>{children}</motion.div>
  return <motion.span {...props}>{children}</motion.span>
}
