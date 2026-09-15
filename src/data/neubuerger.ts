import csv from "./gek-neubuerger.csv?raw";

export type NeubuergerRating = "bewaehrt" | "fragwuerdig" | "problematisch";
export type NeubuergerCategory = "baum" | "strauch" | "staude" | "gras" | "bodendecker";
export type Light = "sonne" | "halbschatten" | "schatten";
export type Moisture = "trocken" | "frisch" | "feucht";

export type Neubuerger = {
  id: number;
  slug: string;
  name: string;
  latin: string;
  category: NeubuergerCategory;
  layer: string;
  height: string;
  form: string;
  site: string;
  light: Light[];
  lightRaw: string;
  moisture: Moisture[];
  moistureRaw: string;
  soil: string;
  since: string;
  origin: string;
  insects: number;
  climate: number;
  rating: NeubuergerRating;
  note: string;
  source: string;
};

function splitCsvLine(line: string) {
  const parts = line.split(";");
  if (parts.length === 17) return parts;
  const head = parts.slice(0, 15);
  const source = parts[parts.length - 1] ?? "";
  const note = parts.slice(15, -1).join(";");
  return [...head, note, source];
}

function slugify(name: string, id: number) {
  const s = name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return s || `art-${id}`;
}

function parseLayer(raw: string): NeubuergerCategory {
  const v = raw.trim().toLowerCase();
  if (v === "baum") return "baum";
  if (v === "bodendecker") return "bodendecker";
  if (v === "gras") return "gras";
  if (v === "staude") return "staude";
  return "strauch";
}

function parseRating(raw: string): NeubuergerRating {
  const v = raw.trim().toLowerCase();
  if (v.startsWith("frag")) return "fragwuerdig";
  if (v.startsWith("prob")) return "problematisch";
  return "bewaehrt";
}

function parseLight(raw: string): Light[] {
  const v = raw.toLowerCase();
  const out: Light[] = [];
  if (v.includes("sonne")) out.push("sonne");
  if (v.includes("halbschatten")) out.push("halbschatten");
  if (v.includes("vollschatten") || /(^| )schatten/.test(v)) out.push("schatten");
  return out.length ? out : ["sonne"];
}

function parseMoisture(raw: string): Moisture[] {
  const v = raw.toLowerCase();
  const out: Moisture[] = [];
  if (v.includes("trocken")) out.push("trocken");
  if (v.includes("normal") || v.includes("frisch")) out.push("frisch");
  if (v.includes("feucht") || v.includes("nass")) out.push("feucht");
  return out.length ? out : ["frisch"];
}

function hydrate(line: string): Neubuerger | null {
  const cols = splitCsvLine(line);
  if (cols.length < 16) return null;
  const id = Number(cols[0]);
  if (!Number.isFinite(id)) return null;
  return {
    id,
    slug: slugify(cols[2], id),
    name: cols[2].trim(),
    latin: cols[3].trim(),
    category: parseLayer(cols[1]),
    layer: cols[1].trim(),
    height: cols[4].trim(),
    form: cols[5].trim(),
    site: cols[6].trim(),
    light: parseLight(cols[7]),
    lightRaw: cols[7].trim(),
    moisture: parseMoisture(cols[8]),
    moistureRaw: cols[8].trim(),
    soil: cols[9].trim(),
    since: cols[10].trim(),
    origin: cols[11].trim(),
    insects: Number(cols[12]) || 0,
    climate: Number(cols[13]) || 0,
    rating: parseRating(cols[14]),
    note: (cols[15] ?? "").replace(/\*\*/g, "").trim(),
    source: (cols[16] ?? "").trim(),
  };
}

export const NEUBUERGER: Neubuerger[] = csv
  .split(/\r?\n/)
  .slice(1)
  .map((line) => line.trim())
  .filter(Boolean)
  .map(hydrate)
  .filter((n): n is Neubuerger => Boolean(n));

export const WARN_OFF_LIST = [
  { name: "Lorbeerkirsche / Kirschlorbeer", latin: "Prunus laurocerasus", reason: "Invasiv in Naturschutzgebieten, ökologisch schlecht." },
  { name: "Thuja / Lebensbaum", latin: "Thuja occidentalis", reason: "Ökologisch wertlos." },
  { name: "Götterbaum", latin: "Ailanthus altissima", reason: "EU-Liste invasiver Arten." },
  { name: "Japanische Berberitze", latin: "Berberis thunbergii", reason: "Invasiv. Nicht die heimische Berberis vulgaris." },
  { name: "Bambus (unkontrolliert)", latin: "Phyllostachys / Sasa", reason: "Wurzelbrut." },
] as const;

export const NEUBUERGER_META = {
  title: "Etablierte Neubürger in Hessen",
  count: NEUBUERGER.length,
  bewaehrt: NEUBUERGER.filter((n) => n.rating === "bewaehrt").length,
  fragwuerdig: NEUBUERGER.filter((n) => n.rating === "fragwuerdig").length,
  problematisch: NEUBUERGER.filter((n) => n.rating === "problematisch").length,
} as const;

export function ratingLabel(r: NeubuergerRating) {
  if (r === "bewaehrt") return "Bewährt";
  if (r === "fragwuerdig") return "Fragwürdig";
  return "Problematisch";
}

export function categoryLabel(c: NeubuergerCategory) {
  const map: Record<NeubuergerCategory, string> = {
    baum: "Baum",
    strauch: "Strauch",
    staude: "Staude",
    gras: "Gras",
    bodendecker: "Bodendecker",
  };
  return map[c];
}
