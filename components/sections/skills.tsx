'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'Zustand'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Firebase', 'Supabase', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools & Libraries',
    skills: ['Git', 'Docker', 'Webpack', 'Vite', 'Jest', 'React Testing Library'],
  },
]

export function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="skills" className="py-20 md:py-32 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Skills" containerRef={containerRef} />

        {/* Category columns stagger in */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.2)}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-accent">{category.category}</h3>

              {/* Each skill tag pops in with scale */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer(0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                    className="px-3 py-1 text-sm border border-border rounded hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
