# kindMind

Static Next.js site for kindMind Counseling.

## SEO configuration

The production URL (`https://kindmindpsychotherapy.net`) and Google Analytics
measurement ID (`G-V7X5RMR4D6`) are defined in `app/site-config.js`. No GitHub
repository variables are required for them.

Google Search Console verification is optional. When a verification token is
available, it can be added directly to the metadata configuration or supplied
as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` during a build.

After deployment, submit
`https://kindmindpsychotherapy.net/sitemap.xml` in Google Search Console.

## What this includes

- Static informational website
- No backend
- No database
- No PHI stored on the site
- External booking through SimplePractice
- An initial-contact page that opens the visitor's email application and warns
  visitors not to include private health information

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

## Quality checks

Run all formatting, linting, unit test, and production build checks before pushing:

```bash
npm run check
```

Individual commands are also available:

```bash
npm run format
npm run format:check
npm run lint
npm run lint:fix
npm run test
npm run test:coverage
npm run test:watch
```

GitHub Actions repeats these checks on pushes to `main` and on pull requests.
The coverage gate requires 100% statement, branch, function, and line coverage.
A browsable report is written to
`coverage/index.html`.
