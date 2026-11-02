import Link from 'next/link';
import PageStructuredData, { breadcrumbs } from './PageStructuredData';
import SiteHeader from './SiteHeader';
import { practice, siteUrl } from './site-config';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function TherapyServicePage({
  slug,
  eyebrow,
  title,
  introduction,
  signs,
  approach,
  sessionFocus,
  relatedHref,
  relatedLabel,
}) {
  const pageUrl = `${siteUrl}/${slug}/`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbs([
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Services', url: `${siteUrl}/services/` },
        { name: title, url: pageUrl },
      ]),
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: title,
        url: pageUrl,
        provider: { '@id': `${siteUrl}/#practice` },
        serviceType: `${title} through virtual psychotherapy`,
        areaServed: practice.serviceAreas.map((area) => ({
          '@type': area.type,
          name: area.name,
        })),
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${siteUrl}/intake/`,
          serviceLocation: {
            '@type': 'VirtualLocation',
            url: siteUrl,
          },
        },
      },
    ],
  };

  return (
    <main className="page languagePage">
      <PageStructuredData data={structuredData} />
      <SiteHeader subtitle={title} />

      <section className="intakeIntro">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title} in New York and New Jersey</h1>
        <p className="lead">{introduction}</p>
        <div className="ctaRow">
          <Link className="linkButton intakeLinkButton" href="/intake">
            Request an intake screening
            <Arrow />
          </Link>
          <Link className="linkButton ghost" href="/services">
            Explore all services
            <Arrow />
          </Link>
        </div>
      </section>

      <section className="band splitBand">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">What may bring you in</p>
            <h2>Experiences we can explore</h2>
          </div>
          <ul className="serviceList">
            {signs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">A collaborative approach</p>
            <h2>Care shaped around your life</h2>
          </div>
          {approach.map((paragraph) => (
            <p className="aboutText" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      <section className="band">
        <div className="sectionHeading">
          <p className="eyebrow">Inside the work</p>
          <h2>What sessions may focus on</h2>
        </div>
        <div className="cards three">
          {sessionFocus.map((item) => (
            <article className="infoCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeading">
          <p className="eyebrow">Continue learning</p>
          <h2>Choose a useful next step</h2>
        </div>
        <div className="aboutActions">
          <Link className="linkButton ghost" href={relatedHref}>
            {relatedLabel}
            <Arrow />
          </Link>
          <Link className="linkButton" href="/intake">
            Start an intake request
            <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
