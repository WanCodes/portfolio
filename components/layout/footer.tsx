import { site, socials } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Placeholder content — swap in{" "}
          <code className="font-mono text-xs">content/</code>.
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          {socials.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
