import './globals.css';

export const metadata = {
  title: 'Lamisa Shaik, LMHC | KindMind Counseling',
  description:
    'A calm, clinician-led therapy website for Lamisa Shaik, LMHC, focused on anxiety, ADHD, coping skills, and culturally sensitive support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
