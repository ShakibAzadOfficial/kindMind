import Link from 'next/link';
import SiteHeader from '../SiteHeader';
import { siteUrl } from '../site-config';

export const metadata = {
  title: {
    absolute: 'Bengali Therapist in Brooklyn, NY | Lamisa Shaik',
  },
  description:
    'Bengali and English virtual therapy for Brooklyn clients with Lamisa Shaik, an experienced bilingual therapist serving adults, children, couples, and families.',
  alternates: {
    canonical: `${siteUrl}/bengali-therapist-brooklyn-ny/`,
  },
  openGraph: {
    title: 'Bengali Therapist in Brooklyn, NY | Lamisa Shaik',
    description:
      'Culturally responsive virtual therapy in Bengali and English for clients across Brooklyn and New York.',
    url: `${siteUrl}/bengali-therapist-brooklyn-ny/`,
  },
};

const areasOfSupport = [
  'Anxiety and persistent worry',
  'ADHD, focus, and organization',
  'Stress and burnout',
  'Relationship and family concerns',
  'Cultural identity and belonging',
  'Intergenerational expectations',
  'Immigration and life transitions',
  'Coping skills and emotional regulation',
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function BrooklynTherapyPage() {
  return (
    <main className="page languagePage">
      <SiteHeader subtitle="Brooklyn therapy" />

      <section className="languageHero">
        <div>
          <p className="eyebrow">Brooklyn, New York · Virtual sessions</p>
          <h1>Bengali and English therapy in New York</h1>
          <p className="lead">
            Lamisa is a bilingual Bengali- and English-speaking therapist based in New York, with
            years of experience serving children, adults, and families in Brooklyn community mental
            health and private-practice settings. Through KindMind Counseling, she offers virtual
            therapy to clients located throughout New York.
          </p>
          <div className="ctaRow">
            <Link className="linkButton ghost intakeLinkButton" href="/intake">
              Request an intake screening
              <Arrow />
            </Link>
          </div>
        </div>
        <aside className="panel soft languageWelcome">
          <p className="languageBangla" lang="bn">
            ব্রুকলিনে বাংলা ও ইংরেজিতে থেরাপি
          </p>
          <h2>Care that understands language, culture, and family context</h2>
          <p className="aboutText">
            You can speak in Bengali, English, or move naturally between both. Sessions make room
            for the ways culture, migration, faith, family roles, identity, and community can shape
            emotional wellbeing.
          </p>
        </aside>
      </section>

      <section className="band">
        <div className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Therapy for Brooklyn communities</p>
            <h2>A grounded space for the pressures you carry</h2>
          </div>
          <p className="aboutText">
            Brooklyn is home to people balancing many languages, identities, family histories, and
            expectations. Therapy can be a place to slow down and explore what belongs to you, what
            you have inherited, and what you want to change. Lamisa brings direct experience
            providing bilingual care in Brooklyn and East New York while approaching every client as
            an individual rather than making assumptions about culture or family life.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Areas of support</p>
            <h2>What we can work through together</h2>
          </div>
          <div className="chipGrid">
            {areasOfSupport.map((area) => (
              <span className="chip" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contentGrid">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Bilingual therapy</p>
            <h2>Use the language that fits the moment</h2>
          </div>
          <p className="aboutText">
            Some feelings and family experiences are easier to describe in Bengali, while others may
            come more naturally in English. You do not need to choose one language for every session
            or explain every cultural reference before you can talk about what matters.
          </p>
        </article>
        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Virtual care</p>
            <h2>Accessible throughout New York</h2>
          </div>
          <p className="aboutText">
            KindMind sessions are offered by secure telehealth for clients who are physically
            located in New York at the time of the appointment. Virtual care can make it easier to
            attend consistently without adding a commute across Brooklyn.
          </p>
        </article>
      </section>

      <section className="band">
        <div className="panel languageFaq">
          <div className="sectionHeading">
            <p className="eyebrow">Common questions</p>
            <h2>Starting therapy from Brooklyn</h2>
          </div>
          <div className="languageFaqGrid">
            <article>
              <h3>Is there an in-person Brooklyn office?</h3>
              <p>
                KindMind Counseling currently describes its services as virtual. The intake
                screening is the best place to confirm the current format and availability.
              </p>
            </article>
            <article>
              <h3>Can sessions include Bengali and English?</h3>
              <p>
                Yes. Sessions can be in Bengali, English, or a combination of both, based on what
                feels most natural to you.
              </p>
            </article>
            <article>
              <h3>How do I check insurance?</h3>
              <p>
                Review the insurance and fees page, then request an intake screening so coverage and
                next steps can be confirmed before scheduling.
              </p>
            </article>
          </div>
          <div className="aboutActions">
            <Link className="linkButton" href="/intake">
              Start an intake request
              <Arrow />
            </Link>
            <Link className="linkButton ghost" href="/insurance-fees">
              Review insurance and fees
            </Link>
            <Link className="linkButton ghost" href="/bengali-therapist-new-jersey">
              Explore therapy for New Jersey clients
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
