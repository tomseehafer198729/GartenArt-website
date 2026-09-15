import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/naturgaerten")({ component: NaturgaertenPage });

function NaturgaertenPage() {
  return (
    <>
      <PageHero
        image="/images/waldgarten.jpg"
        kicker="Haltung"
        title="Naturgärten sind gebaute Landschaft."
        lede="Kein Dekor aus der Baumschule. Ein Garten, der an den Ort gebunden ist: Boden, Licht, Wasser, und die Flora Hessens."
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Kicker>Flora</Kicker>
            <h2 className="mt-3 font-display text-4xl">Was „heimisch“ hier heißt</h2>
            <p className="mt-5 text-muted">
              Wir setzen nur Arten, deren Vorkommen in Hessen mindestens dreitausend Jahre
              zurückreicht — nacheiszeitlich etablierte Flora, keine Archäophyten der
              Römerzeit, keine Neophyten nach 1492. Der Filter ist streng, weil Insekten
              Generationen brauchen, um eine Pflanze zu nutzen.
            </p>
            <p className="mt-4 text-muted">
              Kirschlorbeer, Thuja, Forsythie: der Wunsch ist verständlich. An ihre Stelle treten
              Liguster der Wildform, Hainbuche, Schlehe, Wiesensalbei, Dost — dieselbe Aufgabe,
              die Art aus Hessen.
            </p>
          </div>
          <div>
            <Kicker>Pflege</Kicker>
            <h2 className="mt-3 font-display text-4xl">Mager, spät, unaufgeräumt</h2>
            <p className="mt-5 text-muted">
              Eine Wiese wird ein- bis zweimal gemäht, das Mähgut abgeräumt. Hecken werden
              abschnittsweise auf Stock gesetzt, nicht jährlich in Form geschoren. Laub bleibt
              unter Gehölzen. Totholz bleibt liegen.
            </p>
            <p className="mt-4 text-muted">
              Das ist kein Verzicht auf Gestaltung. Wege, Sitzplätze und Mauern sind klar
              gesetzt. Der Rest darf sich staffeln — von der Magerrasenfläche zum Waldmantel.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Raumtypen</Kicker>
        <h2 className="mt-3 font-display text-4xl">Fünf Bilder eines Grundstücks</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              n: "01",
              t: "Magerrasen",
              d: "Abgeschobener Oberboden, regionales Mähgut, Zittergras und Salbei. Ein Mahdweg hält die Fläche begehbar.",
            },
            {
              n: "02",
              t: "Wildhecke",
              d: "Drei Reihen: Schlehe, Weißdorn, Rose, Hartriegel, Holunder. Davor Krautsaum, dahinter Totholzriegel.",
            },
            {
              n: "03",
              t: "Waldgarten",
              d: "Schatten unter Bestand. Geophyten im Frühjahr, Immergrün und Waldmeister als Teppich, keine Folie.",
            },
            {
              n: "04",
              t: "Feuchtbiotop",
              d: "Flachtümpel ohne steile Folienkante. Seggen, Mädesüß, Blutweiderich. Wasser vom Dach oder Stauhorizont.",
            },
            {
              n: "05",
              t: "Saum",
              d: "Der wichtigste Meter im Garten: Übergang von Wiese zu Hecke. Dort sitzen die meisten Arten.",
            },
          ].map((item) => (
            <li key={item.n} className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
              <p className="font-display text-3xl text-gold">{item.n}</p>
              <h3 className="mt-2 font-display text-2xl">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="forest">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <img
            src="/images/wildhecke.jpg"
            alt="Heimische Wildhecke im Spätsommer"
            className="aspect-[16/10] w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="font-display text-4xl text-cream">Vom Plan zur Pflanzung</h2>
            <p className="mt-4 text-cream/80">
              Zuerst der Ort: Bodenprobe, Licht, Nachbarschaft, vorhandener Bestand. Dann die
              Artenliste aus dem Verzeichnis. Dann der Bau — Wege und Mauern, bevor gepflanzt
              wird.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/pflanzen">Zum Verzeichnis</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/planer">Saisonkalender öffnen</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
