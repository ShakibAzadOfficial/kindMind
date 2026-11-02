import Link from 'next/link';
import PageStructuredData, { breadcrumbs } from '../../PageStructuredData';
import SiteHeader from '../../SiteHeader';
import { practice, siteUrl } from '../../site-config';

const pageUrl = `${siteUrl}/resources/how-to-choose-bengali-speaking-therapist/`;

export const metadata = {
  title: 'How to Choose a Bengali-Speaking Therapist',
  description:
    'Questions to consider when choosing a Bengali-speaking therapist, including language, culture, licensing, telehealth, approach, and personal fit.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    title: 'How to Choose a Bengali-Speaking Therapist',
    description:
      'A practical guide to language, cultural context, credentials, logistics, and fit.',
    url: pageUrl,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbs([
      { name: 'Home', url: `${siteUrl}/` },
      { name: 'Resources', url: `${siteUrl}/resources/` },
      { name: 'How to choose a Bengali-speaking therapist', url: pageUrl },
    ]),
    {
      '@type': 'Article',
      headline: 'How to Choose a Bengali-Speaking Therapist',
      description:
        'A practical guide to language, cultural context, credentials, logistics, and fit.',
      datePublished: '2026-11-02',
      dateModified: '2026-11-02',
      author: { '@id': `${siteUrl}/#lamisa-shaik`, name: practice.clinician },
      publisher: { '@id': `${siteUrl}/#practice`, name: practice.name },
      mainEntityOfPage: pageUrl,
    },
  ],
};

export default function ChoosingBengaliTherapistArticle() {
  return (
    <main className="page languagePage">
      <PageStructuredData data={structuredData} />
      <SiteHeader subtitle="Therapy resources" />
      <article>
        <header className="intakeIntro">
          <p className="eyebrow">Language and cultural fit</p>
          <h1>How to choose a Bengali-speaking therapist</h1>
          <p className="lead">
            Sharing a language can make it easier to describe emotions, family roles, faith,
            migration, or experiences that do not translate neatly. Language is important, but it is
            one part of choosing a therapist who is qualified, available, and personally right for
            you.
          </p>
        </header>

        <section className="band">
          <div className="sectionHeading">
            <p className="eyebrow">Questions worth asking</p>
            <h2>Look beyond a directory filter</h2>
          </div>
          <div className="cards three">
            <div className="infoCard">
              <h3>Language flexibility</h3>
              <p>
                Can sessions happen in Bengali, English, or both? Are you comfortable using the
                Bengali terms and dialects that feel natural to you?
              </p>
            </div>
            <div className="infoCard">
              <h3>Cultural responsiveness</h3>
              <p>
                How does the therapist approach family expectations, identity, religion,
                immigration, community, gender, and intergenerational experiences?
              </p>
            </div>
            <div className="infoCard">
              <h3>Relevant experience</h3>
              <p>
                Does the therapist work with your concern, age group, relationship format, and
                goals? Ask what their approach may involve.
              </p>
            </div>
            <div className="infoCard">
              <h3>Licensing and location</h3>
              <p>
                For telehealth, the therapist generally needs authorization where you are physically
                located during sessions. Confirm your state before scheduling.
              </p>
            </div>
            <div className="infoCard">
              <h3>Cost and access</h3>
              <p>
                Ask about insurance participation, fees, availability, telehealth technology,
                accessibility, scheduling, and cancellation policies.
              </p>
            </div>
            <div className="infoCard">
              <h3>Personal fit</h3>
              <p>
                Notice whether you feel respected, whether questions are welcomed, and whether the
                therapist’s communication style supports honest conversation.
              </p>
            </div>
          </div>
        </section>

        <section className="band splitBand">
          <div className="panel soft">
            <div className="sectionHeading">
              <p className="eyebrow">A useful distinction</p>
              <h2>Shared identity does not guarantee shared assumptions</h2>
            </div>
            <p className="aboutText">
              Bengali communities include many regions, religions, migration histories, family
              structures, and ways of understanding mental health. A culturally responsive therapist
              should stay curious about your experience rather than assume similarity.
            </p>
          </div>
          <div className="panel">
            <div className="sectionHeading">
              <p className="eyebrow">KindMind Counseling</p>
              <h2>Bengali and English virtual therapy</h2>
            </div>
            <p className="aboutText">
              Lamisa Shaik offers virtual therapy in Bengali and English for clients located in New
              York and New Jersey. An intake screening can help clarify needs, availability, and
              whether the practice may be a fit.
            </p>
            <div className="aboutActions">
              <Link className="linkButton ghost" href="/bn">
                বাংলায় পড়ুন
              </Link>
              <Link className="linkButton" href="/intake">
                Request an intake screening
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
