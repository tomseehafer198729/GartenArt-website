import { n as SITE } from "./site-BmhHQd-o.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { r as WishPairCard, t as FEATURED_WISHES } from "./alternatives-NHf0MpML.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
import { t as PROJECTS } from "./projects-OAl-TWgB.mjs";
import { t as ProjectArticle } from "./project-gallery-CMFE_wI7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privat-ByBfr7wT.js
var import_jsx_runtime = require_jsx_runtime();
function PrivatPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: "/images/bereiche/privat.jpg?v=hof",
			imageClassName: "object-[center_50%]",
			kicker: "Privatkunden",
			title: "Ihr Garten. Gebaut, dann heimisch.",
			lede: "Zuerst die Arbeit, die steht: Vorher und Nachher. Dann Bau und Naturgarten — zwei Wege, ein Hof."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Gebaut" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Vorher und Nachher"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: [
						"Das sind Gärten aus dem ",
						SITE.region,
						". Stein, Thymian, Terrasse, Gartenhaus — Arbeit, die steht. Danach die Pflanzung."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/leistungen",
						children: "Zum Bau"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/naturgaerten",
						children: "Zu den Naturgärten"
					})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-10",
			children: PROJECTS.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectArticle, { project }, project.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Schritt für Schritt" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Nicht belehren. Ersetzen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Viele Gärten der letzten hundert Jahre in Deutschland sind aus dem Katalog: Lavendel, Kirschlorbeer, Forsythie, Thuja. Sie erfüllen einen Wunsch. Die heimische Art erfüllt denselben Wunsch — und bleibt. Kein Verbot. Eine Alternative."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: [
						{
							n: "01",
							t: "Sie sagen, was Sie mögen",
							d: "Duft, grüne Hecke, gelb im März, Teppich statt Rasen."
						},
						{
							n: "02",
							t: "Wir nennen die Art",
							d: "Sandthymian statt Lavendel. Liguster statt Kirschlorbeer. Kornelkirsche statt Forsythie."
						},
						{
							n: "03",
							t: "Der Garten wechselt",
							d: "Stück für Stück. Was gebaut ist, bleibt. Was gepflanzt wird, wurzelt hier."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-gold",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.d
							})
						]
					}, s.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Pflanzarbeiten" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Sie wünschen sich das. Heimisch ist das."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/alternativen",
					className: "hidden text-sm text-moss sm:inline-flex",
					children: "Alle Paare"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Besser für Insekt, Boden, Winter — und für den Garten, den Sie jeden Tag sehen."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: FEATURED_WISHES.map((pair) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishPairCard, { pair }) }, pair.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/alternativen",
						children: "Weitere Alternativen"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/neubuerger",
						children: "Etablierte Neubürger"
					})
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Zweite Liste" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Wenn heimisch nicht die Frage ist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Manche wollen nur, dass es wächst. Manche wollen Hitze fest. Dafür gibt es dreißig etablierte Neubürger — Robinie, Mahonie, Roteiche — mit Herkunft und Warnung, nie als „fast heimisch“."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/neubuerger",
							children: "Zur Neubürgerliste"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "forest",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Erstgespräch" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-cream",
					children: "Den Garten erklären"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-xl text-cream/80",
					children: [
						"Lage, Licht, was Sie mögen, was schon steht. Wir sagen, was gebaut und welche Art gesetzt wird. ",
						SITE.owner,
						", ",
						SITE.address.city,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							children: "Kontakt aufnehmen"
						})
					})
				})
			]
		})
	] });
}
//#endregion
export { PrivatPage as component };
