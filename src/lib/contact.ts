import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SITE } from "@/data/site";

export const TOPICS = [
  { id: "klima", label: "Ihr Garten ist für ein anderes Klima gemacht" },
  { id: "pflanzen", label: "Pflanzung heimischer Arten" },
  { id: "umbau", label: "Gartenumbau und Neubau" },
  { id: "wege", label: "Wege, Pflaster, Einfassungen" },
  { id: "terrasse", label: "Terrassen und Treppen" },
  { id: "gartenhaus", label: "Gartenhäuser und Fundamente" },
  { id: "kommune", label: "Wiederherstellung — öffentliche Auftraggeber" },
  { id: "klimacheck", label: "Klimacheck, Flächenbewertung" },
  { id: "pflege", label: "Grünpflege und Baumpflege" },
  { id: "planung", label: "Digitale Planung" },
] as const;

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Bitte Vor- und Nachnamen angeben."),
  email: z.string().trim().email("Bitte eine gültige E-Mail-Adresse angeben."),
  phone: z.string().trim().max(40),
  place: z.string().trim().max(120),
  area: z.string().trim().max(20),
  topic: z.string().trim().min(1),
  message: z.string().trim().min(20, "Bitte den Garten kurz beschreiben (mindestens 20 Zeichen)."),
  privacy: z.boolean().refine((v) => v === true, {
    message: "Bitte die Datenschutzerklärung zur Kenntnis nehmen.",
  }),
  website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export type InquiryResult =
  | { ok: true; pendingConfirm?: boolean }
  | { ok: false; error: string; mailto: string };

function mailtoFor(data: Omit<InquiryInput, "privacy" | "website">): string {
  const topic = TOPICS.find((t) => t.id === data.topic)?.label ?? data.topic;
  const body = [
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${data.phone || "—"}`,
    `Ort: ${data.place || "—"}`,
    `Fläche: ${data.area || "—"} m²`,
    `Thema: ${topic}`,
    "",
    data.message,
  ].join("\n");
  return `mailto:${SITE.email}?subject=${encodeURIComponent(`Anfrage: ${topic} — ${data.name}`)}&body=${encodeURIComponent(body)}`;
}

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((raw: unknown) => inquirySchema.parse(raw))
  .handler(async ({ data }): Promise<InquiryResult> => {
    if (data.website) {
      return { ok: true };
    }

    const topic = TOPICS.find((t) => t.id === data.topic)?.label ?? data.topic;
    const mailto = mailtoFor(data);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
          nachricht: data.message,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { message?: string; success?: string };
      if (!res.ok) {
        return {
          ok: false,
          error: "Die Nachricht konnte nicht zugestellt werden. Bitte senden Sie sie über den E-Mail-Link.",
          mailto,
        };
      }
      const pending = /activate|confirm/i.test(json.message ?? json.success ?? "");
      return { ok: true, pendingConfirm: pending };
    } catch {
      return {
        ok: false,
        error: "Keine Verbindung zum Versand. Bitte senden Sie die Anfrage direkt per E-Mail.",
        mailto,
      };
    }
  });
