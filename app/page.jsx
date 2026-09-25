import Image from 'next/image';
import Link from 'next/link';
import ImpactStats from './ImpactStats';
import { professionalProfiles, siteUrl } from './site-config';
import SiteHeader from './SiteHeader';

export const metadata = {
  title: {
    absolute: 'Bengali Therapist in Brooklyn, NY & West Orange, NJ | Lamisa Shaik',
  },
  description:
    'Work with Lamisa Shaik, a Bengali-speaking therapist based in Brooklyn, NY and West Orange, NJ, offering virtual therapy across New York and New Jersey.',
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

const practiceHighlights = [
  {
    title: 'A calm place to land',
    text: 'I try to create a space where people can slow down, tell the truth, and not have to hold everything together for one more hour.',
  },
  {
    title: 'Practical tools, real conversation',
    text: 'Sessions can include grounded strategies, insight-oriented work, and the kind of honest conversation that helps things make sense.',
  },
  {
    title: 'Support that meets you where you are',
    text: 'I work with children, adolescents, adults, couples, and groups so care can fit the season of life you are in.',
  },
];

const specialties = [
  'Anxiety',
  'ADHD',
  'Coping skills',
  'Relationship skills',
  'Depression',
  'Family conflict',
  'Stress and burnout',
  'Identity and cultural stress',
];

const therapyStyles = [
  'Cognitive Behavioral Therapy (CBT)',
  'Mindfulness-based support',
  'Multicultural therapy',
  'Person-centered therapy',
  'Interpersonal work',
  'Psychodynamic insight',
];

const insurancePlans = [
  'Aetna',
  'Anthem / Empire',
  'BlueCross and BlueShield',
  'Carelon Behavioral Health',
  'Cigna and Evernorth',
  'Optum',
  'Oscar Health',
  'Oxford',
  'UMR',
  'UnitedHealthcare / UHC | UBH',
];

const impactStats = [
  {
    value: 3000,
    suffix: '+',
    label: 'Lives Supported',
    detail: 'Through individual therapy, group therapy, and clinician mentorship',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Years of clinical experience',
    detail: 'Supporting children, adults, couples, and families',
  },
  {
    value: 4,
    suffix: '+',
    label: 'Years of clinician mentorship',
    detail: 'Helping newer clinicians grow with structure and care',
  },
  {
    value: 24,
    suffix: 'h',
    label: 'Typical response time',
    detail: 'For new inquiries received during business days',
  },
  {
    value: 2,
    suffix: '',
    label: 'Languages offered',
    detail: 'Therapy in Bengali, English, or a blend of both',
  },
];

const processSteps = [
  'Schedule through Headway or request an intake screening',
  'Share a little about what brings you in',
  'Match on fit, goals, and availability',
  'Complete next steps through the agreed secure care platform',
];

const intakeUrl = '/intake';
const [psychologyTodayUrl, zocdocUrl, headwayUrl] = professionalProfiles;
const phoneNumber = '(347) 901-8676';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M7 4.8c.6-.6 1.5-.8 2.2-.4l1.5.9c.9.5 1.2 1.6.8 2.4l-.8 1.4c-.2.4-.2.8 0 1.2a14.6 14.6 0 0 0 4.2 4.2c.4.2.8.2 1.2 0l1.4-.8c.8-.4 1.9-.1 2.4.8l.9 1.5c.4.7.2 1.6-.4 2.2l-1 1c-.8.8-2 1.1-3.1.8-3-.8-5.9-2.7-8.7-5.5s-4.7-5.7-5.5-8.7c-.3-1.1 0-2.3.8-3.1l1-1Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 3.5 19 6.8v5.1c0 4.2-2.6 7.6-7 8.6-4.4-1-7-4.4-7-8.6V6.8L12 3.5Z" />
      <path d="M9.5 12l1.8 1.8L15.2 10" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 4.5 14.4 9l4.6.7-3.3 3.2.8 4.6-4.5-2.3-4.5 2.3.8-4.6L5 9.7 9.6 9l2.4-4.5Z" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page homePage">
      <SiteHeader subtitle="KindMind Counseling" />

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">
            Bengali &amp; English virtual therapy in New York and New Jersey
          </p>
          <h1>Bilingual Bengali and English therapy in New York and New Jersey</h1>
          <p className="lead">
            Hi, I am Lamisa, a bilingual Bengali and English-speaking therapist based in Brooklyn,
            New York and West Orange, New Jersey. I offer virtual therapy to clients throughout New
            York and New Jersey who may be feeling overwhelmed, stretched thin, or caught between
            identity, family expectations, and everyday pressure.
          </p>
          <div className="ctaRow">
            <a
              className="linkButton intakeLinkButton"
              href={headwayUrl}
              target="_blank"
              rel="noreferrer"
            >
              Schedule on Headway
              <Arrow />
            </a>
            <Link className="linkButton ghost intakeLinkButton" href={intakeUrl}>
              Start intake
              <Arrow />
            </Link>
          </div>
          <ul className="statusRow" aria-label="At a glance">
            <li>
              <ShieldIcon /> Accepting new clients
            </li>
            <li>
              <BadgeIcon /> Licensed in New York &amp; New Jersey
            </li>
            <li>
              <ShieldIcon /> Telehealth across New York &amp; New Jersey
            </li>
            <li>
              <BadgeIcon /> Bengali &amp; English
            </li>
          </ul>
        </div>
        <div className="heroVisual">
          <figure className="homeHeroPhotoFrame">
            <Image
              className="homeHeroPhoto"
              src="/images/kindmind-therapy-office.webp"
              alt="A warm, sunlit counseling office with comfortable chairs and plants"
              width={1506}
              height={1045}
              sizes="(max-width: 980px) 100vw, 45vw"
              priority
            />
          </figure>
        </div>
      </section>

      <ImpactStats stats={impactStats} />

      <section className="band">
        <div className="panel languageSpotlight">
          <div className="sectionHeading">
            <p className="eyebrow">Care in your language</p>
            <h2>Bengali and English therapy</h2>
          </div>
          <p className="aboutText">
            Language can shape how we describe family, identity, stress, and healing. Sessions are
            available in Bengali or English, with room to move naturally between both languages when
            that feels most comfortable.
          </p>
          <div className="aboutActions">
            <Link className="linkButton" href="/bengali-therapist-brooklyn-ny">
              Bengali therapist in New York
              <Arrow />
            </Link>
            <Link className="linkButton ghost" href="/bengali-therapist-new-jersey">
              Bengali therapist in New Jersey
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="sectionHeading">
          <p className="eyebrow">A little about me</p>
          <h2>How I like to show up in the room</h2>
        </div>
        <div className="cards three">
          {practiceHighlights.map((item) => (
            <article className="infoCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentGrid">
        <div className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Specialties</p>
            <h2>What I help with</h2>
          </div>
          <div className="chipGrid">
            {specialties.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="aboutActions">
            <Link className="linkButton ghost" href="/services">
              Explore therapy services
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Approach</p>
            <h2>How sessions feel</h2>
          </div>
          <ul className="serviceList">
            {therapyStyles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="callout">
            <p>
              Expect a collaborative relationship, honest conversation, and concrete support that
              makes therapy feel useful outside the room.
            </p>
          </div>
        </div>
      </section>

      <section className="band splitBand">
        <div className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Insurance</p>
            <h2>Plans commonly accepted</h2>
          </div>
          <div className="pillList">
            {insurancePlans.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="aboutActions">
            <Link className="linkButton ghost" href="/insurance-fees">
              Insurance and fees details
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">What happens next</p>
            <h2>From first contact to first session</h2>
          </div>
          <ol className="stepsList">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span className="stepIndex">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="aboutPreview">
          <div className="sectionHeading">
            <p className="eyebrow">About me</p>
            <h2>I believe therapy should feel safe enough for honesty</h2>
          </div>
          <p className="aboutText">
            I work with children, adolescents, adults, couples, and groups navigating anxiety, ADHD,
            burnout, relationship strain, and the weight of identity and family expectations. My
            style is warm and direct, and I care about helping people feel understood while also
            leaving with something concrete they can use in daily life.
          </p>
          <div className="aboutActions">
            <Link className="linkButton" href="/about">
              Read about Lamisa
              <Arrow />
            </Link>
            <a
              className="linkButton ghost"
              href={psychologyTodayUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Psychology Today
              <Arrow />
            </a>
            <a className="linkButton ghost" href={zocdocUrl} target="_blank" rel="noreferrer">
              View Zocdoc
              <Arrow />
            </a>
            <a className="linkButton ghost" href={headwayUrl} target="_blank" rel="noreferrer">
              View Headway
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Professional roles</p>
            <h2>Beyond individual therapy</h2>
          </div>
          <div className="cards two">
            <article className="infoCard">
              <h3>Group therapy</h3>
              <p>
                Lamisa also works in group therapy settings, helping people connect, reflect, and
                practice new ways of showing up with others.
              </p>
            </article>
            <article className="infoCard">
              <h3>Supervision</h3>
              <p>
                She supervises junior clinicians and supports their growth with care, structure, and
                a thoughtful clinical lens.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeading">
          <p className="eyebrow">Contact</p>
          <h2>Reach out when you are ready</h2>
        </div>
        <div className="contactStrip">
          <a className="contactItem" href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}>
            <PhoneIcon />
            <div>
              <span className="contactLabel">Call</span>
              <strong>{phoneNumber}</strong>
            </div>
          </a>
          <a className="contactItem" href={headwayUrl} target="_blank" rel="noreferrer">
            <Arrow />
            <div>
              <span className="contactLabel">Headway</span>
              <strong>Schedule a session online</strong>
            </div>
          </a>
          <Link className="contactItem action" href={intakeUrl}>
            <Arrow />
            <div>
              <span className="contactLabel">Initial intake</span>
              <strong>Send a consultation request</strong>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
