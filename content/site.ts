import type { NavItem, SocialLink } from "@/lib/types";

export const site = {
  name: "Wan Yau",
  shortName: "Wan",
  title: "Senior Full Stack Developer",
  location: "London, UK",
  // GitHub (WanCodes) publishes no email. Leave this empty until Wan confirms an address.
  email: "",
  availability: {
    status: "open" as const,
    label: "Open to opportunities",
    detail: "Open to senior React, React Native, and TypeScript roles",
  },
  headline: "I build interfaces in React, React Native, and TypeScript.",
  subheadline:
    "Senior full-stack developer in London with a strong front-end focus — product UI in React and React Native, and the API when a feature needs it.",
  // No deployed portfolio domain yet. Set this to the production origin before launch
  // so Open Graph, sitemap, and robots point at the live site.
  url: "https://github.com/WanCodes",
  description:
    "Portfolio of Wan Yau, a London-based Senior Full Stack Developer focused on React, React Native, and TypeScript. GitHub: WanCodes.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const profileLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/WanCodes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wan-yau-83550538" },
];

export const socials: SocialLink[] = site.email
  ? [...profileLinks, { label: "Email", href: `mailto:${site.email}` }]
  : profileLinks;

export const about = {
  story: [
    "I’m a London-based senior developer. Most of the work is the interface: React and TypeScript on the web, React Native and Expo on mobile, and a typed path to the API when the feature needs one. GitHub is WanCodes. The public bio is the short version — professional front-end React and React Native.",
    "What you can open today: Smart Adventurer, an educational TypeScript game; an Expo arcade; a React Native Tetris; and the interactive history timeline and office map built for IG Group’s public site. I studied at Sheffield Hallam University (2003–2007).",
  ],
  values: [
    {
      title: "Typed UI",
      body: "React and TypeScript by default. Components stay small, state stays predictable, and the contract with the API is something a teammate can read.",
    },
    {
      title: "Web and mobile",
      body: "The same care on React Native and Expo as on the web: navigation, touch, and a structure that can grow past a single screen.",
    },
    {
      title: "Interfaces that keep up",
      body: "A timeline you can drag, a map that scales, a game loop that stays responsive. Perceived speed is part of the product.",
    },
    {
      title: "Clear collaboration",
      body: "I partner with product and design, say the trade-off in plain language, and keep critical paths covered with tests.",
    },
  ],
};
