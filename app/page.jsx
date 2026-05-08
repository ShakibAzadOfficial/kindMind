import Image from 'next/image';
import logo from '../logo/ShaikLamisaLMHC.png';

const practiceHighlights = [
  {
    title: 'Warm, culturally aware care',
    text: 'A space that makes room for identity, family history, and the pressure of carrying more than one world at once.',
  },
  {
    title: 'Practical tools with depth',
    text: 'Sessions can include CBT-informed strategies, insight-oriented work, and grounding support that fits real life.',
  },
  {
    title: 'Virtual sessions',
    text: 'A simple way to connect with support from home, with a clear path to consult, intake, and next steps.',
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

function OfficeIllustration() {
  return (
    <svg viewBox="0 0 640 520" role="img" aria-label="Calm counseling office illustration" className="illustration">
      <defs>
        <linearGradient id="room" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f7f5" />
          <stop offset="100%" stopColor="#dfe9e8" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3c27a" />
          <stop offset="100%" stopColor="#ef8f66" />
        </linearGradient>
        <linearGradient id="window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a9cdd9" />
          <stop offset="100%" stopColor="#d4e9eb" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="640" height="520" rx="32" fill="url(#room)" />
      <rect x="44" y="40" width="552" height="292" rx="28" fill="#ffffff" opacity="0.74" />
      <rect x="78" y="74" width="176" height="216" rx="24" fill="url(#window)" />
      <circle cx="205" cy="126" r="34" fill="url(#sun)" />
      <path d="M86 234c30-30 57-46 82-46 36 0 51 28 83 28 20 0 38-8 54-24v104H86z" fill="#b9d8cf" />
      <rect x="290" y="88" width="246" height="34" rx="17" fill="#dfe7e6" />
      <rect x="290" y="140" width="216" height="18" rx="9" fill="#ccd7d6" />
      <rect x="290" y="170" width="188" height="18" rx="9" fill="#ccd7d6" />
      <rect x="290" y="200" width="208" height="18" rx="9" fill="#ccd7d6" />
      <rect x="322" y="268" width="188" height="100" rx="24" fill="#e9ded1" />
      <rect x="340" y="286" width="152" height="18" rx="9" fill="#c8b4a3" />
      <rect x="366" y="306" width="100" height="16" rx="8" fill="#b79d8c" />
      <circle cx="368" cy="250" r="26" fill="#f0cbb2" />
      <path d="M349 370h86v58h-86z" fill="#7c8d8a" />
      <path d="M390 378v92" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      <path d="M250 350h126" stroke="#97aea8" strokeWidth="10" strokeLinecap="round" />
      <path d="M286 350v70" stroke="#97aea8" strokeWidth="10" strokeLinecap="round" />
      <path d="M214 350h68" stroke="#97aea8" strokeWidth="10" strokeLinecap="round" />
      <path d="M226 350v70" stroke="#97aea8" strokeWidth="10" strokeLinecap="round" />
      <rect x="98" y="354" width="118" height="16" rx="8" fill="#c4d8d4" />
      <rect x="108" y="380" width="94" height="16" rx="8" fill="#c4d8d4" />
      <circle cx="126" cy="452" r="40" fill="#6e9f89" />
      <path d="M126 418v68M104 440c14 10 30 16 44 20M148 438c-14 10-30 16-44 20" stroke="#f7f3ec" strokeWidth="5" strokeLinecap="round" />
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
          <h1>Therapy that feels warm, clear, and grounded</h1>
          <p className="lead">
            If you are feeling overwhelmed, stretched thin, or caught between identity, family expectations, and everyday pressure, you do not have to sort through it alone. The work here is practical, compassionate, and culturally sensitive.
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
            <li><BadgeIcon /> Licensed in New York</li>
            <li><ShieldIcon /> Virtual sessions</li>
          </ul>
        </div>
        <div className="heroVisual">
          <OfficeIllustration />
        </div>
      </section>

      <section className="band">
        <div className="sectionHeading">
          <p className="eyebrow">My practice at a glance</p>
          <h2>A simple introduction to how I work</h2>
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
