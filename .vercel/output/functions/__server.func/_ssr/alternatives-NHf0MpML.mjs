import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alternatives-NHf0MpML.js
var import_jsx_runtime = require_jsx_runtime();
function WishPairCard({ pair }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-gold",
				children: "Wunsch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-3xl",
				children: pair.wish
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Will"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-ink",
						children: pair.want
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Braucht"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-ink",
						children: pair.need
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-[0.16em] text-gold",
						children: "Heimisch stattdessen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: pair.instead.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pflanzen/$slug",
							params: { slug: p.slug },
							className: "rounded-sm bg-cream px-2 py-1 text-xs text-moss hover:bg-gold/20",
							children: p.name
						}, p.slug))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 flex-1 text-sm leading-relaxed text-muted",
				children: pair.why
			})
		]
	});
}
/** Wunsch des Kunden → heimische Art aus der GEK-Liste. */
var WISH_PAIRS = [
	{
		id: "lavendel",
		wish: "Lavendel",
		want: "Duft, silbergrau, Bienen, Kiesbeet.",
		need: "Trockenheit, Tracht, Pflanze, die den Taunuswinter übersteht.",
		why: "Lavendel kommt aus dem Mittelmeer und fällt in nassen Wintern aus. Sandthymian und Dost machen denselben Garten — Duft, Insekt, magerer Boden — und bleiben.",
		instead: [{
			slug: "sand-thymian",
			name: "Sand-Thymian"
		}, {
			slug: "wilder-majoran-oregano",
			name: "Wilder Majoran"
		}]
	},
	{
		id: "kirschlorbeer",
		wish: "Kirschlorbeer",
		want: "Immergrüne, dichte Hecke, Sichtschutz.",
		need: "Schluss, Schnitt, Futter für Vögel und Insekten.",
		why: "Kirschlorbeer ist eine grüne Wand ohne Leben. Liguster der Wildform und Schlehe schließen genauso — und blühen und tragen.",
		instead: [{
			slug: "liguster",
			name: "Liguster"
		}, {
			slug: "schlehe",
			name: "Schlehe"
		}]
	},
	{
		id: "forsythie",
		wish: "Forsythie",
		want: "Gelb im März, bevor sonst etwas blüht.",
		need: "Frühe Tracht, wenn Wildbienen auskommen.",
		why: "Forsythie ist für hiesige Insekten eine leere Blüte. Kornelkirsche blüht noch früher und hängt danach voller Frucht.",
		instead: [{
			slug: "kornelkirsche",
			name: "Kornelkirsche"
		}]
	},
	{
		id: "thuja",
		wish: "Thuja / Lebensbaum",
		want: "Grüne Wand, schnell dicht, wenig Arbeit.",
		need: "Sichtschutz, der geschnitten werden kann und trotzdem lebt.",
		why: "Thuja ist eine Röhre. Hainbuche wird zur Wand, hält Laub oft den Winter, und ist Futter.",
		instead: [{
			slug: "hainbuche",
			name: "Hainbuche"
		}, {
			slug: "liguster",
			name: "Liguster"
		}]
	},
	{
		id: "hortensie",
		wish: "Hortensie",
		want: "Große Sommerblüte am Haus, Strauch.",
		need: "Blüte und Struktur ohne Torf und Dünger.",
		why: "Hortensie will ein anderes Klima. Wolliger Schneeball und Holunder blühen am selben Platz — und gehören nach Hessen.",
		instead: [{
			slug: "wolliger-schneeball",
			name: "Wolliger Schneeball"
		}, {
			slug: "schwarzer-holunder",
			name: "Schwarzer Holunder"
		}]
	},
	{
		id: "buchs",
		wish: "Buchs",
		want: "Kugel, Kante, immergrün, Form.",
		need: "Schnittverträglich, wintergrün, ohne Zünsler.",
		why: "Buchs stirbt am Zünsler. Stechpalme und Liguster halten Form und bleiben.",
		instead: [{
			slug: "stechpalme",
			name: "Stechpalme"
		}, {
			slug: "liguster",
			name: "Liguster"
		}]
	},
	{
		id: "beetrose",
		wish: "Gefüllte Beetrose",
		want: "Rose am Zaun, Duft, romantisch.",
		need: "Blüte, die Insekten nutzen, plus Hagebutte.",
		why: "Gefüllte Sorten sind eine Sackgasse. Hundsrose und Heckenrose sind die Rose, die hier wurzelt.",
		instead: [{
			slug: "hundsrose",
			name: "Hundsrose"
		}, {
			slug: "heckenrose",
			name: "Heckenrose"
		}]
	},
	{
		id: "teppich",
		wish: "Immergrüner Bodendecker",
		want: "Fläche zu, kein Unkraut, wenig Pflege.",
		need: "Deckung, die Insekten und Boden kennt.",
		why: "Cotoneaster und Immergrün aus dem Handel sind oft invasiv. Efeu, Walderdbeere und Günsel schließen die Fläche aus dem Verzeichnis.",
		instead: [
			{
				slug: "efeu",
				name: "Efeu"
			},
			{
				slug: "walderdbeere",
				name: "Walderdbeere"
			},
			{
				slug: "kriechender-guensel",
				name: "Kriechender Günsel"
			}
		]
	}
];
var FEATURED_WISHES = WISH_PAIRS.slice(0, 4);
//#endregion
export { WISH_PAIRS as n, WishPairCard as r, FEATURED_WISHES as t };
