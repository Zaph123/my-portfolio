'use client'

import { useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

// Same trigger as your shared `viewport`, kept local and `as const` so it type-checks with useInView
const inViewOptions = { once: true, margin: '0px 0px -80px 0px' } as const

// Hover styles only on devices that really hover
const hoverOnly = '[@media(hover:hover)_and_(pointer:fine)]:'

type Experience = {
  company: string
  role: string
  duration: string
  /** Short, plain-language points. Full detail belongs on the project pages. */
  points: string[]
}

const experiences: Experience[] = [
  {
    company: 'Churchera (Remote)',
    role: 'Frontend Engineer',
    duration: 'Jan 2026 — Present',
    points: [
      'Building a platform where church members give tithes, offerings, and donations online.',
      'Designed separate admin and member dashboards, with access rules that keep sensitive financial records private.',
      'Set up live transaction tracking, so new donations show up as they happen.',
    ],
  },
  {
    company: 'Traytic (Remote)',
    role: 'Frontend Engineer',
    duration: 'Jul 2026 — Aug 2026',
    points: [
      'Built the main admin screens for a platform serving hosting agencies across Africa.',
      'Created the analytics dashboard, plus tools to manage plans and agencies, including bulk import from a spreadsheet.',
      'Built the whole sign-in experience: sign-up, password reset, email verification, and two-step login.',
      'Worked with backend engineers, designers, and product people in a small team.',
    ],
  },
  {
    company: 'Starrik (Remote)',
    role: 'Lead Frontend Engineer',
    duration: 'Sep 2024 — Dec 2025',
    points: [
      'Led the front end (the part users see) of a courier delivery platform for a logistics company.',
      'Built live order tracking and dashboards for vendors.',
      'Worked with backend engineers and kept coding practices consistent.',
    ],
  },
  {
    company: 'Roothub, Uyo, Akwa Ibom',
    role: 'Web development program',
    duration: 'Dec 2024 — 2025',
    points: [
      'Completed a web development program focused on building production-ready websites.',
      'Worked with developers and designers to build easy-to-use pages and fix front-end bugs.',
    ],
  },
]

/**
 * Slides its content up from behind a mask when it enters the viewport.
 *
 * The observer watches the MASK, not the moving child. A child translated fully below an
 * `overflow-hidden` parent is clipped to zero visible area, so an IntersectionObserver
 * on it (which is what `whileInView` uses) never fires and the content stays hidden.
 */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = !!useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, inViewOptions)

  return (
    <span ref={ref} className={cn('block overflow-hidden pb-[0.12em]', className)}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: '105%' }}
        animate={{ y: reduce || inView ? 0 : '105%' }}
        transition={{ duration: 0.8, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function ExperienceItem({ exp }: { exp: Experience }) {
  const ref = useRef<HTMLLIElement>(null)
  const reduce = !!useReducedMotion()
  const [pinged, setPinged] = useState(false)

  // Node: the dot scales in as the spine's tip (at 60% of the viewport) reaches this item.
  const { scrollYProgress: reach } = useScroll({ target: ref, offset: ['start 0.62', 'start 0.5'] })
  const dot = useTransform(reach, [0, 1], reduce ? [1, 1] : [0, 1])
  // One ripple, the first time the node fills. It never replays.
  useMotionValueEvent(reach, 'change', (v) => {
    if (v >= 1) setPinged(true)
  })

  // Focus: the item near the middle of the screen is fully visible, the ones leaving fade back.
  const { scrollYProgress: pass } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const focus = useTransform(pass, [0, 0.25, 0.75, 1], reduce ? [1, 1, 1, 1] : [0.3, 1, 1, 0.3])

  return (
    <li ref={ref} className="relative pl-10 md:pl-16">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0.5 flex h-3.75 w-3.75 items-center justify-center rounded-full border border-border bg-background"
      >
        {pinged && !reduce && (
          <motion.span
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2.6, opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="absolute inset-0 rounded-full bg-primary"
          />
        )}
        <motion.span style={{ scale: dot }} className="relative h-1.75 w-1.75 rounded-full bg-primary" />
      </span>

      <motion.div style={{ opacity: focus }} className="grid gap-4 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">{exp.duration}</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-2">
            {/* Hover: the name rolls up and a lime copy rolls in from below */}
            <h3 className="group/name w-fit font-display text-3xl font-light leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
              <span className="relative block overflow-hidden pb-[0.1em]">
                <span
                  className={cn(
                    'block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none',
                    `${hoverOnly}group-hover/name:-translate-y-full`,
                  )}
                >
                  {exp.company}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-0 block translate-y-full text-primary transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none',
                    `${hoverOnly}group-hover/name:translate-y-0`,
                  )}
                >
                  {exp.company}
                </span>
              </span>
            </h3>
          </Reveal>

          <Reveal delay={0.16} className="mt-1">
            <p className="text-sm text-muted-foreground md:text-base">{exp.role}</p>
          </Reveal>
        </div>

        <ul className="space-y-3 md:col-span-7 md:pt-7">
          {exp.points.map((point, i) => (
            <li key={point} className="max-w-prose text-base leading-relaxed text-muted-foreground">
              <Reveal delay={0.28 + i * 0.08}>{point}</Reveal>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  )
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const reduce = !!useReducedMotion()

  // Spine draws from 0 to 1 as the list passes the 60% line of the viewport.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.6', 'end 0.6'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const lineScale = useTransform(smooth, [0, 1], reduce ? [1, 1] : [0, 1])

  // A small dot rides the tip of the line, and disappears at both ends.
  const headTop = useTransform(smooth, [0, 1], ['0%', '100%'])
  const headOpacity = useTransform(smooth, [0, 0.02, 0.98, 1], reduce ? [0, 0, 0, 0] : [0, 1, 1, 0])

  return (
    <section ref={containerRef} id="experience" className="relative overflow-x-clip py-16 md:py-32">
      <div className="container-center">
        <SectionHeading title="Experience" containerRef={containerRef} />

        <div ref={listRef} className="relative mt-16">
          {/* Spine: grey track, lime progress, moving head. Centered on the 15px nodes. */}
          <div aria-hidden="true" className="absolute bottom-2 left-1.75 top-2 w-px">
            <div className="absolute inset-0 bg-border" />
            <motion.div style={{ scaleY: lineScale }} className="absolute inset-0 origin-top bg-primary" />
            <motion.span
              style={{ top: headTop, opacity: headOpacity }}
              className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            />
          </div>

          <ol className="relative space-y-24 md:space-y-32">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.company} exp={exp} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}