import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { about, site } from "@/content/site";
import { skillGroups } from "@/content/skills";

export function About() {
  const daily = skillGroups[0].items.slice(0, 8);

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title={`I’m ${site.name.split(" ")[0]} — I care about the craft of the interface.`}
            description={about.story[0]}
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{about.story[1]}</p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {about.values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-base font-medium">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Daily stack
          </p>
          <ul className="flex flex-wrap gap-2">
            {daily.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
