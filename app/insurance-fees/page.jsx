import Link from 'next/link';
import SiteHeader from '../SiteHeader';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Insurance and Therapy Fees',
  description:
    'Review insurance plans commonly accepted by KindMind Counseling and learn how to confirm therapy coverage, costs, and next steps before scheduling.',
  alternates: {
    canonical: `${siteUrl}/insurance-fees/`,
  },
};

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

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function InsuranceFeesPage() {
  return (
    <main className="page languagePage">
      <SiteHeader subtitle="Insurance & fees" />

      <section className="intakeIntro">
        <p className="eyebrow">Insurance &amp; fees</p>
        <h1>Clearer information before therapy begins</h1>
        <p className="lead">
          Insurance participation and your personal cost can depend on your state, plan, benefits,
          deductible, and the platform used for care. An intake screening provides a chance to
          confirm current participation and discuss the next steps before a session is scheduled.
        </p>
      </section>

      <section className="band splitBand">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Commonly accepted</p>
            <h2>Insurance plans</h2>
          </div>
          <div className="pillList">
            {insurancePlans.map((plan) => (
              <span className="pill" key={plan}>
                {plan}
              </span>
            ))}
          </div>
        </article>
        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Before scheduling</p>
            <h2>Confirm your benefits</h2>
          </div>
          <p className="aboutText">
            A plan name on this page does not guarantee that a particular service will be covered.
            Contact your insurer to ask about outpatient behavioral health benefits, telehealth,
            deductibles, copays, coinsurance, and whether prior authorization is required.
          </p>
          <div className="callout">
            <p>
              Current fees and any expected client responsibility will be discussed during the
              intake process before you agree to begin care.
            </p>
          </div>
        </article>
      </section>

      <section className="band">
        <div className="panel languageFaq">
          <div className="sectionHeading">
            <p className="eyebrow">Frequently asked questions</p>
            <h2>Insurance, fees, and getting started</h2>
          </div>
          <div className="languageFaqGrid">
            <article>
              <h3>Is my insurance definitely accepted?</h3>
              <p>
                Participation can vary by plan and location. Coverage should be verified for your
                specific policy before the first appointment.
              </p>
            </article>
            <article>
              <h3>What will I pay?</h3>
              <p>
                Your cost depends on your benefits and whether services are in network. Current fee
                information is provided during the intake process.
              </p>
            </article>
            <article>
              <h3>Does an intake request schedule a session?</h3>
              <p>
                No. It begins a screening conversation about fit, availability, insurance, and next
                steps; it does not guarantee an appointment.
              </p>
            </article>
          </div>
          <div className="aboutActions">
            <Link className="linkButton ghost intakeLinkButton" href="/intake">
              Request an intake screening
              <Arrow />
            </Link>
            <Link className="linkButton ghost" href="/services">
              Explore therapy services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
