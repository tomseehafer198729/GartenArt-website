import { n as SITE } from "./site-BmhHQd-o.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as PROJECTS } from "./projects-OAl-TWgB.mjs";
import { t as ProjectArticle } from "./project-gallery-CMFE_wI7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projekte-6LKN6y8a.js
var import_jsx_runtime = require_jsx_runtime();
function ProjektePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/images/projekte/umgestaltung/03-nachher-thymian.jpg",
		imageClassName: "object-[center_62%]",
		kicker: "Referenzen",
		title: "Gebaute Gärten",
		lede: `Arbeiten von ${SITE.fullName} im Hochtaunus, Maintaunus und Rhein-Main.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: SITE.region }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 font-display text-4xl",
			children: "Projekte"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-10",
			children: PROJECTS.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectArticle, { project }, project.slug))
		})
	] })] });
}
//#endregion
export { ProjektePage as component };
