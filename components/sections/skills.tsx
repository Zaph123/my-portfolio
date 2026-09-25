'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Vite', 'Redux', 'Zustand', 'Context API', 'TanStack Query'],
  },
  {
    category: 'Styling',
    skills: ['TailwindCSS', 'CSS3', 'HeadlessUI', 'ShadCN'],
  },
  {
    category: 'Backend & Database',
    skills: ['Node.js', 'Firebase', 'REST APIs', 'Firestore', 'Supabase'],
  },
  {
    category: 'Tools',
    skills: ['Git/GitHub', 'pnpm', 'Postman', 'Figma', 'VS Code'],
  },
  {
    category: 'Inclusive Design',
    skills: ['Responsive Web Design', 'Accessibility-Focused Development'],
  },
]

export function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="skills" className="py-24 md:py-36 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Stack" containerRef={containerRef} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.category} variants={fadeUp} className="bg-background p-6 md:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-5">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm md:text-base text-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
