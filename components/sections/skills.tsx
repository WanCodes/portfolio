import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="A front-end core, with enough stack to ship the whole feature."
            description="Grouped by how I actually work — not fake proficiency bars."
          />
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.id} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-medium">{group.title}</h3>
                <p className="mt-1 text-sm text-muted">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
