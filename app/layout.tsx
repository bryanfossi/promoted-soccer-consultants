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

const SITE_URL = 'https://www.promotedsoccerconsultants.com'
const SITE_NAME = 'Promoted Soccer Consultants'
const DEFAULT_DESCRIPTION =
  'College soccer recruiting and club development consulting from a former college coach. Honest, NCAA-compliant guidance for clubs, players, and families.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | College Recruiting & Club Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Bryan Fossi' }],
  creator: 'Bryan Fossi',
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | College Recruiting & Club Development`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/promoted-soccer-consultants.png',
        width: 800,
        height: 800,
        alt: SITE_NAME,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} | College Recruiting & Club Development`,
    description: DEFAULT_DESCRIPTION,
    images: ['/promoted-soccer-consultants.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  legalName: 'Promoted Soccer Consultants, LLC',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/promoted-soccer-consultants.png`,
  },
  email: 'bryan.fossi@promotedsoccerconsultants.com',
  founder: {
    '@type': 'Person',
    name: 'Bryan Fossi',
    jobTitle: 'College Soccer Recruiting Consultant',
  },
  sameAs: ['https://www.youtube.com/@PromotedSoccerConsultantsLLC'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}#organization` },
  inLanguage: 'en-US',
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}#service`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'College soccer recruiting consulting and club development services for soccer clubs, players, and families.',
  serviceType: [
    'College Soccer Recruiting Consulting',
    'Soccer Club Strategic Consulting',
    'NCAA Recruiting Education',
  ],
  areaServed: { '@type': 'Country', name: 'United States' },
  provider: { '@id': `${SITE_URL}#organization` },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className={`${crimsonPro.variable} ${workSans.variable}`}>{children}</body>
    </html>
  )
}
