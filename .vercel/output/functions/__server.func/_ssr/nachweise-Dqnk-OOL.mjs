import { n as SITE } from "./site-BmhHQd-o.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nachweise-Dqnk-OOL.js
var import_jsx_runtime = require_jsx_runtime();
var SLOTS = [
	{
		id: "gaertner",
		title: "Gärtnerzeugnis",
		text: "Gesellenbrief oder gleichwertiger Abschluss. Kommt als Scan oder Foto hierhin — Vorderseite lesbar, keine unnötigen Nummern im Bild."
	},
	{
		id: "techniker",
		title: "Technikerzeugnis",
		text: "Staatlich geprüfter Techniker, sobald die Datei da ist. Dann mit ausstellender Schule und Jahr."
	},
	{
		id: "klettern",
		title: "Kletterzeugnis",
		text: "Baumklettern / SKT. Nachweis der Berechtigung für Arbeiten in der Krone, bevor das Dokument online steht."
	},
	{
		id: "referenzen",
		title: "Schriftliche Referenzen",
		text: "Empfehlungen von Auftraggebern, mit deren Einverständnis. Keine Namen ohne Freigabe."
	}
];
function NachweisePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		image: "/images/werkstatt.jpg",
		kicker: "Unternehmen",
		title: "Nachweise",
		lede: `${SITE.owner} · Gärtner, Techniker, Baumklettern. Die Originale kommen als Nächstes auf diese Seite.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Authentizität" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 font-display text-4xl",
			children: "Was als Nächstes hochgeladen wird"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "Keine Platzhalter-Urkunden, keine erfundenen Stempel. Sobald die Dateien da sind, stehen sie hier — lesbar, ohne überflüssige personenbezogene Daten Dritter."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid gap-5 sm:grid-cols-2",
			children: SLOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-h-52 flex-col rounded-xl border border-dashed border-ink/20 bg-paper p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-gold",
						children: "Datei folgt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm text-muted",
						children: s.text
					})
				]
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 max-w-xl text-sm text-muted",
			children: [
				"Schicken Sie die Scans an",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${SITE.email}`,
					className: "text-moss",
					children: SITE.email
				}),
				" ",
				"oder hier im Chat. Wir setzen sie unverändert ein, nur beschnitten."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projekte",
				className: "text-moss",
				children: "Bereits sichtbare Referenzen: die ausgeführten Projekte"
			})
		})
	] })] });
}
//#endregion
export { NachweisePage as component };
