import Image from 'next/image';
import Link from 'next/link';
import logo from '../../logo/ShaikLamisaLMHC.png';

const psychologyTodayUrl =
  'https://www.psychologytoday.com/us/therapists/lamisa-shaik-new-york-ny/1517949';

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

function AboutIllustration() {
  return (
    <svg viewBox="0 0 560 520" role="img" aria-label="Counseling illustration" className="illustration aboutIllustration">
      <defs>
        <linearGradient id="aboutBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7faf8" />
          <stop offset="100%" stopColor="#e2ece9" />
        </linearGradient>
        <linearGradient id="aboutWindow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bfe0ea" />
          <stop offset="100%" stopColor="#edf6f7" />
        </linearGradient>
      </defs>
      <rect width="560" height="520" rx="32" fill="url(#aboutBg)" />
      <rect x="42" y="40" width="476" height="440" rx="30" fill="#ffffff" opacity="0.72" />
      <rect x="78" y="82" width="146" height="174" rx="22" fill="url(#aboutWindow)" />
      <circle cx="180" cy="140" r="30" fill="#f29e70" />
      <path d="M88 218c24-22 50-33 78-33 29 0 52 10 79 28v53H88z" fill="#bddacc" />
      <rect x="250" y="96" width="150" height="18" rx="9" fill="#d7e0df" />
      <rect x="250" y="126" width="180" height="18" rx="9" fill="#d7e0df" />
      <rect x="250" y="156" width="162" height="18" rx="9" fill="#d7e0df" />
      <rect x="96" y="314" width="120" height="72" rx="36" fill="#f0e2d3" />
      <rect x="244" y="286" width="144" height="92" rx="24" fill="#e8ded0" />
      <circle cx="296" cy="242" r="24" fill="#f2c8ae" />
      <path d="M276 272c7-16 17-24 28-24s21 8 28 24v44h-56z" fill="#7c8d8a" />
      <path d="M304 312v96" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      <path d="M136 340h76" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <path d="M136 366h96" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <path d="M160 340v74" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <circle cx="132" cy="412" r="34" fill="#6ea58d" />
      <path d="M132 386v52M116 402c10 6 20 10 32 14M148 402c-10 6-20 10-32 14" stroke="#f7f3ec" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <Image className="brandLogo" src={logo} alt="Shaik Lamisa LMHC logo" priority />
          <div>
            <p className="eyebrow">Lamisa Shaik, LMHC</p>
            <p className="subtle">About me</p>
          </div>
        </div>
        <div className="topActions">
          <Link className="linkButton ghost" href="/">
            Home
          </Link>
          <a className="linkButton" href={psychologyTodayUrl} target="_blank" rel="noreferrer">
            Psychology Today
            <Arrow />
          </a>
        </div>
      </header>

      <section className="hero aboutHero">
        <div className="heroCopy">
          <p className="eyebrow">About Lamisa</p>
          <h1>Therapy that is steady, respectful, and personal</h1>
          <p className="lead">
            Hi, I am Lamisa Shaik, LMHC. I bring warmth, clarity, and cultural awareness to my work with children, adolescents, adults, couples, and groups, and I care about helping clients make sense of the pressure they carry, find steadier ground, and build emotional skills that support everyday life.
          </p>
          <div className="ctaRow">
            <a className="linkButton" href={psychologyTodayUrl} target="_blank" rel="noreferrer">
              Psychology Today profile
              <Arrow />
            </a>
          </div>
        </div>
        <div className="heroVisual">
          <AboutIllustration />
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
            My clinical work includes anxiety, ADHD, coping skills, stress and burnout, relationship concerns, family conflict, and the emotional strain that can come with identity and cultural expectations. I am licensed in New York and New Jersey and offer virtual sessions for clients who want care that is flexible and grounded. I also provide group therapy and supervise junior clinicians.
          </p>
        </div>
      </section>
    </main>
  );
}
