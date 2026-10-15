import type { NavItem, SocialLink } from "@/lib/types";

export const site = {
  name: "Jordan Hale",
  shortName: "JH",
  title: "Senior Full Stack Developer",
  location: "London, UK",
  email: "jordan.hale@example.com",
  availability: {
    status: "open" as const,
    label: "Open to opportunities",
    detail: "Currently exploring senior front-end / full-stack roles",
  },
  headline: "I build interfaces that feel fast, clear, and intentional.",
  subheadline:
    "Senior full-stack developer with a front-end center of gravity — React, Next.js, and TypeScript, backed by solid API, data, and delivery skills.",
  url: "https://jordanhale.dev",
  description:
    "Portfolio of Jordan Hale, a Senior Full Stack Developer focused on React, Next.js, TypeScript, performance, and accessibility.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jordanhale" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jordanhale" },
  { label: "X", href: "https://x.com/jordanhale" },
  { label: "Email", href: `mailto:${site.email}` },
];

export const about = {
  story: [
    "I started as a designer who wanted more control over the pixels. That curiosity turned into a decade of shipping product UI — then the APIs, data models, and pipelines those interfaces depend on.",
    "Today I lead front-end architecture on product teams: design systems, performance budgets, and accessibility as defaults, not afterthoughts. I still enjoy dropping into the stack when a feature needs a well-shaped API or a cleaner data path.",
  ],
  values: [
    {
      title: "Clean architecture",
      body: "Boundaries that stay boring: typed contracts, small surfaces, and code that a teammate can change without a treasure map.",
    },
    {
      title: "Performance",
      body: "Perceived speed is part of the product. I treat Core Web Vitals, bundle size, and rendering cost as product requirements.",
    },
    {
      title: "Accessibility",
      body: "Keyboard paths, contrast, semantics, and honest focus. If it only works with a mouse, it is not finished.",
    },
    {
      title: "Great UX",
      body: "Copy, empty states, and error recovery matter as much as the happy path. I partner closely with design rather than throwing pixels over the wall.",
    },
  ],
};
