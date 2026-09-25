'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { toast } from 'sonner'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { fadeUp, staggerContainer, viewport } from '@/hooks/use-scroll-animation'

const schema = z.object({
  name: z.string().min(2, 'Name needs at least two characters.'),
  email: z.string().email('Enter a valid email.'),
  message: z.string().min(10, 'Give me a little more context.').max(1000, 'Keep it under 1000 characters.'),
})

type FormValues = z.infer<typeof schema>

const contactLinks = [
  {
    label: 'Phone',
    href: 'tel:+2349022761407',
    handle: '+234 902 276 1407',
    icon: Mail, // Using Mail icon temporarily, could change to phone icon if available
  },
  {
    label: 'Email',
    href: 'mailto:bassey2108@gmail.com',
    handle: 'bassey2108@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Zaph123',
    handle: 'Zaph123',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zaphenath-bassey',
    handle: 'Zaphenath Bassey',
    icon: Linkedin,
  },
]

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 400))
    console.info('contact form (no backend yet)', values)
    setSubmitted(true)
    toast.success('Message captured. I will reply by email.')
    reset()
  }

  return (
    <section ref={containerRef} id="contact" className="py-24 md:py-36 overflow-hidden relative">
      <div className="container-center">
        <SectionHeading title="Contact" containerRef={containerRef} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.1)}
          >
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              New work, a role, or a question about how something was built. I read every message.
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-0 divide-y divide-border border-y border-border">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 py-4 group"
                      aria-label={`Contact via ${link.label}`}
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium">{link.label}</span>
                      <span className="ml-auto text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.handle}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </li>
                )
              })}
            </motion.ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-7 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.08)}
            noValidate
          >
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              <label className="block space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Name</span>
                <input
                  {...register('name')}
                  autoComplete="name"
                  className="w-full h-11 px-3 bg-background border border-border text-sm focus:outline-none focus:border-ring"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </label>
              <label className="block space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Email</span>
                <input
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  className="w-full h-11 px-3 bg-background border border-border text-sm focus:outline-none focus:border-ring"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </label>
            </motion.div>
            <motion.label variants={fadeUp} className="block space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                {...register('message')}
                rows={6}
                className="w-full px-3 py-3 bg-background border border-border text-sm resize-y min-h-35 focus:outline-none focus:border-ring"
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </motion.label>
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-[#C6FF00] text-[#0B0B0B] hover:bg-[#A3D600] font-semibold"
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
              </Button>
              {submitted && (
                <p className="text-xs text-muted-foreground">No backend wired yet — this confirms the form locally.</p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
