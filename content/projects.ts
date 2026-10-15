import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "atlas-design-system",
    title: "Atlas Design System",
    year: "2024",
    type: "Internal",
    featured: true,
    summary:
      "A multi-brand component library and token pipeline that became the shared UI language for three product teams.",
    description:
      "Atlas started as a set of duplicated button styles. It is now a versioned system: design tokens in JSON, React primitives, documentation, and visual regression coverage. Designers and engineers share the same names for color, type, and space.",
    stack: ["React", "TypeScript", "Tailwind", "Storybook", "Chromatic"],
    liveUrl: "https://example.com/atlas",
    githubUrl: "https://github.com/jordanhale/atlas",
    challenges: [
      {
        challenge: "Three products had drifted visually and technically.",
        solution:
          "Extracted tokens first, then rebuilt primitives against them. Adoption was incremental — new work used Atlas; legacy screens migrated on touch.",
      },
      {
        challenge: "Docs went stale the moment they were written in Notion.",
        solution:
          "Colocated Storybook docs with the components and generated a public-facing catalog from the same source.",
      },
    ],
  },
  {
    slug: "northstar-analytics",
    title: "Northstar Analytics",
    year: "2023",
    type: "Product",
    featured: true,
    summary:
      "A high-density dashboard for operations teams: streaming charts, saved views, and keyboard-first navigation.",
    description:
      "Northstar is where operators live all day. The work was less about adding charts and more about making dense data scannable: virtualized tables, predictable filter state in the URL, and layouts that do not collapse on a 13-inch laptop.",
    stack: ["Next.js", "TypeScript", "TanStack Table", "D3", "Node.js"],
    liveUrl: "https://example.com/northstar",
    challenges: [
      {
        challenge: "10k+ row tables froze mid-scroll on typical laptops.",
        solution:
          "Windowed rendering, deferred chart hydration, and server-driven sort/filter so the client never held the full dataset.",
      },
      {
        challenge: "Power users refused the mouse for repetitive tasks.",
        solution:
          "Command palette, focus traps that make sense, and shortcuts documented in-product — not in a PDF.",
      },
    ],
  },
  {
    slug: "harbor-cms",
    title: "Harbor CMS",
    year: "2021",
    type: "Platform",
    featured: true,
    summary:
      "A headless CMS admin for editorial teams: drafts, scheduled publish, and a React preview that matches production.",
    description:
      "Editors needed to trust what they saw. Harbor’s admin previews the same components the public site uses, with draft data overlaid. The API is typed end-to-end so content models cannot silently drift from the front-end.",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "GraphQL"],
    githubUrl: "https://github.com/jordanhale/harbor-cms",
    challenges: [
      {
        challenge: "Preview and production used different templates, so launch-day surprises were common.",
        solution:
          "Shared a component package between admin preview and the public Next.js site. Preview became a first-class route, not an iframe hack.",
      },
      {
        challenge: "Schema changes broke unpublished drafts.",
        solution:
          "Content migrations with versioned shapes and a compatibility layer for in-flight drafts.",
      },
    ],
  },
  {
    slug: "pulse-checkout",
    title: "Pulse Checkout",
    year: "2020",
    type: "Product",
    featured: true,
    summary:
      "A conversion-focused checkout: progressive disclosure, resilient forms, and a 22% lift in completed orders.",
    description:
      "Pulse replaced a multi-page checkout with a single, well-paced flow. The interesting work was error handling, address lookup, and keeping the UI honest when the payment provider stalled.",
    stack: ["Next.js", "TypeScript", "Stripe", "Zod", "Playwright"],
    liveUrl: "https://example.com/pulse",
    challenges: [
      {
        challenge: "Drop-off spiked on mobile when the keyboard covered primary actions.",
        solution:
          "Rebuilt the sticky summary, used visualViewport, and tested on real devices rather than DevTools alone.",
      },
      {
        challenge: "Payment failures looked like generic 500s.",
        solution:
          "Mapped provider errors to plain-language recovery steps and kept the cart intact across retries.",
      },
    ],
  },
  {
    slug: "lumen-docs",
    title: "Lumen Docs",
    year: "2023",
    type: "Open source",
    featured: true,
    summary:
      "A documentation starter: MDX, typed navigation, search, and a11y-first theming — for teams that outgrew a wiki.",
    description:
      "Lumen is the kit I wished existed when spinning up internal docs. It ships with a sensible IA, dark/light themes, and a search index built at compile time. Opinionated enough to start fast, loose enough to re-skin.",
    stack: ["Next.js", "MDX", "TypeScript", "FlexSearch", "Tailwind"],
    liveUrl: "https://example.com/lumen",
    githubUrl: "https://github.com/jordanhale/lumen-docs",
    challenges: [
      {
        challenge: "Most doc starters looked fine and failed a keyboard audit.",
        solution:
          "Skip links, heading outline, and search results that are a proper listbox — not a div soup.",
      },
    ],
  },
  {
    slug: "keel-api",
    title: "Keel API Toolkit",
    year: "2022",
    type: "Open source",
    featured: true,
    summary:
      "Small Node utilities for typed REST handlers, request validation, and consistent error envelopes.",
    description:
      "Keel is not a framework. It is a handful of helpers I kept copying between services: Zod-validated handlers, a standard error shape, and logging that does not drown the signal. Useful when you want Express or Next route handlers to stay thin.",
    stack: ["Node.js", "TypeScript", "Zod", "Vitest"],
    githubUrl: "https://github.com/jordanhale/keel",
    challenges: [
      {
        challenge: "Every service invented its own error JSON.",
        solution:
          "One envelope, status mapping, and a client type so the front-end can switch on `code` instead of string matching messages.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const projectTypes = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.type))),
] as const;
