import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/chat', '/api/'],
      },
    ],
    sitemap: 'https://www.promotedsoccerconsultants.com/sitemap.xml',
    host: 'https://www.promotedsoccerconsultants.com',
  }
}
