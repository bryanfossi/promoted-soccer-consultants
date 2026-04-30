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
  verification: {
    google: 'hiFISgXYOd3LMx8k5filg-Qx9RSHmUe9RjwltDcLrZU',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}#bryan-fossi`,
  name: 'Bryan Fossi',
  jobTitle: 'College Soccer Recruiting Consultant',
  worksFor: { '@id': `${SITE_URL}#organization` },
  description:
    'Former college soccer player and college coach who has evaluated and recruited prospects firsthand. Currently a high school head coach supporting families through the recruiting process. Recognized with multiple District Championships and Coach of the Year honors.',
  knowsAbout: [
    'NCAA recruiting rules',
    'NAIA recruiting rules',
    'NJCAA recruiting rules',
    'College soccer recruiting',
    'Soccer club strategic planning',
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
  legalName: 'Promoted Soccer Consultants, LLC',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/promoted-soccer-consultants.png`,
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
    'College soccer recruiting consulting and club development services for soccer clubs, players, and families.',
  serviceType: [
    'College Soccer Recruiting Consulting',
    'Soccer Club Strategic Consulting',
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
      <body className={`${crimsonPro.variable} ${workSans.variable}`}>{children}</body>
    </html>
  )
}
