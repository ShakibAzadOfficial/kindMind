import Link from 'next/link';
import PageStructuredData, { breadcrumbs } from '../PageStructuredData';
import SiteHeader from '../SiteHeader';
import { practice, siteUrl } from '../site-config';

const pageUrl = `${siteUrl}/bn/`;

export const metadata = {
  title: 'বাংলাভাষী থেরাপিস্ট | নিউ ইয়র্ক ও নিউ জার্সি',
  description:
    'লামিসা শাইকের সঙ্গে বাংলা বা ইংরেজিতে ভার্চুয়াল থেরাপি। নিউ ইয়র্ক ও নিউ জার্সির ক্লায়েন্টদের জন্য উদ্বেগ, ADHD, সম্পর্ক ও সাংস্কৃতিক চাপ নিয়ে সহায়তা।',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-US': `${siteUrl}/`,
      bn: pageUrl,
    },
  },
  openGraph: {
    title: 'বাংলাভাষী থেরাপিস্ট | KindMind Counseling',
    description: 'নিউ ইয়র্ক ও নিউ জার্সির ক্লায়েন্টদের জন্য বাংলা ও ইংরেজিতে ভার্চুয়াল থেরাপি।',
    url: pageUrl,
    locale: 'bn_BD',
  },
};

const areas = [
  'উদ্বেগ, অতিরিক্ত চিন্তা ও মানসিক চাপ',
  'ADHD, মনোযোগ, সময় ও দৈনন্দিন কাজ গুছিয়ে নেওয়া',
  'সম্পর্ক, যোগাযোগ ও পারিবারিক দ্বন্দ্ব',
  'বার্নআউট, জীবন পরিবর্তন ও মানিয়ে নেওয়া',
  'সাংস্কৃতিক পরিচয়, অভিবাসন ও নিজের জায়গা খুঁজে পাওয়া',
  'পারিবারিক প্রত্যাশা ও প্রজন্মগত চাপ',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbs([
      { name: 'Home', url: `${siteUrl}/` },
      { name: 'বাংলা', url: pageUrl },
    ]),
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'বাংলা ও ইংরেজিতে ভার্চুয়াল থেরাপি',
      url: pageUrl,
      provider: { '@id': `${siteUrl}/#practice` },
      serviceType: 'Virtual psychotherapy in Bengali and English',
      availableLanguage: practice.languages,
      areaServed: practice.serviceAreas.map((area) => ({
        '@type': area.type,
        name: area.name,
      })),
    },
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13.2m0 0-5.4-5.4M18.2 12l-5.4 5.4" />
    </svg>
  );
}

export default function BengaliPage() {
  return (
    <main className="page languagePage" lang="bn">
      <PageStructuredData data={structuredData} />
      <SiteHeader subtitle="বাংলা ও ইংরেজিতে থেরাপি" />

      <section className="intakeIntro">
        <p className="eyebrow">নিউ ইয়র্ক ও নিউ জার্সিতে ভার্চুয়াল থেরাপি</p>
        <h1>নিজের ভাষায় কথা বলার জন্য একটি শান্ত ও সহযোগিতামূলক জায়গা</h1>
        <p className="lead">
          আমি লামিসা শাইক। আমি বাংলা ও ইংরেজিতে থেরাপি প্রদান করি। সেশনে আপনি বাংলা, ইংরেজি অথবা
          স্বাভাবিকভাবে দুই ভাষাই ব্যবহার করতে পারেন—যে ভাষায় আপনার অনুভূতি ও অভিজ্ঞতা প্রকাশ করা
          সহজ হয়।
        </p>
        <div className="ctaRow">
          <Link className="linkButton intakeLinkButton" href="/intake">
            ইনটেকের অনুরোধ পাঠান
            <Arrow />
          </Link>
          <Link className="linkButton ghost" href="/">
            Read in English
            <Arrow />
          </Link>
        </div>
      </section>

      <section className="band splitBand">
        <article className="panel">
          <div className="sectionHeading">
            <p className="eyebrow">যেসব বিষয় নিয়ে কাজ করা যেতে পারে</p>
            <h2>আপনার অভিজ্ঞতা ও লক্ষ্যকে কেন্দ্র করে সহায়তা</h2>
          </div>
          <ul className="serviceList">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>

        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">থেরাপির ধরন</p>
            <h2>সংস্কৃতি ও জীবনের বাস্তবতাকে গুরুত্ব দেওয়া হয়</h2>
          </div>
          <p className="aboutText">
            পরিবার, ধর্ম, অভিবাসন, পরিচয়, কমিউনিটি, লিঙ্গ ও দায়িত্ব—এসব বিষয় মানসিক স্বাস্থ্যের
            সঙ্গে জড়িত থাকতে পারে। আপনার গল্প সম্পর্কে অনুমান না করে কৌতূহল ও সম্মানের সঙ্গে কাজ
            করাই আমার লক্ষ্য।
          </p>
          <p className="aboutText">
            সেশনে চিন্তা ও অনুভূতি বোঝার পাশাপাশি যোগাযোগ, সীমারেখা, আবেগ নিয়ন্ত্রণ, সংগঠন ও
            দৈনন্দিন মোকাবিলার বাস্তব কৌশল নিয়েও কাজ করা যেতে পারে।
          </p>
        </article>
      </section>

      <section className="band">
        <div className="sectionHeading">
          <p className="eyebrow">শুরু করার প্রক্রিয়া</p>
          <h2>প্রথম যোগাযোগ থেকে পরবর্তী ধাপ</h2>
        </div>
        <div className="cards three">
          <article className="infoCard">
            <h3>১. যোগাযোগ করুন</h3>
            <p>
              Headway-তে সময় বেছে নিন অথবা সংক্ষিপ্ত ইনটেক অনুরোধ পাঠান। ব্যক্তিগত স্বাস্থ্যতথ্য
              ইমেইল বা WhatsApp-এ পাঠাবেন না।
            </p>
          </article>
          <article className="infoCard">
            <h3>২. প্রাথমিক আলোচনা</h3>
            <p>
              আপনার প্রয়োজন, লক্ষ্য, অবস্থান, ভাষা, বীমা বা ফি, সময়সূচি এবং থেরাপি উপযুক্ত কি না
              তা নিয়ে আলোচনা করা হবে।
            </p>
          </article>
          <article className="infoCard">
            <h3>৩. পরবর্তী পদক্ষেপ</h3>
            <p>
              উভয়ের কাছে উপযুক্ত মনে হলে সম্মত নিরাপদ প্ল্যাটফর্মে কাগজপত্র ও সেশনের পরবর্তী ধাপ
              সম্পন্ন হবে।
            </p>
          </article>
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeading">
          <p className="eyebrow">গুরুত্বপূর্ণ তথ্য</p>
          <h2>সেবা ও নিরাপত্তা</h2>
        </div>
        <p className="aboutText">
          ভার্চুয়াল থেরাপি গ্রহণের সময় আপনাকে নিউ ইয়র্ক অথবা নিউ জার্সিতে অবস্থান করতে হবে। ইনটেক
          অনুরোধ পাঠানো মানেই সেশন নিশ্চিত হওয়া নয়। জরুরি বিপদে 911-এ কল করুন অথবা নিকটস্থ জরুরি
          বিভাগে যান।
        </p>
        <div className="aboutActions">
          <Link className="linkButton ghost" href="/insurance-fees">
            বীমা ও ফি
            <Arrow />
          </Link>
          <Link className="linkButton" href="/intake">
            ইনটেক শুরু করুন
            <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
