'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Github, Linkedin, Mail } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

const contactLinks = [
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:bassey2108@gmail.com',
    handle: 'Zaphenath Bassey',
  },
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/Zaph123',
    handle: 'Zaph123',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/einstein-bassey-56b3392ab',
    handle: 'Einstein Bassey',
  },
]

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="contact" className="py-20 md:py-32 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Let's Connect" containerRef={containerRef} />
        {/* Body fade up */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
        >

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground mb-12"
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out — I respond to every message!
          </motion.p>

          {/* Contact cards stagger + scale in */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={staggerContainer(0.15)}
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="border border-border rounded-lg p-6 card-hover group block"
                  aria-label={`Contact via ${link.label}`}
                >
                  <Icon className="w-6 h-6 mb-3 group-hover:text-accent transition-colors duration-200" />
                  <h3 className="font-semibold mb-1 text-sm">{link.label}</h3>
                  <p className="text-muted-foreground text-xs break-all">{link.handle}</p>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
