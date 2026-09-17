import { describe, expect, it } from 'vitest';
import robots from './robots';
import { googleAnalyticsId, practice, professionalProfiles, siteUrl } from './site-config';
import sitemap from './sitemap';

describe('production configuration', () => {
  it('uses the live domain and configured analytics property', () => {
    expect(siteUrl).toBe('https://kindmindpsychotherapy.net');
    expect(googleAnalyticsId).toBe('G-V7X5RMR4D6');
  });

  it('keeps the practice location, languages, and professional profiles available', () => {
    expect(practice.locality).toBe('West Orange');
    expect(practice.region).toBe('NJ');
    expect(practice.languages).toEqual(expect.arrayContaining(['English', 'Bengali']));
    expect(practice.serviceAreas).toEqual(
      expect.arrayContaining([
        { type: 'City', name: 'Brooklyn, New York' },
        { type: 'City', name: 'West Orange, New Jersey' },
      ]),
    );
    expect(professionalProfiles).toEqual([
      'https://www.psychologytoday.com/us/therapists/lamisa-shaik-new-york-ny/1517949',
      'https://www.zocdoc.com/professional/shaik-lamisa-lmhc-638091',
      'https://care.headway.co/providers/shaik-lamisa',
    ]);
  });
});

describe('search engine routes', () => {
  it('publishes all public pages in the sitemap', () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual([
      `${siteUrl}/`,
      `${siteUrl}/about/`,
      `${siteUrl}/services/`,
      `${siteUrl}/bengali-therapist-brooklyn-ny/`,
      `${siteUrl}/bengali-therapist-new-jersey/`,
      `${siteUrl}/insurance-fees/`,
    ]);
    expect(urls).not.toContain(`${siteUrl}/intake/`);
    expect(entries.every((entry) => entry.lastModified instanceof Date)).toBe(true);
    expect(entries.every((entry) => entry.changeFrequency === 'monthly')).toBe(true);
  });

  it('allows public crawling and references the production sitemap', () => {
    expect(robots()).toMatchObject({
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    });
  });
});
