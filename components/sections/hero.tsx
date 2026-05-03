'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-2xl"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Hi, my name is <span className="text-accent">Zaphenath</span> — also known as Einstein.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Frontend Engineer building scalable, production-grade web applications with React, Next.js, and TypeScript. I focus on creating performant systems that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-muted"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <p className="text-sm text-muted-foreground">Connect with me:</p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
