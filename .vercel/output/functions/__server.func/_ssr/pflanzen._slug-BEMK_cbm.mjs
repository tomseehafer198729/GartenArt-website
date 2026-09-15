import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as bloomLabel, f as categoryLabel, g as moistureLabel, h as lightLabel, m as getPlant, n as Route, o as MONTHS, p as creditLabel } from "./router-vI6J447R.mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pflanzen._slug-BEMK_cbm.js
var import_jsx_runtime = require_jsx_runtime();
function PlantDetailPage() {
	const { plant } = Route.useLoaderData();
	const related = plant.companions.map((slug) => getPlant(slug)).filter((p) => Boolean(p));
	const image = plant.moisture.includes("feucht") ? "/images/feuchtwiese.jpg" : plant.category === "baum" || plant.light.includes("schatten") ? "/images/waldgarten.jpg" : plant.category === "strauch" || plant.category === "kleinstrauch" ? "/images/wildhecke.jpg" : "/images/wildblueten.jpg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image,
		compact: true,
		kicker: `${categoryLabel(plant.category)} · ${plant.gekId}`,
		title: plant.name,
		lede: plant.latin
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.3fr_0.7fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Steckbrief" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-ink",
					children: plant.ecology
				}),
				plant.praxis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-lg bg-paper px-4 py-3 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-moss",
						children: "Praxis. "
					}), plant.praxis]
				}) : null,
				plant.edibleNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-moss",
						children: "Essbar. "
					}), plant.edibleNote]
				}) : null,
				plant.toxicNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-danger",
						children: "Giftig. "
					}), plant.toxicNote]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-3xl",
					children: "Blühverlauf"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Relative Blühintensität über das Jahr, abgeleitet aus der GEK-Blütezeit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 grid grid-cols-12 gap-1",
					children: plant.bloomCurve.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-28 w-full items-end rounded-sm bg-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-full rounded-sm bg-moss",
								style: { height: `${Math.max(6, value)}%` },
								title: `${MONTHS[i]}: ${value}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wide text-muted",
							children: MONTHS[i]
						})]
					}, MONTHS[i]))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "h-fit rounded-xl bg-paper p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Kennziffer",
							value: plant.gekId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Anrechnung",
							value: creditLabel(plant.credit)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Ökologischer Wert",
							value: `${"●".repeat(plant.eco)}${"○".repeat(5 - plant.eco)}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Wuchshöhe",
							value: plant.height || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Wuchsform",
							value: plant.form || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Licht",
							value: plant.light.map(lightLabel).join(", ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Bodenfeuchte",
							value: plant.moisture.map(moistureLabel).join(", ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Boden",
							value: plant.soil || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Bodenart",
							value: plant.soilType || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Lebensbereich",
							value: plant.lifeZone || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Blüte",
							value: bloomLabel(plant)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Blütenfarbe",
							value: plant.bloomColor || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Geselligkeit",
							value: plant.sociability || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Stück je m²",
							value: plant.density || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Vorkommen",
							value: plant.occurrence || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Kennzeichen",
							value: [
								plant.edible ? "essbar" : null,
								plant.toxic ? "giftig" : null,
								plant.protected ? "geschützt" : null
							].filter(Boolean).join(" · ") || "—"
						})
					]
				})
			})]
		}),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Gesellschaft" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl",
					children: "Passende Arten"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/pflanzen/$slug",
						params: { slug: p.slug },
						className: "block rounded-lg bg-paper p-4 hover:bg-forest hover:text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gold",
							children: p.latin
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: p.name
						})]
					}) }, p.slug))
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/pflanzen",
				className: "text-sm text-moss",
				children: ["Alle ", categoryLabel(plant.category).toLowerCase()]
			})
		})
	] })] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs uppercase tracking-[0.16em] text-gold",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1",
		children: value
	})] });
}
//#endregion
export { PlantDetailPage as component };
