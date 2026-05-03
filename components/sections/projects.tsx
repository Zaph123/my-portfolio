'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/hooks/use-scroll-animation'
import { SectionHeading } from '../ui/section-heading'
import { useRef } from 'react'
import { JsonLd } from '@/components/json-ld'

const projects = [
  {
    title: 'Starrik',
    description: 'Real-time courier tracking platform with live GPS updates and advanced logistics management',
    technologies: ['React.js', 'Next.js', 'Firebase', 'TailwindCSS', 'WebSocket'],
    liveUrl: 'https://starrik.com',
    githubUrl: '#',
  },
  {
    title: 'Churchera',
    description: 'Faith-tech platform for church finance management, member engagement, and community building',
    technologies: ['Next.js', 'Supabase', 'React Hook Form', 'Stripe', 'TailwindCSS'],
    liveUrl: 'https://churchera.com',
    githubUrl: '#',
  },
  {
    title: 'Hustleloop',
    description: 'Marketplace platform connecting task creators with freelancers with real-time notifications',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'TailwindCSS'],
    liveUrl: 'https://hustleloop.com',
    githubUrl: '#',
  },
]

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  return (
    <section ref={containerRef} id="projects" className="py-20 md:py-32">
      <div className="container-center">
        {/* Heading */}
       <SectionHeading title="Projects" containerRef={containerRef} />

        {/* Cards stagger in with a scale + fade */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.15)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group border border-border rounded-lg p-6 card-hover flex flex-col h-full cursor-default"
            >
              <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "SoftwareSourceCode",
                "name": project.title,
                "description": project.description,
                "programmingLanguage": project.technologies,
                "codeRepository": project.githubUrl !== '#' ? project.githubUrl : undefined,
                "url": project.liveUrl !== '#' ? project.liveUrl : undefined
              }} />
              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6 grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-border rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors pt-4"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors pt-4"
                  aria-label={`View source code of ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
