'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { EASE_IN_OUT, EASE_OUT } from '@/lib/ease'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const
const hoverOnly = '[@media(hover:hover)_and_(pointer:fine)]:'

type NavItem = { name: string; href: string; id: string }

const navItems: NavItem[] = [
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

const mainItems = navItems.filter((item) => item.id !== 'contact')
const contactItem = navItems.find((item) => item.id === 'contact')!

function sectionHref(pathname: string, hash: string) {
  return pathname === '/' ? hash : `/${hash}`
}

function lockScroll(lock: boolean) {
  document.documentElement.style.overflow = lock ? 'hidden' : ''
  document.body.style.overflow = lock ? 'hidden' : ''
  window.dispatchEvent(new CustomEvent(lock ? 'lenis:lock' : 'lenis:unlock'))
}

export function Navbar() {
  const pathname = usePathname()
  const reduce = !!useReducedMotion()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Magnetic rail: whichever section owns the middle of the viewport is active.
  useEffect(() => {
    if (pathname !== '/') {
      setActive(null)
      return
    }

    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el)

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 1] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [pathname])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    lockScroll(open)
    return () => lockScroll(false)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  // Close the overlay if the viewport jumps to desktop mid-open.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) close()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [close])

  const barSolid = scrolled || open

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
          barSolid
            ? 'border-b border-border bg-background/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-center">
          <div className="flex h-16 items-center justify-between gap-6 md:h-17">
            <Link
              href="/"
              onClick={close}
              className="font-display text-sm font-semibold tracking-[-0.02em] text-foreground"
            >
              Zaphenath
            </Link>

            <LayoutGroup id="nav-rail">
              <nav
                aria-label="Primary"
                className="hidden items-center gap-1 md:flex"
              >
                {navItems.map((item) => {
                  const isActive = active === item.id
                  return (
                    <Link
                      key={item.id}
                      href={sectionHref(pathname, item.href)}
                      className={cn(
                        'relative px-3 py-2 text-sm font-medium tracking-[-0.01em] transition-colors duration-300 motion-reduce:transition-none',
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground',
                        `${hoverOnly}hover:text-foreground`,
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId={reduce ? undefined : 'nav-active'}
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: 'spring', stiffness: 420, damping: 32, mass: 0.55 }
                          }
                        />
                      )}
                    </Link>
                  )
                })}
              </nav>
            </LayoutGroup>

            <div className="flex items-center gap-0.5">
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                  {theme === 'dark' ? (
                    <Sun className="size-4" />
                  ) : (
                    <Moon className="size-4" />
                  )}
                </button>
              )}

              <button
                type="button"
                className="relative inline-flex size-11 items-center justify-center rounded-md md:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
              >
                <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
                <span aria-hidden="true" className="relative block h-3.5 w-5">
                  <motion.span
                    className="absolute left-0 top-0.5 block h-px w-full bg-foreground"
                    animate={open ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                  />
                  <motion.span
                    className="absolute left-0 top-2.75 block h-px w-full bg-foreground"
                    animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 flex flex-col bg-background md:hidden"
            initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={
              reduce
                ? { opacity: 0 }
                : {
                    clipPath: 'inset(0 0 100% 0)',
                    transition: { duration: 0.45, ease: EASE_OUT, delay: 0.05 },
                  }
            }
            transition={{ duration: reduce ? 0.2 : 0.55, ease: EASE_IN_OUT }}
          >
            <div className="flex min-h-0 flex-1 flex-col px-6 pb-8 pt-24">
              <ul className="flex flex-1 flex-col justify-center gap-1">
                {mainItems.map((item, i) => (
                  <li key={item.id}>
                    <Link
                      href={sectionHref(pathname, item.href)}
                      onClick={close}
                      className="group/link flex items-baseline gap-4 py-1.5 text-foreground"
                    >
                      <Reveal
                        as="div"
                        active
                        delay={reduce ? 0 : 0.12 + i * 0.07}
                        duration={0.7}
                        className="w-full"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="w-7 shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={cn(
                              'relative overflow-hidden pb-[0.08em] font-display text-[clamp(2.25rem,9vw,3.5rem)] font-light leading-none tracking-[-0.03em]',
                            )}
                          >
                            <span
                              className={cn(
                                'block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none',
                                `${hoverOnly}group-hover/link:-translate-y-full`,
                              )}
                            >
                              {item.name}
                            </span>
                            <span
                              aria-hidden="true"
                              className={cn(
                                'absolute inset-0 block translate-y-full text-primary transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none',
                                `${hoverOnly}group-hover/link:translate-y-0`,
                              )}
                            >
                              {item.name}
                            </span>
                          </span>
                        </span>
                      </Reveal>
                    </Link>
                  </li>
                ))}
              </ul>

              <Reveal
                as="div"
                active
                delay={reduce ? 0 : 0.12 + mainItems.length * 0.07}
                duration={0.7}
                className="mt-8"
              >
                <Link
                  href={sectionHref(pathname, contactItem.href)}
                  onClick={close}
                  className="inline-flex min-h-12 w-full items-center justify-center bg-primary px-6 font-display text-base font-semibold tracking-[-0.02em] text-primary-foreground transition-colors hover:bg-[#A3D600]"
                >
                  {contactItem.name}
                </Link>
              </Reveal>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
