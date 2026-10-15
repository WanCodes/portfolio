# Jordan Hale — Portfolio

Personal site for a Senior Full Stack Developer with a front-end focus. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and `next-themes`.

Placeholder identity and copy live in `content/` so you can replace them without hunting through components.

## Architecture

See [PLAN.md](./PLAN.md) for folder structure, data shapes, and design decisions.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

Deploy on Vercel: import the repo, leave defaults. No env vars required for the current contact stub.

## Customize content

| File | What to edit |
| --- | --- |
| `content/site.ts` | Name, title, headline, location, email, social URLs, about copy, SEO |
| `content/experience.ts` | Roles and impact bullets |
| `content/projects.ts` | Featured work, stack, challenges, live/GitHub links |
| `content/skills.ts` | Skill groups |

Update `site.url` before production so Open Graph, sitemap, and robots point at your domain.

## Contact form

`POST /api/contact` validates JSON (`name`, `email`, `message`) and logs it in development. Swap the handler in `app/api/contact/route.ts` for Resend, Formspree, or your own backend. The UI already surfaces success and mailto fallback on error.

## Theme

Dark is the default. The toggle uses `next-themes` with `enableSystem`, so OS preference is respected until the user picks a mode.

## Stack notes

- **Animations** respect `prefers-reduced-motion`.
- **Project pages** are statically generated from `content/projects.ts`.
- **No CMS** — keep content in TypeScript until you outgrow it.
