import type { Metadata } from 'next'
import { Crimson_Pro, Work_Sans } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-crimson-pro',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'Promoted Soccer Consultants | College Recruiting & Club Development',
  description: 'Helping soccer organizations grow stronger and helping families navigate the college recruiting process with clarity, honesty, and NCAA-compliant education.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.variable} ${workSans.variable}`}>{children}</body>
    </html>
  )
}
