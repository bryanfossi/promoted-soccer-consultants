import type { Metadata } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

// PSC.com master type: Archivo (display) + Inter (body). Sitewide.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const SITE_URL = 'https://www.promotedsoccerconsultants.com'
const SITE_NAME = 'Promoted Sports Consultants'
const SITE_LEGAL_NAME = 'Promoted Soccer Consultants, LLC'
const DEFAULT_DESCRIPTION =
  'PSC is a multi-sport recruiting and club-operations company: FUSE-ID for AI-powered college recruiting, ClubStack for running a club, plus Recruiting Services and Club Consulting from a former college coach.'

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
        url: '/psc-logo-full.png',
        width: 1600,
        height: 533,
        alt: SITE_NAME,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | College Recruiting & Club Development`,
    description: DEFAULT_DESCRIPTION,
    images: ['/psc-logo-full.png'],
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
  verification: {
    google: 'hiFISgXYOd3LMx8k5filg-Qx9RSHmUe9RjwltDcLrZU',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}#bryan-fossi`,
  name: 'Bryan Fossi',
  jobTitle: 'Founder, PSC — Multi-Sport Recruiting & Club Operations',
  worksFor: { '@id': `${SITE_URL}#organization` },
  description:
    'Founder of Promoted Sports Consultants. Former college soccer player and college coach who has evaluated and recruited prospects firsthand. Currently a high school head coach and MLS Next Academy coach supporting families through the recruiting process. Recognized with multiple District Championships and Coach of the Year honors.',
  knowsAbout: [
    'NCAA recruiting rules',
    'NAIA recruiting rules',
    'NJCAA recruiting rules',
    'College athletic recruiting',
    'Youth sports club operations',
    'Coach development',
  ],
  email: 'bryan.fossi@promotedsoccerconsultants.com',
  url: SITE_URL,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  alternateName: ['PSC', 'Promoted Soccer Consultants'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/psc-logo-full.png`,
    width: 1600,
    height: 533,
  },
  email: 'bryan.fossi@promotedsoccerconsultants.com',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'bryan.fossi@promotedsoccerconsultants.com',
    availableLanguage: 'English',
    areaServed: 'US',
  },
  founder: { '@id': `${SITE_URL}#bryan-fossi` },
  employee: { '@id': `${SITE_URL}#bryan-fossi` },
  sameAs: [
    'https://www.youtube.com/@PromotedSoccerConsultantsLLC',
    'https://fuse-id.online',
    'https://clubstack.online',
    'https://www.google.com/maps/place/Promoted+Soccer+Consultants,+LLC/@40.1985345,-76.4195075,221143m/data=!3m2!1e3!4b1!4m6!3m5!1s0x46d0654ee99b1d09:0xbd942051fa726ffa!8m2!3d40.1985345!4d-76.4195075!16s%2Fg%2F11nh_03jd_',
  ],
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
    'Multi-sport college recruiting consulting and club development services for youth sports clubs, athletes, and families.',
  serviceType: [
    'College Athletic Recruiting Consulting',
    'Youth Sports Club Strategic Consulting',
    'NCAA Recruiting Education',
  ],
  areaServed: { '@type': 'Country', name: 'United States' },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.1985345,
    longitude: -76.4195075,
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
      <body className={`${archivo.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
