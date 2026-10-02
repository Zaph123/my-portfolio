'use client'

import { useEffect } from 'react'
import { OpeningOverlay } from './OpeningOverlay'
import { useReducedMotion } from 'framer-motion'

/**
 * Intro overlay on every page load / refresh.
 * Skipped only when prefers-reduced-motion is set.
 */
export function OpeningSequence({
  onOpeningComplete,
}: {
  onOpeningComplete?: () => void
}) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      onOpeningComplete?.()
    }
  }, [reducedMotion, onOpeningComplete])

  if (reducedMotion) {
    return null
  }

  return (
    <OpeningOverlay
      onComplete={() => onOpeningComplete?.()}
      onSkip={() => onOpeningComplete?.()}
    />
  )
}
