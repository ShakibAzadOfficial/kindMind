import Link from 'next/link';
import PageStructuredData, { breadcrumbs } from '../PageStructuredData';
import SiteHeader from '../SiteHeader';
import { practice, siteUrl } from '../site-config';

const pageUrl = `${siteUrl}/bn/`;

export const metadata = {
  title: 'বাংলায় থেরাপি | নিউ ইয়র্ক ও নিউ জার্সি',
  description:
    'লামিসা শাইকের সঙ্গে বাংলা বা ইংরেজিতে অনলাইন থেরাপি। দুশ্চিন্তা, ADHD, সম্পর্ক, পরিবার আর জীবনের চাপ নিয়ে কথা বলার জায়গা।',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-US': `${siteUrl}/`,
      bn: pageUrl,
    },
  },
  openGraph: {
    title: 'বাংলায় থেরাপি | KindMind Counseling',
    description: 'নিউ ইয়র্ক ও নিউ জার্সিতে থাকা মানুষের জন্য বাংলা ও ইংরেজিতে অনলাইন থেরাপি।',
    url: pageUrl,
    locale: 'bn_BD',
  },
};

const areas = [
  'দুশ্চিন্তা, বেশি ভাবা আর মানসিক চাপ',
  'ADHD, মনোযোগ রাখা, সময় মেনে চলা আর কাজ গুছানো',
  'সম্পর্কে সমস্যা, কথা বলতে কষ্ট আর পরিবারে ঝামেলা',
  'কাজের চাপ, খুব ক্লান্ত লাগা আর জীবনের বড় পরিবর্তন',
  'নিজের পরিচয়, নতুন দেশে মানিয়ে নেওয়া আর নিজের জায়গা খুঁজে পাওয়া',
  'পরিবার কী চায় আর আপনি কী চান—এই টানাপোড়েন',
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
      name: 'বাংলা ও ইংরেজিতে অনলাইন থেরাপি',
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
      <SiteHeader subtitle="বাংলা ও ইংরেজিতে অনলাইন থেরাপি" />

      <section className="intakeIntro">
        <p className="eyebrow">নিউ ইয়র্ক ও নিউ জার্সিতে অনলাইন থেরাপি</p>
        <h1>বাংলা বা ইংরেজিতে মন খুলে কথা বলার জায়গা</h1>
        <p className="lead">
          আমি লামিসা শাইক। আমার সঙ্গে থেরাপিতে আপনি বাংলা, ইংরেজি বা দুই ভাষাতেই কথা বলতে পারেন। যে
          ভাষায় আপনার কথা বলতে সহজ লাগে, সেটাই ব্যবহার করুন।
        </p>
        <div className="ctaRow">
          <Link className="linkButton intakeLinkButton" href="/intake">
            প্রথমবার যোগাযোগ করুন
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
            <p className="eyebrow">যে বিষয়গুলো নিয়ে কথা বলতে পারেন</p>
            <h2>আপনার সমস্যা আর লক্ষ্য অনুযায়ী থেরাপি</h2>
          </div>
          <ul className="serviceList">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>

        <article className="panel soft">
          <div className="sectionHeading">
            <p className="eyebrow">থেরাপি কেমন হবে</p>
            <h2>আপনার পরিবার, সংস্কৃতি আর জীবনকে বুঝে কথা বলা</h2>
          </div>
          <p className="aboutText">
            পরিবার, ধর্ম, নতুন দেশে মানিয়ে নেওয়া, নিজের পরিচয়, কমিউনিটি আর দায়িত্ব—এসব আমাদের
            মনের ওপর প্রভাব ফেলতে পারে। আমি আগে থেকে কিছু ধরে না নিয়ে আপনার কথা শুনতে চাই।
          </p>
          <p className="aboutText">
            সেশনে আমরা আপনার চিন্তা আর অনুভূতি বোঝার চেষ্টা করব। দরকার হলে ভালোভাবে কথা বলা, নিজের
            সীমা ঠিক করা, আবেগ সামলানো, কাজ গুছানো আর প্রতিদিনের চাপ সামলানোর সহজ উপায়ও দেখব।
          </p>
        </article>
      </section>

      <section className="band">
        <div className="sectionHeading">
          <p className="eyebrow">কীভাবে শুরু করবেন</p>
          <h2>প্রথম মেসেজ থেকে প্রথম সেশন</h2>
        </div>
        <div className="cards three">
          <article className="infoCard">
            <h3>১. প্রথমে যোগাযোগ করুন</h3>
            <p>
              Headway-তে সময় বেছে নিন, অথবা ছোট করে মেসেজ পাঠান। ইমেইল বা WhatsApp-এ রোগ, ওষুধ,
              বীমা বা অন্য ব্যক্তিগত স্বাস্থ্য তথ্য লিখবেন না।
            </p>
          </article>
          <article className="infoCard">
            <h3>২. প্রথমে কিছু কথা বলি</h3>
            <p>
              আপনি কী নিয়ে সাহায্য চান, কোথায় থাকেন, কোন ভাষায় কথা বলতে চান, সময়, খরচ আর
              বীমা—এসব নিয়ে কথা হবে। দুজনের জন্য থেরাপি ঠিক হবে কি না, সেটাও দেখা হবে।
            </p>
          </article>
          <article className="infoCard">
            <h3>৩. এরপর কী হবে</h3>
            <p>সব ঠিক থাকলে নিরাপদ অনলাইন প্ল্যাটফর্মে ফর্ম পূরণ ও সেশনের বাকি কাজ করা হবে।</p>
          </article>
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeading">
          <p className="eyebrow">জেনে রাখুন</p>
          <h2>কোথা থেকে সেশন নিতে পারবেন</h2>
        </div>
        <p className="aboutText">
          অনলাইন সেশনের সময় আপনাকে নিউ ইয়র্ক বা নিউ জার্সিতে থাকতে হবে। প্রথমবার যোগাযোগ করলেই
          সেশন নিশ্চিত হয় না। আপনি এখনই কোনো বিপদে থাকলে 911-এ কল করুন বা কাছের হাসপাতালের
          ইমার্জেন্সি রুমে যান।
        </p>
        <div className="aboutActions">
          <Link className="linkButton ghost" href="/insurance-fees">
            বীমা আর খরচ
            <Arrow />
          </Link>
          <Link className="linkButton" href="/intake">
            প্রথমবার যোগাযোগ করুন
            <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
