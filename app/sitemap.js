import { siteUrl } from './site-config';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about/`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/anxiety-therapy/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/adhd-therapy/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/bengali-therapist-brooklyn-ny/`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/bengali-therapist-new-jersey/`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/insurance-fees/`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/what-to-expect-first-therapy-session/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/resources/how-to-choose-bengali-speaking-therapist/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/bn/`,
      lastModified: new Date('2026-11-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
