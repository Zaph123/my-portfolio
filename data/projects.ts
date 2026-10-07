// data/projects.ts
// One source of truth. Import this from the Selected Work deck, the Skills chips, and /work/[slug].

export type ProjectImage = {
  src: string
  /** Describe what is actually in the image. Check each one against the file. */
  alt: string
  caption?: string
  /**
   * Real pixel size of the file. Frames use it so mockups are shown whole, never cropped.
   * Get both numbers by running: node scripts/image-dims.mjs public/<folder>
   * Without them the frame falls back to 16 / 9 (the image is still shown whole, with bars if the ratio differs).
   */
  width?: number
  height?: number
}
export type Project = {
  slug: string
  title: string
  domain: string
  role: string
  years: string
  /** Plain-language card and page copy. */
  summary: string
  /** Full technical copy. Kept for JSON-LD and any future long-form section. */
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  /** Used by the deck. Should match gallery[0]. */
  imageSrc: string
  imageLabel: string
  imageKind: 'mockup' | 'logo'
  /** 4 to 7 images. gallery[0] is the page hero, the rest become the image chapters. */
  gallery: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: 'starrik',
    title: 'Starrik',
    domain: 'Courier / Logistics',
    role: 'Frontend Engineer',
    years: 'Sep 2024 — Dec 2025',
    summary:
      'A courier delivery platform with real-time order tracking and vendor dashboards, built on Firebase Auth, Firestore, and Storage.',
    description:
      'Built a courier delivery platform with real-time order tracking interfaces and vendor dashboards. Integrated Firebase (Auth, Firestore, Storage) for authentication and data storage, and collaborated with backend engineers on API design.',
    technologies: ['React', 'Firebase', 'Real-time tracking', 'Vendor dashboards'],
    liveUrl: 'https://starrik.com',
    githubUrl: '#',
    imageSrc: '/starrik/starrik-iphone-mockup-coal-stand.jpg',
    imageLabel: 'Starrik shown on an iPhone mockup',
    imageKind: 'mockup',
    gallery: [
      {
        src: '/starrik/starrik-iphone-mockup-coal-stand.jpg',
        alt: 'Starrik shown on an iPhone mockup',
        width: 3000,
        height: 2250,
      },
      {
        src: '/starrik/starrik-minimalistic-ipad-mockup.jpg',
        alt: 'Starrik shown on a minimalistic iPad mockup',
        width: 4000,
        height: 3000,
      },
      {
        src: '/starrik/starrik-tablet-with-keyboard-mockup.jpg',
        alt: 'Starrik shown on a tablet with keyboard mockup',
        width: 4000,
        height: 3000,
      },
      {
        src: '/starrik/macbook-air-and-phone-mockup-starrik.jpg',
        alt: 'Starrik shown on MacBook Air and phone mockup',
        width: 4000,
        height: 3000,
      }
    ],
  },
  {
    slug: 'churchera',
    title: 'Churchera',
    domain: 'Faith-Tech / Financial',
    role: 'Frontend Engineer',
    years: 'Jan 2026 — Present',
    summary:
      'Responsive faith-tech interfaces with Admin and Member role-based access, and Supabase real-time transaction tracking.',
    description:
      'Engineered responsive interfaces for a faith-tech platform using Next.js, TailwindCSS, Zustand, and Supabase. Designed Admin/Member role-based access (RBAC) for dashboards with privacy-focused handling of sensitive financial records, and used Supabase real-time for transaction tracking.',
    technologies: ['Next.js', 'TailwindCSS', 'Zustand', 'Supabase', 'RBAC'],
    liveUrl: 'https://churchera.com',
    githubUrl: '#',
    imageSrc: '/churchera/churchera-hands-holding-tablet-mockup.jpg',
    imageLabel: 'Churchera shown on a tablet held in two hands (mockup)',
    imageKind: 'mockup',
    gallery: [
      {
        src: '/churchera/churchera-hands-holding-tablet-mockup.jpg',
        alt: 'Churchera shown on a tablet held in two hands (mockup)',
        width: 4000,
        height: 2667,
      },
      {
        src: '/churchera/churchera-iphone-14-pro-mockup.jpg',
        alt: 'Churchera shown on iPhone 14 Pro mockup',
        width: 3000,
        height: 2250,
      },
      {
        src: '/churchera/churchera-iphone-15-mockup-with-back-panel.jpg',
        alt: 'Churchera shown on iPhone 15 mockup with back panel',
        width: 4000,
        height: 3000,
      },
      {
        src: '/churchera/churchera-macbook-air-and-phone-mockup-churchera.jpg',
        alt: 'Churchera shown on MacBook Air and phone mockup',
        width: 4000,
        height: 3000,
      },
      {
        src: '/churchera/churchera-womens-hands-holding-phone.jpg',
        alt: "Churchera shown on women's hands holding phone",
        width: 4000,
        height: 2666,
      },
      {
        src: '/churchera/macbook-air-and-phone-mockup-churchera-transparent.jpg',
        alt: 'Churchera shown on transparent MacBook Air and phone mockup',
        width: 4000,
        height: 3000,
      },
    ],
  },
  {
    slug: 'traytic',
    title: 'Traytic',
    domain: 'B2B Admin / GodMode OS',
    role: 'Frontend Engineer',
    years: 'Jul 2026 — Aug 2026',
    summary:
      'Core admin screens for a B2B platform: analytics, plans and add-ons management, an agencies workspace, and secure sign-in with TOTP.',
    description:
      'Built core admin screens with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4: analytics overview with Recharts visualizations, Plans & Addons management (sortable/searchable/paginated tables with lifecycle actions), Agencies workspace (search, CSV bulk import, admin actions), authentication with TOTP and Cloudflare Turnstile bot protection, and design-system contributions (tokens, shadcn primitives). Collaborated in a cross-functional team using a feature-branch workflow.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Recharts',
      'Zod',
      'Cloudflare Turnstile',
    ],
    liveUrl: 'https://traytic.com',
    githubUrl: '#',
    imageSrc: '/traytic/traytic-laptop-mockup.jpg',
    imageLabel: 'Traytic shown on a laptop mockup',
    imageKind: 'mockup',
    gallery: [
      {
        src: '/traytic/traytic-laptop-mockup.jpg',
        alt: 'Traytic shown on a laptop mockup',
        width: 2697,
        height: 1634,
      },
      {
        src: '/traytic/traytic-hands-holding-phone-mockup.jpg',
        alt: 'Traytic shown on hands holding phone mockup',
        width: 4000,
        height: 2667,
      },
      {
        src: '/traytic/traytic-multiple-three-phone-screens-mockup.jpg',
        alt: 'Traytic shown on multiple three phone screens mockup',
        width: 4000,
        height: 2800,
      },
      {
        src: '/traytic/traytic-striped-background-m3-macbook-pro.jpg',
        alt: 'Traytic shown on striped background with M3 MacBook Pro',
        width: 3000,
        height: 2250,
      },
      {
        src: '/traytic/tablet-with-keyboard-mockup (1).jpg',
        alt: 'Traytic shown on tablet with keyboard mockup',
        width: 4000,
        height: 3000,
      },
      {
        src: '/traytic/traytic.png',
        alt: 'Traytic logo',
        width: 794,
        height: 493,
      },
    ],
  },
  {
    slug: 'quizmaniac',
    title: 'QuizManiac',
    domain: 'Education / Interactive Quiz',
    role: 'Frontend Engineer',
    years: '2024',
    summary:
      'A responsive quiz app with multiple categories, Firebase authentication and storage, and leaderboards, built with React and Vite.',
    description:
      'Responsive interactive quiz application with multiple categories, built with React + Vite. Integrated Firebase for authentication, storage, and leaderboards. Optimized for desktop and mobile use.',
    technologies: ['React', 'Vite', 'Firebase', 'TypeScript'],
    liveUrl: 'https://quiz-maniac-peach.vercel.app/',
    githubUrl: 'https://github.com/Zaph123/QuizManiac.git',
    imageSrc: '/quizmaniac/quizmaniac-floating-macbook-air-mockup.jpg',
    imageLabel: 'QuizManiac shown on a floating MacBook Air mockup',
    imageKind: 'mockup',
    gallery: [
      {
        src: '/quizmaniac/quizmaniac-floating-macbook-air-mockup.jpg',
        alt: 'QuizManiac shown on a floating MacBook Air mockup',
        width: 4000,
        height: 3000,
      },
      {
        src: '/quizmaniac/quizmaniac-cell-phone-mockup-desk-background.jpg',
        alt: 'QuizManiac shown on cell phone mockup with desk background',
        width: 4000,
        height: 2857,
      },
      {
        src: '/quizmaniac/quizmaniac-leather-background-tablet-mockup.jpg',
        alt: 'QuizManiac shown on leather background tablet mockup',
        width: 3000,
        height: 2000,
      },
    ],
  },
  {
    slug: 'hustleloop',
    title: 'HustleLoop',
    domain: 'Marketplace / Ecommerce',
    role: 'Frontend Engineer',
    years: '2023 — 2024',
    summary:
      'A marketplace with search and filtering, multi-gateway payments, a referral dashboard, and KYC onboarding. Built as part of a team.',
    description:
      'Marketplace architecture (React/Vite + TailwindCSS) with browsing/search/filter, multi-gateway payments (Paystack, Etegram), referral dashboard (commission tracking + link generation), and KYC onboarding flows. Developed as part of a team collaboration.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Paystack', 'Etegram'],
    liveUrl: 'https://hustleloop.vercel.app/',
    githubUrl: 'https://github.com/icekidtech/hustleloop.git',
    imageSrc: '/hustleloop/hustleloop-iphone-mockup-dark-background.jpg',
    imageLabel: 'HustleLoop shown on an iPhone mockup against a dark background',
    imageKind: 'mockup',
    gallery: [
      {
        src: '/hustleloop/hustleloop-iphone-mockup-dark-background.jpg',
        alt: 'HustleLoop shown on an iPhone mockup against a dark background',
        width: 3000,
        height: 2250,
      },
      {
        src: '/hustleloop/hustleloop-floating-apple-watches-mockup.jpg',
        alt: 'HustleLoop shown on floating Apple watches mockup',
        width: 3500,
        height: 5000,
      },
      {
        src: '/hustleloop/hustleloop-m2-macbook-air-screen-mockup.jpg',
        alt: 'HustleLoop shown on M2 MacBook Air screen mockup',
        width: 3000,
        height: 2070,
      },
      {
        src: '/hustleloop/hustleloop-woman-hands-on-the-laptop.jpg',
        alt: 'HustleLoop shown with woman hands on laptop',
        width: 4680,
        height: 3120,
      },
    ],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}