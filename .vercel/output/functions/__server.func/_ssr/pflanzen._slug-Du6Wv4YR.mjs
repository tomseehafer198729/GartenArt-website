import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Section } from "./section-Dc6gZBzU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pflanzen._slug-Du6Wv4YR.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "Art nicht gefunden"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-muted",
		children: "Diese Pflanze steht nicht im Verzeichnis."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/pflanzen",
		className: "mt-6 inline-block text-moss",
		children: "Zurück zur Liste"
	})
] });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
