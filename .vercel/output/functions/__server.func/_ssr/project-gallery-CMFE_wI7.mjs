import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-vI6J447R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-gallery-CMFE_wI7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectGallery({ images, title }) {
	const pairs = beforeAfterPairs(images);
	if (pairs) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGrid, {
		label: `Vorher und Nachher: ${title}`,
		shots: pairs.flatMap((pair) => [pair.vorher, pair.nachher])
	});
	if (images.length >= 2 && images.some((s) => s.phase)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGrid, {
		label: `Fotos ${title}`,
		shots: images
	});
	const [active, setActive] = (0, import_react.useState)(0);
	const current = images[active] ?? images[0];
	if (!current) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col bg-forest-deep md:col-span-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "flex min-h-0 flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[22rem] w-full sm:h-[26rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: current.src,
					alt: current.alt,
					className: "absolute inset-0 size-full object-cover",
					style: { objectPosition: current.objectPosition ?? "center 68%" }
				}), current.phase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute left-2 top-2 rounded-sm bg-forest/85 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-gold",
					children: current.phase === "vorher" ? "Vorher" : "Nachher"
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "px-4 py-2 text-xs leading-relaxed text-cream/70",
				children: current.alt
			})]
		}), images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-6 gap-1 p-1",
			"aria-label": `Fotos ${title}`,
			children: images.map((shot, index) => {
				const selected = index === active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(index),
					"aria-pressed": selected,
					"aria-label": `Foto ${index + 1}: ${shot.alt}`,
					className: cn("block min-h-11 w-full overflow-hidden rounded-sm ring-offset-2 ring-offset-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold", selected ? "ring-2 ring-gold" : "opacity-75 hover:opacity-100"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shot.src,
						alt: "",
						className: "aspect-[3/4] w-full object-cover",
						style: { objectPosition: shot.objectPosition ?? "center 70%" }
					})
				}) }, shot.src);
			})
		}) : null]
	});
}
function PhotoGrid({ label, shots }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-forest-deep md:col-span-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-2 gap-1 p-1",
			"aria-label": label,
			children: shots.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.src,
					alt: shot.alt,
					className: "aspect-[4/5] w-full object-cover sm:aspect-[3/4]",
					style: { objectPosition: shot.objectPosition ?? "center 68%" }
				}), shot.phase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "absolute left-2 top-2 rounded-sm bg-forest/85 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-gold",
					children: shot.phase === "vorher" ? "Vorher" : "Nachher"
				}) : null] })
			}, shot.src))
		})
	});
}
function beforeAfterPairs(images) {
	const vorher = images.filter((s) => s.phase === "vorher");
	const nachher = images.filter((s) => s.phase === "nachher");
	if (vorher.length === 0 || vorher.length !== nachher.length) return null;
	return vorher.map((shot, i) => ({
		vorher: shot,
		nachher: nachher[i]
	}));
}
function phaseLabel(shots) {
	const hasVorher = shots.some((s) => s.phase === "vorher");
	const hasNachher = shots.some((s) => s.phase === "nachher");
	if (hasVorher && hasNachher) return "Vorher / Nachher";
	if (hasVorher) return "Vorher";
	if (hasNachher) return "Nachher";
	return "Originalfotos";
}
function ProjectArticle({ project }) {
	const shots = project.images?.length ? project.images : [{
		src: project.image,
		alt: project.title
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: project.slug,
		className: "overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)] md:grid md:grid-cols-5 md:items-stretch",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectGallery, {
			images: shots,
			title: project.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center p-6 md:col-span-2 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-gold",
					children: [
						project.place,
						project.year,
						project.area
					].filter(Boolean).join(" · ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-3xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-moss",
					children: project.service
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-2",
					children: project.tags.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-sm bg-cream px-2.5 py-1 text-xs tracking-wide text-moss",
						children: p
					}, p))
				}),
				project.photoPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: "Originalfotos folgen."
				}) : shots.some((s) => s.phase) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-moss",
					children: phaseLabel(shots)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-moss",
					children: [shots.length, " Originalfotos"]
				})
			]
		})]
	});
}
//#endregion
export { ProjectArticle as t };
