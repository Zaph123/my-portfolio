'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { JsonLd } from '@/components/json-ld'
import { SectionHeading } from '../ui/section-heading'
import { cn } from '@/lib/utils'

type Project = {
  slug: string
  title: string
  domain: string
  role: string
  years: string
  /** Short card copy. Same claims as `description`, trimmed to fit one screen. */
  summary: string
  /** Full copy, kept for the future /work/[slug] page and JSON-LD. */
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  imageSrc: string
  imageLabel: string
  imageKind: 'mockup' | 'logo'
}

const projects: Project[] = [
  {
    slug: 'starrik',
    title: 'Starrik',
    domain: 'Courier / Logistics',
    role: 'Frontend Engineer',
    years: 'Sep 2024 — Dec 2025',
    summary:
      'A courier delivery platform with real-time order tracking and vendor dashboards, built on Firebase Auth, Firestore, and Storage.',
    description:
      'Built a courier delivery platform with real-time order tracking interfaces and vendor dashboards. Integrated Firebase (Auth, Firestore, Storage) for authentication and data storage, and collaborated with backend engineers on API design.',
    technologies: ['React', 'Firebase', 'Real-time tracking', 'Vendor dashboards'],
    liveUrl: 'https://starrik.com',
    githubUrl: '#',
    imageSrc: '/starrik/starrik-iphone-mockup-coal-stand.jpg', // point at your per-project folder
    imageLabel: 'Starrik courier tracking platform shown on laptop and phone mockup',
    imageKind: 'mockup',
  },
  {
    slug: 'churchera',
    title: 'Churchera',
    domain: 'Faith-Tech / Financial',
    role: 'Frontend Engineer',
    years: 'Jan 2026 — Present',
    summary:
      'Responsive faith-tech interfaces with Admin and Member role-based access, and Supabase real-time transaction tracking.',
    description:
      'Engineered responsive interfaces for a faith-tech platform using Next.js, TailwindCSS, Zustand, and Supabase. Designed Admin/Member role-based access (RBAC) for dashboards with privacy-focused handling of sensitive financial records, and used Supabase real-time for transaction tracking.',
    technologies: ['Next.js', 'TailwindCSS', 'Zustand', 'Supabase', 'RBAC'],
    liveUrl: 'https://churchera.com',
    githubUrl: '#',
    imageSrc: '/churchera/churchera-hands-holding-tablet-mockup.jpg',
    imageLabel: 'Churchera finance/member platform shown on laptop and phone mockup',
    imageKind: 'mockup',
  },
  {
    slug: 'traytic',
    title: 'Traytic',
    domain: 'B2B Admin / GodMode OS',
    role: 'Frontend Engineer',
    years: 'Jul 2026 — Aug 2026',
    summary:
      'Core admin screens for a B2B platform: analytics, plans and add-ons management, an agencies workspace, and secure sign-in with TOTP.',
    description:
      'Built core admin screens with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4: analytics overview with Recharts visualizations, Plans & Addons management (sortable/searchable/paginated tables with lifecycle actions), Agencies workspace (search, CSV bulk import, admin actions), authentication with TOTP and Cloudflare Turnstile bot protection, and design-system contributions (tokens, shadcn primitives). Collaborated in a cross-functional team using a feature-branch workflow.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Recharts',
      'Zod',
      'Cloudflare Turnstile',
    ],
    liveUrl: 'https://traytic.com',
    githubUrl: '#',
    imageSrc: '/traytic/traytic-laptop-mockup.jpg',
    imageLabel: 'Traytic brand/logo asset, not a product UI screenshot',
    imageKind: 'mockup',
  },
  {
    slug: 'quizmaniac',
    title: 'QuizManiac',
    domain: 'Education / Interactive Quiz',
    role: 'Frontend Engineer',
    years: '2024',
    summary:
      'A responsive quiz app with multiple categories, Firebase authentication and storage, and leaderboards, built with React and Vite.',
    description:
      'Responsive interactive quiz application with multiple categories, built with React + Vite. Integrated Firebase for authentication, storage, and leaderboards. Optimized for desktop and mobile use.',
    technologies: ['React', 'Vite', 'Firebase', 'TypeScript'],
    liveUrl: 'https://quiz-maniac-peach.vercel.app/',
    githubUrl: 'https://github.com/Zaph123/QuizManiac.git',
    imageSrc: '/quizmaniac/quizmaniac-floating-macbook-air-mockup.jpg',
    imageLabel: 'QuizManiac quiz application mockup',
    imageKind: 'mockup',
  },
  {
    slug: 'hustleloop',
    title: 'HustleLoop',
    domain: 'Marketplace / Ecommerce',
    role: 'Frontend Engineer',
    years: '2023 — 2024',
    summary:
      'A marketplace with search and filtering, multi-gateway payments, a referral dashboard, and KYC onboarding. Built as part of a team.',
    description:
      'Marketplace architecture (React/Vite + TailwindCSS) with browsing/search/filter, multi-gateway payments (Paystack, Etegram), referral dashboard (commission tracking + link generation), and KYC onboarding flows. Developed as part of a team collaboration.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Paystack', 'Etegram'],
    liveUrl: 'https://hustleloop.vercel.app/',
    githubUrl: 'https://github.com/icekidtech/hustleloop.git',
    imageSrc: '/hustleloop/hustleloop-iphone-mockup-dark-background.jpg',
    imageLabel: 'HustleLoop marketplace mockup',
    imageKind: 'mockup',
  },
]

/**
 * Hold = extra scroll (in viewport heights) each card stays docked before the next one
 * starts sliding over it. The scroll math below depends on this matching the CSS margin.
 */
const HOLD = 0.4

const pad = (n: number) => String(n).padStart(2, '0')

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const reduce = !!useReducedMotion()
  const one = useMotionValue(1)
  const zero = useMotionValue(0)

  // ---- Where this card sits in the deck's 0..1 scroll progress ----
  // Deck progress runs from "deck top meets viewport bottom" to "deck bottom meets viewport bottom".
  // Total scroll = total * (1 + HOLD) viewport heights; card i starts entering at i * (1 + HOLD).
  const unit = 1 + HOLD
  const D = total * unit
  const isLast = index === total - 1
  const enterRaw = useTransform(progress, [(index * unit) / D, (index * unit + 1) / D], [0, 1])
  // "Cover" = the NEXT card sliding over this one.
  const coverRaw = useTransform(
    progress,
    isLast ? [0, 1] : [((index + 1) * unit) / D, ((index + 1) * unit + 1) / D],
    isLast ? [0, 0] : [0, 1],
  )

  // Reduced motion: final state immediately, no scroll-linked change.
  const enter = reduce ? one : enterRaw
  const cover = reduce ? zero : coverRaw

  // ---- Signature move: the image's clip-path opens as the card docks ----
  const insetY = useTransform(enter, [0, 1], [14, 0])
  const insetX = useTransform(enter, [0, 1], [10, 0])
  const radius = useTransform(enter, [0, 1], [28, 0])
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% round ${radius}px)`

  // Image settles while opening, then drifts up slightly as the next card covers it.
  // End scale 1.08 leaves a 4% margin per side, enough for the -4% drift.
  const imgScale = useTransform(enter, [0, 1], [1.18, 1.08])
  const imgY = useTransform(cover, [0, 1], ['0%', '-4%'])

  // Card gets pushed back as the next one covers it.
  const cardScale = useTransform(cover, [0, 1], [1, 0.94])
  const dim = useTransform(cover, [0, 1], [0, 0.5])

  // Text arrives after the image has mostly opened.
  const titleY = useTransform(enter, [0.3, 1], ['105%', '0%'])
  const fade = useTransform(enter, [0.5, 1], [0, 1])
  const fadeY = useTransform(enter, [0.5, 1], [16, 0])

  const hasImage = project.imageSrc !== ''
  

  return (
    <article
      aria-label={project.title}
      className={reduce ? 'relative mb-8' : 'sticky top-0 h-svh'}
      style={reduce ? undefined : { marginBottom: `${HOLD * 100}svh` }}
    >
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: project.title,
          description: project.description,
          programmingLanguage: project.technologies,
          codeRepository: project.githubUrl !== '#' ? project.githubUrl : undefined,
          url: project.liveUrl !== '#' ? project.liveUrl : undefined,
        }}
      />

      <motion.div
        style={{ scale: cardScale }}
        className={cn(
          'relative origin-top overflow-hidden rounded-t-[28px] border border-border bg-background',
          reduce ? 'h-auto' : 'h-full',
        )}
      >
        {/* pt-20/24 clears the fixed navbar while the card is docked */}
        <div
          className={cn(
            'container-center flex flex-col gap-4 pb-6 pt-20 md:gap-6 md:pb-8 md:pt-24',
            reduce ? 'h-auto' : 'h-full',
          )}
        >
          <motion.div
            style={{ opacity: fade }}
            className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>
              <span className="text-foreground">{pad(index + 1)}</span> / {pad(total)}
              <span className="ml-4 hidden text-primary sm:inline">{project.domain}</span>
            </span>
            <span>{project.years}</span>
          </motion.div>

          {/* Image frame: the clip-path wrapper opens, the image inside scales and drifts */}
          <div
            className={cn(
              'relative min-h-0 overflow-hidden rounded-xl bg-card',
              reduce ? 'aspect-16/10 flex-none' : 'flex-1',
            )}
          >
            <motion.div style={{ clipPath }} className="absolute inset-0">
              <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
                {hasImage ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.imageLabel}
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    priority={index === 0}
                    className={cn(
                      project.imageKind === 'logo' ? 'object-contain p-12 md:p-24' : 'object-cover object-center',
                    )}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
                    <span className="font-display text-[clamp(3rem,10vw,9rem)] font-semibold tracking-tight text-muted-foreground/20">
                      {project.title}
                    </span>
                  </div>
                )}
              </motion.div>

              {project.imageKind === 'logo' && hasImage && (
                <span className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  Brand / logo asset, not a product UI screenshot
                </span>
              )}
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-8">
            <div className="overflow-hidden pb-[0.1em] md:col-span-5">
              <motion.h3
                style={{ y: titleY }}
                className="font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-none tracking-[-0.03em] text-foreground"
              >
                {project.title}
              </motion.h3>
            </div>

            <motion.div style={{ opacity: fade, y: fadeY }} className="flex flex-col gap-3 md:col-span-7">
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.summary}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className={cn(
                        'border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground',
                        i >= 4 && 'hidden md:inline-block',
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    aria-label={`Open ${project.title} (opens in a new tab)`}
                  >
                    Live
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dimming overlay: opacity only, no filter, so it stays cheap */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-black"
        />
      </motion.div>
    </article>
  )
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const deckRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ['start end', 'end end'],
  })

  return (
    // overflow-x-clip, not overflow-hidden: hidden creates a scroll container and breaks `sticky`
    <section ref={containerRef} id="projects" className="relative pt-24 md:pt-36">
      <div className="container-center">
        <SectionHeading title="Selected Work" containerRef={containerRef} />
      </div>

      {/* flow-root stops the last card's margin collapsing out of the deck, which the scroll math relies on */}
      <div ref={deckRef} className="relative mt-12 flow-root">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}