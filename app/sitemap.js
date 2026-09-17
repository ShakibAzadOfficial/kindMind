import { siteUrl } from './site-config';

export const dynamic = 'force-static';

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${siteUrl}/bengali-therapist-brooklyn-ny/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/bengali-therapist-new-jersey/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/insurance-fees/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
