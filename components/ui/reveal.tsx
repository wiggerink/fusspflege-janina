import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Pure-CSS fade-up wrapper. Drop-in replacement for the previous Framer
 * Motion `Reveal` component — keeps the visual feel but ships zero JS.
 * Honors `prefers-reduced-motion` via the `.reveal` utility in globals.css.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const style = delay
    ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties)
    : undefined;

  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
};

/**
 * Wraps children and lets each `StaggerItem` apply its own delay through
 * the `--stagger-index` CSS variable.
 */
export function Stagger({ children, stagger = 0.08, className }: StaggerProps) {
  const style = { "--stagger": `${Math.round(stagger * 1000)}ms` } as CSSProperties;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

export function StaggerItem({ children, index = 0, className }: StaggerItemProps) {
  const style = {
    "--reveal-delay": `calc(var(--stagger, 80ms) * ${index})`,
  } as CSSProperties;
  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
