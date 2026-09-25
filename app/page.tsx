import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactSection } from '@/components/sections/contact'
import { EducationSection } from '@/components/sections/education'
import { Footer } from '@/components/sections/footer'
import { JsonLd } from '@/components/json-ld'

export const metadata = {
  title: 'Home | Zaphenath',
  description: 'Portfolio of Zaphenath, a frontend engineer specializing in React, Next.js, and TypeScript.',
  alternates: {
    canonical: '/',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zaphenath Bassey',
  jobTitle: 'Frontend Engineer',
  url: 'https://zaphenath.com',
  sameAs: [
    'https://github.com/Zaph123',
    'https://www.linkedin.com/in/zaphenath-bassey',
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full">
      <JsonLd data={personSchema} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <EducationSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
