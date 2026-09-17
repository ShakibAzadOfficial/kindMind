import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Request an Intake Screening',
  description: 'Contact KindMind Counseling to request an initial therapy intake screening.',
  alternates: {
    canonical: `${siteUrl}/intake/`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function IntakeLayout({ children }) {
  return children;
}
