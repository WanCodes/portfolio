import type { Experience } from "@/lib/types";

export const experience: Experience[] = [
  {
    id: "indeed",
    company: "Indeed",
    role: "Senior Frontend Developer",
    location: "London, UK",
    start: "Apr 2023",
    end: "Present",
    summary:
      "Senior front-end role in London. The readable code on GitHub is the open-source work; this role’s product UI stays with Indeed.",
    highlights: [
      "Listed on the public LinkedIn profile as the current senior front-end role, April 2023–present, London. That profile links to github.com/WanCodes.",
    ],
  },
  {
    id: "indeed-flex",
    company: "Indeed Flex",
    role: "Senior Front End Developer",
    location: "London, UK",
    start: "Jun 2022",
    end: "Apr 2023",
    summary: "Senior front-end role in London, directly before Indeed.",
    highlights: [
      "Listed on the public profile as June 2022–April 2023.",
    ],
  },
  {
    id: "samsung",
    company: "Samsung Electronics",
    role: "Engineer",
    location: "Staines, UK",
    start: "Aug 2018",
    end: "Oct 2018",
    summary:
      "Short engineering role in Staines, included so this timeline matches the public profile.",
    highlights: [
      "August–October 2018. There is no public repository to attach to this role.",
    ],
  },
  {
    id: "ig-group",
    company: "IG Group",
    role: "Senior Developer",
    location: "London, UK",
    start: "Oct 2011",
    end: "Jun 2018",
    summary:
      "Senior developer in London. The public interface work from this period is IG’s history timeline and office map.",
    highlights: [
      "Built the draggable, JSON-driven company history timeline — video, lightbox, and year navigation — for the public history page.",
      "Built the responsive office map for the careers page: scaled markers, animated callouts, and a mobile lightbox.",
      "The original page URLs now redirect to IG’s redesigned site. Source is on GitHub under Interactive-Timeline and Interactive-Map.",
    ],
  },
];
