import Image from 'next/image';
import Link from 'next/link';
import logo from '../../logo/ShaikLamisaLMHC.webp';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'About Lamisa Shaik, Bilingual Therapist',
  description:
    'Meet Lamisa Shaik, a Bengali- and English-speaking therapist based in West Orange, NJ, licensed in New Jersey and New York.',
  alternates: {
    canonical: `${siteUrl}/about/`,
  },
};

const psychologyTodayUrl =
  'https://www.psychologytoday.com/us/therapists/lamisa-shaik-new-york-ny/1517949';
const zocdocUrl = 'https://www.zocdoc.com/professional/shaik-lamisa-lmhc-638091';
const headwayUrl = 'https://care.headway.co/providers/shaik-lamisa';

const profileLinks = [
  { label: 'Psychology Today', href: psychologyTodayUrl },
  { label: 'Zocdoc', href: zocdocUrl },
  { label: 'Headway', href: headwayUrl },
];

const approachPoints = [
  'I like to keep the work collaborative, steady, and honest',
  'I often work with children, adolescents, adults, couples, and groups',
  'I often work with anxiety, ADHD, burnout, relationship stress, and identity-based stress',
  'I bring a culturally responsive lens that makes room for family, values, and lived experience',
  'I want clients to leave sessions with something they can actually use',
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="page aboutPage">
      <header className="topbar">
        <div className="brand">
          <Image className="brandLogo" src={logo} alt="Shaik Lamisa LMHC logo" priority />
          <div>
            <p className="eyebrow">Lamisa Shaik, LMHC</p>
            <p className="subtle">About me</p>
          </div>
        </div>
        <div className="topActions">
          <Link className="linkButton ghost aboutHomeButton" href="/">
            Home
          </Link>
        </div>
      </header>

      <section className="hero aboutHero">
        <div className="heroCopy">
          <p className="eyebrow">About Lamisa</p>
          <h1>Therapy that is steady, respectful, and personal</h1>
          <p className="lead">
            Hi, I am Lamisa Shaik, LMHC, a bilingual Bengali- and English-speaking therapist based
            in West Orange, New Jersey. I bring warmth, clarity, and cultural awareness to my work
            with children, adolescents, adults, couples, and groups, helping clients find steadier
            ground and build emotional skills that support everyday life.
          </p>
          <div className="ctaRow" aria-label="Lamisa's professional profiles">
            {profileLinks.map((profile) => (
              <a
                className="linkButton profileLinkButton"
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                key={profile.label}
              >
                {profile.label}
                <Arrow />
              </a>
            ))}
          </div>
        </div>
        <div className="heroVisual">
          <figure className="profilePhotoFrame">
            <Image
              className="profilePhoto"
              src="/images/lamisa-shaik-profile.jpeg"
              alt="Lamisa Shaik, licensed mental health counselor"
              width={320}
              height={400}
              sizes="(max-width: 980px) 100vw, 42vw"
              priority
            />
            <figcaption>
              <strong>Lamisa Shaik</strong>
              <span>LMHC, LPC</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="band">
        <div className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">How she works</p>
            <h2>What clients can expect from me</h2>
          </div>
          <div className="aboutGrid">
            {approachPoints.map((item) => (
              <article className="infoCard" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Clinical focus</p>
            <h2>Areas of support</h2>
          </div>
          <p className="aboutText">
            My clinical work includes anxiety, ADHD, coping skills, stress and burnout, relationship
            concerns, family conflict, and the emotional strain that can come with identity and
            cultural expectations. Based in West Orange, I am licensed in New York and New Jersey
            and offer virtual sessions in Bengali and English for clients who want care that is
            flexible and grounded. I also provide group therapy and supervise junior clinicians.
          </p>
        </div>
      </section>
    </main>
  );
}
