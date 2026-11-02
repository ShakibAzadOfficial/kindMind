import Link from 'next/link';
import PageStructuredData, { breadcrumbs } from '../../PageStructuredData';
import SiteHeader from '../../SiteHeader';
import { practice, siteUrl } from '../../site-config';

const pageUrl = `${siteUrl}/resources/what-to-expect-first-therapy-session/`;

export const metadata = {
  title: 'What to Expect in Your First Therapy Session',
  description:
    'Learn what a first therapy session may include, how to prepare, what you can ask, and how to think about therapist fit.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    title: 'What to Expect in Your First Therapy Session',
    description: 'A practical, low-pressure guide to beginning therapy.',
    url: pageUrl,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbs([
      { name: 'Home', url: `${siteUrl}/` },
      { name: 'Resources', url: `${siteUrl}/resources/` },
      { name: 'What to expect in your first therapy session', url: pageUrl },
    ]),
    {
      '@type': 'Article',
      headline: 'What to Expect in Your First Therapy Session',
      description: 'A practical, low-pressure guide to beginning therapy.',
      datePublished: '2026-11-02',
      dateModified: '2026-11-02',
      author: { '@id': `${siteUrl}/#lamisa-shaik`, name: practice.clinician },
      publisher: { '@id': `${siteUrl}/#practice`, name: practice.name },
      mainEntityOfPage: pageUrl,
    },
  ],
};

export default function FirstTherapySessionArticle() {
  return (
    <main className="page languagePage">
      <PageStructuredData data={structuredData} />
      <SiteHeader subtitle="Therapy resources" />
      <article>
        <header className="intakeIntro">
          <p className="eyebrow">Beginning therapy</p>
          <h1>What to expect in your first therapy session</h1>
          <p className="lead">
            A first session is usually a conversation about what brings you in, what you hope might
            change, and whether the therapist’s approach feels like a workable fit. You do not need
            to arrive with a perfect explanation of your life.
          </p>
        </header>

        <section className="band splitBand">
          <div className="panel">
            <div className="sectionHeading">
              <p className="eyebrow">Before the appointment</p>
              <h2>What you may be asked to complete</h2>
            </div>
            <p className="aboutText">
              Depending on the platform and practice, you may receive consent forms, privacy
              notices, contact information, insurance questions, and a short history form. Read
              these at your own pace and ask about anything that is unclear.
            </p>
            <p className="aboutText">
              It can help to jot down the main concern you want support with, how it affects daily
              life, and any questions you have. Detailed preparation is optional.
            </p>
          </div>
          <div className="panel soft">
            <div className="sectionHeading">
              <p className="eyebrow">During the conversation</p>
              <h2>Common first-session topics</h2>
            </div>
            <ul className="serviceList">
              <li>What prompted you to seek therapy now</li>
              <li>Your current concerns, strengths, and sources of support</li>
              <li>Relevant health, relationship, family, school, or work context</li>
              <li>Your preferences, goals, language needs, and past therapy experiences</li>
              <li>Confidentiality, scheduling, fees, communication, and emergency procedures</li>
            </ul>
          </div>
        </section>

        <section className="band">
          <div className="sectionHeading">
            <p className="eyebrow">You can ask questions too</p>
            <h2>Therapy fit is a two-way decision</h2>
          </div>
          <div className="cards three">
            <div className="infoCard">
              <h3>Approach</h3>
              <p>
                Ask how the therapist typically works with concerns like yours and what sessions may
                feel like.
              </p>
            </div>
            <div className="infoCard">
              <h3>Practical details</h3>
              <p>
                Clarify frequency, telehealth technology, insurance, fees, cancellations, and
                communication between sessions.
              </p>
            </div>
            <div className="infoCard">
              <h3>Comfort and culture</h3>
              <p>
                Ask about language flexibility and how the therapist makes room for culture,
                identity, family, faith, or migration.
              </p>
            </div>
          </div>
        </section>

        <section className="band muted">
          <div className="sectionHeading">
            <p className="eyebrow">After the session</p>
            <h2>Notice what the conversation was like</h2>
          </div>
          <p className="aboutText">
            You may not know immediately whether a therapist is the right fit. Consider whether you
            felt heard, whether your questions were welcomed, and whether the proposed next steps
            made sense. It is reasonable to raise concerns, take time to decide, or explore another
            provider.
          </p>
          <div className="aboutActions">
            <Link className="linkButton ghost" href="/resources">
              View all resources
            </Link>
            <Link className="linkButton" href="/intake">
              Request an intake screening
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
