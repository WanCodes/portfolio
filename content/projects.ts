import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "smart-adventurer",
    title: "Smart Adventurer",
    year: "2026",
    type: "Open source",
    featured: true,
    summary:
      "Educational top-down adventure in TypeScript and Phaser. Maths questions open the road.",
    description:
      "Smart Adventurer is a browser game: a Phaser world (village, road, grove) where generated maths questions gate progress. The player sets an appearance, explores, and meets encounters such as the Moss Wolf and Grove Warden by answering questions. Progress — position, quests, level, gear — is a local save. Stack is TypeScript, Phaser, and Vite, with no backend.",
    stack: ["TypeScript", "Phaser", "Vite", "HTML & CSS"],
    githubUrl: "https://github.com/WanCodes/SmartAdventurer",
    challenges: [
      {
        challenge: "A lesson and a game world both need to stay on screen.",
        solution:
          "The page splits a Phaser map pane from a lesson aside, and adds an on-screen pad so touch can move and talk without a keyboard.",
      },
      {
        challenge: "A refresh should not wipe the adventure.",
        solution:
          "One localStorage save holds position, quests, XP, gold, gear, and appearance. The title screen can continue that save or start a new character.",
      },
    ],
  },
  {
    slug: "my-expo-games",
    title: "Wan’s Game Arcade",
    year: "2026",
    type: "Open source",
    featured: true,
    summary:
      "Expo and React Native arcade: a typed game list, Expo Router, and a playable Tic-Tac-Toe.",
    description:
      "my-expo-games is an Expo app (React Native, TypeScript, Expo Router) titled Wan’s Game Arcade. The home screen reads a Game registry and routes Play to a screen. Tic-Tac-Toe is the first game: local X vs O, with win and draw detection in a hook. The repository README is still the Expo starter; the app under src/ is the work, and the registry is there so further games can be added the same way.",
    stack: ["Expo", "React Native", "TypeScript", "Expo Router", "React Navigation"],
    githubUrl: "https://github.com/WanCodes/my-expo-games",
    challenges: [
      {
        challenge: "Each new game should not mean rewiring the app shell.",
        solution:
          "A shared Game type and GAMES list drive the home screen. Play pushes that game’s route, and an entry can be marked coming soon without a broken link.",
      },
    ],
  },
  {
    slug: "tetris-plan-abc",
    title: "TetrisPlanABC",
    year: "2021",
    type: "Open source",
    featured: true,
    summary:
      "React Native Tetris for iOS and Android: board, preview, controls, and piece rotation.",
    description:
      "TetrisPlanABC is a React Native implementation of Tetris (React Native 0.63, TypeScript) for iOS and Android. Grid, cells, blocks, the next-piece preview, controls, and the start modal are separate components. Rotation rules live in shared helpers, with Jest on the React Native preset.",
    stack: ["React Native", "TypeScript", "Jest"],
    githubUrl: "https://github.com/WanCodes/TetrisPlanABC",
    challenges: [
      {
        challenge: "Piece rotation and the visible board have to agree.",
        solution:
          "Rotation lives in shared helpers. The board screen renders the grid, preview, and controls from that state instead of hiding the rules inside one component.",
      },
    ],
  },
  {
    slug: "interactive-timeline",
    title: "IG Interactive Timeline",
    year: "2018",
    type: "Product",
    featured: true,
    summary:
      "Draggable company-history timeline built for IG Group’s public history page.",
    description:
      "A horizontal timeline for IG Group’s history page (iggroup.com/about-ig-group/our-history). Years from 1974 to 2017 are frames in JSON: text, quotes, images, and Brightcove video, with a year sidebar, arrow stepping, drag-to-scroll, and a lightbox. The original URL now redirects to IG’s redesigned About page. This repository is the source.",
    stack: ["JavaScript", "HTML", "CSS", "GSAP", "jQuery"],
    githubUrl: "https://github.com/WanCodes/Interactive-Timeline",
    challenges: [
      {
        challenge: "Decades of history had to stay navigable as the viewport changed.",
        solution:
          "Frames come from data.json. Dragdealer scrolls the strip, the sidebar jumps to a year, and how many frames are visible follows the width of the page.",
      },
      {
        challenge: "Video and articles had to open in place.",
        solution:
          "A video thumbnail opens a Brightcove overlay. Article links can open a full-screen image lightbox without leaving the timeline.",
      },
    ],
  },
  {
    slug: "interactive-map",
    title: "IG Interactive Map",
    year: "2018",
    type: "Product",
    featured: true,
    summary:
      "Responsive office map built for IG Group’s careers page, with desktop callouts and a mobile lightbox.",
    description:
      "An interactive office map for IG Group’s careers page (iggroup.com/careers). Each city is a point and label; choosing one reveals a description, joined by an animated line on large screens and a lightbox on small screens. Markers stay aligned as the map scales. The original URL now redirects to IG’s redesigned careers section. This repository is the source.",
    stack: ["JavaScript", "HTML", "CSS", "GSAP", "jQuery"],
    githubUrl: "https://github.com/WanCodes/Interactive-Map",
    challenges: [
      {
        challenge: "Pins drift when a map image is only scaled up or down.",
        solution:
          "Points, labels, and callout lines are positioned against the scaled map so they stay attached to the city as the container width changes.",
      },
      {
        challenge: "A side panel does not fit on a phone.",
        solution:
          "Small screens use a centered lightbox. Larger screens keep the connected panel and GSAP line animation.",
      },
    ],
  },
  {
    slug: "multiple-file-uploader",
    title: "Multiple File Uploader",
    year: "2018",
    type: "Open source",
    featured: true,
    summary:
      "Small Node and PostgreSQL app: batch upload, list, and download files stored as BYTEA.",
    description:
      "A Node sample that shows the full path past the UI. An Express app accepts up to 10 files (5 MB each), stores them in PostgreSQL as BYTEA, and lists them for download. The page warns and disables submit when the limits are exceeded; Multer enforces the same limits on the server. Treat it as a small full-stack sample.",
    stack: ["Node.js", "Express", "PostgreSQL", "Multer"],
    githubUrl: "https://github.com/WanCodes/multiplefileuploader",
    challenges: [
      {
        challenge: "The browser and the server needed the same idea of “too big”.",
        solution:
          "The page warns and blocks submit over 5 MB or 10 files. POST /files uses Multer with the same caps, then writes the rows and returns them as JSON.",
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
