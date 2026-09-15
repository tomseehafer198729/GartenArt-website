import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/gewerbe")({ component: GewerbePage });

function GewerbePage() {
  return (
    <>
      <PageHero
        image="/images/bereiche/gewerbe.jpg"
        imageClassName="object-[center_48%]"
        kicker="Gewerbe · VSME"
        title="Die Kennzahlen Ihres Geländes. Geprüft, nicht beschrieben."
        lede="Große Kunden und Banken fragen Grünfläche, Versiegelung, Biodiversität. Wir sind kein ESG-Berater. Wir liefern die Flächenbewertung, die der Fragebogen braucht — und pflanzen, wenn die Zahl besser werden soll."
      />

      <Section>
        <Kicker>VSME</Kicker>
        <h2 className="mt-3 font-display text-4xl">Nicht CSRD. Trotzdem auf dem Tisch.</h2>
        <p className="mt-5 max-w-3xl text-muted">
          Seit dem 30. Juli 2025 empfiehlt die EU-Kommission den VSME-Standard: freiwillig,
          vereinfacht, für kleine und mittlere Unternehmen, die selbst nicht unter CSRD fallen.
          Nach Omnibus I (18. März 2026) berichten nur noch Konzerne über 1.000 Mitarbeitende und
          450 Millionen Euro Umsatz direkt. Den Anfragedruck geben sie an Zulieferer weiter — oft
          als VSME-Fragebogen.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Das Basismodul hat 51 Datenpunkte. Darunter: Flächenversiegelung, Biodiversität,
          Grünflächenanteil. Die meisten Betriebe können das heute nur erzählen. Nicht belegen.
        </p>
      </Section>

      <Section tone="paper">
        <Kicker>Was wir erheben</Kicker>
        <h2 className="mt-3 font-display text-4xl">Vier Zahlen. Eine Fläche.</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            {
              t: "Versiegelungsgrad",
              d: "Wie viel Freifläche trägt Asphalt, Platte, Dach — und wie viel Boden atmet noch.",
            },
            {
              t: "Biodiversitätspotenzial",
              d: "Saum, Hecke, Totholz, Blüte. Was Insekten hier finden, nicht was der Katalog verspricht.",
            },
            {
              t: "Heimischer Anteil",
              d: "Welche Pflanzen wurzeln in Hessen. Welche sind Containerware.",
            },
            {
              t: "Regenwasser",
              d: "Ob der Hof das Wasser hält oder in die Kanalisation schickt.",
            },
          ].map((item) => (
            <li key={item.t} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Ergebnis: eine dokumentierte Flächenbewertung. Darauf kann der ESG-Bericht aufbauen.
          Optional ein Aufwertungsplan. Optional jährliches Monitoring.
        </p>
      </Section>

      <Section>
        <Kicker>Nutzen und Ausgleich</Kicker>
        <h2 className="mt-3 font-display text-4xl">Pause. Frucht. Und falls gebaut wird.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Das Gelände ist die Pause um zwölf. Wer draußen sitzen und essen kann, bleibt. Halle und
          Parkplatz: dann greifen §§ 14 und 15 BNatSchG — Ausgleich mit heimischen Arten, nicht
          mit Thuja.
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "Pause im Grünen", d: "Bank, Schatten, Saum. Ein Hof, auf den man sich setzt." },
            {
              t: "Frucht am Weg",
              d: "Kornelkirsche, Schlehe, Holunder, Hasel — essbar, heimisch.",
            },
            {
              t: "KfW-Umweltprogramm",
              d: "ANK-Mittel für naturnahe Grünflächen, Gebäudebegrünung, Niederschlag. Konditionen vor Zusage prüfen.",
            },
          ].map((item) => (
            <li key={item.t} className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <Kicker>Warum wir</Kicker>
        <h2 className="mt-3 font-display text-4xl">Kein Nachhaltigkeitsberater.</h2>
        <p className="mt-5 max-w-2xl text-muted">
          Wir schreiben keine ESG-Berichte. Wir liefern die Grünflächendaten, die ein Berater von
          einem Fachbetrieb braucht und selbst nicht hat. {SITE.owner}, {SITE.address.city}. Dann
          wird — wenn die Zahl besser werden soll — gebaut und gepflanzt.
        </p>
      </Section>

      <Section tone="forest">
        <Kicker>Nächster Schritt</Kicker>
        <h2 className="font-display text-4xl text-cream">Dreißig Minuten auf dem Gelände.</h2>
        <p className="mt-4 max-w-xl text-cream/80">
          Unverbindlich, vor Ort. {SITE.phone} · {SITE.email}
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/kontakt">Gespräch vereinbaren</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}