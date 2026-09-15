import { n as SITE } from "./site-BmhHQd-o.mjs";
import { a as string, i as object, t as boolean } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cpm31ePt.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
function mailtoFor(data) {
	const topic = TOPICS.find((t) => t.id === data.topic)?.label ?? data.topic;
	const body = [
		`Name: ${data.name}`,
		`E-Mail: ${data.email}`,
		`Telefon: ${data.phone || "—"}`,
		`Ort: ${data.place || "—"}`,
		`Fläche: ${data.area || "—"} m²`,
		`Thema: ${topic}`,
		"",
		data.message
	].join("\n");
	return `mailto:${SITE.email}?subject=${encodeURIComponent(`Anfrage: ${topic} — ${data.name}`)}&body=${encodeURIComponent(body)}`;
}
var submitInquiry_createServerFn_handler = createServerRpc({
	id: "12f38ad81766a6107e49f15d41e5b59577313a5f2792dd12480f97e731a996ce",
	name: "submitInquiry",
	filename: "src/lib/contact.ts"
}, (opts) => submitInquiry.__executeServer(opts));
var submitInquiry = createServerFn({ method: "POST" }).validator((raw) => inquirySchema.parse(raw)).handler(submitInquiry_createServerFn_handler, async ({ data }) => {
	if (data.website) return { ok: true };
	const topic = TOPICS.find((t) => t.id === data.topic)?.label ?? data.topic;
	const mailto = mailtoFor(data);
	try {
		const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				_subject: `GartenArt Anfrage: ${topic} — ${data.name}`,
				_template: "table",
				_captcha: "false",
				name: data.name,
				email: data.email,
				_replyto: data.email,
				telefon: data.phone || "—",
				ort: data.place || "—",
				flaeche: data.area ? `${data.area} m²` : "—",
				thema: topic,
				nachricht: data.message
			})
		});
		const json = await res.json().catch(() => ({}));
		if (!res.ok) return {
			ok: false,
			error: "Die Nachricht konnte nicht zugestellt werden. Bitte senden Sie sie über den E-Mail-Link.",
			mailto
		};
		return {
			ok: true,
			pendingConfirm: /activate|confirm/i.test(json.message ?? json.success ?? "")
		};
	} catch {
		return {
			ok: false,
			error: "Keine Verbindung zum Versand. Bitte senden Sie die Anfrage direkt per E-Mail.",
			mailto
		};
	}
});
//#endregion
export { submitInquiry_createServerFn_handler };
