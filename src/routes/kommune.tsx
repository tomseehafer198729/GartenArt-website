import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { LIST_META } from "@/data/plants";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/kommune")({ component: KommunePage });

function KommunePage() {
  return (
    <>
      <PageHero
        image="/images/bereiche/kommune.jpg"
        kicker="Öffentliche Auftraggeber · Artikel 8"
        title="Wiederherstellen. Stadtgrün, das bleibt."
        lede="Rund dreitausend deutsche Kommunen müssen Grünfläche und Baumkronen bis 2030 mindestens halten. Wir pflanzen heimisch, entsiegeln, pflegen — und legen die Flächenbilanz daneben."
      />

      <Section>
        <Kicker>Artikel 8</Kicker>
        <h2 className="mt-3 font-display text-4xl">Was die Verordnung der Stadt abverlangt</h2>
        <p className="mt-5 max-w-3xl text-muted">
          Seit dem 18. August 2024 gilt die EU-Wiederherstellungsverordnung (VO (EU) 2024/1991).
          Artikel 8 gilt für Kommunen mit festgelegten städtischen Ökosystemgebieten: Grünfläche
          und Baumüberschirmung bis zum 31. Dezember 2030 mindestens auf dem Stand von 2024.
          Ab 2031 ein nachweisbar steigender Trend.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-4">
          {[
            { y: "2024", t: "Bezugsjahr", d: "Grün und Kronen. Satellit misst mit." },
            { y: "2026", t: "Nationaler Plan", d: "Deutschland reicht den Wiederherstellungsplan ein." },
            { y: "2030", t: "Halten", d: "Kein Nettoverlust gegenüber 2024." },
            { y: "2031", t: "Steigen", d: "Auch wer ausgenommen war, muss dann zulegen." },
          ].map((s) => (
            <li
              key={s.y}
              className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]"
            >
              <p className="font-display text-3xl text-gold">{s.y}</p>
              <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="paper">
        <Kicker>Was zählt</Kicker>
        <h2 className="mt-3 font-display text-4xl">Grün ist mehr als der Park.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Als Grünfläche zählen Bäume, Sträucher, dauerhaft krautige Vegetation, Gewässer und
          Dauergrünland — ausdrücklich auch neue Dach- und Fassadenbegrünung. Gemessen wird
          europaweit über Copernicus-Landcover.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Stadtbaum und Krone",
            "Hecke, Strauch, Saum",
            "Wiese und Kraut",
            "Gewässer, Ufer",
            "Dachbegrünung",
            "Fassadenbegrünung",
          ].map((item) => (
            <li
              key={item}
              className="border-l border-gold bg-cream px-4 py-3 font-display text-xl"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Rund die Hälfte der betroffenen Kommunen erfüllt schon die Ausnahme: mehr als 45&nbsp;%
          Grünflächenanteil und mehr als 10&nbsp;% Baumüberschirmung. Der Bund macht davon pauschal
          Gebrauch, ein Einzelantrag ist nicht nötig. Ab 2031 gilt der steigende Trend trotzdem.
          Die eigene Bilanz zu kennen, lohnt sich jetzt — der Datenviewer von BfN und BBSR zeigt
          sie.
        </p>
      </Section>

      <Section>
        <Kicker>Förderung</Kicker>
        <h2 className="mt-3 font-display text-4xl">Mehrere Töpfe. Ein Antrag der Kommune.</h2>
        <p className="mt-5 max-w-3xl text-muted">
          Förderfähig sind unter anderem Stadtbaumpflanzung und -pflege, naturnahes
          Grünflächenmanagement, Entsiegelung, Begrünung und Beschattung öffentlicher Flächen,
          Dach und Fassade, Naturoasen.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Programme, die dafür in Frage kommen: KfW 444 Natürlicher Klimaschutz in Kommunen
          (Aktionsprogramm Natürlicher Klimaschutz), die Kommunalrichtlinie des Bundes, die
          hessische Richtlinie für kommunalen Klimaschutz und Klimaanpassung, Städtebauförderung
          und nachhaltige Stadtentwicklung. Konditionen und Laufzeiten ändert der Geber. Die
          Kommune prüft selbst, was noch offen ist. Den Antrag stellt die Kommune — wir stimmen
          die Maßnahme darauf ab.
        </p>
      </Section>

      <Section tone="paper">
        <Kicker>Angebot</Kicker>
        <h2 className="mt-3 font-display text-4xl">Von der Bilanz bis zur Pflege.</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              n: "01",
              t: "Flächenbilanz",
              d: "Gemeinsam mit Bauhof oder Umweltamt: was zählt, was fehlt, was bis 2030 halten muss.",
            },
            {
              n: "02",
              t: "Heimisch pflanzen",
              d: `${LIST_META.species} heimische Arten aus Hessen, klimaresilient, für Ausschreibung und § 40 tauglich.`,
            },
            {
              n: "03",
              t: "Entsiegeln",
              d: "Asphalt runter, Boden auf, Grün drauf. Dach und Fassade zählen mit.",
            },
            {
              n: "04",
              t: "Baum und Pflege",
              d: "Pflanzung, Schnitt, Ökomahd. Mehrjährige Pflege, damit die Fläche 2030 noch steht.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-3xl text-gold">{s.n}</p>
              <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Kicker>Warum wir</Kicker>
            <h2 className="mt-3 font-display text-4xl">Eine Hand. Unterhalb der Schwelle.</h2>
            <p className="mt-5 text-muted">
              {SITE.owner}, {SITE.legal.profession}, {SITE.address.city}. Einzelunternehmer, Entscheidung
              vor Ort, keine Warteschleife. Kleinere Maßnahmen unterhalb der Ausschreibungsschwelle
              direktvergabefähig — schneller startklar als über ein formales Verfahren.
            </p>
            <p className="mt-4 text-muted">
              Die Artenliste ist offen, filterbar, mit Standort. Die gebauten Flächen stehen als
              Vorher und Nachher daneben.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              { t: "Hecke und Saum", d: "Schlehe, Weißdorn, Liguster, Rose, Hartriegel." },
              { t: "Baum am Platz", d: "Stieleiche, Hainbuche, Feldahorn, Linde." },
              { t: "Wiese nach Entsiegelung", d: "Magerrasen, regionales Saatgut, Ökomahd." },
            ].map((item) => (
              <li key={item.t} className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]">
                <h3 className="font-display text-2xl">{item.t}</h3>
                <p className="mt-2 text-sm text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="forest">
        <Kicker>Nächster Schritt</Kicker>
        <h2 className="font-display text-4xl text-cream">Kostenloses Gespräch. Rathaus oder Fläche.</h2>
        <p className="mt-4 max-w-xl text-cream/80">
          Gemeinsam auf die Flächenbilanz schauen, erste Maßnahmen benennen. Unverbindlich.{" "}
          {SITE.phone} · {SITE.email}
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