'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10 md:py-14">
      <div className="container-center">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-display font-bold">Zaphenath Bassey</p>
            <p className="text-sm text-muted-foreground mt-1">Frontend Engineer</p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://github.com/Zaph123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/zaphenath-bassey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:bassey2108@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="mt-8 pt-6 border-t border-border text-xs font-mono text-muted-foreground">
          © {year} Zaphenath Bassey
        </p>
      </div>
    </footer>
  )
}
