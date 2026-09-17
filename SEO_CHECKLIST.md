# SEO launch checklist

The on-site SEO implementation is complete. These account-level tasks require
the practice owner to sign in to the relevant services.

## Production domain and Search Console

- The production domain and Google Analytics measurement ID are hard-coded in
  `app/site-config.js`; GitHub repository variables are not required.
- After creating the Search Console property, add its verification token to the
  site metadata or provide `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` during a build.
- Deploy the site, then submit
  `https://kindmindpsychotherapy.net/sitemap.xml` in Search Console and request
  indexing for the home, About, Services, Brooklyn, New Jersey, and Insurance &
  Fees pages.
- Monitor queries containing "Brooklyn," "Bengali therapist," and individual
  specialties, along with pages that receive impressions but few clicks.
- After publishing the Brooklyn page, inspect
  `https://kindmindpsychotherapy.net/bengali-therapist-brooklyn-ny/` and request
  indexing.

## Directory consistency

Use the same public information everywhere:

- Practice: KindMind Counseling
- Clinician: Lamisa Shaik, LMHC, LPC
- Phone: (347) 901-8676
- Email: shaiklamisa00@gmail.com
- Bases: Brooklyn, New York and West Orange, New Jersey
- Languages: Bengali and English
- Service: Virtual therapy for clients located in New Jersey and New York

Review Psychology Today, Zocdoc, and Headway. At the time of the site audit,
Psychology Today displayed a different phone number and New York locations.
Update only details that accurately reflect the practice and licensing. Make
sure all three profiles consistently describe Brooklyn, West Orange, Bengali
language availability, specialties, phone number, and website.

## Google Business Profile

Create or update a Business Profile only if the practice meets Google's
eligibility rules. A staffed office that receives clients may show its address.
Do not publish a residential address, mailbox, unstaffed virtual office, or
location where clients are not received. An online-only practice may not be
eligible for a Business Profile.

If eligible, keep the practice name, phone, website, category, address or
service area, hours, and languages consistent with the website and directories.
