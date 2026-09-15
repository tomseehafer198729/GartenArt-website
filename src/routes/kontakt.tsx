import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { submitInquiry, TOPICS } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/kontakt")({ component: KontaktPage });

type Errors = Partial<Record<"name" | "email" | "message" | "area" | "privacy", string>>;

function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [topic, setTopic] = useState("klima");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [pendingConfirm, setPendingConfirm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<{ text: string; mailto?: string } | null>(null);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Bitte Vor- und Nachnamen angeben.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Bitte eine gültige E-Mail-Adresse angeben.";
    }
    if (area.trim()) {
      const n = Number(area.replace(",", "."));
      if (!Number.isFinite(n) || n < 10 || n > 20000) {
        next.area = "Fläche als Zahl zwischen 10 und 20.000 m², oder das Feld leer lassen.";
      }
    }
    if (message.trim().length < 20) {
      next.message = "Bitte den Garten kurz beschreiben (mindestens 20 Zeichen).";
    }
    if (!privacy) next.privacy = "Bitte die Datenschutzerklärung zur Kenntnis nehmen.";
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setSendError(null);
    if (Object.keys(next).length > 0) return;
    setSending(true);
    try {
      const result = await submitInquiry({
        data: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          place: place.trim(),
          area: area.trim(),
          topic,
          message: message.trim(),
          privacy: true,
          website,
        },
      });
      if (result.ok) {
        setPendingConfirm(Boolean(result.pendingConfirm));
        setSent(true);
      } else {
        setSendError({ text: result.error, mailto: result.mailto });
      }
    } catch {
      setSendError({
        text: "Die Anfrage ist nicht durchgegangen. Bitte mailen Sie uns direkt.",
        mailto: `mailto:${SITE.email}`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        image="/images/werkstatt.jpg"
        kicker="Kontakt"
        title="In Oberursel"
        lede={`${SITE.owner} · ${SITE.fullName}. Ein erstes Gespräch vor Ort, bevor gezeichnet wird.`}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>Anschrift</Kicker>
            <h2 className="mt-3 font-display text-4xl">{SITE.fullName}</h2>
            <p className="mt-4 text-muted">
              {SITE.owner}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
            </p>
            <p className="mt-4">
              <a href={SITE.phoneHref} className="text-moss">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="text-moss">
                {SITE.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-muted">{SITE.hours}</p>
            <p className="mt-8 max-w-sm text-sm text-muted">
              Einsatzgebiet: {SITE.region}.
            </p>
            <p className="mt-8 text-sm">
              <Link to="/impressum" className="text-moss">
                Impressum
              </Link>
              <span className="text-muted"> · </span>
              <Link to="/datenschutz" className="text-moss">
                Datenschutz
              </Link>
              <span className="text-muted"> · </span>
              <Link to="/nachweise" className="text-moss">
                Nachweise
              </Link>
            </p>
          </div>

          <div className="rounded-xl bg-paper p-6 sm:p-8">
            {sent ? (
              <div>
                <Kicker>Gesendet</Kicker>
                <h2 className="mt-3 font-display text-3xl">Nachricht aufgenommen</h2>
                <p className="mt-4 text-muted">
                  Danke, {name.trim()}. Wir melden uns unter {email.trim()} mit einem Terminvorschlag
                  für das Grundstück.
                </p>
                {pendingConfirm ? (
                  <p className="mt-3 text-sm text-muted">
                    Beim ersten Versand liegt eine Bestätigung in {SITE.email}. Einmal den Link in
                    der Mail klicken — danach kommen die Anfragen direkt an.
                  </p>
                ) : null}
                <Button
                  type="button"
                  variant="ink"
                  className="mt-6"
                  onClick={() => {
                    setSent(false);
                    setPendingConfirm(false);
                    setMessage("");
                    setPrivacy(false);
                  }}
                >
                  Weitere Anfrage
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <Kicker>Anfrage</Kicker>
                <h2 className="mt-3 font-display text-3xl">Garten beschreiben</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Name"
                    value={name}
                    onChange={setName}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    label="E-Mail"
                    value={email}
                    onChange={setEmail}
                    error={errors.email}
                    type="email"
                    autoComplete="email"
                  />
                  <Field
                    label="Telefon (optional)"
                    value={phone}
                    onChange={setPhone}
                    autoComplete="tel"
                  />
                  <Field
                    label="Ort des Grundstücks"
                    value={place}
                    onChange={setPlace}
                  />
                  <Field
                    label="Fläche in m² (optional)"
                    value={area}
                    onChange={setArea}
                    error={errors.area}
                    inputMode="decimal"
                  />
                  <label className="block text-sm sm:col-span-1">
                    Thema
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="mt-1 h-12 w-full rounded-md border border-ink/10 bg-cream px-3 outline-none focus:border-gold"
                    >
                      {TOPICS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    Nachricht
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className={cn(
                        "mt-1 w-full rounded-md border bg-cream px-3 py-2 outline-none focus:border-gold",
                        errors.message ? "border-danger" : "border-ink/10",
                      )}
                    />
                    {errors.message ? (
                      <span className="mt-1 block text-xs text-danger">{errors.message}</span>
                    ) : null}
                  </label>
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Website
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </label>
                  </div>
                  <label className="flex items-start gap-3 text-sm sm:col-span-2">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-1 size-4 accent-moss"
                    />
                    <span>
                      Ich habe die{" "}
                      <Link to="/datenschutz" className="text-moss">
                        Datenschutzerklärung
                      </Link>{" "}
                      zur Kenntnis genommen. Die Angaben werden nur zur Beantwortung dieser Anfrage
                      verwendet.
                      {errors.privacy ? (
                        <span className="mt-1 block text-xs text-danger">{errors.privacy}</span>
                      ) : null}
                    </span>
                  </label>
                </div>
                {sendError ? (
                  <p role="alert" className="mt-4 text-sm text-danger">
                    {sendError.text}{" "}
                    {sendError.mailto ? (
                      <a href={sendError.mailto} className="underline">
                        Direkt per E-Mail senden
                      </a>
                    ) : null}
                  </p>
                ) : null}
                <Button type="submit" variant="forest" className="mt-6" disabled={sending}>
                  {sending ? "Wird gesendet…" : "Anfrage senden"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "decimal" | "email" | "tel" | "text";
}) {
  return (
    <label className="block text-sm">
      {label}
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-1 h-12 w-full rounded-md border bg-cream px-3 outline-none focus:border-gold",
          error ? "border-danger" : "border-ink/10",
        )}
        aria-invalid={Boolean(error)}
      />
      {error ? <span className="mt-1 block text-xs text-danger">{error}</span> : null}
    </label>
  );
}
