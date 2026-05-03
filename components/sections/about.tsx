'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-32 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="About Me" containerRef={containerRef} />

        {/* Paragraphs stagger in one by one */}
        <motion.div
          className="space-y-4 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.15)}
        >
          {[
            "I'm a frontend engineer with 2+ years of experience building user-centric web applications. My passion lies in creating intuitive, performant interfaces that solve real-world problems.",
            "Throughout my career, I've worked on mission-critical platforms like Starrik (real-time courier tracking), Churchera (faith-tech management), and Hustleloop (marketplace platform). Each project reinforced my commitment to clean code, scalability, and exceptional user experience.",
            "I specialize in modern frontend technologies and enjoy mentoring junior developers. When I'm not coding, you can find me exploring new frameworks or contributing to open-source projects.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-base md:text-lg text-foreground leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
