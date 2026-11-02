import TherapyServicePage from '../TherapyServicePage';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Anxiety Therapy in New York and New Jersey',
  description:
    'Virtual anxiety therapy in Bengali or English for clients across New York and New Jersey. Explore worry, avoidance, burnout, and cultural pressure with Lamisa Shaik.',
  alternates: { canonical: `${siteUrl}/anxiety-therapy/` },
  openGraph: {
    title: 'Anxiety Therapy in New York and New Jersey | KindMind Counseling',
    description:
      'Warm, practical virtual anxiety therapy in Bengali and English with Lamisa Shaik.',
    url: `${siteUrl}/anxiety-therapy/`,
  },
};

const signs = [
  'Persistent worry that is difficult to set down',
  'Overthinking conversations, choices, or possible outcomes',
  'Avoiding situations because uncertainty feels overwhelming',
  'Physical tension, restlessness, or difficulty slowing down',
  'Perfectionism and fear of disappointing other people',
  'Stress connected to family, identity, work, or major transitions',
];

const approach = [
  'Anxiety therapy can create room to understand what your nervous system is responding to and how worry has learned to protect you. We can look at immediate coping needs without losing sight of the relationships, expectations, and experiences around them.',
  'Sessions may draw from cognitive behavioral, mindfulness-based, multicultural, person-centered, interpersonal, and psychodynamic approaches. The specific pace and tools depend on your goals rather than a one-size-fits-all formula.',
];

const sessionFocus = [
  {
    title: 'Notice the pattern',
    text: 'Identify triggers, thoughts, body cues, avoidance, and reassurance-seeking so anxiety feels more understandable and less automatic.',
  },
  {
    title: 'Practice new responses',
    text: 'Build grounding, communication, boundary, and coping skills that can be practiced between sessions in everyday situations.',
  },
  {
    title: 'Make room for context',
    text: 'Explore how culture, family roles, migration, faith, identity, and responsibility may influence the pressure you carry.',
  },
];

export default function AnxietyTherapyPage() {
  return (
    <TherapyServicePage
      slug="anxiety-therapy"
      eyebrow="Virtual anxiety support in Bengali and English"
      title="Anxiety therapy"
      introduction="Anxiety can show up as constant planning, physical tension, irritability, avoidance, or the sense that you can never fully switch off. Therapy offers a place to understand those patterns and practice more flexible ways of responding."
      signs={signs}
      approach={approach}
      sessionFocus={sessionFocus}
      relatedHref="/resources/what-to-expect-first-therapy-session"
      relatedLabel="What to expect in a first therapy session"
    />
  );
}
