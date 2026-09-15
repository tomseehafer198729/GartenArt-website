import { i as __toESM } from "../_runtime.mjs";
import { n as SITE } from "./site-BmhHQd-o.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as string, i as object, t as boolean } from "../_libs/zod.mjs";
import { r as cn } from "./router-vI6J447R.mjs";
import { t as PageHero } from "./page-hero-CeSZ27hC.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-Dy4fdy5v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var TOPICS = [
	{
		id: "naturgarten",
		label: "Naturgarten"
	},
	{
		id: "umbau",
		label: "Gartenumbau"
	},
	{
		id: "barrierefrei",
		label: "Altersgerecht / barrierefrei"
	},
	{
		id: "gartenhaus",
		label: "Gartenhaus / Fundament"
	},
	{
		id: "rasen",
		label: "Rasen / Vorgarten"
	},
	{
		id: "pflanzen",
		label: "Pflanzplanung / Wunsch und Art"
	},
	{
		id: "gewerbe",
		label: "Gewerbe / CSRD / Ausgleich"
	},
	{
		id: "kommune",
		label: "Kommune / Restoration Act / Fläche"
	},
	{
		id: "pflege",
		label: "Pflege"
	}
];
var inquirySchema = object({
	name: string().trim().min(2, "Bitte Vor- und Nachnamen angeben."),
	email: string().trim().email("Bitte eine gültige E-Mail-Adresse angeben."),
	phone: string().trim().max(40),
	place: string().trim().max(120),
	area: string().trim().max(20),
	topic: string().trim().min(1),
	message: string().trim().min(20, "Bitte den Garten kurz beschreiben (mindestens 20 Zeichen)."),
	privacy: boolean().refine((v) => v === true, { message: "Bitte die Datenschutzerklärung zur Kenntnis nehmen." }),
	website: string().max(0).optional()
});
var submitInquiry = createServerFn({ method: "POST" }).validator((raw) => inquirySchema.parse(raw)).handler(createSsrRpc("12f38ad81766a6107e49f15d41e5b59577313a5f2792dd12480f97e731a996ce"));
function KontaktPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [place, setPlace] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)("naturgarten");
	const [message, setMessage] = (0, import_react.useState)("");
	const [privacy, setPrivacy] = (0, import_react.useState)(false);
	const [website, setWebsite] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [pendingConfirm, setPendingConfirm] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [sendError, setSendError] = (0, import_react.useState)(null);
	function validate() {
		const next = {};
		if (name.trim().length < 2) next.name = "Bitte Vor- und Nachnamen angeben.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Bitte eine gültige E-Mail-Adresse angeben.";
		if (area.trim()) {
			const n = Number(area.replace(",", "."));
			if (!Number.isFinite(n) || n < 10 || n > 2e4) next.area = "Fläche als Zahl zwischen 10 und 20.000 m², oder das Feld leer lassen.";
		}
		if (message.trim().length < 20) next.message = "Bitte den Garten kurz beschreiben (mindestens 20 Zeichen).";
		if (!privacy) next.privacy = "Bitte die Datenschutzerklärung zur Kenntnis nehmen.";
		return next;
	}
	async function onSubmit(e) {
		e.preventDefault();
		const next = validate();
		setErrors(next);
		setSendError(null);
		if (Object.keys(next).length > 0) return;
		setSending(true);
		try {
			const result = await submitInquiry({ data: {
				name: name.trim(),
				email: email.trim(),
				phone: phone.trim(),
				place: place.trim(),
				area: area.trim(),
				topic,
				message: message.trim(),
				privacy: true,
				website
			} });
			if (result.ok) {
				setPendingConfirm(Boolean(result.pendingConfirm));
				setSent(true);
			} else setSendError({
				text: result.error,
				mailto: result.mailto
			});
		} catch {
			setSendError({
				text: "Die Anfrage ist nicht durchgegangen. Bitte mailen Sie uns direkt.",
				mailto: `mailto:${SITE.email}`
			});
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/images/werkstatt.jpg",
		kicker: "Kontakt",
		title: "In Oberursel",
		lede: `${SITE.owner} · ${SITE.fullName}. Ein erstes Gespräch vor Ort, bevor gezeichnet wird.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Anschrift" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: SITE.fullName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					SITE.owner,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.phoneHref,
						className: "text-moss",
						children: SITE.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${SITE.email}`,
						className: "text-moss",
						children: SITE.email
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: SITE.hours
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 max-w-sm text-sm text-muted",
				children: [
					"Einsatzgebiet: ",
					SITE.region,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/impressum",
						className: "text-moss",
						children: "Impressum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/datenschutz",
						className: "text-moss",
						children: "Datenschutz"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/nachweise",
						className: "text-moss",
						children: "Nachweise"
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl bg-paper p-6 sm:p-8",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Gesendet" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl",
					children: "Nachricht aufgenommen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted",
					children: [
						"Danke, ",
						name.trim(),
						". Wir melden uns unter ",
						email.trim(),
						" mit einem Terminvorschlag für das Grundstück."
					]
				}),
				pendingConfirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						"Beim ersten Versand liegt eine Bestätigung in ",
						SITE.email,
						". Einmal den Link in der Mail klicken — danach kommen die Anfragen direkt an."
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ink",
					className: "mt-6",
					onClick: () => {
						setSent(false);
						setPendingConfirm(false);
						setMessage("");
						setPrivacy(false);
					},
					children: "Weitere Anfrage"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Anfrage" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl",
						children: "Garten beschreiben"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								value: name,
								onChange: setName,
								error: errors.name,
								autoComplete: "name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "E-Mail",
								value: email,
								onChange: setEmail,
								error: errors.email,
								type: "email",
								autoComplete: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Telefon (optional)",
								value: phone,
								onChange: setPhone,
								autoComplete: "tel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Ort des Grundstücks",
								value: place,
								onChange: setPlace
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Fläche in m² (optional)",
								value: area,
								onChange: setArea,
								error: errors.area,
								inputMode: "decimal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm sm:col-span-1",
								children: ["Thema", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: topic,
									onChange: (e) => setTopic(e.target.value),
									className: "mt-1 h-12 w-full rounded-md border border-ink/10 bg-cream px-3 outline-none focus:border-gold",
									children: TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t.id,
										children: t.label
									}, t.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm sm:col-span-2",
								children: [
									"Nachricht",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: message,
										onChange: (e) => setMessage(e.target.value),
										rows: 6,
										className: cn("mt-1 w-full rounded-md border bg-cream px-3 py-2 outline-none focus:border-gold", errors.message ? "border-danger" : "border-ink/10")
									}),
									errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-danger",
										children: errors.message
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									tabIndex: -1,
									autoComplete: "off",
									value: website,
									onChange: (e) => setWebsite(e.target.value)
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 text-sm sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: privacy,
									onChange: (e) => setPrivacy(e.target.checked),
									className: "mt-1 size-4 accent-moss"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Ich habe die",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/datenschutz",
										className: "text-moss",
										children: "Datenschutzerklärung"
									}),
									" ",
									"zur Kenntnis genommen. Die Angaben werden nur zur Beantwortung dieser Anfrage verwendet.",
									errors.privacy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-danger",
										children: errors.privacy
									}) : null
								] })]
							})
						]
					}),
					sendError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						role: "alert",
						className: "mt-4 text-sm text-danger",
						children: [
							sendError.text,
							" ",
							sendError.mailto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: sendError.mailto,
								className: "underline",
								children: "Direkt per E-Mail senden"
							}) : null
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "forest",
						className: "mt-6",
						disabled: sending,
						children: sending ? "Wird gesendet…" : "Anfrage senden"
					})
				]
			})
		})]
	}) })] });
}
function Field({ label, value, onChange, error, type = "text", autoComplete, inputMode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type,
				value,
				autoComplete,
				inputMode,
				onChange: (e) => onChange(e.target.value),
				className: cn("mt-1 h-12 w-full rounded-md border bg-cream px-3 outline-none focus:border-gold", error ? "border-danger" : "border-ink/10"),
				"aria-invalid": Boolean(error)
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-danger",
				children: error
			}) : null
		]
	});
}
//#endregion
export { KontaktPage as component };
