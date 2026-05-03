'use client'

import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { fadeUp, viewport } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  containerRef: React.RefObject<HTMLElement | null>
  className?: string
}

export function SectionHeading({ title, containerRef, className }: SectionHeadingProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth out the parallax drift
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, 200])
  const x = useSpring(xTransform, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {/* 
        Background Ghost Text 
        - Positioned absolute to the nearest 'relative' parent (the Section)
        - This allows it to "break out" of the container-center
      */}
      <motion.h2 
        style={{ x }}
        className='text-7xl md:text-9xl font-bold text-foreground/3 absolute -top-12 md:-top-20 left-0 whitespace-nowrap select-none pointer-events-none z-0'
      >
        {title}
      </motion.h2>

      {/* Primary Foreground Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        {title}
      </motion.h2>
    </div>
  )
}
