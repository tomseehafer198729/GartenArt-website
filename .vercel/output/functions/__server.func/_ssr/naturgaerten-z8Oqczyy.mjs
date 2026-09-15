import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/naturgaerten-z8Oqczyy.js
var import_jsx_runtime = require_jsx_runtime();
function NaturgaertenPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: "/images/waldgarten.jpg",
			kicker: "Haltung",
			title: "Naturgärten sind gebaute Landschaft.",
			lede: "Kein Dekor aus der Baumschule. Ein Garten, der an den Ort gebunden ist: Boden, Licht, Wasser, und die Flora Hessens."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Flora" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Was „heimisch“ hier heißt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: "Wir setzen nur Arten, deren Vorkommen in Hessen mindestens dreitausend Jahre zurückreicht — nacheiszeitlich etablierte Flora, keine Archäophyten der Römerzeit, keine Neophyten nach 1492. Der Filter ist streng, weil Insekten Generationen brauchen, um eine Pflanze zu nutzen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Kirschlorbeer, Thuja, Forsythie: der Wunsch ist verständlich. An ihre Stelle treten Liguster der Wildform, Hainbuche, Schlehe, Wiesensalbei, Dost — dieselbe Aufgabe, die Art aus Hessen."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Pflege" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Mager, spät, unaufgeräumt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: "Eine Wiese wird ein- bis zweimal gemäht, das Mähgut abgeräumt. Hecken werden abschnittsweise auf Stock gesetzt, nicht jährlich in Form geschoren. Laub bleibt unter Gehölzen. Totholz bleibt liegen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Das ist kein Verzicht auf Gestaltung. Wege, Sitzplätze und Mauern sind klar gesetzt. Der Rest darf sich staffeln — von der Magerrasenfläche zum Waldmantel."
				})
			] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Raumtypen" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Fünf Bilder eines Grundstücks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: [
						{
							n: "01",
							t: "Magerrasen",
							d: "Abgeschobener Oberboden, regionales Mähgut, Zittergras und Salbei. Ein Mahdweg hält die Fläche begehbar."
						},
						{
							n: "02",
							t: "Wildhecke",
							d: "Drei Reihen: Schlehe, Weißdorn, Rose, Hartriegel, Holunder. Davor Krautsaum, dahinter Totholzriegel."
						},
						{
							n: "03",
							t: "Waldgarten",
							d: "Schatten unter Bestand. Geophyten im Frühjahr, Immergrün und Waldmeister als Teppich, keine Folie."
						},
						{
							n: "04",
							t: "Feuchtbiotop",
							d: "Flachtümpel ohne steile Folienkante. Seggen, Mädesüß, Blutweiderich. Wasser vom Dach oder Stauhorizont."
						},
						{
							n: "05",
							t: "Saum",
							d: "Der wichtigste Meter im Garten: Übergang von Wiese zu Hecke. Dort sitzen die meisten Arten."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-gold",
								children: item.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: item.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.d
							})
						]
					}, item.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "forest",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/wildhecke.jpg",
					alt: "Heimische Wildhecke im Spätsommer",
					className: "aspect-[16/10] w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-cream",
						children: "Vom Plan zur Pflanzung"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-cream/80",
						children: "Zuerst der Ort: Bodenprobe, Licht, Nachbarschaft, vorhandener Bestand. Dann die Artenliste aus dem Verzeichnis. Dann der Bau — Wege und Mauern, bevor gepflanzt wird."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pflanzen",
								children: "Zum Verzeichnis"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/planer",
								children: "Saisonkalender öffnen"
							})
						})]
					})
				] })]
			})
		})
	] });
}
//#endregion
export { NaturgaertenPage as component };
