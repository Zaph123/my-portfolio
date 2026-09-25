'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

export function EducationSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="education" className="py-24 md:py-36 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Education" containerRef={containerRef} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-6 space-y-5 max-w-prose"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.12)}
          >
            <motion.p variants={fadeUp} className="text-base md:text-lg text-foreground leading-relaxed">
              Currently pursuing Bachelor of Science in Computer Science at University of Uyo (Expected 2028). Maintaining 4.8/5.0 GPA with focus on software engineering principles, web technologies, and database systems.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Completed Senior Secondary Certificate Examination (SSCE) at Shammah College (2023). Professional proficiency in English; native Ibibio speaker.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-span-6 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.1)}
          >
            <h3 className="font-display font-bold text-base mb-4">Academic Background</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-2">University of Uyo</h4>
                <p className="text-sm text-muted-foreground">
                  BSc. Computer Science • Jan 2024 — Aug 2028 (Expected) • GPA: 4.8/5.0
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Coursework: Data Structures & Algorithms, Software Engineering, Web Development, Database Systems, Computer Networks
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 mt-4">
                <h4 className="font-semibold text-foreground mb-2">Shammah College</h4>
                <p className="text-sm text-muted-foreground">
                  Senior Secondary Certificate Examination (SSCE) • Sep 2017 — Sep 2023
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Languages: English (Professional Proficiency), Ibibio (Native)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}