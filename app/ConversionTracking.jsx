'use client';

import { useEffect } from 'react';

function destinationFor(href) {
  if (href.includes('care.headway.co')) return 'headway';
  if (href.includes('wa.me')) return 'whatsapp';
  if (href.startsWith('mailto:')) return 'email';
  if (href.startsWith('tel:')) return 'phone';
  if (href.includes('/intake')) return 'intake';
  return null;
}

export function trackConversion(destination, location = window.location.pathname) {
  window.gtag?.('event', 'contact_action', {
    contact_method: destination,
    page_path: location,
  });
}

export default function ConversionTracking() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest('a[href]');
      if (!link) return;

      const destination = destinationFor(link.getAttribute('href'));
      if (destination) trackConversion(destination);
    }

    function handleSubmit(event) {
      if (event.target.matches('.intakeForm')) trackConversion('email_intake');
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return null;
}
