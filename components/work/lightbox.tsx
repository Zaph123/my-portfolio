'use client'

// components/work/lightbox.tsx
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { ProjectImage } from '@/data/projects'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

const controlClass = cn(
  'flex h-11 w-11 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur',
  'transition-colors duration-200 motion-reduce:transition-none',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  '[@media(hover:hover)_and_(pointer:fine)]:hover:bg-background',
)

/** Drag can leave cursor / user-select / pointer-capture stuck if the viewer unmounts mid-gesture. */
function clearDragLocks() {
  const html = document.documentElement
  const body = document.body
  html.style.cursor = ''
  body.style.cursor = ''
  html.style.userSelect = ''
  body.style.userSelect = ''
  html.style.removeProperty('cursor')
  body.style.removeProperty('cursor')
  html.style.removeProperty('user-select')
  body.style.removeProperty('user-select')
  if (document.pointerLockElement) document.exitPointerLock?.()
}

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: ProjectImage[]
  /** null = closed */
  index: number | null
  onClose: () => void
  onIndexChange: (i: number) => void
}) {
  const reduce = !!useReducedMotion()
  const open = index !== null
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [dragging, setDragging] = useState(false)
  const count = images.length

  useEffect(() => {
    if (!open) {
      clearDragLocks()
      setDragging(false)
      return
    }

    const go = (delta: number) => onIndexChange((((index as number) + delta) % count + count) % count)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && count > 1) go(1)
      else if (e.key === 'ArrowLeft' && count > 1) go(-1)
      else if (e.key === 'Tab') {
        // Keep keyboard focus inside the viewer while it is open
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])')
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.dispatchEvent(new CustomEvent('lenis:lock'))
    closeRef.current?.focus()
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.dispatchEvent(new CustomEvent('lenis:unlock'))
      window.removeEventListener('keydown', onKey)
      clearDragLocks()
      setDragging(false)
    }
  }, [open, index, count, onClose, onIndexChange])

  const current = open ? images[index as number] : null
  const step = (delta: number) => onIndexChange((((index as number) + delta) % count + count) % count)

  const handleClose = () => {
    clearDragLocks()
    setDragging(false)
    onClose()
  }

  return (
    <AnimatePresence onExitComplete={clearDragLocks}>
      {open && current && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          // Tells the smooth-scroll library to leave wheel events inside the viewer alone
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose()
          }}
        >
          <div className="absolute right-4 top-4 flex items-center gap-3 md:right-8 md:top-8">
            <p aria-live="polite" className="font-mono text-xs text-white/70">
              {String(index! + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </p>
            <button ref={closeRef} type="button" onClick={handleClose} aria-label="Close image viewer" className={controlClass}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drag sideways to move between images (touch and mouse) */}
          <motion.div
            key={index}
            drag={count > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragListener={count > 1}
            onDragStart={() => setDragging(true)}
            onDragEnd={(_, info) => {
              setDragging(false)
              clearDragLocks()
              if (info.offset.x < -60) step(1)
              else if (info.offset.x > 60) step(-1)
            }}
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
            className={cn(
              'relative h-[72svh] w-full max-w-6xl',
              count > 1 && (dragging ? 'cursor-grabbing' : 'cursor-grab'),
            )}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 96vw"
              className="pointer-events-none select-none object-contain"
              draggable={false}
            />
          </motion.div>

          {current.caption && <p className="mt-4 max-w-xl text-center text-sm text-white/80">{current.caption}</p>}

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className={cn(controlClass, 'absolute left-3 top-1/2 -translate-y-1/2 md:left-8')}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className={cn(controlClass, 'absolute right-3 top-1/2 -translate-y-1/2 md:right-8')}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
