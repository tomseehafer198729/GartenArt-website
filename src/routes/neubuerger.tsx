import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  NEUBUERGER,
  NEUBUERGER_META,
  ratingLabel,
  WARN_OFF_LIST,
  type Light,
  type NeubuergerRating,
} from "@/data/neubuerger";
import { GEK_META } from "@/data/plants";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/neubuerger")({ component: NeubuergerPage });

const RATINGS: { id: NeubuergerRating | "alle"; label: string }[] = [
  { id: "alle", label: "Jede Bewertung" },
  { id: "bewaehrt", label: "Bewährt" },
  { id: "fragwuerdig", label: "Fragwürdig" },
  { id: "problematisch", label: "Problematisch" },
];

const LIGHTS: { id: Light | "alle"; label: string }[] = [
  { id: "alle", label: "Jedes Licht" },
  { id: "sonne", label: "Sonne" },
  { id: "halbschatten", label: "Halbschatten" },
  { id: "schatten", label: "Schatten" },
];

function NeubuergerPage() {
  const [rating, setRating] = useState<(typeof RATINGS)[number]["id"]>("alle");
  const [light, setLight] = useState<(typeof LIGHTS)[number]["id"]>("alle");

  const filtered = useMemo(
    () =>
      NEUBUERGER.filter((n) => {
        if (rating !== "alle" && n.rating !== rating) return false;
        if (light !== "alle" && !n.light.includes(light)) return false;
        return true;
      }),
    [rating, light],
  );

  return (
    <>
      <PageHero
        image="/images/wildhecke.jpg"
        kicker="Zweite Liste"
        title="Etablierte Neubürger in Hessen"
        lede="Dreißig nicht-heimische Arten mit ökologischem Mehrwert. Seit 100 bis 400 Jahren in europäischen Gärten. Nicht statt Heimisch — daneben, mit Gründen."
      />

      <Section>
        <Kicker>Drei Gespräche</Kicker>
        <h2 className="mt-3 font-display text-4xl">Purist, Pragmatiker, Klima.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Wer nur heimisch will, bleibt bei den {GEK_META.species} Arten. Diese Liste bedient den, dem wachsen
          und Aussehen reicht — und den, der Hitze über Schönheit stellt. Sie sagt nicht: nimm
          Neubürger statt Heimisch.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Purist",
              d: "Nur heimisch. Das ist mir wichtig. — 186 Arten. Diese Liste entfällt.",
            },
            {
              t: "Pragmatiker",
              d: "Mir egal, ob heimisch. Wichtig: wächst, sieht gut aus. — 30 Arten plus Gründe.",
            },
            {
              t: "Klimaanpasser",
              d: "Lieber robust als schön. — Robinie, Roteiche, Schnurbaum, gemischt mit Heimisch.",
            },
          ].map((s) => (
            <li key={s.t} className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          {NEUBUERGER_META.bewaehrt} bewährt, {NEUBUERGER_META.fragwuerdig} fragwürdig,{" "}
          {NEUBUERGER_META.problematisch} problematisch. Fragwürdige nur mit Begründung.
          Problematische nur mit Warnung — oder gar nicht.
        </p>
      </Section>

      <Section tone="paper">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Kicker>Filter</Kicker>
            <h2 className="mt-3 font-display text-4xl">Die dreißig Arten</h2>
          </div>
          <p className="text-sm text-muted tabular-nums">
            {filtered.length} von {NEUBUERGER.length}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {RATINGS.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRating(r.id)}
              className={cn(
                "min-h-11 rounded-sm px-3 py-2 text-sm",
                rating === r.id ? "bg-forest text-cream" : "bg-cream text-ink",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {LIGHTS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLight(l.id)}
              className={cn(
                "min-h-11 rounded-sm px-3 py-2 text-sm",
                light === l.id ? "bg-forest text-cream" : "bg-cream text-ink",
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {filtered.map((n) => (
            <li
              key={n.slug}
              id={n.slug}
              className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-gold">
                {n.layer} · {n.id} · {n.since}
              </p>
              <h3 className="mt-2 font-display text-2xl">{n.name}</h3>
              <p className="text-sm italic text-muted">{n.latin}</p>
              <p className="mt-2 text-xs text-moss">
                {n.origin} · {n.height} · {n.form} · Insekten {n.insects}/5 · Klima {n.climate}/5
              </p>
              <p className="mt-1 text-xs text-muted">
                {n.lightRaw} · {n.moistureRaw} · {n.soil}
              </p>
              <p
                className={cn(
                  "mt-3 inline-block rounded-sm px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em]",
                  n.rating === "bewaehrt" && "bg-moss/15 text-moss",
                  n.rating === "fragwuerdig" && "bg-gold/20 text-ink",
                  n.rating === "problematisch" && "bg-danger/15 text-danger",
                )}
              >
                {ratingLabel(n.rating)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{n.note}</p>
              {n.source ? (
                <p className="mt-2 text-xs text-muted">Quelle: {n.source}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Kicker>Nicht auf der Liste</Kicker>
        <h2 className="mt-3 font-display text-4xl">Warnsignale</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Zu invasiv oder ökologisch wertlos. Wir pflanzen sie nicht.
        </p>
        <ul className="mt-8 divide-y divide-ink/10 rounded-xl bg-paper">
          {WARN_OFF_LIST.map((w) => (
            <li key={w.latin} className="px-5 py-4">
              <p className="font-display text-xl">{w.name}</p>
              <p className="text-sm italic text-muted">{w.latin}</p>
              <p className="mt-1 text-sm text-muted">{w.reason}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Auch nicht: Myrte, Oleander, Palmen, gefüllte Hortensien. Die Grenze ist Winterhärte und
          messbarer Nutzen — nicht der Katalog.
        </p>
        <div className="mt-8">
          <Button asChild variant="ink">
            <Link to="/pflanzen">Zur heimischen Liste</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}