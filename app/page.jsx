import Image from 'next/image';
import Link from 'next/link';
import logo from '../logo/ShaikLamisaLMHC.png';

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

const processSteps = [
  'Reach out by phone or consult link',
  'Share a little about what brings you in',
  'Match on fit, goals, and availability',
  'Begin care through a secure intake flow',
];

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || 'https://simplepractice.com';
const intakeUrl = process.env.NEXT_PUBLIC_INTAKE_URL || 'https://simplepractice.com';
const psychologyTodayUrl = 'https://www.psychologytoday.com/us/therapists/lamisa-shaik-new-york-ny/1517949';
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

function CounselingScene() {
  return (
    <svg viewBox="0 0 640 520" role="img" aria-label="Counseling conversation illustration" className="illustration">
      <defs>
        <linearGradient id="sceneBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7faf8" />
          <stop offset="100%" stopColor="#e1ece9" />
        </linearGradient>
        <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8e7ef" />
          <stop offset="100%" stopColor="#edf6f7" />
        </linearGradient>
        <linearGradient id="lampGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5c57d" />
          <stop offset="100%" stopColor="#ef9e6e" />
        </linearGradient>
        <linearGradient id="chair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1e2d3" />
          <stop offset="100%" stopColor="#e2d0bf" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="640" height="520" rx="32" fill="url(#sceneBg)" />
      <rect x="34" y="34" width="572" height="452" rx="30" fill="#ffffff" opacity="0.72" />
      <rect x="66" y="66" width="250" height="170" rx="24" fill="url(#windowGlow)" />
      <circle cx="204" cy="130" r="34" fill="url(#lampGlow)" />
      <path d="M76 208c28-24 58-36 90-36 28 0 49 9 70 22 18 11 39 20 66 20v62H76z" fill="#bfdccf" />
      <rect x="315" y="88" width="156" height="18" rx="9" fill="#d8e2e1" />
      <rect x="315" y="118" width="198" height="18" rx="9" fill="#d8e2e1" />
      <rect x="315" y="148" width="173" height="18" rx="9" fill="#d8e2e1" />
      <rect x="315" y="178" width="140" height="18" rx="9" fill="#d8e2e1" />
      <rect x="110" y="300" width="168" height="72" rx="36" fill="url(#chair)" />
      <rect x="310" y="288" width="176" height="96" rx="24" fill="#eae2d6" />
      <circle cx="372" cy="244" r="26" fill="#f1c9ac" />
      <path d="M350 280c8-18 20-26 36-26s28 8 36 26v48h-72z" fill="#7b8a86" />
      <path d="M388 330v104" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      <path d="M166 326h88" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <path d="M166 352h108" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <path d="M246 326v78" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <path d="M126 326v78" stroke="#9dbbb6" strokeWidth="10" strokeLinecap="round" />
      <circle cx="176" cy="414" r="40" fill="#6ea58d" />
      <path d="M176 382v64M154 402c14 8 28 13 44 18M198 402c-14 8-28 13-44 18" stroke="#f7f3ec" strokeWidth="5" strokeLinecap="round" />
      <path d="M346 308h128" stroke="#c5ac98" strokeWidth="14" strokeLinecap="round" />
      <path d="M364 332h94" stroke="#c5ac98" strokeWidth="14" strokeLinecap="round" />
      <path d="M470 322c20 0 34 10 48 24" stroke="#d1e6de" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <Image className="brandLogo" src={logo} alt="Shaik Lamisa LMHC logo" priority />
          <div>
            <p className="eyebrow">Lamisa Shaik, LMHC</p>
            <p className="subtle">KindMind Counseling</p>
          </div>
        </div>
        <div className="topActions">
          <Link className="linkButton ghost" href="/about">
            About Me
          </Link>
          <a className="linkButton ghost" href={psychologyTodayUrl} target="_blank" rel="noreferrer">
            Psychology Today
          </a>
          <a className="linkButton ghost" href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}>
            Call
            <PhoneIcon />
          </a>
          <a className="linkButton" href={bookingUrl} target="_blank" rel="noreferrer">
            Consult
            <Arrow />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Virtual therapy for anxiety, ADHD, coping, and relationships</p>
          <h1>Therapy that feels warm, clear, and human</h1>
          <p className="lead">
            Hi, I am Lamisa. If you are feeling overwhelmed, stretched thin, or caught between identity, family expectations, and everyday pressure, you do not have to sort through it alone. I aim to meet people with warmth, curiosity, and a steady kind of care.
          </p>
          <div className="ctaRow">
            <a className="linkButton" href={bookingUrl} target="_blank" rel="noreferrer">
              Schedule a consult
              <Arrow />
            </a>
            <a className="linkButton ghost" href={intakeUrl} target="_blank" rel="noreferrer">
              Start intake
              <Arrow />
            </a>
          </div>
          <ul className="statusRow" aria-label="At a glance">
            <li><ShieldIcon /> Accepting new clients</li>
            <li><BadgeIcon /> Licensed in New York &amp; New Jersey</li>
            <li><ShieldIcon /> Virtual sessions</li>
          </ul>
        </div>
        <div className="heroVisual">
          <CounselingScene />
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
              Expect a collaborative relationship, honest conversation, and concrete support that makes therapy feel useful outside the room.
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
            I work with children, adolescents, adults, couples, and groups navigating anxiety, ADHD, burnout, relationship strain, and the weight of identity and family expectations. My style is warm and direct, and I care about helping people feel understood while also leaving with something concrete they can use in daily life.
          </p>
          <div className="aboutActions">
            <Link className="linkButton" href="/about">
              Read about Lamisa
              <Arrow />
            </Link>
            <a className="linkButton ghost" href={psychologyTodayUrl} target="_blank" rel="noreferrer">
              View Psychology Today
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
              <p>Lamisa also works in group therapy settings, helping people connect, reflect, and practice new ways of showing up with others.</p>
            </article>
            <article className="infoCard">
              <h3>Supervision</h3>
              <p>She supervises junior clinicians and supports their growth with care, structure, and a thoughtful clinical lens.</p>
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
          <a className="contactItem" href={bookingUrl} target="_blank" rel="noreferrer">
            <Arrow />
            <div>
              <span className="contactLabel">Consult</span>
              <strong>Schedule through the booking link</strong>
            </div>
          </a>
          <a className="contactItem action" href={intakeUrl} target="_blank" rel="noreferrer">
            <Arrow />
            <div>
              <span className="contactLabel">Secure intake</span>
              <strong>Complete forms outside the site</strong>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
