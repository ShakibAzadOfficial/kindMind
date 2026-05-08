# kindMind

Static Next.js site for kindMind Counseling.

## What this includes

- Static informational website
- No backend
- No database
- No PHI stored on the site
- External booking through SimplePractice
- External intake through a HIPAA-compliant provider

## Local development

```bash
npm install
npm run dev
```

In local development, open `http://localhost:3000/`.

## Static build

```bash
npm run build
```

To point the buttons at your live tools, set `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_INTAKE_URL` before building.
