# Wan Yau — Portfolio

Portfolio for **Wan Yau** (GitHub: [WanCodes](https://github.com/WanCodes)), a London-based senior full-stack developer with a strong front-end focus.

Public bio: professional front-end React and React Native developer. This site positions that work for recruiters hiring senior **React**, **React Native**, and **TypeScript**: product UI first, with Node and PostgreSQL when a feature needs the API.

## Featured work

Public repositories:

| Project | What it shows |
| --- | --- |
| [SmartAdventurer](https://github.com/WanCodes/SmartAdventurer) | Educational TypeScript game (Phaser, Vite). Maths questions open the road. |
| [my-expo-games](https://github.com/WanCodes/my-expo-games) | Expo / React Native arcade with a typed game registry and Tic-Tac-Toe. |
| [TetrisPlanABC](https://github.com/WanCodes/TetrisPlanABC) | React Native Tetris for iOS and Android. |
| [Interactive-Timeline](https://github.com/WanCodes/Interactive-Timeline) | IG Group history timeline. The original page now redirects; the repo is the source. |
| [Interactive-Map](https://github.com/WanCodes/Interactive-Map) | IG Group careers office map. Same caveat: the live URL has moved. |
| [multiplefileuploader](https://github.com/WanCodes/multiplefileuploader) | Small Express + PostgreSQL upload sample. |

Experience on the site follows the public [LinkedIn profile](https://www.linkedin.com/in/wan-yau-83550538) (Indeed, Indeed Flex, Samsung Electronics, IG Group). Earlier roles stay on LinkedIn. Bullets describe work that is public.

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and `next-themes`. Content is typed modules in `content/`. Architecture notes are in [PLAN.md](./PLAN.md).

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

Deploy on Vercel by importing the repo. No environment variables are required for the contact stub.

## Before production

- Set `site.url` in `content/site.ts` to the deployed origin. It currently points at `https://github.com/WanCodes` because there is no public portfolio domain yet. Open Graph, the sitemap, and robots all use that value.
- `site.email` is intentionally empty. The GitHub profile does not publish an email, and none has been verified for this site. When Wan confirms an address, set `site.email` — the Email social link is added automatically.

## Edit content

| File | What to edit |
| --- | --- |
| `content/site.ts` | Name, title, headline, location, email, social URLs, about copy, SEO |
| `content/experience.ts` | Roles and highlights |
| `content/projects.ts` | Work, stack, challenges, GitHub links |
| `content/skills.ts` | Skill groups |

## Contact form

`POST /api/contact` validates JSON (`name`, `email`, `message`) and logs it in development. Swap the handler in `app/api/contact/route.ts` for Resend, Formspree, or another backend when you want real delivery. If the request fails and `site.email` is set, the form offers that mailto link; otherwise it points at GitHub.

## Theme

Dark is the default. The toggle uses `next-themes` with `enableSystem`, so the OS preference applies until the visitor picks a mode.

## Notes

- Animations respect `prefers-reduced-motion`.
- Project pages are statically generated from `content/projects.ts`.
- No CMS — keep content in TypeScript until it outgrows that.
