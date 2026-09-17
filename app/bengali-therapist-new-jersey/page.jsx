import Link from 'next/link';
import SiteHeader from '../SiteHeader';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Bengali Therapist in New Jersey',
  description:
    'Virtual therapy in Bengali and English with Lamisa Shaik, a culturally responsive therapist based in West Orange, NJ and Brooklyn, NY.',
  alternates: {
    canonical: `${siteUrl}/bengali-therapist-new-jersey/`,
  },
  openGraph: {
    title: 'Bengali Therapist in New Jersey and New York',
    description:
      'Culturally responsive virtual therapy in Bengali and English with Lamisa Shaik, LMHC, LPC.',
    url: `${siteUrl}/bengali-therapist-new-jersey/`,
  },
};

const areasOfSupport = [
  'Anxiety and persistent worry',
  'ADHD, focus, and organization',
  'Family and relationship stress',
  'Identity and belonging',
  'Immigration and cultural adjustment',
  'Burnout and life transitions',
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function BengaliTherapyPage() {
  return (
    <main className="page languagePage">
      <SiteHeader subtitle="Bengali & English therapy" />

      <section className="languageHero">
        <div>
          <p className="eyebrow">West Orange, New Jersey · Virtual sessions</p>
          <h1>Bengali and English therapy in New Jersey</h1>
          <p className="lead">
            Therapy can feel more natural when you can speak in the language that best fits the
            moment. I offer virtual therapy in Bengali and English for clients in New Jersey and New
            York, with culturally responsive care that makes room for family, identity, values, and
            lived experience.
          </p>
          <div className="ctaRow">
            <Link className="linkButton ghost intakeLinkButton" href="/intake">
              Request an intake screening
              <Arrow />
            </Link>
          </div>
        </div>
        <aside className="panel soft languageWelcome">
          <p className="languageBangla" lang="bn">
            বাংলা ও ইংরেজিতে থেরাপি
          </p>
          <h2>A space where you do not have to translate every part of yourself</h2>
          <p className="aboutText">
            Sessions may take place in Bengali, English, or a natural combination of both. We can
            talk about culture directly without assuming that any one experience represents every
            family or community.
          </p>
        </aside>
      </section>

      <section className="band">
        <div className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Areas of support</p>
            <h2>What we can work through together</h2>
          </div>
          <div className="chipGrid">
            {areasOfSupport.map((area) => (
              <span className="chip" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contentGrid">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">Why language matters</p>
            <h2>Say it the way it comes to you</h2>
          </div>
          <p className="aboutText">
            Some emotions, memories, and family dynamics are easier to describe in one language than
            another. Being able to switch languages can reduce the pressure to find a perfect
            translation and help therapy stay connected to your real experience.
          </p>
        </article>
        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">Culturally responsive care</p>
            <h2>Your context belongs in the room</h2>
          </div>
          <p className="aboutText">
            Our work can include the influence of immigration, intergenerational expectations,
            faith, community, relationships, and belonging. The goal is not to choose between
            cultures, but to understand what supports your wellbeing and the life you want to build.
          </p>
        </article>
      </section>

      <section className="band">
        <div className="panel languageFaq">
          <div className="sectionHeading">
            <p className="eyebrow">Common questions</p>
            <h2>Starting bilingual virtual therapy</h2>
          </div>
          <div className="languageFaqGrid">
            <article>
              <h3>Do sessions have to stay in one language?</h3>
              <p>
                No. You can use Bengali, English, or move between both based on what feels most
                comfortable.
              </p>
            </article>
            <article>
              <h3>Where are sessions available?</h3>
              <p>
                Lamisa is based in West Orange, New Jersey and Brooklyn, New York and provides
                virtual therapy to clients located throughout both states.
              </p>
            </article>
            <article>
              <h3>What happens after I reach out?</h3>
              <p>
                We begin with an intake screening to discuss what brings you to therapy,
                availability, insurance, and whether the practice is a good fit.
              </p>
            </article>
          </div>
          <div className="aboutActions">
            <Link className="linkButton" href="/intake">
              Start with an intake request
              <Arrow />
            </Link>
            <Link className="linkButton ghost" href="/about">
              Learn more about Lamisa
            </Link>
            <Link className="linkButton ghost" href="/bengali-therapist-brooklyn-ny">
              Explore therapy for New York clients
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
