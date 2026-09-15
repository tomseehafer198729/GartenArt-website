import raw from "./gek-plants.json";

export type PlantCategory =
  | "baum"
  | "strauch"
  | "kleinstrauch"
  | "zwergstrauch"
  | "staude"
  | "bodendecker"
  | "geophyt"
  | "gras"
  | "wasser";

export type Light = "sonne" | "halbschatten" | "schatten";
export type Moisture = "trocken" | "frisch" | "feucht";
export type Credit = "voll" | "bedingt" | "nein";

export type Plant = {
  slug: string;
  gekId: string;
  name: string;
  latin: string;
  category: PlantCategory;
  credit: Credit;
  eco: number;
  edible: boolean;
  toxic: boolean;
  protected: boolean;
  height: string;
  form: string;
  bloom: string;
  bloomStart: number;
  bloomEnd: number;
  bloomPeak: number;
  bloomColor: string;
  leaf: string;
  leafArrangement: string;
  autumn: string;
  site: string;
  soilType: string;
  soil: string;
  lifeZone: string;
  sociability: string;
  density: string;
  spread: string;
  occurrence: string;
  status: string;
  ecology: string;
  praxis: string;
  edibleNote: string;
  toxicNote: string;
  light: Light[];
  moisture: Moisture[];
  companions: string[];
  insectValue: number;
  bloomCurve: number[];
  habitat: string;
  note: string;
};

export const CATEGORIES: { id: PlantCategory | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "baum", label: "Bäume" },
  { id: "strauch", label: "Sträucher" },
  { id: "kleinstrauch", label: "Kleinsträucher" },
  { id: "zwergstrauch", label: "Zwergsträucher" },
  { id: "staude", label: "Stauden" },
  { id: "bodendecker", label: "Bodendecker" },
  { id: "geophyt", label: "Geophyten" },
  { id: "gras", label: "Gräser & Seggen" },
  { id: "wasser", label: "Sumpf & Wasser" },
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
] as const;

export const MONTHS_FULL = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
] as const;

function bloomCurve(start: number, end: number, peak: number, eco: number): number[] {
  return Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    if (m < start || m > end) return 3;
    const d = Math.abs(m - peak);
    const y = 18 + eco * 15 * Math.exp(-(d * d) / 1.5);
    return Math.round(Math.min(100, y));
  });
}

type RawPlant = (typeof raw)[number];

function hydrate(p: RawPlant): Plant {
  const eco = Math.max(1, Math.min(5, p.eco));
  return {
    ...p,
    category: p.category as PlantCategory,
    credit: p.credit as Credit,
    light: p.light as Light[],
    moisture: p.moisture as Moisture[],
    insectValue: eco * 20,
    bloomCurve: bloomCurve(p.bloomStart, p.bloomEnd, p.bloomPeak, eco),
    habitat: [p.occurrence, p.site].filter(Boolean).join(" · "),
    note: p.ecology,
  };
}

export const PLANTS: Plant[] = (raw as RawPlant[]).map(hydrate);

export const GEK_META = {
  title: "GEK Pflanzendatenbank Hessen",
  version: "4.0",
  date: "17.08.2026",
  species: PLANTS.length,
  fullCredit: PLANTS.filter((p) => p.credit === "voll").length,
  edible: PLANTS.filter((p) => p.edible).length,
  toxic: PLANTS.filter((p) => p.toxic).length,
  protected: PLANTS.filter((p) => p.protected).length,
} as const;

export type NegativeReplace = {
  name: string;
  latin?: string;
  slug?: string;
  avoid?: boolean;
};

export type NegativeEntry = {
  name: string;
  latin: string;
  origin: string;
  reason: string;
  replace: NegativeReplace[];
};

export const NEGATIVE_LIST: NegativeEntry[] = [
  {
    name: "Japan-Ysander",
    latin: "Pachysandra terminalis",
    origin: "Ostasien",
    reason: "Ökologisch nahezu wertlos; Monokultur-Charakter; Pilzanfälligkeit (Volutella).",
    replace: [
      { name: "Wald-Hainsimse", latin: "Luzula sylvatica", slug: "wald-hainsimse" },
      { name: "Haselwurz", latin: "Asarum europaeum", slug: "haselwurz" },
      { name: "Finger-Segge", latin: "Carex digitata", slug: "finger-segge" },
    ],
  },
  {
    name: "Golderdbeere",
    latin: "Waldsteinia ternata / geoides",
    origin: "Ostasien / SO-Europa",
    reason: "Trotz des Namens kein heimisches Waldkraut; kaum faunistischer Wert.",
    replace: [
      { name: "Walderdbeere", latin: "Fragaria vesca", slug: "walderdbeere" },
      { name: "Kriechender Günsel", latin: "Ajuga reptans", slug: "kriechender-guensel" },
      { name: "Waldmeister", latin: "Galium odoratum", slug: "waldmeister" },
    ],
  },
  {
    name: "Balkan-Storchschnabel",
    latin: "Geranium macrorrhizum",
    origin: "SO-Europa",
    reason: "GaLaBau-Standardbodendecker ohne heimischen Bezug.",
    replace: [
      { name: "Blut-Storchschnabel", latin: "Geranium sanguineum", slug: "blut-storchschnabel" },
      { name: "Kriechender Günsel", latin: "Ajuga reptans", slug: "kriechender-guensel" },
    ],
  },
  {
    name: "Teppich- / Fächermispel",
    latin: "Cotoneaster dammeri / horizontalis",
    origin: "China",
    reason: "Feuerbrand-Wirtspflanze; C. horizontalis verwildert in Trockenrasen.",
    replace: [
      { name: "Gewöhnliche Zwergmispel", latin: "Cotoneaster integerrimus", slug: "gewoehnliche-zwergmispel" },
      { name: "Scharfer Mauerpfeffer", latin: "Sedum acre", slug: "scharfer-mauerpfeffer" },
      { name: "Weiße Fetthenne", latin: "Sedum album", slug: "weisse-fetthenne" },
    ],
  },
  {
    name: "Böschungsmyrte",
    latin: "Lonicera nitida / pileata",
    origin: "China",
    reason: "Kein Fruchtwert für heimische Vögel.",
    replace: [
      { name: "Rote Heckenkirsche", latin: "Lonicera xylosteum", slug: "rote-heckenkirsche" },
      { name: "Alpen-Johannisbeere", latin: "Ribes alpinum", slug: "alpen-johannisbeere" },
    ],
  },
  {
    name: "Kirschlorbeer",
    latin: "Prunus laurocerasus",
    origin: "Kleinasien / Balkan",
    reason: "Verwildert massiv in Wälder; Blätter blausäurehaltig; ökologisch fast wertlos.",
    replace: [
      { name: "Stechpalme", latin: "Ilex aquifolium", slug: "stechpalme" },
      { name: "Eibe", latin: "Taxus baccata", slug: "eibe" },
      { name: "Liguster", latin: "Ligustrum vulgare", slug: "liguster" },
    ],
  },
  {
    name: "Schneeheide",
    latin: "Erica carnea",
    origin: "Alpen / Voralpen",
    reason: "In Hessen nicht heimisch — wird regelmäßig als „heimische Heide“ verkauft.",
    replace: [{ name: "Besenheide", latin: "Calluna vulgaris", slug: "besenheide-heidekraut" }],
  },
  {
    name: "Kupfer-Felsenbirne",
    latin: "Amelanchier lamarckii",
    origin: "Nordamerika",
    reason: "Häufigste Verwechslung im Gehölzeinkauf.",
    replace: [
      { name: "Gewöhnliche Felsenbirne", latin: "Amelanchier ovalis", slug: "gewoehnliche-felsenbirne" },
    ],
  },
  {
    name: "Schneebeere",
    latin: "Symphoricarpos albus",
    origin: "Nordamerika",
    reason: "Etabliert, verdrängend; Früchte kaum genutzt.",
    replace: [
      { name: "Liguster", latin: "Ligustrum vulgare", slug: "liguster" },
      { name: "Alpen-Johannisbeere", latin: "Ribes alpinum", slug: "alpen-johannisbeere" },
    ],
  },
  {
    name: "Mahonie",
    latin: "Mahonia aquifolium",
    origin: "Nordamerika",
    reason: "Etablierter Neophyt, Ausbreitung in Wälder.",
    replace: [
      { name: "Stechpalme", latin: "Ilex aquifolium", slug: "stechpalme" },
      { name: "Berberitze", latin: "Berberis vulgaris", slug: "berberitze" },
    ],
  },
  {
    name: "Großkelchiges Johanniskraut",
    latin: "Hypericum calycinum",
    origin: "Balkan / Türkei",
    reason: "Dichte Monokultur ohne Strukturvielfalt.",
    replace: [
      { name: "Echtes Johanniskraut", latin: "Hypericum perforatum" },
      { name: "Scharfer Mauerpfeffer", latin: "Sedum acre", slug: "scharfer-mauerpfeffer" },
    ],
  },
  {
    name: "Bergenie",
    latin: "Bergenia cordifolia",
    origin: "Sibirien / Altai",
    reason: "Kein heimischer Bezug.",
    replace: [
      { name: "Haselwurz", latin: "Asarum europaeum", slug: "haselwurz" },
      { name: "Wald-Hainsimse", latin: "Luzula sylvatica", slug: "wald-hainsimse" },
    ],
  },
  {
    name: "Sibirischer Blaustern",
    latin: "Scilla siberica",
    origin: "Kaukasus / Südrussland",
    reason: "Verwechslung mit der heimischen Art im Zwiebelhandel.",
    replace: [
      { name: "Zweiblättriger Blaustern", latin: "Scilla bifolia", slug: "zweiblaettriger-blaustern" },
    ],
  },
  {
    name: "Irischer Efeu",
    latin: "Hedera hibernica",
    origin: "Atlantik-Westeuropa",
    reason:
      "Im Handel die dominante Efeu-Sippe — bei strenger Auslegung nicht die heimische Sippe; Herkunft beim Lieferanten erfragen.",
    replace: [{ name: "Efeu", latin: "Hedera helix", slug: "efeu" }],
  },
  {
    name: "Götterbaum",
    latin: "Ailanthus altissima",
    origin: "China",
    reason: "EU-Unionsliste (VO (EU) 1143/2014) — Anpflanzung und Inverkehrbringen verboten.",
    replace: [
      { name: "Eberesche", latin: "Sorbus aucuparia", slug: "eberesche" },
      { name: "Gemeine Esche", latin: "Fraxinus excelsior", slug: "gemeine-esche" },
    ],
  },
  {
    name: "Buchsbaum",
    latin: "Buxus sempervirens",
    origin: "in Hessen nicht indigen",
    reason: "Buchsbaumzünsler; Cylindrocladium; hoher Pflegeaufwand.",
    replace: [
      { name: "Edel-Gamander", latin: "Teucrium chamaedrys", slug: "edel-gamander" },
      { name: "Eibe", latin: "Taxus baccata", slug: "eibe" },
      { name: "Ilex crenata", avoid: true },
    ],
  },
];


export function getPlant(slug: string): Plant | undefined {
  return PLANTS.find((p) => p.slug === slug);
}

export function categoryLabel(id: PlantCategory): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function lightLabel(id: Light): string {
  if (id === "sonne") return "Sonne";
  if (id === "halbschatten") return "Halbschatten";
  return "Schatten";
}

export function moistureLabel(id: Moisture): string {
  if (id === "trocken") return "trocken";
  if (id === "frisch") return "frisch";
  return "feucht";
}

export type SoilGroup = "sand" | "lehm" | "kalk" | "sauer" | "kies";

export const SOIL_GROUPS: { id: SoilGroup | "alle"; label: string }[] = [
  { id: "alle", label: "Jeder Boden" },
  { id: "sand", label: "sandig" },
  { id: "lehm", label: "lehmig" },
  { id: "kalk", label: "über Kalk" },
  { id: "sauer", label: "sauer" },
  { id: "kies", label: "kiesig / skelettreich" },
];

export function plantMatchesSoil(plant: Plant, group: SoilGroup): boolean {
  const hay = `${plant.soilType} ${plant.soil}`.toLowerCase();
  if (group === "sand") return hay.includes("sand") || hay.includes("s–ls") || hay.includes("s-ls");
  if (group === "lehm") {
    return (
      hay.includes("lehm") ||
      hay.includes("sl–l") ||
      hay.includes("l–tl") ||
      hay.includes("auelehm")
    );
  }
  if (group === "kalk") return hay.includes("kalk");
  if (group === "sauer") return hay.includes("sauer");
  return (
    hay.includes("skelett") ||
    hay.includes("grus") ||
    hay.includes("schotter") ||
    hay.includes("kies")
  );
}

/** Kurz: Bodentext plus Feuchte, für Karten und den Graphen. */
export function soilLabel(plant: Plant): string {
  const feuchte = plant.moisture.map(moistureLabel).join("/");
  const boden = plant.soil || plant.soilType || "";
  return [boden, feuchte].filter(Boolean).join(" · ") || "—";
}

export function soilDetail(plant: Plant): string {
  return [plant.soilType, plant.soil].filter(Boolean).join(" — ") || "—";
}

export function bloomLabel(plant: Plant): string {
  if (plant.bloom) return plant.bloom;
  if (plant.bloomStart === plant.bloomEnd) return MONTHS_FULL[plant.bloomStart - 1];
  return `${MONTHS_FULL[plant.bloomStart - 1]}–${MONTHS_FULL[plant.bloomEnd - 1]}`;
}

export function creditLabel(c: Credit): string {
  if (c === "voll") return "voll anrechenbar";
  if (c === "bedingt") return "bedingt";
  return "nicht anrechenbar";
}
