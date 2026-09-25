import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { LenisProvider } from '@/components/lenis-provider'
import { MotionProvider } from '@/components/motion-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"]
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"]
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"]
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://zaphenath.com'),
  title: {
    default: 'Zaphenath | Frontend Engineer',
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
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LenisProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <MotionProvider>
              {children}
              <Toaster />
            </MotionProvider>
          </ThemeProvider>
        </LenisProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
