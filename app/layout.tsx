import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const DMSans = DM_Sans({ variable: "--font-dmsans", subsets: ["latin"], display: "swap" });


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://zaphenath.com'),
  title: {
    default: 'Zaphenath | Senior Frontend Engineer',
    template: '%s | Zaphenath',
  },
  description: 'Portfolio of a frontend engineer specializing in React, Next.js, and modern web technologies.',
  generator: 'Next.js',
  authors: [{ name: 'Zaphenath' }],
  creator: 'Zaphenath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Zaphenath | Frontend Engineer',
    description: 'Portfolio of a frontend engineer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Zaphenath Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zaphenath - Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaphenath | Frontend Engineer',
    description: 'Portfolio of a frontend engineer specializing in React, Next.js, and modern web technologies.',
    creator: '@zaphenath',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${DMSans.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
