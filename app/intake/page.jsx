'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../logo/ShaikLamisaLMHC.png';

const contactEmail = 'shaiklamisa00@gmail.com';
const phoneNumber = '(347) 901-8676';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function IntakePage() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = formData.get('subject');
    const body = [
      `First name: ${formData.get('firstName')}`,
      `Last name: ${formData.get('lastName')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Message:',
      formData.get('message'),
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="page intakePage">
      <header className="topbar">
        <div className="brand">
          <Image className="brandLogo" src={logo} alt="Shaik Lamisa LMHC logo" priority />
          <div>
            <p className="eyebrow">Lamisa Shaik, LMHC</p>
            <p className="subtle">Initial intake request</p>
          </div>
        </div>
        <div className="topActions">
          <Link className="linkButton ghost" href="/">
            Home
          </Link>
          <Link className="linkButton ghost" href="/about">
            About Me
          </Link>
        </div>
      </header>

      <section className="intakeIntro">
        <p className="eyebrow">Start with a conversation</p>
        <h1>Request an intake screening</h1>
        <p className="lead">
          Share your contact information and a brief, non-sensitive message. Submitting this request does not guarantee a scheduled session. This is an initial inquiry, and we will reach out to arrange an intake screening.
        </p>
      </section>

      <section className="intakeLayout">
        <div className="panel intakeFormPanel">
          <div className="privacyNotice" id="privacy-guidance">
            <strong>Please protect your privacy</strong>
            <p>
              This form opens your email app and does not store your information on this website. Email may not be secure. Do not include diagnoses, symptoms, insurance details, medications, or other private health information.
            </p>
          </div>

          <form className="intakeForm" onSubmit={handleSubmit} aria-describedby="privacy-guidance">
            <div className="formRow">
              <label>
                <span>First name</span>
                <input name="firstName" type="text" autoComplete="given-name" maxLength={80} required />
              </label>
              <label>
                <span>Last name</span>
                <input name="lastName" type="text" autoComplete="family-name" maxLength={80} required />
              </label>
            </div>

            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" maxLength={160} required />
            </label>

            <label>
              <span>Subject</span>
              <input name="subject" type="text" maxLength={120} required />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                maxLength={1000}
                placeholder="Keep this brief and do not include sensitive health information."
                required
              />
            </label>

            <label className="consentRow">
              <input name="privacyAcknowledgement" type="checkbox" required />
              <span>I understand email may not be secure, and I have not included sensitive health information.</span>
            </label>

            <button className="linkButton intakeSubmit" type="submit">
              Prepare email
              <Arrow />
            </button>
          </form>
        </div>

        <aside className="panel soft intakeContact">
          <div className="sectionHeading">
            <p className="eyebrow">Contact directly</p>
            <h2>Prefer another way?</h2>
          </div>
          <p className="subtle">You can call or send a brief email to request an intake screening.</p>
          <div className="intakeContactLinks">
            <a href="tel:3479018676">
              <span>Phone</span>
              <strong>{phoneNumber}</strong>
            </a>
            <a href={`mailto:${contactEmail}`}>
              <span>Email</span>
              <strong>{contactEmail}</strong>
            </a>
          </div>
          <div className="callout">
            <p>This page is not monitored for emergencies. If you are in immediate danger, call 911 or go to the nearest emergency room.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
