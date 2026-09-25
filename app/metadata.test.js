import { afterEach, describe, expect, it, vi } from 'vitest';
import { metadata as aboutMetadata } from './about/page';
import { metadata as brooklynMetadata } from './bengali-therapist-brooklyn-ny/page';
import { metadata as newJerseyMetadata } from './bengali-therapist-new-jersey/page';
import { metadata as insuranceMetadata } from './insurance-fees/page';
import IntakeLayout, { metadata as intakeMetadata } from './intake/layout';
import RootLayout, { metadata as rootMetadata, structuredData } from './layout';
import { metadata as homeMetadata } from './page';
import { metadata as servicesMetadata } from './services/page';
import { siteUrl } from './site-config';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('page metadata', () => {
  it('uses distinct titles for every public page', () => {
    const titles = [
      homeMetadata.title.absolute,
      aboutMetadata.title,
      brooklynMetadata.title.absolute,
      newJerseyMetadata.title,
      servicesMetadata.title,
      insuranceMetadata.title,
    ];

    expect(new Set(titles).size).toBe(titles.length);
    expect(rootMetadata.title.default).toContain('Brooklyn');
    expect(rootMetadata.title.default).toContain('West Orange');
    expect(brooklynMetadata.keywords).toContain('Bengali speaking therapist Brooklyn NY');
    expect(newJerseyMetadata.keywords).toContain('Bengali therapist West Orange NJ');
    expect(brooklynMetadata.openGraph.images[0].url).toContain(
      'bengali-therapist-session-brooklyn-west-orange.webp',
    );
    expect(newJerseyMetadata.openGraph.images[0].url).toContain(
      'bengali-therapist-session-brooklyn-west-orange.webp',
    );
  });

  it('provides canonical URLs for all indexable pages', () => {
    expect(homeMetadata.alternates.canonical).toBe(`${siteUrl}/`);
    expect(aboutMetadata.alternates.canonical).toBe(`${siteUrl}/about/`);
    expect(brooklynMetadata.alternates.canonical).toBe(`${siteUrl}/bengali-therapist-brooklyn-ny/`);
    expect(newJerseyMetadata.alternates.canonical).toBe(`${siteUrl}/bengali-therapist-new-jersey/`);
    expect(servicesMetadata.alternates.canonical).toBe(`${siteUrl}/services/`);
    expect(insuranceMetadata.alternates.canonical).toBe(`${siteUrl}/insurance-fees/`);
  });

  it('keeps the intake page out of search results', () => {
    expect(intakeMetadata.robots).toEqual({ index: false, follow: true });
    expect(intakeMetadata.alternates.canonical).toBe(`${siteUrl}/intake/`);
  });

  it('adds Google Search Console verification when configured', async () => {
    vi.stubEnv('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION', 'verification-token');
    vi.resetModules();

    const verifiedLayout = await import('./layout');

    expect(verifiedLayout.metadata.verification.google).toBe('verification-token');
  });
});

describe('route layouts', () => {
  it('places application content inside the root document body', () => {
    const layout = RootLayout({ children: 'page content' });
    const [, body] = layout.props.children;

    expect(layout.type).toBe('html');
    expect(body.type).toBe('body');
    expect(body.props.children[0]).toBe('page content');
  });

  it('passes intake content through its metadata layout', () => {
    expect(IntakeLayout({ children: 'intake content' })).toBe('intake content');
  });
});

describe('structured data', () => {
  it('represents Brooklyn as a service area without inventing a Brooklyn address', () => {
    const practice = structuredData['@graph'].find(
      (entity) => entity['@id'] === `${siteUrl}/#practice`,
    );

    expect(practice.address.addressLocality).toBe('West Orange');
    expect(practice.areaServed).toContainEqual({ '@type': 'City', name: 'Brooklyn, New York' });
    expect(JSON.stringify(practice.address)).not.toContain('Brooklyn');
    expect(practice.serviceType).toBe('Virtual psychotherapy');
  });

  it('includes Lamisa’s education and bilingual credentials', () => {
    const person = structuredData['@graph'].find(
      (entity) => entity['@id'] === `${siteUrl}/#lamisa-shaik`,
    );

    expect(person.knowsLanguage).toEqual(['English', 'Bengali']);
    expect(person.alumniOf.map((school) => school.name)).toEqual([
      'Queens College, City University of New York',
      'City College of New York, City University of New York',
    ]);
  });
});
