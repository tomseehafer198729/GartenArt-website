import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/impressum")({ component: ImpressumPage });

function ImpressumPage() {
  const { legal } = SITE;
  return (
    <>
      <PageHero
        compact
        image="/images/werkstatt.jpg"
        kicker="Rechtliches"
        title="Impressum"
        lede="Angaben gemäß § 5 DDG."
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <Kicker>Anbieter</Kicker>
          <h2 className="mt-3 font-display text-4xl">{SITE.fullName}</h2>
          <p className="mt-4 text-muted">
            {legal.form}
            <br />
            {legal.ownerRole}: {SITE.owner}
            <br />
            Berufsbezeichnung: {legal.profession} (Deutschland)
          </p>
          <p className="mt-4">
            {SITE.address.street}
            <br />
            {SITE.address.zip} {SITE.address.city}
          </p>
          <p className="mt-4">
            Telefon:{" "}
            <a href={SITE.phoneHref} className="text-moss">
              {SITE.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${SITE.email}`} className="text-moss">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-muted">Einsatzgebiet: {SITE.region}.</p>
          <p className="mt-4 text-sm text-muted">
            Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.
          </p>

          <h2 className="mt-12 font-display text-3xl">Gewerbe und Steuern</h2>
          <p className="mt-4 text-muted">
            Gewerbeanmeldung über das {legal.gewerbeOffice}. Die Steuernummer steht. Das
            Gewerbe-Aktenzeichen und eine USt-IdNr. nach § 27a UStG werden nachgetragen, sobald
            sie vorliegen — nicht vorher.
          </p>
          <dl className="mt-5 space-y-3 text-sm">
            <Row
              label="Gewerbe-Aktenzeichen"
              value={legal.gewerbeRef || "folgt nach der Anmeldung beim Ordnungsamt"}
            />
            <Row label="Steuernummer" value={legal.steuerNr} />
            <Row
              label="USt-IdNr. (§ 27a UStG)"
              value={legal.ustId || "nicht erteilt"}
            />
            <Row
              label="Wirtschafts-Identifikationsnummer"
              value={legal.wIdNr || "folgt nach Mitteilung durch das Bundeszentralamt für Steuern"}
            />
          </dl>
          <p className="mt-6 text-sm text-muted">
            Garten- und Landschaftsbau ist ein zulassungsfreies Handwerk. Eine Eintragung in die
            Handwerksrolle ist nicht Voraussetzung für den Betrieb. Nachweise (Gärtnerzeugnis,
            Techniker, Kletterschein) stehen unter{" "}
            <Link to="/nachweise" className="text-moss">
              Nachweise
            </Link>
            , sobald die Originale vorliegen.
          </p>

          <h2 className="mt-12 font-display text-3xl">Inhaltlich verantwortlich</h2>
          <p className="mt-4 text-muted">
            {SITE.owner}, {SITE.address.street}, {SITE.address.zip} {SITE.address.city}.
          </p>

          <h2 className="mt-12 font-display text-3xl">Online-Streitbeilegung</h2>
          <p className="mt-4 text-muted">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="text-moss"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[14rem_1fr]">
      <dt className="text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
