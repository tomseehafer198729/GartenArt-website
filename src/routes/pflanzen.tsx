import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import {
  bloomLabel,
  CATEGORIES,
  categoryLabel,
  creditLabel,
  LIST_META,
  lightLabel,
  MONTHS,
  moistureLabel,
  NEGATIVE_LIST,
  PLANTS,
  plantMatchesSoil,
  soilLabel,
  SOIL_GROUPS,
  type Credit,
  type Light,
  type Moisture,
  type PlantCategory,
  type SoilGroup,
} from "@/data/plants";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pflanzen")({ component: PflanzenPage });

const LIGHTS: { id: Light | "alle"; label: string }[] = [
  { id: "alle", label: "Jeder Standort" },
  { id: "sonne", label: "Sonne" },
  { id: "halbschatten", label: "Halbschatten" },
  { id: "schatten", label: "Schatten" },
];

const MOISTURES: { id: Moisture | "alle"; label: string }[] = [
  { id: "alle", label: "Jede Feuchte" },
  { id: "trocken", label: "trocken" },
  { id: "frisch", label: "frisch" },
  { id: "feucht", label: "feucht" },
];

const CREDITS: { id: Credit | "alle"; label: string }[] = [
  { id: "alle", label: "Jede Anrechnung" },
  { id: "voll", label: "voll anrechenbar" },
  { id: "bedingt", label: "bedingt" },
  { id: "nein", label: "nicht anrechenbar" },
];

function PflanzenPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<PlantCategory | "alle">("alle");
  const [light, setLight] = useState<Light | "alle">("alle");
  const [moisture, setMoisture] = useState<Moisture | "alle">("alle");
  const [soil, setSoil] = useState<SoilGroup | "alle">("alle");
  const [credit, setCredit] = useState<Credit | "alle">("alle");
  const [month, setMonth] = useState<number | 0>(0);
  const [onlyEdible, setOnlyEdible] = useState(false);
  const [onlyProtected, setOnlyProtected] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PLANTS.filter((p) => {
      if (cat !== "alle" && p.category !== cat) return false;
      if (light !== "alle" && !p.light.includes(light)) return false;
      if (moisture !== "alle" && !p.moisture.includes(moisture)) return false;
      if (soil !== "alle" && !plantMatchesSoil(p, soil)) return false;
      if (credit !== "alle" && p.credit !== credit) return false;
      if (onlyEdible && !p.edible) return false;
      if (onlyProtected && !p.protected) return false;
      if (month !== 0 && (month < p.bloomStart || month > p.bloomEnd)) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.latin.toLowerCase().includes(q) ||
        p.gekId.toLowerCase().includes(q) ||
        p.ecology.toLowerCase().includes(q) ||
        p.habitat.toLowerCase().includes(q) ||
        p.soil.toLowerCase().includes(q) ||
        p.soilType.toLowerCase().includes(q)
      );
    });
  }, [query, cat, light, moisture, soil, credit, month, onlyEdible, onlyProtected]);

  return (
    <>
      <PageHero
        image="/images/wildblueten.jpg"
        kicker="186 heimische Arten"
        title="Pflanzendatenbank Hessen"
        lede={`${LIST_META.species} heimische Arten für Hessen. Den Wunsch übersetzen wir in die Art, die hier denselben Zweck erfüllt. Stand ${LIST_META.date}.`}
      />
      <Section>
        <p className="max-w-2xl text-muted">
          Lavendel, Kirschlorbeer, Forsythie: der Wunsch bleibt. Die Art wechselt.{" "}
          <Link to="/alternativen" className="text-moss">
            Wunsch und Art
          </Link>
          . Wer nicht nur heimisch pflanzen will:{" "}
          <Link to="/neubuerger" className="text-moss">
            etablierte Neubürger
          </Link>
          — dreißig Arten, zweite Quelle, nicht vermischt.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Kicker>Filter</Kicker>
            <h2 className="mt-3 font-display text-4xl">Artenliste</h2>
          </div>
          <p className="text-sm text-muted tabular-nums">
            {filtered.length} von {PLANTS.length} Arten
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-paper p-4 sm:p-5">
          <label className="relative block">
            <span className="sr-only">Pflanze suchen</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name oder lateinischer Name…"
              className="h-12 w-full rounded-md border border-ink/10 bg-cream pr-10 pl-10 text-base outline-none focus:border-gold"
            />
            {query ? (
              <button
                type="button"
                className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center text-muted"
                onClick={() => setQuery("")}
                aria-label="Suche löschen"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </label>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <FilterChip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
                {c.label}
              </FilterChip>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {LIGHTS.map((l) => (
              <FilterChip key={l.id} active={light === l.id} onClick={() => setLight(l.id)}>
                {l.label}
              </FilterChip>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {MOISTURES.map((m) => (
              <FilterChip key={m.id} active={moisture === m.id} onClick={() => setMoisture(m.id)}>
                {m.label}
              </FilterChip>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {SOIL_GROUPS.map((s) => (
              <FilterChip key={s.id} active={soil === s.id} onClick={() => setSoil(s.id)}>
                {s.label}
              </FilterChip>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {CREDITS.map((c) => (
              <FilterChip key={c.id} active={credit === c.id} onClick={() => setCredit(c.id)}>
                {c.label}
              </FilterChip>
            ))}
            <FilterChip active={onlyEdible} onClick={() => setOnlyEdible((v) => !v)}>
              essbar
            </FilterChip>
            <FilterChip active={onlyProtected} onClick={() => setOnlyProtected((v) => !v)}>
              geschützt
            </FilterChip>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterChip active={month === 0} onClick={() => setMonth(0)}>
              Jede Blüte
            </FilterChip>
            {MONTHS.map((label, i) => (
              <FilterChip
                key={label}
                active={month === i + 1}
                onClick={() => setMonth(i + 1)}
              >
                {label}
              </FilterChip>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-lg border border-ink/10 bg-paper px-5 py-8 text-center text-muted">
            Keine Art passt zu dieser Auswahl. Setzen Sie einen Filter zurück oder suchen Sie
            nach dem deutschen oder lateinischen Namen.
          </p>
        ) : (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((plant) => (
              <li key={plant.slug}>
                <Link
                  to="/pflanzen/$slug"
                  params={{ slug: plant.slug }}
                  className="flex h-full flex-col rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-forest hover:text-cream"
                >
                  <p className="flex items-center justify-between gap-2 text-xs uppercase tracking-[0.16em] text-gold">
                    <span>{categoryLabel(plant.category)}</span>
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{plant.name}</h3>
                  <p className="italic opacity-70">{plant.latin}</p>
                  <p className="mt-3 text-sm opacity-80">
                    <span className="text-xs uppercase tracking-wider opacity-70">Boden. </span>
                    {soilLabel(plant)}
                  </p>
                  <p className="mt-2 flex-1 text-sm opacity-80">{plant.ecology}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider opacity-70">
                    {creditLabel(plant.credit)} · {plant.light.map(lightLabel).join(" · ")} ·{" "}
                    {plant.moisture.map(moistureLabel).join("/")} · {bloomLabel(plant)}
                  </p>
                  <p className="mt-2 text-gold" aria-label={`Ökologischer Wert ${plant.eco} von 5`}>
                    {"●".repeat(plant.eco)}
                    <span className="opacity-40">{"○".repeat(5 - plant.eco)}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section tone="paper">
        <div id="negativliste" className="scroll-mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker>16 Arten</Kicker>
              <h2 className="mt-3 font-display text-4xl">Negativliste Bodendecker</h2>
              <p className="mt-4 max-w-2xl text-muted">
                Diese Arten empfehlen wir nicht. Rechts der heimische Ersatz aus der
                Artenliste — klickbar, wo die Art im Verzeichnis steht.
              </p>
            </div>
            <a
              href="/docs/Negativliste-Bodendecker.pdf"
              download
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm bg-forest px-4 text-sm text-cream"
            >
              Liste als PDF
            </a>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl bg-cream shadow-[var(--shadow-border)]">
            <table className="w-full min-w-[52rem] text-left text-sm">
              <caption className="sr-only">
                16 nicht empfohlene Arten mit Herkunft, heimischem Ersatz und Begründung
              </caption>
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="px-4 py-3 font-normal">Art</th>
                  <th className="px-4 py-3 font-normal">Herkunft</th>
                  <th className="px-4 py-3 font-normal">Heimischer Ersatz</th>
                  <th className="px-4 py-3 font-normal">Begründung</th>
                </tr>
              </thead>
              <tbody>
                {NEGATIVE_LIST.map((row) => (
                  <tr key={row.latin} className="border-t border-ink/10 align-top">
                    <td className="px-4 py-4">
                      <p className="font-display text-lg">{row.name}</p>
                      <p className="italic text-muted">{row.latin}</p>
                    </td>
                    <td className="px-4 py-4 text-muted">{row.origin}</td>
                    <td className="px-4 py-4">
                      <ul className="space-y-1">
                        {row.replace.map((alt) => (
                          <li key={alt.latin ?? alt.name}>
                            {alt.avoid ? (
                              <span className="text-danger">{alt.name} meiden</span>
                            ) : alt.slug ? (
                              <Link
                                to="/pflanzen/$slug"
                                params={{ slug: alt.slug }}
                                className="text-moss underline-offset-2 hover:underline"
                              >
                                {alt.name}
                              </Link>
                            ) : (
                              <span>{alt.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 text-muted">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-sm px-3 text-sm tracking-wide transition-colors duration-150",
        active ? "bg-forest text-cream" : "bg-cream text-ink hover:bg-gold/20",
      )}
    >
      {children}
    </button>
  );
}
