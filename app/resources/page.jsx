import Link from 'next/link';
import PageStructuredData, { breadcrumbs } from '../PageStructuredData';
import SiteHeader from '../SiteHeader';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Therapy Resources and Guides',
  description:
    'Practical guides from KindMind Counseling about beginning therapy and choosing a Bengali-speaking therapist in New York or New Jersey.',
  alternates: { canonical: `${siteUrl}/resources/` },
};

const resources = [
  {
    title: 'What to expect in your first therapy session',
    description:
      'A grounded walkthrough of intake questions, goals, privacy, fit, and what you can ask before deciding to continue.',
    href: '/resources/what-to-expect-first-therapy-session',
  },
  {
    title: 'How to choose a Bengali-speaking therapist',
    description:
      'Questions to help you consider language, cultural understanding, licensing, logistics, approach, and personal fit.',
    href: '/resources/how-to-choose-bengali-speaking-therapist',
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function ResourcesPage() {
  return (
    <main className="page languagePage">
      <PageStructuredData
        data={breadcrumbs([
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'Resources', url: `${siteUrl}/resources/` },
        ])}
      />
      <SiteHeader subtitle="Therapy resources" />
      <section className="intakeIntro">
        <p className="eyebrow">Clear information before you begin</p>
        <h1>Therapy resources and practical guides</h1>
        <p className="lead">
          Starting therapy can bring up practical and personal questions. These guides are designed
          to help you make informed choices without replacing individualized mental health care.
        </p>
      </section>

      <section className="band">
        <div className="cards two">
          {resources.map((resource) => (
            <article className="infoCard" key={resource.href}>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <div className="aboutActions">
                <Link className="linkButton ghost" href={resource.href}>
                  Read the guide
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeading">
          <p className="eyebrow">Explore care</p>
          <h2>Learn about support available through KindMind</h2>
        </div>
        <div className="aboutActions">
          <Link className="linkButton ghost" href="/anxiety-therapy">
            Anxiety therapy
            <Arrow />
          </Link>
          <Link className="linkButton ghost" href="/adhd-therapy">
            ADHD therapy
            <Arrow />
          </Link>
          <Link className="linkButton" href="/intake">
            Request an intake screening
            <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
