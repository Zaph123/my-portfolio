'use client'

// components/work/project-view.tsx
import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import type { Project, ProjectImage } from '@/data/projects'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

// Hover styles only on devices that really hover
const hoverOnly = '[@media(hover:hover)_and_(pointer:fine)]:'

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

/** Top-of-page image: its clip-path opens once on load. */
function HeroImage({ image }: { image: ProjectImage }) {
  const reduce = !!useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { clipPath: 'inset(14% 10% round 28px)' }}
      animate={{ clipPath: 'inset(0% 0% round 0px)' }}
      transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
      className="relative overflow-hidden rounded-xl bg-card"
      style={{ aspectRatio: image.aspect ?? '16 / 9' }}
    >
      <motion.div
        initial={reduce ? false : { scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay: 0.25, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </motion.div>
  )
}

/** Gallery image: the clip-path opens as it scrolls into the viewport, and reverses on scroll back. */
function RevealImage({ image, defaultAspect, sizes }: { image: ProjectImage; defaultAspect: string; sizes: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = !!useReducedMotion()

  // Same signature move as the Selected Work deck, so the two feel like one site.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] })
  const p = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1])
  const insetY = useTransform(p, [0, 1], [12, 0])
  const insetX = useTransform(p, [0, 1], [8, 0])
  const radius = useTransform(p, [0, 1], [28, 0])
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% round ${radius}px)`
  const scale = useTransform(p, [0, 1], [1.15, 1])

  return (
    <figure>
      <div
        ref={ref}
        className="relative overflow-hidden rounded-xl bg-card"
        style={{ aspectRatio: image.aspect ?? defaultAspect }}
      >
        <motion.div style={{ clipPath }} className="absolute inset-0">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-center" />
          </motion.div>
        </motion.div>
      </div>
      {image.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>}
    </figure>
  )
}

type Block = { type: 'full'; image: ProjectImage } | { type: 'pair'; images: [ProjectImage, ProjectImage] }

/** Alternates full-width images and side-by-side pairs, so the page has a rhythm for any count. */
function buildBlocks(images: ProjectImage[]): Block[] {
  const blocks: Block[] = []
  let i = 0
  let wantPair = false
  while (i < images.length) {
    if (wantPair && i + 1 < images.length) {
      blocks.push({ type: 'pair', images: [images[i], images[i + 1]] })
      i += 2
    } else {
      blocks.push({ type: 'full', image: images[i] })
      i += 1
    }
    wantPair = !wantPair
  }
  return blocks
}

export function ProjectView({ project, next }: { project: Project; next: Project }) {
  const gallery: ProjectImage[] = project.gallery.length
    ? project.gallery
    : [{ src: project.imageSrc, alt: project.imageLabel }]
  const [lead, ...rest] = gallery
  const blocks = buildBlocks(rest)

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

      <div className="container-center mt-14 md:mt-20">
        <HeroImage image={lead} />
      </div>

      {blocks.length > 0 && (
        <div className="container-center mt-16 space-y-10 md:mt-24 md:space-y-16">
          {blocks.map((block, i) =>
            block.type === 'full' ? (
              <RevealImage
                key={`${block.image.src}-${i}`}
                image={block.image}
                defaultAspect="16 / 9"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            ) : (
              <div key={`pair-${i}`} className="grid gap-10 md:grid-cols-2 md:gap-8">
                {block.images.map((image) => (
                  <RevealImage
                    key={image.src}
                    image={image}
                    defaultAspect="4 / 5"
                    sizes="(min-width: 768px) 440px, 100vw"
                  />
                ))}
              </div>
            ),
          )}
        </div>
      )}

      <p className="container-center mt-12 text-sm text-muted-foreground">
        Images are presentation mockups, not live product screenshots.
      </p>

      {/* Leads into the next chapter instead of ending the page */}
      <section aria-labelledby="next-project" className="mt-28 border-t border-border py-20 md:mt-40 md:py-28">
        <div className="container-center">
          <p
            id="next-project"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
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
    </main>
  )
}