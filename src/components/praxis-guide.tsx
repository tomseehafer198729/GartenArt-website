import { Link } from "@tanstack/react-router";
import {
  FERTILIZERS,
  MAHD_KIND_LABEL,
  MAHD_RULES,
  mixSpecies,
  MONTH_PRAXIS,
  PEST_CONTROL,
  praxisFor,
  SEED_MIXES,
  type MahdKind,
} from "@/data/praxis";
import { MONTHS } from "@/data/plants";
import { Kicker, Section } from "@/components/section";
import { cn } from "@/lib/utils";

const KIND_CLASS: Record<MahdKind, string> = {
  ruhe: "bg-cream text-muted",
  staffel: "bg-gold/25 text-forest",
  schnitt: "bg-moss/20 text-moss",
};

export function YearStrip({
  month,
  onPick,
}: {
  month: number;
  onPick: (m: number) => void;
}) {
  return (
    <ol className="mt-3 grid grid-cols-6 gap-1 sm:grid-cols-12">
      {MONTH_PRAXIS.map((p) => {
        const active = p.month === month;
        return (
          <li key={p.month}>
            <button
              type="button"
              onClick={() => onPick(p.month)}
              className={cn(
                "flex min-h-14 w-full flex-col items-center justify-center rounded-sm px-1 py-1.5 text-center transition-colors duration-150",
                KIND_CLASS[p.mahd.kind],
                active && "ring-2 ring-gold ring-offset-1 ring-offset-paper",
              )}
            >
              <span className="text-[10px] uppercase tracking-wider">{MONTHS[p.month - 1]}</span>
              <span className="text-[11px] font-medium">{MAHD_KIND_LABEL[p.mahd.kind]}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export function MonthPraxisNotes({ month }: { month: number }) {
  const p = praxisFor(month);
  if (!p) return null;
  return (
    <dl className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      <Note kicker="Ökomahd" title={p.mahd.title} text={p.mahd.text} />
      <Note kicker="Düngung" title={p.duenger.title} text={p.duenger.text} />
      <Note kicker="Schädlinge" title={p.schaedling.title} text={p.schaedling.text} />
      <Note kicker="Saatgut" title={p.saat.title} text={p.saat.text} />
    </dl>
  );
}

function Note({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="rounded-sm bg-paper/80 px-3 py-2">
      <dt className="text-[10px] uppercase tracking-[0.18em] text-gold">{kicker}</dt>
      <dd>
        <p className="mt-0.5 text-sm font-medium text-forest">{title}</p>
        <p className="mt-0.5 text-xs text-muted">{text}</p>
      </dd>
    </div>
  );
}

export function PraxisGuide() {
  return (
    <>
      <Section>
        <Kicker>Regiosaatgut · UG 7</Kicker>
        <h2 id="saatgut" className="mt-3 scroll-mt-24 font-display text-4xl">
          Saatgut aus der Region
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Sechs Mischungen, gebaut aus Arten der GEK-Liste. Herkunft Hessen und südwestdeutsches
          Berg- und Hügelland — keine Ackerblühmischung aus dem Baumarkt. Obenauf säen, andrücken,
          mager halten.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {SEED_MIXES.map((mix) => (
            <li key={mix.id} className="overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]">
              <img
                src={mix.image}
                alt={mix.alt}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{mix.habitat}</p>
                <h3 className="mt-1 font-display text-3xl">{mix.title}</h3>
                <p className="mt-2 text-sm text-muted">
                  {mix.soil}. Saat {mix.sow}. {mix.rate}.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {mixSpecies(mix).map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/pflanzen/$slug"
                        params={{ slug: s.slug }}
                        className="inline-block rounded-sm bg-cream px-2 py-1 text-xs text-moss hover:bg-gold/20"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <Kicker>Ökomahd</Kicker>
        <h2 className="mt-3 font-display text-4xl">Mähen, ohne die Tracht zu löschen</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {MAHD_RULES.map((r) => (
            <li key={r.title} className="rounded-lg bg-cream p-5">
              <h3 className="font-display text-2xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted">{r.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Kicker>Natürlicher Dünger</Kicker>
        <h2 className="mt-3 font-display text-4xl">Was den Boden füttert — und was ihn ruinieren würde</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FERTILIZERS.map((f) => (
            <li key={f.id} className="rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-[0.16em] text-gold">
                {f.when} · {f.where}
              </p>
              <h3 className="mt-2 font-display text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <Kicker>Natürliche Bekämpfung</Kicker>
        <h2 className="mt-3 font-display text-4xl">Gegen Schädlinge, ohne die Insekten zu töten</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEST_CONTROL.map((f) => (
            <li key={f.id} className="rounded-lg bg-cream p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-gold">{f.against}</p>
              <h3 className="mt-2 font-display text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
