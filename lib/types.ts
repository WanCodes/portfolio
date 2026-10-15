export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
};

export type ProjectType = "Product" | "Platform" | "Open source" | "Internal";

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: ProjectType;
  summary: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenges: ProjectChallenge[];
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
};
