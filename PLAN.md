# Portfolio architecture

Senior Full Stack Developer site with a front-end emphasis: React/Next.js, TypeScript, performance, accessibility, and design systems — plus credible full-stack range.

## Product decisions

| Decision | Choice | Why |
| --- | --- | --- |
| Routing | Single-page home (`/`) + project detail (`/projects/[slug]`) | Fast scan of the whole story; deep dives without cluttering the homepage |
| Styling | Tailwind CSS + a small amount of CSS (theme tokens, grain, reduced-motion) | Custom look without a heavy component library |
| Motion | Framer Motion, `prefers-reduced-motion` respected | Purposeful, not decorative |
| Theme | `next-themes`: dark default, light toggle, `system` supported | Matches the brief and OS preference |
| Content | Typed TS modules in `content/` | Easy to replace later; no CMS required |
| Contact | Client form + `/api/contact` that currently logs / returns success; mailto fallback | Vercel-ready; swap the handler for Resend/Formspree later |
| UI kit | Custom primitives only | Keeps the design distinctive and the tree small |

## Information architecture

```
/                     Home: Hero → About → Experience → Projects → Skills → Contact
/projects/[slug]      Case-study style project page
```

Primary nav: About, Experience, Work, Skills, Contact. Logo returns home. Active section is highlighted via Intersection Observer on `/`.

## Folder structure

```
app/
  layout.tsx                 Root layout, fonts, theme, metadata
  page.tsx                   Home composition
  globals.css                Tokens, grain, selection, reduced motion
  robots.ts / sitemap.ts     SEO
  projects/[slug]/page.tsx   Project detail + generateStaticParams
  api/contact/route.ts       POST contact handler
components/
  layout/                    Header, Footer, MobileNav, ThemeToggle
  sections/                  Hero, About, Experience, Projects, Skills, Contact
  ui/                        Button, Badge, SectionHeading, Container, Card
  motion/                    FadeIn, PageTransition, GridBackground
  providers/                 ThemeProvider
content/                     site.ts, experience.ts, projects.ts, skills.ts
lib/                         utils.ts, types.ts
public/                      og.svg, favicon
```

## Data shapes

See `content/` and `lib/types.ts`. In short:

- **Site**: name, title, location, availability badge, socials, SEO, hero copy
- **Experience**: company, role, dates, location, highlights (impact-first)
- **Project**: slug, title, summary, description, stack[], type, year, live/github URLs, challenges[]
- **Skill groups**: Frontend / Backend / Tools / Soft skills — tags, not fake percentage bars

## Design system

- **Type**: Outfit (display/UI) + Source Serif 4 (accent quotes / hero support) via `next/font`
- **Color**: near-black canvas, muted zinc text, one accent (teal/cyan) used sparingly for CTAs and focus rings
- **Radius**: 12–16px cards; 999px pills
- **Motion**: 200–400ms, ease-out; hero grid parallax at very low opacity
- **A11y**: skip link, semantic landmarks, visible focus, contrast-checked tokens, form labels + errors

## Implementation order

1. Scaffold Next.js (App Router, TS, Tailwind)
2. Tokens, theme, layout shell
3. Content modules
4. Sections + project pages
5. Contact API, SEO, README
6. Visual QA in the browser (desktop + mobile)
