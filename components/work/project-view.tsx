'use client'

// components/work/project-view.tsx
import { useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Github, Maximize2 } from 'lucide-react'
import {
  motion,
  useInView,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Lightbox } from '@/components/work/lightbox'
import type { Project, ProjectImage } from '@/data/projects'
import { cn } from '@/lib/utils'
import { Reveal } from '../motion/reveal'

const EASE = [0.22, 1, 0.36, 1] as const
const inViewOptions = { once: true, margin: '0px 0px -80px 0px' } as const

// Hover styles only on devices that really hover
const hoverOnly = '[@media(hover:hover)_and_(pointer:fine)]:'

const ratioOf = (image: ProjectImage) => (image.width && image.height ? image.width / image.height : 16 / 9)



function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = !!useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type OpenFn = (index: number, trigger: HTMLElement) => void

/** The little "enlarge" chip: always visible on touch, appears on hover for mouse users. */
function ExpandChip() {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground',
        'transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none',
        `${hoverOnly}opacity-0 ${hoverOnly}translate-y-1 ${hoverOnly}group-hover:translate-y-0 ${hoverOnly}group-hover:opacity-100`,
      )}
    >
      <Maximize2 className="h-4 w-4" />
    </span>
  )
}

const frameButton = cn(
  'group relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-card',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
)

/**
 * The lead image: biggest on the board, and the only one with the scroll-linked clip-path reveal,
 * the same move as the Selected Work deck. Keeping the effect to one image keeps it meaningful.
 */
function LeadImage({ image, onOpen }: { image: ProjectImage; onOpen: OpenFn }) {
  const ref = useRef<HTMLButtonElement>(null)
  const reduce = !!useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] })
  const p = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1])
  const insetY = useTransform(p, [0, 1], [12, 0])
  const insetX = useTransform(p, [0, 1], [8, 0])
  const radius = useTransform(p, [0, 1], [28, 0])
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% round ${radius}px)`
  const scale = useTransform(p, [0, 1], [1.12, 1])

  return (
    <figure>
      <button
        ref={ref}
        type="button"
        onClick={(e) => onOpen(0, e.currentTarget)}
        aria-label={`View larger: ${image.alt}`}
        className={frameButton}
        style={{ aspectRatio: ratioOf(image) }}
      >
        <motion.div style={{ clipPath }} className="absolute inset-0">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image
              src={image.src}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain object-center"
            />
          </motion.div>
        </motion.div>
        <ExpandChip />
      </button>
      {image.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>}
    </figure>
  )
}

/** A board cell. Its width is set by the row (proportional to its ratio), so the image is never cropped. */
function Cell({ image, index, onOpen }: { image: ProjectImage; index: number; onOpen: OpenFn }) {
  const reduce = !!useReducedMotion()
  const ratio = ratioOf(image)

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, ease: EASE }}
      // On desktop each figure grows in proportion to its ratio, which makes every image in a row the same height
      className="min-w-0 md:flex-[var(--r)_1_0%]"
      style={{ '--r': ratio } as CSSProperties}
    >
      <button
        type="button"
        onClick={(e) => onOpen(index, e.currentTarget)}
        aria-label={`View larger: ${image.alt}`}
        className={frameButton}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          className="object-contain object-center"
        />
        <ExpandChip />
      </button>
      {image.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>}
    </motion.figure>
  )
}

type Item = { image: ProjectImage; index: number }

/** Groups the non-lead images into rows of 2, with a row of 3 when an odd image would be left alone. */
function buildRows(items: Item[]): Item[][] {
  const rows: Item[][] = []
  let i = 0
  while (i < items.length) {
    const left = items.length - i
    const take = left === 3 ? 3 : Math.min(2, left)
    rows.push(items.slice(i, i + take))
    i += take
  }
  return rows
}

export function ProjectView({ project, next }: { project: Project; next: Project }) {
  const gallery: ProjectImage[] = project.gallery.length
    ? project.gallery
    : [{ src: project.imageSrc, alt: project.imageLabel }]
  const [lead, ...rest] = gallery
  const rows = buildRows(rest.map((image, i) => ({ image, index: i + 1 })))

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const trigger = useRef<HTMLElement | null>(null)

  const openAt: OpenFn = (index, el) => {
    trigger.current = el
    setOpenIndex(index)
  }
  const close = () => {
    setOpenIndex(null)
    trigger.current?.focus() // hand focus back to the image that was opened
  }

  return (
    <main className="pt-28 md:pt-36">
      <div className="container-center">
        <FadeIn>
          <Link
            href="/#projects"
            className={cn(
              'inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors motion-reduce:transition-none',
              `${hoverOnly}hover:text-foreground`,
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>
        </FadeIn>

        <h1 className="mt-6 font-display text-[clamp(3rem,11vw,9rem)] font-semibold leading-none tracking-[-0.04em] text-foreground">
          <Reveal>{project.title}</Reveal>
        </h1>

        <FadeIn delay={0.3} className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-6 md:text-xl">
            {project.summary}
          </p>

          <div className="md:col-span-5 md:col-start-8">
            <dl className="divide-y divide-border border-y border-border text-sm">
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="text-right text-foreground">{project.role}</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted-foreground">Years</dt>
                <dd className="text-right text-foreground">{project.years}</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="text-right text-foreground">{project.domain}</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted-foreground">Built with</dt>
                <dd className="text-right text-muted-foreground">{project.technologies.join(' · ')}</dd>
              </div>
            </dl>

            {/* Links with no real URL are hidden, not shown greyed out */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {project.liveUrl !== '#' && (
                <Button asChild size="lg" className="bg-[#C6FF00] font-semibold text-[#0B0B0B] hover:bg-[#A3D600]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} (opens in a new tab)`}
                  >
                    Visit site
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors motion-reduce:transition-none',
                    `${hoverOnly}hover:text-primary`,
                  )}
                  aria-label={`Open the ${project.title} GitHub repository (opens in a new tab)`}
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* The board: one big lead image, then rows where every image keeps its real shape */}
      <section aria-label={`${project.title} images`} className="container-center mt-14 space-y-3 md:mt-20 md:space-y-4">
        <LeadImage image={lead} onOpen={openAt} />
        {rows.map((row) => (
          <div key={row[0].index} className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
            {row.map(({ image, index }) => (
              <Cell key={image.src} image={image} index={index} onOpen={openAt} />
            ))}
          </div>
        ))}
      </section>

      <p className="container-center mt-12 text-sm text-muted-foreground">
        Images are presentation mockups, not live product screenshots. Select one to view it larger.
      </p>

      {/* Leads into the next chapter instead of ending the page */}
      <section aria-labelledby="next-project" className="mt-28 border-t border-border py-20 md:mt-40 md:py-28">
        <div className="container-center">
          <p id="next-project" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Next project
          </p>
          <Link href={`/work/${next.slug}`} className="group mt-4 flex items-end justify-between gap-6">
            <span
              className={cn(
                'font-display text-[clamp(2.5rem,9vw,8rem)] font-semibold leading-none tracking-[-0.04em] text-foreground',
                'transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none',
                `${hoverOnly}group-hover:translate-x-3`,
              )}
            >
              {next.title}
            </span>
            <ArrowUpRight
              className={cn(
                'mb-1 h-8 w-8 shrink-0 text-muted-foreground transition-colors md:h-12 md:w-12',
                `${hoverOnly}group-hover:text-primary`,
              )}
            />
          </Link>
        </div>
      </section>

      <Lightbox images={gallery} index={openIndex} onClose={close} onIndexChange={setOpenIndex} />
    </main>
  )
}