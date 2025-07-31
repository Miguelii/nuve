import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import ReactLenis from 'lenis/react'

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
})

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
})

const APP_URL = process.env.NEXT_PUBLIC_APP_HOST
   ? new URL(`${process.env.NEXT_PUBLIC_APP_HOST}`)
   : undefined

export const metadata: Metadata = {
   title: 'Nuvē - Premium Cars',
   description:
      "Discover the world's most exclusive supercars with Nuvē - a premium automotive showcase for true performance and luxury enthusiasts.",
   keywords: [
      'Nuvē',
      'Luxury cars',
      'Supercars',
      'Hypercars',
      'Exotic cars',
      'Car showcase',
      'Performance cars',
      'Automotive luxury',
      'Car platform',
      'Premium vehicles',
   ],
   metadataBase: APP_URL,
   openGraph: {
      title: 'Nuvē - Premium Cars',
      description:
         'Experience the most iconic and rare performance cars with Nuvē - the ultimate luxury automotive showcase.',
      url: APP_URL,
      siteName: 'Nuvē',
      images: [
         {
            url: `${APP_URL}/opengraph-image.png`,
            width: 1200,
            height: 630,
            alt: 'Nuvē - Premium Supercar Showcase',
         },
      ],
      locale: 'en_US',
      type: 'website',
   },
   twitter: {
      title: 'Nuvē - Premium Cars',
      creator: '@migueligoncal',
      site: '@migueligoncal',
      card: 'summary_large_image',
      images: [`${APP_URL}/twitter-image.png`],
   },
   creator: 'Nuvē',
   publisher: 'Nuvē',
   alternates: {
      canonical: APP_URL,
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <ReactLenis root>
            <body
               className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-background font-mono antialiased overscroll-none`}
            >
               {children}
            </body>
         </ReactLenis>
      </html>
   )
}
