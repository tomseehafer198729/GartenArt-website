import { n as SITE } from "./site-BmhHQd-o.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leistungen-CZ0pzrKh.js
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		title: "Gartenumbau",
		image: "/images/projekt-umgestaltung.jpg",
		text: "Beete, Wege, Rasen, Pflanzung — neu geordnet, nicht nur aufgeräumt. Von der Umgestaltung eines 200-m²-Gartens bis zum kompletten Neubau."
	},
	{
		title: "Wege, Pflaster, Einfassungen",
		image: "/images/pfad.jpg",
		text: "Kleinsteinpflaster, Wegplatten, Randeinfassungen. Der Stein fasst die Fläche, das Wasser bleibt im Boden, wo es hingehört."
	},
	{
		title: "Terrassen und Treppen, altersgerecht",
		image: "/images/projekt-neubau.jpg",
		text: "Barrierefreie Terrassen, nutzbare Treppen, Hochbeete in greifbarer Höhe. Gebaut für Senioren, die den Garten weiter selbst nutzen wollen."
	},
	{
		title: "Gartenhäuser und Fundamente",
		image: "/images/projekt-gartenhaus.jpg",
		text: "Aushub, Randeinfassung, betoniertes Fundament, Gartenhaus darauf — etwa Biohort. Der Bau sitzt eben, bevor das Haus kommt."
	},
	{
		title: "Rasen und Vorgärten",
		image: "/images/projekt-rollrasen.jpg",
		text: "Rasennarbe abziehen, fräsen, planieren, düngen, Rollrasen. Vorgärten mit Pflanzsteinen, Kies und klarer Pflanzung."
	},
	{
		title: "Pflanzung heimischer Arten",
		image: "/images/wildblueten.jpg",
		text: "Sie sagen, was Sie mögen. Wir setzen die Art aus dem Verzeichnis, die denselben Zweck erfüllt. 186 Arten, Beratung statt Verbot."
	},
	{
		title: "Gehölze für Kommune und Gewerbe",
		image: "/images/bereiche/kommune.jpg",
		text: "Restoration Act, CSRD, Ausgleich. Heimische Gehölze mit Nachweis — öffentliche Fläche und Betriebsgelände."
	}
];
function LeistungenPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: "/images/projekt-neubau.jpg",
			kicker: "Leistungen",
			title: SITE.fullName,
			lede: "Planung, Pflanzung und Bau aus einer Hand. Wir bauen, was der Garten braucht — inklusive der Pflanzen, die der Standort verlangt."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Angebot" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: "Was wir bauen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)] md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: "",
						className: `aspect-[16/10] w-full object-cover md:aspect-auto md:h-full ${i % 2 === 1 ? "md:order-2" : ""}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-3xl text-gold",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-3xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: s.text
							})
						]
					})]
				}, s.title))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "forest",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-cream",
					children: "Ein erstes Gespräch vor Ort"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-xl text-cream/80",
					children: [
						"Wir schauen uns das Grundstück an, bevor wir zeichnen. Sitz in Oberursel, Einsatzgebiet ",
						SITE.region,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							children: "Termin anfragen"
						})
					})
				})
			]
		})
	] });
}
//#endregion
export { LeistungenPage as component };
