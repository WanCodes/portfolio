import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Where I spend most of my time.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML & semantic UI",
      "CSS / Tailwind",
      "Design systems",
      "Accessibility (WCAG)",
      "Performance",
      "Framer Motion",
      "Testing Library",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Enough to own a feature end to end.",
    items: [
      "Node.js",
      "REST & GraphQL",
      "PostgreSQL",
      "Prisma",
      "Auth & sessions",
      "Caching",
      "Background jobs",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The daily operating system.",
    items: [
      "Git / GitHub",
      "Vercel",
      "CI (GitHub Actions)",
      "Storybook",
      "Playwright",
      "Figma",
      "Observability",
    ],
  },
  {
    id: "soft",
    title: "Collaboration",
    description: "How the work actually ships.",
    items: [
      "Technical leadership",
      "Design partnership",
      "Mentoring",
      "RFC writing",
      "Code review",
      "Stakeholder communication",
    ],
  },
];
