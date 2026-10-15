import { GridBackground } from "@/components/motion/grid-background";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16">
      <GridBackground />
      <Container className="relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.availability.label}
          <span className="hidden sm:inline">· {site.location}</span>
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          {site.title}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-6xl">
          {site.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{site.subheadline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/#work">View work</ButtonLink>
          <ButtonLink href="/#contact" variant="secondary">
            Contact
          </ButtonLink>
          <Link
            href="/#about"
            className="ml-1 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            About me
            <ArrowDownRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
