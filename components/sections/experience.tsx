import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Experience"
            title="Senior roles, with the public work called out."
            description="Selected from the public LinkedIn profile. Earlier positions stay there. Highlights below are work you can still open."
          />
        </FadeIn>

        <ol className="relative mt-14 space-y-4 border-l border-border pl-6 sm:pl-8">
          {experience.map((role, i) => (
            <li key={role.id} className="relative">
              <span className="absolute top-6 -left-[1.54rem] h-2.5 w-2.5 rounded-full bg-accent sm:-left-[2.05rem]" />
              <FadeIn delay={i * 0.04}>
                <article className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium">
                      {role.role}
                      <span className="text-muted"> · {role.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-muted">
                      {role.start} — {role.end}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{role.location}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{role.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((item) => (
                      <li key={item} className="text-sm leading-6 text-foreground/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
