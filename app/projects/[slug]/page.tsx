import { Container } from "@/components/ui/container";
import { getProject, projects } from "@/content/projects";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All work
        </Link>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.type} · {project.year}
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">{project.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{project.description}</p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4 text-sm">
          {project.liveUrl ? (
            <a href={project.liveUrl} className="text-accent hover:underline" target="_blank" rel="noreferrer">
              Live site
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} className="text-accent hover:underline" target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>

        <section className="mt-14 space-y-8">
          <h2 className="text-2xl font-medium">Challenges & solutions</h2>
          {project.challenges.map((item) => (
            <div key={item.challenge} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                Challenge
              </h3>
              <p className="mt-2 text-foreground">{item.challenge}</p>
              <h3 className="mt-5 text-sm font-medium uppercase tracking-wide text-muted">
                Solution
              </h3>
              <p className="mt-2 text-muted">{item.solution}</p>
            </div>
          ))}
        </section>
      </Container>
    </article>
  );
}
