'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const socials = [
  { href: 'https://github.com/Zaph123', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/zaphenath-bassey', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:bassey2108@gmail.com', label: 'Email', icon: Mail },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-40 md:pb-36">
      <div className="container-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.18em] uppercase text-primary mb-6"
        >
          Frontend Engineer · React.js & Next.js
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-[clamp(2.5rem,6.4vw,5.25rem)] font-display font-bold leading-[0.95] tracking[-0.035em] text-foreground"
        >
          I build scalable React and Next.js systems that handle real-time complexity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          2+ years shipping production web applications across B2B SaaS, courier tech, and fintech. Proven in building component systems with attention to state management, accessibility, and responsive design, integrating Firebase/Supabase backends, and turning Figma designs into polished, accessible interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="bg-[#C6FF00] text-[#0B0B0B] hover:bg-[#A3D600] font-semibold">
            <Link href="#projects">View work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6"
        >
          <div className="flex items-baseline gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span><em className="not-italic text-foreground font-semibold">2+</em> years</span>
            <span><em className="not-italic text-foreground font-semibold">3</em> contexts</span>
            <span>real-time contribution</span>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Scroll
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  )
}