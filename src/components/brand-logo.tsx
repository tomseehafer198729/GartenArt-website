import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  variant?: "signet" | "lockup";
  /** Cremeweiße Linien, für Waldgrün. */
  onDark?: boolean;
};

export function BrandLogo({
  className = "h-16 w-auto",
  variant = "signet",
  onDark = false,
}: BrandLogoProps) {
  if (variant === "lockup") {
    return (
      <img
        src="/brand/lockup.png?v=t1"
        alt="GartenArt & BauProjekte"
        width={850}
        height={705}
        className={cn("bg-transparent object-contain", className)}
      />
    );
  }

  return (
    <img
      src={onDark ? "/brand/signet-on-dark.png?v=t1" : "/brand/signet.png?v=t1"}
      alt=""
      width={410}
      height={448}
      className={cn("bg-transparent object-contain", className)}
    />
  );
}

export function BrandWordmark({ onDark = false }: { onDark?: boolean }) {
  const name = onDark ? "text-cream" : "text-forest";
  return (
    <span className={cn("flex min-w-0 flex-col items-stretch leading-none", name)}>
      <span className="font-mark text-[1.85rem] font-bold leading-[0.92] sm:text-[2.35rem]">
        GartenArt
      </span>
      <span className="mt-2 flex items-center gap-2 sm:mt-2.5 sm:gap-2.5">
        <span className="h-px min-w-4 flex-1 bg-gold" aria-hidden />
        <span className="font-lato shrink-0 text-[0.58rem] font-bold uppercase tracking-[0.2em] sm:text-[0.68rem]">
          & BAUPROJEKTE
        </span>
        <span className="h-px min-w-4 flex-1 bg-gold" aria-hidden />
      </span>
    </span>
  );
}