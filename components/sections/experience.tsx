'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

const experiences = [
  {
    title: 'Frontend Engineer',
    company: 'Churchera (Remote)',
    duration: 'Jan 2026 — Present',
    description:
      'Digital Finance & Church Management Ecosystem (churchera.com) -- Engineered a high-fidelity FaithTech platform facilitating seamless tithing, offerings, and donations for global congregations.\n Developed responsive web interfaces for desktop and mobile using Next.js and TailwindCSS, with efficient state management via Zustand.\n Designed a secure role-based access control (RBAC) architecture for Admin and Member dashboards, ensuring data privacy for sensitive financial records.\n Leveraged Supabase for real-time transaction tracking and database management.',
    highlights: ['Next.js', 'TailwindCSS', 'Zustand', 'Supabase', 'RBAC'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Traytic (Remote)',
    duration: 'Jul 2026 — Aug 2026',
    description:
      'Platform: "GodMode" -- an operating system for hosting agencies across Africa (traytic.com)\n Built core admin screens with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4: an analytics overview with revenue/agency/growth metrics and Recharts visualizations, Plans & Addons management, and an Agencies workspace.\n Implemented Plans & Add-ons management with sortable, searchable, paginated tables, trial/grace-period lifecycle configuration, and lock / deactivate / restore / rename actions with confirmation flows.\n Built the Agencies workspace with status filters, debounced search, CSV bulk import, and admin actions (suspend, terminate, extend trial, impersonate) backed by typed mutation hooks.\n Shipped the end-to-end authentication experience -- sign-in, sign-up, password reset, email verification, and TOTP -- with Zod validation, a password-strength indicator, international phone input, and Cloudflare Turnstile bot protection.\n Contributed to the Traytic design system (design tokens, shadcn/Base UI primitives, GSAP + Motion animation) and enforced accessibility and responsiveness across every screen.\n Collaborated with backend engineers, designers, and product in a small cross-functional team using a Git feature-branch workflow with pull requests on GitHub.',
    highlights: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Recharts', 'Zod', 'Cloudflare Turnstile'],
  },
  {
    title: 'Lead Frontend Engineer',
    company: 'Starrik (Remote)',
    duration: 'Sep 2024 — Dec 2025',
    description:
      'Logistic company (starrik.com) -- Lead front-end development of a courier-tech platform, built a modern delivery platform with real-time order tracking and vendor dashboards using React.js.\n Integrate Firebase (Auth, Firestore, Storage) as a backend-as-a-service for real-time data and file storage, partnering with backend engineers on API design and enforcing coding best practices.',
    highlights: ['React.js', 'Firebase', 'Real-time tracking', 'Vendor dashboards'],
  },
  {
    title: 'Frontend Developer',
    company: 'Roothub, Uyo, Akwa Ibom',
    duration: 'Dec 2024 — 2025',
    description:
      'Completed a web development program focused on building scalable, production-ready websites.\n Collaborated with developers and UI/UX designers to ship user-friendly interfaces, debugging and resolving front-end issues to improve overall user satisfaction.',
    highlights: ['Web Development', 'UI/UX Collaboration', 'User Satisfaction'],
  },
]

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="experience" className="py-24 md:py-36 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Experience" containerRef={containerRef} />

        <motion.ol
          className="border-t border-border"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
        >
          {experiences.map((exp) => (
            <motion.li
              key={exp.company}
              variants={fadeUp}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-border"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground">{exp.duration}</p>
                <p className="mt-1 font-display font-bold text-primary">{exp.company}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display font-bold text-lg mb-2">{exp.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 text-[11px] font-mono border border-border text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
