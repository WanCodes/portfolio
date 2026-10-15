import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        variant === "primary" && "bg-accent text-accent-fg hover:opacity-90",
        variant === "secondary" &&
          "border border-border bg-surface text-foreground hover:border-foreground/20",
        variant === "ghost" && "text-muted hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
