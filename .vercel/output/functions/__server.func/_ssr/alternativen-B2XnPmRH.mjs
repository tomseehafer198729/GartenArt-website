import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as WISH_PAIRS, r as WishPairCard } from "./alternatives-NHf0MpML.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alternativen-B2XnPmRH.js
var import_jsx_runtime = require_jsx_runtime();
function AlternativenPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: "/images/wildblueten.jpg",
			kicker: "Beratung",
			title: "Was Sie mögen. Was der Garten braucht.",
			lede: "Kein Verbot. Eine Übersetzung: der Wunsch bleibt, die Art wechselt — in die 186, die in Hessen wurzeln."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Wunsch und Art" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: "Geht. Mit der Pflanze, die hier hingehört."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Terrasse, Weg, Hecke, Beet: das bauen wir. Bei der Pflanzung ersetzen wir den Katalog durch die heimische Variante, die denselben Zweck erfüllt. Duft, Sichtschutz, frühe Blüte — der Bedarf bleibt, die Art wechselt."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: WISH_PAIRS.map((pair) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishPairCard, { pair }) }, pair.id))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Erstgespräch: den Garten erklären"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "Lage, Licht, was Sie mögen. Wir sagen, welche Art den Zweck erfüllt. Jede Ersatzart steht in der GEK-Liste."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							children: "Kontakt aufnehmen"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pflanzen",
							children: "Zum Verzeichnis"
						})
					})]
				})
			]
		})
	] });
}
//#endregion
export { AlternativenPage as component };
