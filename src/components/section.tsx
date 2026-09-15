import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "paper" | "forest";
}) {
  return (
    <section
      className={cn(
        tone === "cream" && "bg-cream text-ink",
        tone === "paper" && "bg-paper text-ink",
        tone === "forest" && "bg-forest text-cream",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[12px] font-bold uppercase tracking-[0.22em] text-gold", className)}>
      {children}
    </p>
  );
}
