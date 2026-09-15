import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-vI6J447R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-Dc6gZBzU.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ children, className, tone = "cream" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn(tone === "cream" && "bg-cream text-ink", tone === "paper" && "bg-paper text-ink", tone === "forest" && "bg-forest text-cream", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
			children
		})
	});
}
function Kicker({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-xs uppercase tracking-[0.28em] text-gold", className),
		children
	});
}
//#endregion
export { Section as n, Kicker as t };
