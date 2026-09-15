import { Link } from "@tanstack/react-router";
import type { WishPair } from "@/data/alternatives";

export function WishPairCard({ pair }: { pair: WishPair }) {
  return (
    <article className="flex flex-col rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]">
      <p className="text-xs uppercase tracking-[0.18em] text-gold">Wunsch</p>
      <h3 className="mt-1 font-display text-3xl">{pair.wish}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted">Will</dt>
          <dd className="mt-1 text-ink">{pair.want}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted">Braucht</dt>
          <dd className="mt-1 text-ink">{pair.need}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-gold">Heimisch stattdessen</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {pair.instead.map((p) => (
              <Link
                key={p.slug}
                to="/pflanzen/$slug"
                params={{ slug: p.slug }}
                className="rounded-sm bg-cream px-2 py-1 text-xs text-moss hover:bg-gold/20"
              >
                {p.name}
              </Link>
            ))}
          </dd>
        </div>
      </dl>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{pair.why}</p>
    </article>
  );
}
