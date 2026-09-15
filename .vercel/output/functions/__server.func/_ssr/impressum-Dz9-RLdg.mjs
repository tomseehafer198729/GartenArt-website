import { n as SITE } from "./site-BmhHQd-o.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impressum-Dz9-RLdg.js
var import_jsx_runtime = require_jsx_runtime();
function ImpressumPage() {
	const { legal } = SITE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		image: "/images/werkstatt.jpg",
		kicker: "Rechtliches",
		title: "Impressum",
		lede: "Angaben gemäß § 5 DDG."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Anbieter" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: SITE.fullName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					legal.form,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					legal.ownerRole,
					": ",
					SITE.owner,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Berufsbezeichnung: ",
					legal.profession,
					" (Deutschland)"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4",
				children: [
					SITE.address.street,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					SITE.address.zip,
					" ",
					SITE.address.city
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4",
				children: [
					"Telefon:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.phoneHref,
						className: "text-moss",
						children: SITE.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"E-Mail:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${SITE.email}`,
						className: "text-moss",
						children: SITE.email
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					"Einsatzgebiet: ",
					SITE.region,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-3xl",
				children: "Gewerbe und Steuern"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					"Gewerbeanmeldung über das ",
					legal.gewerbeOffice,
					". Das Aktenzeichen und die Umsatzsteuer-Identifikationsnummer werden hier eingetragen, sobald sie erteilt sind — nicht vorher, und nicht erfunden."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-5 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Gewerbe-Aktenzeichen",
						value: legal.gewerbeRef || "folgt nach der Anmeldung beim Ordnungsamt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "USt-IdNr. (§ 27a UStG)",
						value: legal.ustId || "folgt, sofern erteilt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Wirtschafts-Identifikationsnummer",
						value: legal.wIdNr || "folgt nach Mitteilung durch das Bundeszentralamt für Steuern"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					"Garten- und Landschaftsbau ist ein zulassungsfreies Handwerk. Eine Eintragung in die Handwerksrolle ist nicht Voraussetzung für den Betrieb. Nachweise (Gärtnerzeugnis, Techniker, Kletterschein) stehen unter",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/nachweise",
						className: "text-moss",
						children: "Nachweise"
					}),
					", sobald die Originale vorliegen."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-3xl",
				children: "Inhaltlich verantwortlich"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					SITE.owner,
					", ",
					SITE.address.street,
					", ",
					SITE.address.zip,
					" ",
					SITE.address.city,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-3xl",
				children: "Online-Streitbeilegung"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					"Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://ec.europa.eu/consumers/odr",
						className: "text-moss",
						rel: "noopener noreferrer",
						children: "ec.europa.eu/consumers/odr"
					}),
					". Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
				]
			})
		]
	}) })] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1 sm:grid-cols-[14rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
	});
}
//#endregion
export { ImpressumPage as component };
