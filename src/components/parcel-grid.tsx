import { cn } from "@/lib/utils";

type ParcelGridProps = {
  className?: string;
  /** In der Menüleiste, nur im freien Feld zwischen Logo und Navigation. */
  compact?: boolean;
};

/** Parzellenraster: Gold, ungleiche Rechtecke, 1 px. Nie über Fotos, nie durch Logo oder Menü. */
export function ParcelGrid({ className, compact = false }: ParcelGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none overflow-hidden",
        compact ? "absolute inset-0" : "relative h-36 bg-forest sm:h-44",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 340 80"
        className="absolute inset-0 size-full"
        preserveAspectRatio="none"
      >
        <rect x="8" y="10" width="150" height="24" fill="#B99A4E" opacity="0.12" />
        <g
          fill="none"
          stroke="#B99A4E"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        >
          <rect x="8" y="10" width="150" height="24" />
          <rect x="166" y="10" width="166" height="24" />
          <rect x="8" y="42" width="88" height="28" />
          <rect x="104" y="42" width="118" height="28" />
          <rect x="230" y="42" width="102" height="28" />
        </g>
        <g
          fill="none"
          stroke="#B99A4E"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.28"
        >
          <line x1="8" y1="22" x2="158" y2="22" />
          <line x1="230" y1="42" x2="230" y2="70" />
        </g>
      </svg>
    </div>
  );
}