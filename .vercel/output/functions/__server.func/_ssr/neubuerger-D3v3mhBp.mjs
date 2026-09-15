import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as GEK_META, r as cn } from "./router-vI6J447R.mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/neubuerger-D3v3mhBp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NEUBUERGER = [
	{
		id: 501,
		slug: "robinie",
		name: "Robinie",
		latin: "Robinia pseudoacacia",
		category: "baum",
		height: "15–25 m",
		since: 1600,
		origin: "Nordamerika",
		insects: 5,
		climate: 5,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["trocken", "frisch"],
		note: "Seit ~1600 in Europa. Bienenweide, Stickstoffbinder, Baum des Jahres 2020. Hitze und Trockenheit besser als viele Heimische. Unterpflanzung mit heimischen Stauden, damit der ökologische Wert stimmt."
	},
	{
		id: 502,
		slug: "roteiche",
		name: "Roteiche",
		latin: "Quercus rubra",
		category: "baum",
		height: "20–30 m",
		since: 1800,
		origin: "Nordamerika",
		insects: 2,
		climate: 5,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Seit ~1800. Klimaresilient, starke Herbstfärbung. Weniger Insekten als Stieleiche — nie als Ersatz der heimischen Eiche in der freien Landschaft."
	},
	{
		id: 503,
		slug: "schnurbaum",
		name: "Schnurbaum",
		latin: "Styphnolobium japonicum",
		category: "baum",
		height: "10–20 m",
		since: 1747,
		origin: "Ostasien",
		insects: 5,
		climate: 5,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["trocken", "frisch"],
		note: "Späte Bienenweide im August. Stadtbaum, hitzeresistent. Für Klimaanpasser eine der klaren Optionen."
	},
	{
		id: 504,
		slug: "schneebeere",
		name: "Schneebeere",
		latin: "Symphoricarpos albus",
		category: "strauch",
		height: "1–2 m",
		since: 1880,
		origin: "Nordamerika",
		insects: 4,
		climate: 3,
		rating: "bewaehrt",
		light: [
			"sonne",
			"halbschatten",
			"schatten"
		],
		moisture: ["trocken", "frisch"],
		note: "Seit ~1880. Gute Nektarquelle, pflegeleicht, auch im Schatten. Beeren für Vögel, für Menschen ungenießbar."
	},
	{
		id: 505,
		slug: "silber-hartriegel",
		name: "Silber-Hartriegel",
		latin: "Cornus alba",
		category: "strauch",
		height: "2–3 m",
		since: 1880,
		origin: "Nordasien",
		insects: 3,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne", "halbschatten"],
		moisture: ["frisch", "feucht"],
		note: "Winterastfärbung, harmlos, schnittverträglich. Der heimische Rote Hartriegel bleibt die erste Wahl — dieser hier, wenn Farbe im Winter zählt."
	},
	{
		id: 506,
		slug: "mahonie",
		name: "Mahonie",
		latin: "Mahonia aquifolium",
		category: "strauch",
		height: "0,8–1,5 m",
		since: 1850,
		origin: "Nordamerika",
		insects: 3,
		climate: 3,
		rating: "bewaehrt",
		light: ["halbschatten", "schatten"],
		moisture: ["frisch"],
		note: "Immergrün, Halbschatten bis Vollschatten, gelbe Blüten im März, blaue Beeren. Seit ~1850 in europäischen Gärten. Ökologisch schwächer als Heimisch, robust und wartungsarm."
	},
	{
		id: 507,
		slug: "rosskastanie",
		name: "Gewöhnliche Rosskastanie",
		latin: "Aesculus hippocastanum",
		category: "baum",
		height: "20–25 m",
		since: 1576,
		origin: "Balkan",
		insects: 4,
		climate: 2,
		rating: "bewaehrt",
		light: ["sonne", "halbschatten"],
		moisture: ["frisch"],
		note: "Seit dem 16. Jahrhundert in deutschen Parks. Frühe Tracht. Miniermotte und Trockenheit setzen ihr zu — kein Klimabaum, aber etabliert."
	},
	{
		id: 508,
		slug: "walnuss",
		name: "Walnuss",
		latin: "Juglans regia",
		category: "baum",
		height: "15–25 m",
		since: 1600,
		origin: "Südosteuropa / Westasien",
		insects: 2,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Essbar, langlebig, Hofbaum. Allelopathie unter der Krone — Unterpflanzung wählen."
	},
	{
		id: 509,
		slug: "esskastanie",
		name: "Esskastanie",
		latin: "Castanea sativa",
		category: "baum",
		height: "15–25 m",
		since: 100,
		origin: "Südeuropa",
		insects: 3,
		climate: 4,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["trocken", "frisch"],
		note: "Römische Einbürgerung, Frucht, Wärmezeiger. Im Taunus an geschützten Lagen."
	},
	{
		id: 510,
		slug: "flieder",
		name: "Gemeiner Flieder",
		latin: "Syringa vulgaris",
		category: "strauch",
		height: "3–6 m",
		since: 1560,
		origin: "Südosteuropa",
		insects: 3,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["trocken", "frisch"],
		note: "Duft, Mai, schnittverträglich. Einfache Blüten, keine gefüllten Sorten — sonst fällt der Insektenwert."
	},
	{
		id: 511,
		slug: "pfeifenstrauch",
		name: "Pfeifenstrauch",
		latin: "Philadelphus coronarius",
		category: "strauch",
		height: "2–3 m",
		since: 1560,
		origin: "Südosteuropa",
		insects: 3,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne", "halbschatten"],
		moisture: ["frisch"],
		note: "Duft im Juni. Lang etabliert, unkompliziert. Gefüllte Züchtungen meiden."
	},
	{
		id: 512,
		slug: "platane",
		name: "Platane",
		latin: "Platanus × hispanica",
		category: "baum",
		height: "20–35 m",
		since: 1650,
		origin: "Gartenhybride",
		insects: 2,
		climate: 4,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Stadtbaum, schnittfest, hitzeverträglich. Für Höfe und Alleen, nicht für den Naturgarten."
	},
	{
		id: 513,
		slug: "ginkgo",
		name: "Ginkgo",
		latin: "Ginkgo biloba",
		category: "baum",
		height: "15–25 m",
		since: 1730,
		origin: "China",
		insects: 1,
		climate: 4,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Lebendes Fossil, stadtfest, kaum Insekten. Weibliche Bäume riechen im Fallobst — männliche Sorten wählen."
	},
	{
		id: 514,
		slug: "tulpenbaum",
		name: "Tulpenbaum",
		latin: "Liriodendron tulipifera",
		category: "baum",
		height: "20–30 m",
		since: 1688,
		origin: "Nordamerika",
		insects: 3,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Seit dem 17. Jahrhundert in europäischen Parks. Braucht Raum und tiefe Böden."
	},
	{
		id: 515,
		slug: "amberbaum",
		name: "Amberbaum",
		latin: "Liquidambar styraciflua",
		category: "baum",
		height: "12–20 m",
		since: 1681,
		origin: "Nordamerika",
		insects: 2,
		climate: 4,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Herbstfärbung, klimafest auf tiefem Boden. Flachwurzler neben Pflaster beachten."
	},
	{
		id: 516,
		slug: "trompetenbaum",
		name: "Trompetenbaum",
		latin: "Catalpa bignonioides",
		category: "baum",
		height: "10–18 m",
		since: 1726,
		origin: "Nordamerika",
		insects: 3,
		climate: 4,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Große Blätter, Schattenbaum für Höfe. Brüchiges Holz — nicht direkt am Gebäude."
	},
	{
		id: 517,
		slug: "zierquitte",
		name: "Zierquitte",
		latin: "Chaenomeles japonica",
		category: "strauch",
		height: "0,8–1,5 m",
		since: 1800,
		origin: "Ostasien",
		insects: 4,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne", "halbschatten"],
		moisture: ["trocken", "frisch"],
		note: "Frühe Tracht, Dornen, Frucht für Gelee. Gute Heckenkante, wo Schlehe zu wild ist."
	},
	{
		id: 518,
		slug: "blut-johannisbeere",
		name: "Blut-Johannisbeere",
		latin: "Ribes sanguineum",
		category: "strauch",
		height: "1,5–2,5 m",
		since: 1826,
		origin: "Nordamerika",
		insects: 4,
		climate: 3,
		rating: "bewaehrt",
		light: ["sonne", "halbschatten"],
		moisture: ["frisch"],
		note: "Märzblüte, Tracht wenn wenig anderes offen ist. Die heimische Johannisbeere bleibt die Frucht, diese die frühe Farbe."
	},
	{
		id: 519,
		slug: "pracht-fetthenne",
		name: "Pracht-Fetthenne",
		latin: "Hylotelephium spectabile",
		category: "staude",
		height: "0,4–0,6 m",
		since: 1860,
		origin: "Ostasien",
		insects: 5,
		climate: 5,
		rating: "bewaehrt",
		light: ["sonne"],
		moisture: ["trocken"],
		note: "Späte Bienenweide, Trockenheit, Kiesbeet. Ergänzt heimische Fetthennen, ersetzt sie nicht in der freien Landschaft."
	},
	{
		id: 520,
		slug: "bergenie",
		name: "Bergenie",
		latin: "Bergenia cordifolia",
		category: "staude",
		height: "0,3–0,5 m",
		since: 1779,
		origin: "Sibirien",
		insects: 2,
		climate: 3,
		rating: "bewaehrt",
		light: ["halbschatten", "schatten"],
		moisture: ["frisch"],
		note: "Immergrün, Schatten, früher Austrieb. Ökologisch mäßig — Struktur und Wintergrün, wo Günsel und Efeu schon gesetzt sind."
	},
	{
		id: 521,
		slug: "forsythie",
		name: "Forsythie",
		latin: "Forsythia × intermedia",
		category: "strauch",
		height: "2–3 m",
		since: 1840,
		origin: "Gartenhybride (Ostasien)",
		insects: 0,
		climate: 3,
		rating: "fragwuerdig",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Optisch schön, ökologisch wertlos — kaum Nektar, kaum Pollen. Nur mit klarer Begründung. Heimisch: Kornelkirsche."
	},
	{
		id: 522,
		slug: "chinaschilf",
		name: "Chinaschilf",
		latin: "Miscanthus sinensis",
		category: "gras",
		height: "1,5–2,5 m",
		since: 1880,
		origin: "Ostasien",
		insects: 1,
		climate: 4,
		rating: "fragwuerdig",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Strukturgeber, Selbstaussaat in warmen Jahren. Nicht neben Magerrasen. Heimische Alternative: Pfeifengras, Reitgras."
	},
	{
		id: 523,
		slug: "feuerdorn",
		name: "Feuerdorn",
		latin: "Pyracantha coccinea",
		category: "strauch",
		height: "2–4 m",
		since: 1629,
		origin: "Südeuropa / Westasien",
		insects: 3,
		climate: 3,
		rating: "fragwuerdig",
		light: ["sonne"],
		moisture: ["trocken", "frisch"],
		note: "Schöne Beeren, nur südexponiert winterhart. Vögel nutzen die Frucht. Heimisch: Weißdorn, Liguster."
	},
	{
		id: 524,
		slug: "essigbaum",
		name: "Essigbaum",
		latin: "Rhus typhina",
		category: "baum",
		height: "4–8 m",
		since: 1620,
		origin: "Nordamerika",
		insects: 2,
		climate: 4,
		rating: "fragwuerdig",
		light: ["sonne"],
		moisture: ["trocken"],
		note: "Herbstfarbe, Wurzelbrut. Nur mit Rhizomsperre oder gar nicht in offene Fläche."
	},
	{
		id: 525,
		slug: "blauregen",
		name: "Blauregen",
		latin: "Wisteria sinensis",
		category: "strauch",
		height: "8–15 m (Kletterer)",
		since: 1816,
		origin: "China",
		insects: 3,
		climate: 3,
		rating: "fragwuerdig",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Tracht, aber lastendes Holz an Rinnen und Dach. Nur an eigenem Gerüst. Giftig."
	},
	{
		id: 526,
		slug: "japan-spierstrauch",
		name: "Japan-Spierstrauch",
		latin: "Spiraea japonica",
		category: "strauch",
		height: "0,6–1,5 m",
		since: 1870,
		origin: "Ostasien",
		insects: 3,
		climate: 3,
		rating: "fragwuerdig",
		light: ["sonne", "halbschatten"],
		moisture: ["frisch"],
		note: "Blüht, versamt. In manchen Lagen Verwilderung. Heimisch: Spierstrauch der Wildform, wo vorhanden — sonst Liguster-Saum."
	},
	{
		id: 527,
		slug: "blutpflaume",
		name: "Blutpflaume",
		latin: "Prunus cerasifera 'Nigra'",
		category: "baum",
		height: "5–8 m",
		since: 1880,
		origin: "Zucht (Westasien)",
		insects: 2,
		climate: 3,
		rating: "fragwuerdig",
		light: ["sonne"],
		moisture: ["frisch"],
		note: "Rote Blätter, frühe Blüte, ökologisch schwach. Nur wenn die Farbe der Wunsch ist. Heimisch: Schlehe, Kirsche."
	},
	{
		id: 528,
		slug: "schmetterlingsstrauch",
		name: "Schmetterlingsstrauch",
		latin: "Buddleja davidii",
		category: "strauch",
		height: "2–4 m",
		since: 1890,
		origin: "China",
		insects: 3,
		climate: 4,
		rating: "problematisch",
		light: ["sonne"],
		moisture: ["trocken", "frisch"],
		note: "Invasiv in UK und der Schweiz, Selbstaussaat. Nur mit Warnung oder gar nicht. Heimisch: Dost, Natternkopf, Ligusterblüte."
	},
	{
		id: 529,
		slug: "immergruen-vinca",
		name: "Kleines Immergrün",
		latin: "Vinca minor",
		category: "bodendecker",
		height: "0,1–0,2 m",
		since: 800,
		origin: "Südeuropa (Archäophyt)",
		insects: 2,
		climate: 3,
		rating: "problematisch",
		light: ["halbschatten", "schatten"],
		moisture: ["frisch"],
		note: "Kein heimischer Bodendecker, sondern Klostergarten-Verwilderung — trotzdem branchenweit als heimisch verkauft. Vorsicht. Heimisch: Efeu, Günsel, Walderdbeere."
	},
	{
		id: 530,
		slug: "kanadische-felsenbirne",
		name: "Kanadische Felsenbirne",
		latin: "Amelanchier lamarckii",
		category: "strauch",
		height: "4–8 m",
		since: 1800,
		origin: "Nordamerika",
		insects: 3,
		climate: 3,
		rating: "problematisch",
		light: ["sonne", "halbschatten"],
		moisture: ["frisch"],
		note: "Nicht heimisch. Die echte Felsenbirne ist Amelanchier ovalis. Diese hier wird oft falsch gelabelt. Nur mit Warnung."
	}
];
var WARN_OFF_LIST = [
	{
		name: "Lorbeerkirsche / Kirschlorbeer",
		latin: "Prunus laurocerasus",
		reason: "Invasiv in Naturschutzgebieten, ökologisch schlecht."
	},
	{
		name: "Thuja / Lebensbaum",
		latin: "Thuja occidentalis",
		reason: "Ökologisch wertlos."
	},
	{
		name: "Götterbaum",
		latin: "Ailanthus altissima",
		reason: "EU-Liste invasiver Arten."
	},
	{
		name: "Japanische Berberitze",
		latin: "Berberis thunbergii",
		reason: "Invasiv. Nicht die heimische Berberis vulgaris."
	},
	{
		name: "Bambus (unkontrolliert)",
		latin: "Phyllostachys / Sasa",
		reason: "Wurzelbrut."
	}
];
var NEUBUERGER_META = {
	title: "Etablierte Neubürger in Hessen",
	count: NEUBUERGER.length,
	bewaehrt: NEUBUERGER.filter((n) => n.rating === "bewaehrt").length,
	fragwuerdig: NEUBUERGER.filter((n) => n.rating === "fragwuerdig").length,
	problematisch: NEUBUERGER.filter((n) => n.rating === "problematisch").length
};
function ratingLabel(r) {
	if (r === "bewaehrt") return "Bewährt";
	if (r === "fragwuerdig") return "Fragwürdig";
	return "Problematisch";
}
function categoryLabel(c) {
	return {
		baum: "Baum",
		strauch: "Strauch",
		staude: "Staude",
		gras: "Gras",
		bodendecker: "Bodendecker"
	}[c];
}
var RATINGS = [
	{
		id: "alle",
		label: "Jede Bewertung"
	},
	{
		id: "bewaehrt",
		label: "Bewährt"
	},
	{
		id: "fragwuerdig",
		label: "Fragwürdig"
	},
	{
		id: "problematisch",
		label: "Problematisch"
	}
];
var LIGHTS = [
	{
		id: "alle",
		label: "Jedes Licht"
	},
	{
		id: "sonne",
		label: "Sonne"
	},
	{
		id: "halbschatten",
		label: "Halbschatten"
	},
	{
		id: "schatten",
		label: "Schatten"
	}
];
function NeubuergerPage() {
	const [rating, setRating] = (0, import_react.useState)("alle");
	const [light, setLight] = (0, import_react.useState)("alle");
	const filtered = (0, import_react.useMemo)(() => NEUBUERGER.filter((n) => {
		if (rating !== "alle" && n.rating !== rating) return false;
		if (light !== "alle" && !n.light.includes(light)) return false;
		return true;
	}), [rating, light]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: "/images/wildhecke.jpg",
			kicker: "Zweite Liste",
			title: "Etablierte Neubürger in Hessen",
			lede: "Dreißig nicht-heimische Arten mit ökologischem Mehrwert. Seit 100 bis 400 Jahren in europäischen Gärten. Nicht statt Heimisch — daneben, mit Gründen."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Drei Gespräche" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: "Purist, Pragmatiker, Klima."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: [
					"Wer nur heimisch will, bleibt bei den ",
					GEK_META.species,
					" Arten. Diese Liste bedient den, dem wachsen und Aussehen reicht — und den, der Hitze über Schönheit stellt. Sie sagt nicht: nimm Neubürger statt Heimisch."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: [
					{
						t: "Purist",
						d: "Nur heimisch. Das ist mir wichtig. — 186 Arten. Diese Liste entfällt."
					},
					{
						t: "Pragmatiker",
						d: "Mir egal, ob heimisch. Wichtig: wächst, sieht gut aus. — 30 Arten plus Gründe."
					},
					{
						t: "Klimaanpasser",
						d: "Lieber robust als schön. — Robinie, Roteiche, Schnurbaum, gemischt mit Heimisch."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: s.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: s.d
					})]
				}, s.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-2xl text-sm text-muted",
				children: [
					NEUBUERGER_META.bewaehrt,
					" bewährt, ",
					NEUBUERGER_META.fragwuerdig,
					" fragwürdig,",
					" ",
					NEUBUERGER_META.problematisch,
					" problematisch. Fragwürdige nur mit Begründung. Problematische nur mit Warnung — oder gar nicht."
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Filter" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Die dreißig Arten"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted tabular-nums",
						children: [
							filtered.length,
							" von ",
							NEUBUERGER.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: RATINGS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRating(r.id),
						className: cn("min-h-11 rounded-sm px-3 py-2 text-sm", rating === r.id ? "bg-forest text-cream" : "bg-cream text-ink"),
						children: r.label
					}, r.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: LIGHTS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLight(l.id),
						className: cn("min-h-11 rounded-sm px-3 py-2 text-sm", light === l.id ? "bg-forest text-cream" : "bg-cream text-ink"),
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: filtered.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: n.slug,
						className: "rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-gold",
								children: [
									categoryLabel(n.category),
									" · ",
									n.id,
									" · seit ~",
									n.since
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: n.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm italic text-muted",
								children: n.latin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-moss",
								children: [
									n.origin,
									" · ",
									n.height,
									" · Insekten ",
									n.insects,
									"/5 · Klima ",
									n.climate,
									"/5"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-3 inline-block rounded-sm px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em]", n.rating === "bewaehrt" && "bg-moss/15 text-moss", n.rating === "fragwuerdig" && "bg-gold/20 text-ink", n.rating === "problematisch" && "bg-danger/15 text-danger"),
								children: ratingLabel(n.rating)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: n.note
							})
						]
					}, n.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Nicht auf der Liste" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: "Warnsignale"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Zu invasiv oder ökologisch wertlos. Wir pflanzen sie nicht."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-ink/10 rounded-xl bg-paper",
				children: WARN_OFF_LIST.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: w.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm italic text-muted",
							children: w.latin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: w.reason
						})
					]
				}, w.latin))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-sm text-muted",
				children: "Auch nicht: Myrte, Oleander, Palmen, gefüllte Hortensien. Die Grenze ist Winterhärte und messbarer Nutzen — nicht der Katalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pflanzen",
						children: "Zur heimischen Liste"
					})
				})
			})
		] })
	] });
}
//#endregion
export { NeubuergerPage as component };
