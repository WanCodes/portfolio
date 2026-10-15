"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site, socials } from "@/content/site";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about the next interface."
            description={`${site.availability.detail}. The form posts to a local API route — wire it to Resend or Formspree when you deploy.`}
          />
          <ul className="mt-8 space-y-2 text-sm">
            {socials.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-muted hover:text-foreground"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5">
              <Field label="Name" name="name" autoComplete="name" required />
              <Field label="Email" name="email" type="email" autoComplete="email" required />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="min-h-5 text-sm text-muted" role="status" aria-live="polite">
                {status === "sent" ? "Thanks — I’ll get back to you." : null}
                {status === "error" ? (
                  <>
                    Something went wrong. Email me at{" "}
                    <a className="underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </div>
          </form>
        </FadeIn>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
