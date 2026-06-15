import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Eyesome Tech — Learn Anything in 30 Days',
  description:
    'Structured 30/45-day learning challenges for developers. Start with System Design — daily lessons that build real mental models.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
