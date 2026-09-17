import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Lamisa Shaik, LMHC | KindMind Counseling',
  description:
    'A calm, clinician-led therapy website for Lamisa Shaik, LMHC, focused on anxiety, ADHD, coping skills, and culturally sensitive support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7X5RMR4D6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7X5RMR4D6');
          `}
        </Script>
      </body>
    </html>
  );
}
