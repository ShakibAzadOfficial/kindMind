import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../SiteHeader';
import { professionalProfiles, siteUrl } from '../site-config';

export const metadata = {
  title: 'About Lamisa Shaik, Bilingual Therapist',
  description:
    'Meet Lamisa Shaik, a Bengali- and English-speaking therapist based in Brooklyn, NY and West Orange, NJ, serving clients across New York and New Jersey.',
  alternates: {
    canonical: `${siteUrl}/about/`,
  },
};

const profileLinks = [
  { label: 'Psychology Today', href: professionalProfiles[0] },
  { label: 'Zocdoc', href: professionalProfiles[1] },
  { label: 'Headway', href: professionalProfiles[2] },
];

const approachPoints = [
  {
    title: 'A collaborative pace',
    text: 'We will identify goals together and revisit them as your needs change. I bring clinical guidance without treating you as a problem to be solved or rushing you into a pace that does not feel sustainable.',
  },
  {
    title: 'Care across ages and relationships',
    text: 'My experience includes work with children, adolescents, adults, couples, families, and groups. The intake process helps us decide which format best fits your concerns, goals, and current circumstances.',
  },
  {
    title: 'Support for everyday pressure',
    text: 'Sessions can address anxiety, ADHD, burnout, relationship stress, family conflict, life transitions, and identity-based stress. We can look at both immediate coping needs and patterns that keep returning.',
  },
  {
    title: 'Your culture and context matter',
    text: 'I make room for family roles, immigration, faith, community, gender, values, and lived experience. Cultural responsiveness means staying curious about your story rather than making assumptions about it.',
  },
  {
    title: 'Practical tools you can use',
    text: 'Alongside reflection and honest conversation, we may practice concrete strategies for communication, emotional regulation, boundaries, organization, and coping between sessions.',
  },
  {
    title: 'Bilingual flexibility',
    text: 'Sessions may take place in Bengali, English, or a natural combination of both. You can use the language that fits the emotion, memory, or family experience you are trying to describe.',
  },
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
      <SiteHeader subtitle="About me" />

      <section className="hero aboutHero">
        <div className="heroCopy">
          <p className="eyebrow">About Lamisa</p>
          <h1>Therapy that is steady, respectful, and personal</h1>
          <p className="lead">
            Hi, I am Lamisa Shaik, LMHC, a bilingual Bengali- and English-speaking therapist based
            in Brooklyn, New York and West Orange, New Jersey. I bring warmth, clarity, and cultural
            awareness to my work with children, adolescents, adults, couples, and groups, helping
            clients find steadier ground and build emotional skills that support everyday life.
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
              <article className="infoCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
            cultural expectations. Based in Brooklyn and West Orange, I am licensed in New York and
            New Jersey and offer virtual sessions in Bengali and English for clients who want care
            that is flexible and grounded. I also provide group therapy and support newer clinicians
            through supervision and consultation.
          </p>
        </div>
      </section>

      <section className="band splitBand">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Education</p>
            <h2>Graduate training in mental health counseling</h2>
          </div>
          <p className="aboutText">
            Lamisa earned a Master of Arts in Mental Health Counseling from Queens College, City
            University of New York, and a Bachelor of Science in Psychology with a minor in
            Sociology from the City College of New York.
          </p>
        </article>
        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Clinical experience</p>
            <h2>Rooted in Brooklyn and community care</h2>
          </div>
          <p className="aboutText">
            Her experience includes private practice, telehealth, and community mental health. She
            has served as a senior clinician with Brooklyn Total Wellness and as a bilingual
            therapist in East New York, providing care in Bengali and English to children, adults,
            and families.
          </p>
        </article>
      </section>
    </main>
  );
}
