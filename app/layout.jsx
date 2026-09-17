import './globals.css';
import Script from 'next/script';
import { googleAnalyticsId, practice, professionalProfiles, siteUrl } from './site-config';
import ThemeToggle from './ThemeToggle';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bengali Therapist in Brooklyn, NY & New Jersey | Lamisa Shaik',
    template: '%s | KindMind Counseling',
  },
  description:
    'Bilingual therapy in Bengali and English for anxiety, ADHD, relationships, and cultural stress. Virtual care for clients in New Jersey and New York.',
  keywords: [
    'Bengali therapist New Jersey',
    'Bengali therapist Brooklyn',
    'Bengali therapist New York',
    'English Bengali therapist',
    'therapist West Orange NJ',
    'virtual therapy New Jersey',
    'virtual therapy New York',
    'anxiety therapist',
    'ADHD therapist',
    'culturally responsive therapy',
  ],
  authors: [{ name: practice.clinician }],
  creator: practice.clinician,
  openGraph: {
    type: 'website',
    siteName: practice.name,
    locale: 'en_US',
    title: 'Bengali Therapist in Brooklyn, NY & New Jersey | Lamisa Shaik',
    description:
      'Warm, culturally responsive virtual therapy in Bengali and English for clients in New Jersey and New York.',
    images: [
      {
        url: `${siteUrl}/images/kindmind-therapy-office.webp`,
        width: 1506,
        height: 1045,
        alt: 'A warm, welcoming counseling office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bengali Therapist in Brooklyn, NY & New Jersey | Lamisa Shaik',
    description: 'Virtual therapy in Bengali and English for clients in New Jersey and New York.',
    images: [`${siteUrl}/images/kindmind-therapy-office.webp`],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'MedicalBusiness'],
      '@id': `${siteUrl}/#practice`,
      name: practice.name,
      url: siteUrl,
      image: `${siteUrl}/images/kindmind-therapy-office.webp`,
      telephone: practice.phone,
      email: practice.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: practice.locality,
        addressRegion: practice.region,
        addressCountry: 'US',
      },
      areaServed: practice.serviceAreas.map((area) => ({
        '@type': area.type,
        name: area.name,
      })),
      serviceType: 'Virtual psychotherapy',
      availableLanguage: practice.languages,
      sameAs: professionalProfiles,
      founder: { '@id': `${siteUrl}/#lamisa-shaik` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#lamisa-shaik`,
      name: practice.clinician,
      honorificSuffix: practice.credentials,
      jobTitle: 'Licensed Mental Health Counselor',
      worksFor: { '@id': `${siteUrl}/#practice` },
      knowsLanguage: practice.languages,
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Queens College, City University of New York',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'City College of New York, City University of New York',
        },
      ],
      workLocation: practice.serviceAreas
        .filter((area) => area.type === 'City')
        .map((area) => ({ '@type': 'Place', name: area.name })),
      image: `${siteUrl}/images/lamisa-shaik-profile.jpeg`,
      sameAs: professionalProfiles,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('kindmind-theme');
                var preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.dataset.theme = savedTheme || preferredTheme;
              } catch (error) {
                document.documentElement.dataset.theme = 'light';
              }
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ThemeToggle />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
