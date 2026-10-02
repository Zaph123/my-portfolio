'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { viewport } from '@/hooks/use-scroll-animation'

interface CropHandoffProps {
  starrik: {
    src: string
    label: string
  }
  churchera: {
    src: string
    label: string
  }
}

export default function CropHandoff({ starrik, churchera }: CropHandoffProps) {
  const reduced = useReducedMotion()

  // Reveal Churchera by clipping Starrik away.
  // Initial: Starrik fully visible — inset(0 0 0 0)
  // Final: Starrik fully clipped — inset(0 100% 0 0), Churchera shows underneath
  const initialClipPath = reduced ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)'
  const animateClipPath = 'inset(0 100% 0 0)'

  return (
    <div
      className="mb-6 rounded-lg overflow-hidden border border-border relative"
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
      }}
    >
      <img
        src={churchera.src}
        alt={churchera.label}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      <motion.img
        src={starrik.src}
        alt={starrik.label}
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ clipPath: initialClipPath }}
        whileInView={{ clipPath: animateClipPath }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        loading="lazy"
      />
    </div>
  )
}
