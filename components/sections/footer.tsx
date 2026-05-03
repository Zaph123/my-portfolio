'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
    return <footer className="border-t border-border py-12 md:py-16">
        <div className="container-center">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p className="font-bold">Zaphenath</p>
              <p className="text-sm text-muted-foreground">Frontend Engineer & Digital Creator</p>
            </div>
            
            <div className="flex gap-6">
              <a
                href="https://github.com/Zaph123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/einstein-bassey-56b3392ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:bassey2108@gmail.com"
                className="p-2 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 Zaphenath. Built with Next.js & Framer Motion.
            </p>
          </div>
        </div>
      </footer>
}
