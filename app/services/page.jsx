import Link from 'next/link';
import SiteHeader from '../SiteHeader';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Therapy Services for Anxiety, ADHD, Burnout, and Relationships',
  description:
    'Explore bilingual virtual therapy services for anxiety, ADHD, burnout, relationships, family stress, and cultural identity in New York and New Jersey.',
  alternates: {
    canonical: `${siteUrl}/services/`,
  },
  openGraph: {
    title: 'Therapy Services | KindMind Counseling',
    description:
      'Warm, practical, culturally responsive therapy in Bengali and English with Lamisa Shaik.',
    url: `${siteUrl}/services/`,
  },
};

const services = [
  {
    title: 'Anxiety therapy',
    text: 'Explore persistent worry, overthinking, physical tension, avoidance, and the pressure to keep everything under control. Sessions can combine insight with practical ways to respond differently when anxiety takes over.',
  },
  {
    title: 'ADHD support',
    text: 'Work on attention, organization, emotional regulation, follow-through, and the shame that can build after years of feeling misunderstood. Care is collaborative and adapted to your actual routines and priorities.',
  },
  {
    title: 'Stress and burnout therapy',
    text: 'Make space for exhaustion, caregiving pressure, work stress, and the feeling that rest must be earned. Therapy can help identify unsustainable patterns and build boundaries that are realistic in daily life.',
  },
  {
    title: 'Relationship and family therapy',
    text: 'Address communication, conflict, trust, changing roles, and recurring family patterns. The work can include couples and families when that format is clinically appropriate and available.',
  },
  {
    title: 'Cultural identity and intergenerational pressure',
    text: 'Talk openly about belonging, immigration, faith, family expectations, bicultural identity, and the tension between caring for others and making room for yourself.',
  },
  {
    title: 'Life transitions and coping skills',
    text: 'Build steadier ways to navigate changes in school, work, relationships, family responsibilities, and identity. The goal is support you can carry beyond the therapy session.',
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="page languagePage">
      <SiteHeader subtitle="Therapy services" />

      <section className="intakeIntro">
        <p className="eyebrow">Services</p>
        <h1>Therapy for the parts of life that feel hard to carry alone</h1>
        <p className="lead">
          Lamisa provides culturally responsive virtual therapy in Bengali and English for clients
          in New York and New Jersey. Treatment is tailored to your goals, context, strengths, and
          stage of life rather than following a one-size-fits-all script.
        </p>
      </section>

      <section className="band">
        <div className="cards two">
          {services.map((service) => (
            <article className="infoCard" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentGrid">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Who Lamisa works with</p>
            <h2>Care across ages and relationships</h2>
          </div>
          <p className="aboutText">
            Lamisa's experience includes work with children, adolescents, adults, couples, families,
            and groups. An intake screening helps determine whether the requested service, current
            availability, and virtual format are a good fit.
          </p>
        </article>
        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Treatment approach</p>
            <h2>Warm, direct, and practical</h2>
          </div>
          <p className="aboutText">
            Depending on your needs, sessions may draw from cognitive behavioral, mindfulness,
            multicultural, person-centered, interpersonal, and psychodynamic approaches. Lamisa
            combines careful listening with concrete tools that can be used between sessions.
          </p>
        </article>
      </section>

      <section className="band">
        <div className="panel languageSpotlight">
          <div className="sectionHeading">
            <p className="eyebrow">Locations and language</p>
            <h2>Virtual therapy from Brooklyn and West Orange</h2>
          </div>
          <p className="aboutText">
            Sessions are available in Bengali and English for clients located in New York and New
            Jersey. Explore the location pages for more detail about care for Brooklyn and West
            Orange communities.
          </p>
          <div className="aboutActions">
            <Link className="linkButton" href="/bengali-therapist-brooklyn-ny">
              Bengali therapist in Brooklyn
              <Arrow />
            </Link>
            <Link className="linkButton ghost" href="/bengali-therapist-new-jersey">
              Bengali therapist in West Orange
            </Link>
            <Link className="linkButton ghost intakeLinkButton" href="/intake">
              Request an intake screening
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
