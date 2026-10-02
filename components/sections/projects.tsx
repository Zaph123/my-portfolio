'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'
import { SectionHeading } from '../ui/section-heading'
import { useRef } from 'react'
import { JsonLd } from '@/components/json-ld'
import { cn } from '@/lib/utils'
import CropHandoff from '@/components/CropHandoff'

const projects = [
  {
    title: 'Starrik',
    domain: 'Courier / Logistics',
    role: 'Frontend Engineer',
    years: 'Sep 2024 — Dec 2025',
    description:
      'Built a courier delivery platform with real-time order tracking interfaces and vendor dashboards. Integrated Firebase (Auth, Firestore, Storage) for authentication and data storage, and collaborated with backend engineers on API design.',
    technologies: ['React', 'Firebase', 'Real-time tracking', 'Vendor dashboards'],
    liveUrl: '#',
    githubUrl: '#',
    span: 'md:col-span-6 md:row-span-2',
    featured: true,
    imageLabel:
      'Starrik courier tracking platform shown on laptop and phone mockup',
    imageSrc: '/macbook-air-and-phone-mockup-starrik.jpg',
  },
  {
    title: 'Churchera',
    domain: 'Faith-Tech / Financial',
    role: 'Frontend Engineer',
    years: 'Jan 2026 — Present',
    description:
      'Engineered responsive interfaces for a faith-tech platform using Next.js, TailwindCSS, Zustand, and Supabase. Designed Admin/Member role-based access (RBAC) for dashboards with privacy-focused handling of sensitive financial records, and used Supabase real-time for transaction tracking.',
    technologies: ['Next.js', 'TailwindCSS', 'Zustand', 'Supabase', 'RBAC'],
    liveUrl: 'https://churchera.com',
    githubUrl: '#',
    span: 'md:col-span-6 md:row-span-2',
    featured: true,
    imageLabel:
      'Churchera finance/member platform shown on laptop and phone mockup',
    imageSrc: '/macbook-air-and-phone-mockup-churchera.jpg',
  },
  {
    title: 'Traytic',
    domain: 'B2B Admin / GodMode OS',
    role: 'Frontend Engineer',
    years: 'Jul 2026 — Aug 2026',
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
    liveUrl: '#',
    githubUrl: '#',
    span: 'md:col-span-6',
    featured: false,
    imageLabel: 'Traytic brand/logo asset — not a product UI screenshot',
    imageSrc: '/traytic.png',
  },
  {
    title: 'QuizManiac',
    domain: 'Education / Interactive Quiz',
    role: 'Frontend Engineer',
    years: '2024',
    description:
      'Responsive interactive quiz application with multiple categories, built with React + Vite. Integrated Firebase for authentication, storage, and leaderboards. Optimized for desktop and mobile use.',
    technologies: ['React', 'Vite', 'Firebase', 'TypeScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Zaph123/QuizManiac.git',
    span: 'md:col-span-6',
    featured: false,
    imageLabel: '',
    imageSrc: '',
  },
  {
    title: 'HustleLoop',
    domain: 'Marketplace / Ecommerce',
    role: 'Frontend Engineer',
    years: '2023 — 2024',
    description:
      'Marketplace architecture (React/Vite + TailwindCSS) with browsing/search/filter, multi-gateway payments (Paystack, Etegram), referral dashboard (commission tracking + link generation), and KYC onboarding flows. Note: developed as part of a team collaboration — described as shared contribution rather than solo ownership.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Paystack', 'Etegram'],
    liveUrl: 'https://hustleloop.vercel.app/',
    githubUrl: 'https://github.com/icekidtech/hustleloop.git',
    span: 'md:col-span-6',
    featured: false,
    imageLabel: '',
    imageSrc: '',
  },
]

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-24 md:py-36 overflow-hidden relative"
    >
      <div className="container-center">
        <SectionHeading title="Selected Work" containerRef={containerRef} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 grid-flow-dense gap-px bg-border border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
        >
          {projects.map((project, index) => {
            const isStarrikHandoff = project.title === 'Starrik'
            const nextProject = projects[index + 1]
            const isChurcheraSkipped = isStarrikHandoff && nextProject && nextProject.title === 'Churchera'

            if (isChurcheraSkipped && nextProject) {
              return (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className={cn(
                    'group relative bg-background p-6 md:p-8 flex flex-col hover:bg-card transition-colors duration-200',
                    'min-h-60',
                    project.featured ? 'md:min-h-105' : '',
                    project.span,
                  )}
                >
                  <JsonLd
                    data={{
                      '@context': 'https://schema.org',
                      '@type': 'SoftwareSourceCode',
                      name: `${project.title} → ${nextProject.title} (Handoff)`,
                      description: `Transition between ${project.title} and ${nextProject.title}`,
                      programmingLanguage: [...project.technologies, ...nextProject.technologies],
                      codeRepository:
                        project.githubUrl !== '#' ? project.githubUrl : undefined,
                      url: project.liveUrl !== '#' ? project.liveUrl : undefined,
                    }}
                  />
                  <CropHandoff
                    starrik={{
                      src: project.imageSrc,
                      label: project.imageLabel,
                    }}
                    churchera={{
                      src: nextProject.imageSrc,
                      label: nextProject.imageLabel,
                    }}
                  />
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                      {project.domain}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.years}
                    </span>
                  </div>
                  <h3 className="font-display font-bold tracking-tight mb-3 transition-colors group-hover:text-primary text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-4">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-6">{project.role}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl !== '#' ? '_blank' : undefined}
                      rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                        project.liveUrl === '#'
                          ? 'text-muted-foreground/50 cursor-default pointer-events-none'
                          : 'text-foreground hover:text-primary',
                      )}
                      aria-label={`Open project link for ${project.title}`}
                    >
                      Live
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              )
            }

            if (isStarrikHandoff && !isChurcheraSkipped) {
              // Starrik without Churchera (if Churchera wasn't skipped)
              return (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className={cn(
                    'group relative bg-background p-6 md:p-8 flex flex-col hover:bg-card transition-colors duration-200',
                    'min-h-60',
                    project.featured ? 'md:min-h-105' : '',
                    project.span,
                  )}
                >
                  <JsonLd
                    data={{
                      '@context': 'https://schema.org',
                      '@type': 'SoftwareSourceCode',
                      name: project.title,
                      description: project.description,
                      programmingLanguage: project.technologies,
                      codeRepository:
                        project.githubUrl !== '#' ? project.githubUrl : undefined,
                      url: project.liveUrl !== '#' ? project.liveUrl : undefined,
                    }}
                  />

                  {/* Mockup for featured projects with verified visual evidence */}
                  {project.featured && project.imageSrc && (
                    <div className="mb-6 rounded-lg overflow-hidden border border-border">
                      <img
                        src={project.imageSrc}
                        alt={project.imageLabel}
                        className="w-full object-cover object-center max-h-52 md:max-h-72"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                      {project.domain}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.years}
                    </span>
                  </div>

                  <h3 className="font-display font-bold tracking-tight mb-3 transition-colors group-hover:text-primary text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-4">
                    {project.description}
                  </p>

                  <p className="text-xs text-muted-foreground mb-6">{project.role}</p>

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl !== '#' ? '_blank' : undefined}
                      rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                        project.liveUrl === '#'
                          ? 'text-muted-foreground/50 cursor-default pointer-events-none'
                          : 'text-foreground hover:text-primary',
                      )}
                      aria-label={`Open project link for ${project.title}`}
                    >
                      Live
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              )
            }

            // Default project card rendering
            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className={cn(
                  'group relative bg-background p-6 md:p-8 flex flex-col hover:bg-card transition-colors duration-200',
                  'min-h-60',
                  project.featured ? 'md:min-h-105' : '',
                  project.span,
                )}
              >
                <JsonLd
                  data={{
                    '@context': 'https://schema.org',
                    '@type': 'SoftwareSourceCode',
                    name: project.title,
                    description: project.description,
                    programmingLanguage: project.technologies,
                    codeRepository:
                      project.githubUrl !== '#' ? project.githubUrl : undefined,
                    url: project.liveUrl !== '#' ? project.liveUrl : undefined,
                  }}
                />

                {/* Mockup for featured projects with verified visual evidence */}
                {project.featured && project.imageSrc && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-border">
                    <img
                      src={project.imageSrc}
                      alt={project.imageLabel}
                      className="w-full object-cover object-center max-h-52 md:max-h-72"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Logo asset for Traytic (labelled clearly, never presented as a UI screenshot) */}
                {project.title === 'Traytic' && project.imageSrc && (
                  <div className="mb-5 rounded-lg overflow-hidden border border-border bg-neutral-50 dark:bg-neutral-950 p-4">
                    <img
                      src={project.imageSrc}
                      alt={project.imageLabel}
                      className="w-full object-contain object-center max-h-36 md:max-h-48"
                      loading="lazy"
                    />
                    <p className="mt-2 text-[11px] font-mono text-muted-foreground tracking-wide uppercase">
                      Brand / Logo asset — not a product UI screenshot
                    </p>
                  </div>
                )}

                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                    {project.domain}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {project.years}
                  </span>
                </div>

                <h3 className="font-display font-bold tracking-tight mb-3 transition-colors group-hover:text-primary text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-4">
                  {project.description}
                </p>

                <p className="text-xs text-muted-foreground mb-6">{project.role}</p>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target={project.liveUrl !== '#' ? '_blank' : undefined}
                    rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                      project.liveUrl === '#'
                        ? 'text-muted-foreground/50 cursor-default pointer-events-none'
                        : 'text-foreground hover:text-primary',
                    )}
                    aria-label={`Open project link for ${project.title}`}
                  >
                    Live
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}