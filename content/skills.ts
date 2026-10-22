import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Where the public work sits.",
    items: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML & CSS",
      "Sass",
      "Tailwind CSS",
      "Phaser",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Enough to take a feature past the UI.",
    items: ["Node.js", "Express", "REST", "PostgreSQL", "SQL"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "What the repositories actually use.",
    items: ["Git / GitHub", "Vite", "Expo Router", "Jest", "GSAP", "Framer Motion"],
  },
  {
    id: "soft",
    title: "Collaboration",
    description: "How the work gets agreed.",
    items: [
      "Product and design partnership",
      "Clear API contracts",
      "Code review",
      "Testing critical paths",
      "Plain-language trade-offs",
    ],
  },
];
