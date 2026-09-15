import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-vI6J447R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CeSZ27hC.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ image, kicker, title, lede, compact, imageClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative isolate overflow-hidden bg-forest-deep", compact ? "min-h-[38vh]" : "min-h-[52vh] md:min-h-[58vh]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: cn("absolute inset-0 size-full object-cover", imageClassName)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/70 to-forest/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-6xl flex-col justify-end px-4 py-12 sm:px-6 sm:py-16",
				children: [
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-gold",
						children: kicker
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl text-cream sm:text-5xl md:text-6xl",
						children: title
					}),
					lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg",
						children: lede
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
