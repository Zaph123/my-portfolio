'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeLeft, fadeRight, fadeUp, viewport } from '@/hooks/use-scroll-animation'

const experiences = [
  {
    title: 'Lead Frontend Engineer',
    company: 'Starrik',
    duration: '2022 - Present',
    description:
      'Leading frontend architecture and development of real-time courier tracking platform. Mentored 3 junior developers and improved app performance by 40%.',
    highlights: ['Real-time GPS tracking', 'WebSocket integration', 'Performance optimization', 'Team mentoring'],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Churchera',
    duration: '2020 - 2022',
    description:
      'Developed faith-tech platform managing finances and community engagement. Implemented payment integration and increased user retention by 35%.',
    highlights: ['Payment integration', 'User authentication', 'Data visualization', 'API optimization'],
  },
  {
    title: 'Frontend Developer',
    company: 'Roothub',
    duration: '2018 - 2020',
    description:
      'Built responsive web applications and contributed to product strategy. Increased page load speed by 50% through code optimization.',
    highlights: ['Responsive design', 'Cross-browser testing', 'Performance tuning', 'Feature development'],
  },
]

interface Exp {
  title: string
  company: string
  duration: string
  description: string
  highlights: string[]
}

/** Card that slides in from the given side */
function TimelineCard({ exp, from }: { exp: Exp; from: 'left' | 'right' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={from === 'left' ? fadeLeft : fadeRight}
      className="rounded-xl border border-border bg-card p-5 space-y-3 w-full"
    >
      <div className="flex flex-wrap justify-between items-start gap-2">
        <div>
          <h3 className="font-bold text-base leading-snug">{exp.title}</h3>
          <p className="text-accent font-semibold text-sm">{exp.company}</p>
        </div>
        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full whitespace-nowrap">
          {exp.duration}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80">{exp.description}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {exp.highlights.map((h, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs border border-border rounded text-muted-foreground"
          >
            {h}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/** Animated dot that pops onto the timeline line */
function TimelineDot({ index }: { index: number }) {
  return (
    <motion.div
      className="w-4 h-4 rounded-full border-2 border-accent bg-background relative z-10"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={viewport}
      transition={{ delay: 0.08 * index, duration: 0.4, ease: 'backOut' }}
    />
  )
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="experience" className="py-20 md:py-32 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Experience" containerRef={containerRef} />

        {/* ── Timeline wrapper ── */}
        <div className="relative">

          {/*
           * Vertical growing line
           * Mobile  → positioned at left-[7px] (centre of 14px dot that starts at left-0)
           * Desktop → positioned at left-1/2   (centre of the 40px grid column)
           */}
          <motion.div
            className="absolute top-0 w-px
                        left-[7px]
                        md:left-1/2 md:-translate-x-px
                        bg-linear-to-b from-accent via-accent/40 to-transparent"
            style={{ bottom: '0.5rem', transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0   // even → card on left side (desktop)

              return (
                <div key={index} className="md:pb-14 md:last:pb-0">

                  {/* ────────── MOBILE layout ────────── */}
                  {/* Single column, dot on the left rail, card to the right */}
                  <div className="relative pl-8 md:hidden">
                    <div className="absolute left-0 top-1.5">
                      <TimelineDot index={index} />
                    </div>
                    <TimelineCard exp={exp} from="right" />
                  </div>

                  {/* ────────── DESKTOP layout ────────── */}
                  {/*
                   * 3-column grid: [1fr] [40px dot column] [1fr]
                   * Even entries: card on LEFT  →  right cell is empty
                   * Odd  entries: card on RIGHT → left  cell is empty
                   */}
                  <div
                    className="hidden md:grid md:items-center"
                    style={{ gridTemplateColumns: '1fr 40px 1fr' }}
                  >
                    {/* Left cell */}
                    <div className="pr-10 flex justify-end">
                      {isLeft && <TimelineCard exp={exp} from="right" />}
                    </div>

                    {/* Centre cell — dot */}
                    <div className="flex justify-center items-center">
                      <TimelineDot index={index} />
                    </div>

                    {/* Right cell */}
                    <div className="pl-10">
                      {!isLeft && <TimelineCard exp={exp} from="left" />}
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
