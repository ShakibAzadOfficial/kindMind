import TherapyServicePage from '../TherapyServicePage';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'ADHD Therapy in New York and New Jersey',
  description:
    'Virtual ADHD therapy and support in Bengali or English for clients across New York and New Jersey, focused on routines, emotions, follow-through, and self-understanding.',
  alternates: { canonical: `${siteUrl}/adhd-therapy/` },
  openGraph: {
    title: 'ADHD Therapy in New York and New Jersey | KindMind Counseling',
    description: 'Collaborative virtual ADHD support in Bengali and English with Lamisa Shaik.',
    url: `${siteUrl}/adhd-therapy/`,
  },
};

const signs = [
  'Difficulty starting, organizing, or finishing important tasks',
  'Losing track of time, appointments, or everyday details',
  'Cycles of procrastination, urgency, and exhaustion',
  'Strong emotions, frustration, or sensitivity to criticism',
  'Feeling capable but inconsistent across work, school, or home',
  'Shame after years of being described as lazy or careless',
];

const approach = [
  'ADHD support can address practical routines and the emotional weight of repeatedly feeling behind. Together, we can examine where a system breaks down, reduce unnecessary friction, and choose strategies that fit your actual environment.',
  'Therapy is not an ADHD assessment or medication service. When evaluation or prescribing support may be useful, we can discuss how those services differ and what questions to ask an appropriate healthcare professional.',
];

const sessionFocus = [
  {
    title: 'Design workable systems',
    text: 'Experiment with external reminders, task breakdown, realistic planning, and routines that rely less on willpower alone.',
  },
  {
    title: 'Understand emotions',
    text: 'Explore overwhelm, avoidance, frustration, relationship strain, and the self-criticism that can follow inconsistent performance.',
  },
  {
    title: 'Build self-advocacy',
    text: 'Clarify your needs, communicate more directly, and consider supportive changes at home, work, or school when appropriate.',
  },
];

export default function AdhdTherapyPage() {
  return (
    <TherapyServicePage
      slug="adhd-therapy"
      eyebrow="Practical, affirming support in Bengali and English"
      title="ADHD therapy"
      introduction="ADHD can affect attention, time, motivation, emotions, and relationships—not just productivity. Therapy can help you understand your patterns, work with your strengths, and develop supports that are realistic enough to use."
      signs={signs}
      approach={approach}
      sessionFocus={sessionFocus}
      relatedHref="/services"
      relatedLabel="Explore related therapy services"
    />
  );
}
