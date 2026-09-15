import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
import { _ as plantMatchesSoil, a as GEK_META, c as NEGATIVE_LIST, d as bloomLabel, f as categoryLabel, g as moistureLabel, h as lightLabel, i as CATEGORIES, l as PLANTS, o as MONTHS, p as creditLabel, r as cn, u as SOIL_GROUPS, v as soilLabel } from "./router-vI6J447R.mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pflanzen-BSwD2V4F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LIGHTS = [
	{
		id: "alle",
		label: "Jeder Standort"
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
var MOISTURES = [
	{
		id: "alle",
		label: "Jede Feuchte"
	},
	{
		id: "trocken",
		label: "trocken"
	},
	{
		id: "frisch",
		label: "frisch"
	},
	{
		id: "feucht",
		label: "feucht"
	}
];
var CREDITS = [
	{
		id: "alle",
		label: "Jede Anrechnung"
	},
	{
		id: "voll",
		label: "voll anrechenbar"
	},
	{
		id: "bedingt",
		label: "bedingt"
	},
	{
		id: "nein",
		label: "nicht anrechenbar"
	}
];
function PflanzenPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("alle");
	const [light, setLight] = (0, import_react.useState)("alle");
	const [moisture, setMoisture] = (0, import_react.useState)("alle");
	const [soil, setSoil] = (0, import_react.useState)("alle");
	const [credit, setCredit] = (0, import_react.useState)("alle");
	const [month, setMonth] = (0, import_react.useState)(0);
	const [onlyEdible, setOnlyEdible] = (0, import_react.useState)(false);
	const [onlyProtected, setOnlyProtected] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
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
			return p.name.toLowerCase().includes(q) || p.latin.toLowerCase().includes(q) || p.gekId.toLowerCase().includes(q) || p.ecology.toLowerCase().includes(q) || p.habitat.toLowerCase().includes(q) || p.soil.toLowerCase().includes(q) || p.soilType.toLowerCase().includes(q);
		});
	}, [
		query,
		cat,
		light,
		moisture,
		soil,
		credit,
		month,
		onlyEdible,
		onlyProtected
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: "/images/wildblueten.jpg",
			kicker: "GEK · v4.0",
			title: "Pflanzendatenbank Hessen",
			lede: `${GEK_META.species} heimische Arten. Den Wunsch übersetzen wir in die Art, die hier denselben Zweck erfüllt. Stand ${GEK_META.date}.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-2xl text-muted",
				children: [
					"Lavendel, Kirschlorbeer, Forsythie: der Wunsch bleibt. Die Art wechselt.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/alternativen",
						className: "text-moss",
						children: "Wunsch und Art"
					}),
					". Wer nicht nur heimisch pflanzen will:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/neubuerger",
						className: "text-moss",
						children: "etablierte Neubürger"
					}),
					"— dreißig Arten, zweite Quelle, nicht vermischt."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Filter" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Artenliste"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted tabular-nums",
					children: [
						filtered.length,
						" von ",
						PLANTS.length,
						" Arten"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl bg-paper p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Pflanze suchen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Name, Latein, GEK-Nummer…",
								className: "h-12 w-full rounded-md border border-ink/10 bg-cream pr-10 pl-10 text-base outline-none focus:border-gold"
							}),
							query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center text-muted",
								onClick: () => setQuery(""),
								"aria-label": "Suche löschen",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: cat === c.id,
							onClick: () => setCat(c.id),
							children: c.label
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: LIGHTS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: light === l.id,
							onClick: () => setLight(l.id),
							children: l.label
						}, l.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: MOISTURES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: moisture === m.id,
							onClick: () => setMoisture(m.id),
							children: m.label
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: SOIL_GROUPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: soil === s.id,
							onClick: () => setSoil(s.id),
							children: s.label
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							CREDITS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: credit === c.id,
								onClick: () => setCredit(c.id),
								children: c.label
							}, c.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: onlyEdible,
								onClick: () => setOnlyEdible((v) => !v),
								children: "essbar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: onlyProtected,
								onClick: () => setOnlyProtected((v) => !v),
								children: "geschützt"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: month === 0,
							onClick: () => setMonth(0),
							children: "Jede Blüte"
						}), MONTHS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: month === i + 1,
							onClick: () => setMonth(i + 1),
							children: label
						}, label))]
					})
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 rounded-lg border border-ink/10 bg-paper px-5 py-8 text-center text-muted",
				children: "Keine Art passt zu dieser Auswahl. Setzen Sie einen Filter zurück oder suchen Sie nach dem deutschen oder lateinischen Namen."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pflanzen/$slug",
					params: { slug: plant.slug },
					className: "flex h-full flex-col rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-forest hover:text-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center justify-between gap-2 text-xs uppercase tracking-[0.16em] text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: categoryLabel(plant.category) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums opacity-80",
								children: plant.gekId
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl",
							children: plant.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "italic opacity-70",
							children: plant.latin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider opacity-70",
								children: "Boden. "
							}), soilLabel(plant)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm opacity-80",
							children: plant.ecology
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs uppercase tracking-wider opacity-70",
							children: [
								creditLabel(plant.credit),
								" · ",
								plant.light.map(lightLabel).join(" · "),
								" ·",
								" ",
								plant.moisture.map(moistureLabel).join("/"),
								" · ",
								bloomLabel(plant)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-gold",
							"aria-label": `Ökologischer Wert ${plant.eco} von 5`,
							children: ["●".repeat(plant.eco), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-40",
								children: "○".repeat(5 - plant.eco)
							})]
						})
					]
				}) }, plant.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "negativliste",
				className: "scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "GEK · 16 Arten" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl",
							children: "Negativliste Bodendecker"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted",
							children: "Diese Arten werden im GEK-System nicht empfohlen. Rechts der heimische Ersatz aus der Datenbank — klickbar, wo die Art im Verzeichnis steht."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/docs/GEK-Negativliste-Bodendecker.pdf",
						download: true,
						className: "inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm bg-forest px-4 text-sm text-cream",
						children: "Liste als PDF"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-x-auto rounded-xl bg-cream shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[52rem] text-left text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
								className: "sr-only",
								children: "16 nicht empfohlene Arten mit Herkunft, heimischem Ersatz und Begründung"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-forest text-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-normal",
										children: "Art"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-normal",
										children: "Herkunft"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-normal",
										children: "Heimischer Ersatz"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-normal",
										children: "Begründung"
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: NEGATIVE_LIST.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-ink/10 align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg",
											children: row.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "italic text-muted",
											children: row.latin
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-4 text-muted",
										children: row.origin
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1",
											children: row.replace.map((alt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: alt.avoid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-danger",
												children: [alt.name, " meiden"]
											}) : alt.slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/pflanzen/$slug",
												params: { slug: alt.slug },
												className: "text-moss underline-offset-2 hover:underline",
												children: alt.name
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: alt.name }) }, alt.latin ?? alt.name))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-4 text-muted",
										children: row.reason
									})
								]
							}, row.latin)) })
						]
					})
				})]
			})
		})
	] });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-10 rounded-sm px-3 text-sm tracking-wide transition-colors duration-150", active ? "bg-forest text-cream" : "bg-cream text-ink hover:bg-gold/20"),
		children
	});
}
//#endregion
export { PflanzenPage as component };
