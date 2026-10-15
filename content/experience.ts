import type { Experience } from "@/lib/types";

export const experience: Experience[] = [
  {
    id: "northline",
    company: "Northline",
    role: "Senior Full Stack Developer",
    location: "London · Hybrid",
    start: "2022",
    end: "Present",
    summary:
      "Front-end lead for a B2B analytics platform. Own the design system, Next.js app architecture, and the quality bar for customer-facing UI.",
    highlights: [
      "Led a migration from a fragmented React SPA to Next.js App Router, cutting median LCP from 3.4s to 1.6s on the main dashboard.",
      "Established a token-based design system (120+ components) adopted by three product squads; reduced UI PR churn by ~40%.",
      "Introduced accessibility reviews and axe CI gates; brought the core flows to WCAG 2.2 AA.",
      "Shaped GraphQL and REST contracts with backend so list/detail views could stream and paginate without overfetching.",
    ],
  },
  {
    id: "harbor",
    company: "Harbor Labs",
    role: "Full Stack Engineer",
    location: "Remote",
    start: "2019",
    end: "2022",
    summary:
      "Product engineer on a content platform used by editorial teams. Split time between React clients, Node services, and Postgres.",
    highlights: [
      "Designed the collaborative editor’s front-end state model (OT-friendly, optimistic UI) used daily by 200+ editors.",
      "Built a typed Node/Express API layer and Prisma schema for publishing workflows, including draft/live environments.",
      "Owned the public marketing site rewrite: SSG + ISR, structured metadata, and a 96 Lighthouse performance score.",
      "Mentored two mid-level engineers on TypeScript, testing, and code review culture.",
    ],
  },
  {
    id: "brightfold",
    company: "Brightfold",
    role: "Front-End Developer",
    location: "Manchester",
    start: "2016",
    end: "2019",
    summary:
      "Agency work across e-commerce and SaaS marketing sites. Learned to ship under constraints without sacrificing craft.",
    highlights: [
      "Delivered 15+ production sites in React and vanilla JS, often pairing with designers from concept through QA.",
      "Standardized a component kit and CSS architecture that cut new-project setup from days to hours.",
      "Implemented checkout and account flows with a focus on form UX, validation, and mobile performance.",
    ],
  },
];
