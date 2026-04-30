import type { MetadataRoute } from 'next'

const BASE = 'https://www.promotedsoccerconsultants.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/club-consulting`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/fuse-id`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-assistant`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/free-resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${BASE}/blog/how-many-d1-soccer-scholarships`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/preferred-walk-on-college-soccer`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/college-soccer-recruiting-timeline-by-grade`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/9th-grade-soccer-recruiting-checklist`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/first-email-to-college-soccer-coach`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/d2-vs-d3-college-soccer`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/walk-on-tryout-college-soccer`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/college-soccer-coach-recruiting-criteria`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
