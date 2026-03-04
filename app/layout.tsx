import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'National Food Consulting | Commercial Foodservice Equipment',
  description: 'Supplying quality commercial kitchen equipment, refrigeration, tableware, and more to restaurants, grocery stores, cafes, bakeries, and butcher shops across Ontario.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0d1b2a] text-[#e8f4f8]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
