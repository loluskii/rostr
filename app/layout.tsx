import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Rostr — The easiest way to hire and pay Nigerian talent, legally.',
  description: 'No Nigerian entity required. Rostr acts as the Employer of Record — handling contracts, tax compliance, and multi-currency payroll — so you can hire in Lagos from anywhere in the world.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
