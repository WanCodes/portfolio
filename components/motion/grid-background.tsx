"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GridBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <motion.div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 24, 0], y: [0, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, -20, 0], y: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grain absolute inset-0 opacity-[0.12] mix-blend-overlay dark:opacity-[0.18]" />
    </div>
  );
}
