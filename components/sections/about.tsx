'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-36 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="About" containerRef={containerRef} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-6 space-y-5 max-w-prose"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.12)}
          >
            <motion.p variants={fadeUp} className="text-base md:text-lg text-foreground leading-relaxed">
              Frontend engineer with 2+ years of experience shipping production web applications with React.js, Next.js, TypeScript, and Node.js. Proven across B2B SaaS, courier tech, and fintech, building component systems with attention to state management, accessibility, and responsive design, integrating Firebase/Supabase backends, and turning Figma designs into polished, accessible, high-performance interfaces.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Comfortable owning features end-to-end while collaborating across product, design, and backend teams. Experienced in implementing authentication systems, payment integrations, and real-time data synchronization.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-span-6 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.1)}
          >
            <h3 className="font-display font-bold text-base mb-4">Recent Focus Areas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <span className="w-3 h-3 bg-primary rounded-full block mt-1.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Starrik (Courier Tech)</h4>
                  <p className="text-sm text-muted-foreground">Built a courier delivery platform with real-time tracking interfaces, vendor dashboards, and Firebase integration (Auth, Firestore, Storage).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <span className="w-3 h-3 bg-primary rounded-full block mt-1.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Churchera (FaithTech)</h4>
                  <p className="text-sm text-muted-foreground">Engineered responsive interfaces for tithing and donations with Supabase, Admin/Member RBAC, and real-time transaction tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <span className="w-3 h-3 bg-primary rounded-full block mt-1.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Traytic (GodMode OS)</h4>
                  <p className="text-sm text-muted-foreground">Built core admin screens with Next.js 16, React 19, TypeScript, and Tailwind CSS v4: analytics (Recharts), complex data tables, authentication (TOTP, Turnstile), and design system contributions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
