'use client';

import SiteHeader from '../SiteHeader';
import { practice, professionalProfiles } from '../site-config';
import { buildIntakeEmailUrl } from './intake-email';

const contactEmail = practice.email;
const phoneNumber = '(347) 901-8676';
const headwayUrl = professionalProfiles[2];
const whatsappMessage =
  "Hi Lamisa, I'd like to request an initial intake screening. Please let me know the next steps.";
const whatsappUrl = `https://wa.me/13479018676?text=${encodeURIComponent(whatsappMessage)}`;

export function prepareIntakeEmail(event, navigate) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  navigate(
    buildIntakeEmailUrl(
      {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      },
      contactEmail,
    ),
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function IntakePage() {
  function handleSubmit(event) {
    prepareIntakeEmail(event, (emailUrl) => {
      window.location.href = emailUrl;
    });
  }

  return (
    <main className="page intakePage">
      <SiteHeader subtitle="Initial intake request" />

      <section className="intakeIntro">
        <p className="eyebrow">Choose your next step</p>
        <h1>Begin in the way that works for you</h1>
        <p className="lead">
          Schedule directly through Headway, or request an intake screening by WhatsApp or email. A
          screening request does not guarantee a scheduled session; we will follow up about next
          steps and availability.
        </p>
      </section>

      <section className="panel intakeChoices" aria-labelledby="intake-choice-heading">
        <div className="sectionHeading intakeChoiceHeading">
          <p className="eyebrow">Three ways to begin</p>
          <h2 id="intake-choice-heading">How would you like to get started?</h2>
          <p className="subtle">
            If you are ready to choose an appointment time, Headway is the quickest path. If you
            have a question first, send a brief intake request.
          </p>
        </div>

        <div className="intakeChoiceGrid">
          <article className="intakeChoiceCard featured">
            <span className="intakeChoiceNumber">01</span>
            <p className="eyebrow">Schedule directly</p>
            <h3>Ready to skip screening?</h3>
            <p>
              Choose a session time through Headway. Headway will collect the appropriate contact,
              insurance, and scheduling details on its platform.
            </p>
            <a
              className="linkButton intakeLinkButton intakeChoiceButton"
              href={headwayUrl}
              target="_blank"
              rel="noreferrer"
            >
              Schedule on Headway
              <Arrow />
            </a>
          </article>

          <article className="intakeChoiceCard">
            <span className="intakeChoiceNumber">02</span>
            <p className="eyebrow">Message us</p>
            <h3>Prefer WhatsApp?</h3>
            <p>
              Open a prewritten message to request an intake screening. Please keep your message
              brief and do not include sensitive health information.
            </p>
            <a
              className="linkButton ghost intakeChoiceButton"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
              <Arrow />
            </a>
          </article>

          <article className="intakeChoiceCard">
            <span className="intakeChoiceNumber">03</span>
            <p className="eyebrow">Send an email</p>
            <h3>Use the intake form</h3>
            <p>
              Share your contact details and a short, non-sensitive note. The form prepares a draft
              in your email app for you to review and send.
            </p>
            <a className="linkButton ghost intakeChoiceButton" href="#email-intake">
              Continue to email
              <Arrow />
            </a>
          </article>
        </div>
      </section>

      <section className="intakeLayout">
        <div className="panel intakeFormPanel" id="email-intake">
          <div className="sectionHeading intakeFormHeading">
            <p className="eyebrow">Email intake request</p>
            <h2>Prepare a brief email</h2>
          </div>
          <div className="privacyNotice" id="privacy-guidance">
            <strong>Please protect your privacy</strong>
            <p>
              This form opens your email app and does not store your information on this website.
              Email and WhatsApp may not be secure for health information. Do not include diagnoses,
              symptoms, insurance details, medications, or other private health information.
            </p>
          </div>

          <form className="intakeForm" onSubmit={handleSubmit} aria-describedby="privacy-guidance">
            <div className="formRow">
              <label>
                <span>First name</span>
                <input
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  maxLength={80}
                  required
                />
              </label>
              <label>
                <span>Last name</span>
                <input
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  maxLength={80}
                  required
                />
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
              <span>
                I understand email may not be secure, and I have not included sensitive health
                information.
              </span>
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
          <p className="subtle">
            You can call, send a brief WhatsApp message, or email to request an intake screening.
          </p>
          <div className="intakeContactLinks">
            <a href="tel:3479018676">
              <span>Phone</span>
              <strong>{phoneNumber}</strong>
            </a>
            <a href={`mailto:${contactEmail}`}>
              <span>Email</span>
              <strong>{contactEmail}</strong>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>Send a brief message</strong>
            </a>
          </div>
          <div className="callout">
            <p>
              This page is not monitored for emergencies. If you are in immediate danger, call 911
              or go to the nearest emergency room.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
