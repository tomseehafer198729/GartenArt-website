import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Kicker, Section } from "@/components/section";
import { MonthPraxisNotes, PraxisGuide, YearStrip } from "@/components/praxis-guide";
import { MONTHS, MONTHS_FULL, PLANTS, soilLabel, type Plant } from "@/data/plants";
import { SAMPLE_FUNCTIONS } from "@/data/presets";
import { compileExpression } from "@/lib/math-expr";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planer")({ component: PlanerPage });

const LINE_COLORS = ["#B99A4E", "#55764C", "#2F3D2B", "#8B3A2A", "#243020"];

type Series = {
  id: string;
  name: string;
  color: string;
  plant?: Plant;
  points: { x: number; y: number }[];
};

/** Blühkurve 0–100 → m². Werte ≤ 5 gelten als nicht in Blüte. */
function intensityToM2(intensity: number, area: number): number {
  if (intensity <= 5) return 0;
  return Math.round((intensity / 100) * area * 10) / 10;
}

/** Überlagerung: Flächen addieren sich nicht über die Gartengröße hinaus. */
function unionBloomM2(parts: number[], garden: number): number {
  if (garden <= 0) return 0;
  const vacant = parts.reduce((acc, m2) => acc * (1 - Math.min(1, Math.max(0, m2) / garden)), 1);
  return Math.round((1 - vacant) * garden);
}

function formatM2(n: number): string {
  return `${Math.round(n).toLocaleString("de-DE")} m²`;
}

function PlanerPage() {
  const [selected, setSelected] = useState<string[]>(["wiesensalbei", "schlehe", "efeu"]);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [expr, setExpr] = useState(SAMPLE_FUNCTIONS[0].expr);
  const [exprOn, setExprOn] = useState(false);
  const [areaRaw, setAreaRaw] = useState("120");
  const [plantQuery, setPlantQuery] = useState("");
  const [focusMonth, setFocusMonth] = useState<number>(6);

  const areaResult = parseArea(areaRaw);
  const compiled = useMemo(() => compileExpression(expr), [expr]);

  const plantSeries = selected
    .map((slug, i) => {
      const plant = PLANTS.find((p) => p.slug === slug);
      if (!plant) return null;
      return {
        id: plant.slug,
        name: plant.name,
        color: LINE_COLORS[i % LINE_COLORS.length],
        plant,
        points: plant.bloomCurve.map((y, idx) => ({ x: idx + 1, y })),
      } satisfies Series;
    })
    .filter((s): s is Series & { plant: Plant } => Boolean(s));

  const exprSeries: Series | null =
    exprOn && compiled.ok
      ? {
          id: "fn",
          name: activePreset
            ? SAMPLE_FUNCTIONS.find((p) => p.id === activePreset)?.name ?? "Funktion"
            : "Eigene Funktion",
          color: "#8b3a2a",
          points: Array.from({ length: 12 }, (_, i) => {
            const x = i + 1;
            const y = Math.max(0, Math.min(100, compiled.fn(x)));
            return { x, y };
          }),
        }
      : null;

  const errors: string[] = [];
  if (selected.length === 0 && !exprOn) {
    errors.push("Wählen Sie mindestens eine Pflanze oder aktivieren Sie eine Beispielfunktion.");
  }
  if (selected.length > 5) {
    errors.push("Höchstens fünf Pflanzen gleichzeitig, sonst wird der Graph unleserlich.");
  }
  if (exprOn && !compiled.ok) {
    errors.push(compiled.error);
  }
  if (!areaResult.ok) {
    errors.push(areaResult.error);
  }

  const area = areaResult.ok ? areaResult.value : 0;

  const chartData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const x = i + 1;
      const row: Record<string, number> = { x };
      for (const s of plantSeries) {
        const p = s.points.find((pt) => pt.x === x);
        row[s.id] = intensityToM2(p?.y ?? 0, area);
      }
      if (exprSeries) {
        const p = exprSeries.points.find((pt) => pt.x === x);
        row[exprSeries.id] = intensityToM2(p?.y ?? 0, area);
      }
      return row;
    });
  }, [plantSeries, exprSeries, area]);

  const visibleSeries: Series[] = exprSeries ? [...plantSeries, exprSeries] : plantSeries;

  const plantMatches = PLANTS.filter((p) => {
    const q = plantQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.latin.toLowerCase().includes(q) ||
      p.soil.toLowerCase().includes(q) ||
      p.soilType.toLowerCase().includes(q)
    );
  }).slice(0, 18);

  function togglePlant(slug: string) {
    setSelected((cur) => {
      if (cur.includes(slug)) return cur.filter((s) => s !== slug);
      if (cur.length >= 5) return cur;
      return [...cur, slug];
    });
  }

  function loadPreset(id: string) {
    const preset = SAMPLE_FUNCTIONS.find((p) => p.id === id);
    if (!preset) return;
    setActivePreset(id);
    setExpr(preset.expr);
    setExprOn(true);
  }

  const reading = monthReading(focusMonth, plantSeries, exprSeries, chartData, area);

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-[90rem] px-3 py-6 sm:px-5 lg:px-8 lg:py-8">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Werkzeug</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Saisonkalender</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
          Die Fläche des Gartens ist die Bezugsgröße. Klicken Sie auf einen Monat: Blüte in m²,
          Ökomahd, Düngung, Schädlinge und Saat. Der Graph bleibt vorn.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="flex min-h-[70vh] flex-col rounded-xl bg-paper p-3 sm:p-5 lg:min-h-[78vh]">
            {errors.length > 0 ? (
              <div
                role="alert"
                className="mb-3 rounded-md border border-danger/30 bg-danger/8 px-4 py-3 text-sm text-danger"
              >
                {errors.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </div>
            ) : null}

            <div className="flex flex-wrap items-baseline justify-between gap-2 px-1">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Blühende Fläche in m²
                {areaResult.ok ? ` · ${formatM2(area)} Garten` : ""}
              </p>
              <p className="text-xs text-muted">Monat auf der x-Achse · m² auf der y-Achse</p>
            </div>

            {areaResult.ok && errors.length === 0 && reading ? (
              <div className="mt-3 rounded-md border border-gold/40 bg-cream px-4 py-3 text-sm">
                <p className="font-medium text-forest">{reading.headline}</p>
                {reading.rows.length > 0 ? (
                  <ul className="mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-2">
                    {reading.rows.map((row) => (
                      <li key={row.id} className="flex flex-wrap items-baseline justify-between gap-2">
                        <span>
                          <span className="font-medium">{row.name}</span>
                          {row.soil ? (
                            <span className="ml-2 text-xs text-muted">{row.soil}</span>
                          ) : null}
                        </span>
                        <span className="tabular-nums text-moss">{formatM2(row.m2)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            <p className="mt-3 px-1 text-[10px] uppercase tracking-[0.18em] text-muted">
              Ökomahd · Düngung · Schädlinge · Saat · Monat wählen
            </p>
            <YearStrip month={focusMonth} onPick={setFocusMonth} />
            <MonthPraxisNotes month={focusMonth} />

            <div className="mt-3 h-[42vh] min-h-[20rem] flex-1 lg:h-[50vh]">
              {visibleSeries.length === 0 || errors.length > 0 ? (
                <div className="flex h-full min-h-[50vh] items-center justify-center text-center text-muted">
                  <p>Graph pausiert, bis die Eingaben gültig sind.</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 12, right: 16, left: 20, bottom: 28 }}
                    onClick={(state) => {
                      const label = state?.activeLabel;
                      if (label == null) return;
                      const n = Number(label);
                      if (n >= 1 && n <= 12) setFocusMonth(n);
                    }}
                    onMouseMove={(state) => {
                      const label = state?.activeLabel;
                      if (label == null) return;
                      const n = Number(label);
                      if (n >= 1 && n <= 12) setFocusMonth(n);
                    }}
                  >
                    <CartesianGrid stroke="#cfc6ae" strokeDasharray="3 4" />
                    <XAxis
                      dataKey="x"
                      type="number"
                      domain={[1, 12]}
                      ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                      tickFormatter={(v: number) => MONTHS[v - 1] ?? String(v)}
                      tick={{ fill: "#5c6b60", fontSize: 12 }}
                      axisLine={{ stroke: "#B99A4E" }}
                      label={{
                        value: "Monat",
                        position: "insideBottom",
                        offset: -16,
                        fill: "#5c6b60",
                        fontSize: 12,
                      }}
                    />
                    <YAxis
                      domain={[0, Math.max(area, 10)]}
                      tick={{ fill: "#5c6b60", fontSize: 12 }}
                      axisLine={{ stroke: "#B99A4E" }}
                      width={52}
                      tickMargin={6}
                      tickFormatter={(v: number) => String(Math.round(v))}
                      label={{
                        value: "m²",
                        angle: -90,
                        position: "insideLeft",
                        offset: 8,
                        fill: "#5c6b60",
                        fontSize: 12,
                      }}
                    />
                    <Tooltip
                      cursor={{ stroke: "#B99A4E", strokeWidth: 1.5 }}
                      content={(props) => (
                        <BloomTooltip
                          active={props.active}
                          payload={props.payload as TooltipRow[] | undefined}
                          label={props.label}
                          area={area}
                          series={visibleSeries}
                        />
                      )}
                    />
                    <Legend wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
                    {visibleSeries.map((s) => (
                      <Line
                        key={s.id}
                        type="monotone"
                        dataKey={s.id}
                        name={s.name}
                        stroke={s.color}
                        strokeWidth={s.id === "fn" ? 2.5 : 2}
                        dot={false}
                        strokeDasharray={s.id === "fn" ? "6 4" : undefined}
                        isAnimationActive={false}
                        activeDot={{ r: 5, onClick: () => undefined }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <aside className="rounded-xl bg-paper p-4 lg:max-h-[78vh] lg:overflow-y-auto">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Steuerung</h2>

            <label className="mt-4 block text-sm">
              Gartenfläche in m²
              <input
                value={areaRaw}
                onChange={(e) => setAreaRaw(e.target.value)}
                inputMode="decimal"
                className={cn(
                  "mt-1 h-11 w-full rounded-md border bg-cream px-3 outline-none focus:border-gold",
                  areaResult.ok ? "border-ink/10" : "border-danger",
                )}
                aria-invalid={!areaResult.ok}
              />
            </label>
            {!areaResult.ok ? (
              <p className="mt-1 text-xs text-danger">{areaResult.error}</p>
            ) : (
              <p className="mt-1 text-xs text-muted">
                Bezugsgröße für die y-Achse. 120 m² Garten, 80 % Blüte = 96 m² in Blüte.
              </p>
            )}

            <p className="mt-5 text-sm font-medium">Beispielfunktionen</p>
            <p className="mt-1 text-xs text-muted">
              Gestrichelte Linie: eine Pflanzengesellschaft als Formel, kein einzelnes Beet.
            </p>
            <ul className="mt-2 space-y-1.5">
              {SAMPLE_FUNCTIONS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => loadPreset(p.id)}
                    className={cn(
                      "w-full rounded-sm px-3 py-2 text-left text-sm transition-colors duration-150",
                      activePreset === p.id
                        ? "bg-forest text-cream"
                        : "bg-cream hover:bg-gold/20",
                    )}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>

            <label className="mt-5 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={exprOn}
                onChange={(e) => setExprOn(e.target.checked)}
                className="size-4 accent-moss"
              />
              Funktion einzeichnen
            </label>
            <label className="mt-2 block text-sm">
              f(x), x = Monat 1–12
              <textarea
                value={expr}
                onChange={(e) => {
                  setExpr(e.target.value);
                  setActivePreset(null);
                }}
                rows={3}
                className={cn(
                  "mt-1 w-full rounded-md border bg-cream px-3 py-2 font-mono text-sm outline-none focus:border-gold",
                  exprOn && !compiled.ok ? "border-danger" : "border-ink/10",
                )}
                spellCheck={false}
                aria-invalid={exprOn && !compiled.ok}
              />
            </label>
            {exprOn && !compiled.ok ? (
              <p className="mt-1 text-xs text-danger">{compiled.error}</p>
            ) : (
              <p className="mt-1 text-xs text-muted">
                Erlaubt: x, + − * / ^, sin cos tan exp sqrt abs log min max, pi.
              </p>
            )}

            <p className="mt-5 text-sm font-medium">Pflanzen (max. 5)</p>
            <input
              value={plantQuery}
              onChange={(e) => setPlantQuery(e.target.value)}
              placeholder="Name oder Boden…"
              className="mt-2 h-11 w-full rounded-md border border-ink/10 bg-cream px-3 text-sm outline-none focus:border-gold"
            />
            <ul className="mt-2 max-h-56 space-y-1 overflow-y-auto">
              {plantMatches.map((p) => (
                <PlantToggle
                  key={p.slug}
                  plant={p}
                  on={selected.includes(p.slug)}
                  disabled={!selected.includes(p.slug) && selected.length >= 5}
                  onToggle={() => togglePlant(p.slug)}
                />
              ))}
            </ul>
            {selected.length > 0 ? (
              <button
                type="button"
                className="mt-3 text-xs text-moss"
                onClick={() => setSelected([])}
              >
                Pflanzenauswahl leeren
              </button>
            ) : null}
          </aside>
        </div>
      </div>

      <PraxisGuide />

      <Section tone="paper">
        <Kicker>Lesen</Kicker>
        <h2 className="mt-3 font-display text-3xl">Was der Graph genau meint</h2>
        <div className="mt-5 max-w-prose space-y-4 text-muted">
          <p>
            Die Zahl oben, zum Beispiel <span className="text-ink">120 m²</span>, ist die Fläche des
            Gartens. Die y-Achse ist dieselbe Einheit:{" "}
            <span className="text-ink">blühende Quadratmeter</span>. Nicht Blütenzahl, nicht
            Prozent — Fläche.
          </p>
          <p>
            Jede durchgezogene Linie ist eine Art aus dem Verzeichnis. Steht die Linie im Juni bei
            100, blühen von dieser Art in einem 120-m²-Garten etwa 100 m². Der Gipfel der Kurve
            fällt mit der Hauptblüte zusammen; außerhalb der Blütezeit liegt die Linie bei
            null.
          </p>
          <p>
            Der goldene Querstrich markiert den Monat, auf den Sie klicken oder mit dem Finger
            gehen. Darüber steht der Satz in Klartext:{" "}
            <span className="text-ink">
              „Im Juni blühen ca. 100 m² des 120-m²-Gartens — an Wiesensalbei.“
            </span>{" "}
            Darunter jede Art mit ihrer Fläche und dem Boden, den sie braucht.
          </p>
          <p>
            Mehrere Arten werden nicht einfach addiert. Der Garten bleibt 120 m². Überlappen sich
            die Blüten, zählt die überdeckte Fläche nur einmal. Im Februar kann dort stehen: in
            diesem Mix blüht fast nichts — die gewählten Arten haben ihre Blüte später.
          </p>
          <p>
            Die gestrichelte Linie ist eine Beispielfunktion, eine ganze Pflanzengesellschaft als
            Formel. Sie gehört nicht zu einem Beet. Ungültige Eingaben — leere Auswahl, kaputte
            Klammern, Fläche außerhalb 10–20.000 m² — halten den Graphen an.
          </p>
        </div>
        <p className="mt-6">
          <Link to="/pflanzen" className="text-moss">
            Arten im Verzeichnis nachschlagen — mit Boden je Art
          </Link>
        </p>
      </Section>
    </div>
  );
}

type TooltipRow = {
  dataKey?: string | number;
  name?: string;
  value?: number;
  color?: string;
};

function BloomTooltip({
  active,
  payload,
  label,
  area,
  series,
}: {
  active?: boolean;
  payload?: TooltipRow[];
  label?: string | number;
  area: number;
  series: Series[];
}) {
  if (!active || !payload?.length || area <= 0) return null;
  const month = Number(label);
  const name = MONTHS_FULL[month - 1] ?? `Monat ${label}`;
  const plantRows = payload.filter((p) => p.dataKey !== "fn" && Number(p.value) > 0.4);
  const union = unionBloomM2(
    plantRows.map((p) => Number(p.value) || 0),
    area,
  );
  const names = plantRows.map((p) => p.name).filter(Boolean) as string[];

  return (
    <div className="max-w-xs rounded-md border border-gold bg-cream px-3 py-2 text-sm shadow-[var(--shadow-border)]">
      <p className="font-medium text-forest">
        {name} · {formatM2(area)} Garten
      </p>
      <p className="mt-1 text-muted">
        {union <= 0
          ? `Im ${name} blüht in diesem Mix fast nichts.`
          : `Im ${name} blühen ca. ${formatM2(union)} — an ${joinUnd(names)}.`}
      </p>
      <ul className="mt-2 space-y-1">
        {payload.map((p) => {
          const id = String(p.dataKey ?? "");
          const s = series.find((x) => x.id === id);
          const m2 = Number(p.value) || 0;
          return (
            <li key={id} className="flex justify-between gap-3">
              <span>
                {p.name}
                {s?.plant ? (
                  <span className="block text-[11px] text-muted">{soilLabel(s.plant)}</span>
                ) : null}
              </span>
              <span className="tabular-nums">{formatM2(m2)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function monthReading(
  month: number,
  plantSeries: Series[],
  exprSeries: Series | null,
  chartData: Record<string, number>[],
  area: number,
): {
  headline: string;
  detail: string;
  rows: { id: string; name: string; soil: string; m2: number }[];
} | null {
  if (area <= 0 || month < 1 || month > 12) return null;
  const row = chartData.find((r) => r.x === month);
  if (!row) return null;
  const name = MONTHS_FULL[month - 1];
  const plantRows = plantSeries.map((s) => ({
    id: s.id,
    name: s.name,
    soil: s.plant ? soilLabel(s.plant) : "",
    m2: Number(row[s.id] ?? 0),
  }));
  const blooming = plantRows.filter((r) => r.m2 > 0.4);
  const union = unionBloomM2(
    blooming.map((r) => r.m2),
    area,
  );
  const names = blooming.map((r) => r.name);
  const headline =
    union <= 0
      ? `Im ${name} blüht in diesem Mix fast nichts.`
      : `Im ${name} blühen ca. ${formatM2(union)} des ${formatM2(area)}-Gartens — an ${joinUnd(names)}.`;
  const detail =
    union <= 0
      ? "Die gewählten Arten haben ihre Blüte in anderen Monaten. Der Querstrich liegt auf diesem Monat."
      : "Jede Zahl ist die blühende Fläche dieser Art. Überlappung wird nicht doppelt gezählt. Der Boden steht hinter dem Namen.";
  const rows = exprSeries
    ? [...plantRows, { id: "fn", name: exprSeries.name, soil: "Beispielfunktion", m2: Number(row.fn ?? 0) }]
    : plantRows;
  return { headline, detail, rows };
}

function joinUnd(names: string[]): string {
  if (names.length === 0) return "keiner der gewählten Arten";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} und ${names[1]}`;
  return `${names.slice(0, -1).join(", ")} und ${names[names.length - 1]}`;
}

function PlantToggle({
  plant,
  on,
  disabled,
  onToggle,
}: {
  plant: Plant;
  on: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        className={cn(
          "flex w-full flex-col rounded-sm px-2 py-2 text-left text-sm",
          on ? "bg-moss/15 text-ink" : "hover:bg-cream",
          disabled && "opacity-40",
        )}
      >
        <span className="flex items-baseline justify-between gap-2">
          <span>{plant.name}</span>
          <span className="text-xs italic text-muted">{plant.latin}</span>
        </span>
        <span className="text-[11px] text-muted">{soilLabel(plant)}</span>
      </button>
    </li>
  );
}

function parseArea(raw: string): { ok: true; value: number } | { ok: false; error: string } {
  const trimmed = raw.trim().replace(",", ".");
  if (!trimmed) {
    return { ok: false, error: "Bitte die Gartenfläche in Quadratmetern angeben." };
  }
  if (!/^\d+(\.\d+)?$/.test(trimmed)) {
    return { ok: false, error: "Nur Zahlen, zum Beispiel 120 oder 45.5 — keine Einheiten im Feld." };
  }
  const value = Number(trimmed);
  if (!Number.isFinite(value)) {
    return { ok: false, error: "Die Fläche ist keine gültige Zahl." };
  }
  if (value < 10) {
    return { ok: false, error: "Die Fläche ist zu klein (mindestens 10 m²)." };
  }
  if (value > 20000) {
    return {
      ok: false,
      error: "Die Fläche ist zu groß (höchstens 20.000 m²). Bitte teilen Sie das Grundstück.",
    };
  }
  return { ok: true, value };
}
