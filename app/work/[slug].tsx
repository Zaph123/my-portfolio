// app/work/[slug]/page.tsx
// A server component: no 'use client', no useEffect. Each project is real static HTML.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { JsonLd } from '@/components/json-ld'
import { ProjectView } from '@/components/work/project-view'
import { getNextProject, getProject, projects } from '@/data/projects'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: `${project.title} | Zaphenath`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  }
}

export default async function WorkProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  console.log(project)
  if (!project) notFound()

  const next = getNextProject(project.slug)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: project.title,
          description: project.description,
          programmingLanguage: project.technologies,
          codeRepository: project.githubUrl !== '#' ? project.githubUrl : undefined,
          url: project.liveUrl !== '#' ? project.liveUrl : undefined,
        }}
      />
      <Navbar />
      <ProjectView project={project} next={next} />
      <Footer />
    </>
  )
}