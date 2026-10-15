"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectTypes, projects } from "@/content/projects";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectTypes)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that show how I think about product UI."
            description="Filter by type. Each card links to a longer write-up you can replace with real case studies."
          />
        </FadeIn>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              role="tab"
              aria-selected={filter === type}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm transition-colors",
                filter === type
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-muted hover:text-foreground",
              )}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.04}>
      <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground/20">
        <div className="flex items-center justify-between gap-3 text-xs text-muted">
          <span className="font-mono uppercase tracking-wider">{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 text-xl font-medium tracking-tight">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-foreground"
          >
            Case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground">
              Live
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </article>
    </FadeIn>
  );
}
