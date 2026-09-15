import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/ueber")({ component: UeberPage });

function UeberPage() {
  return (
    <>
      <PageHero
        image="/images/werkstatt.jpg"
        kicker="Über uns"
        title={`${SITE.owner}. Eine Hand. Ein Ort.`}
        lede="Gärtner, Planung und Bau — von Oberursel in den Hochtaunus, den Maintaunus und das Rhein-Main-Gebiet. Kein anonymer Betrieb. Ein Fachbetrieb."
      />

      <Section>
        <Kicker>Marke</Kicker>
        <h2 className="mt-3 font-display text-4xl">{SITE.claim}</h2>
        <p className="mt-5 max-w-2xl text-muted">
          Natur, Handwerk, Ökologie, Planung. Die Technik ersetzt das Handwerk nicht. Sie macht
          die Planung klarer — gebaut wird vor Ort, mit Stein, Boden und Pflanze.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Natur",
              d: "Heimische Arten, die hier seit Jahrtausenden wurzeln. Boden, Wasser, Blüte für Insekten.",
            },
            {
              t: "Handwerk",
              d: "Unterbau, Pflaster, Terrasse, Fällung, Pflanzung. Was bleibt, wird gesetzt, nicht nur gezeichnet.",
            },
            {
              t: "Planung",
              d: "Artenliste, Blühkalender, Wunsch und Alternative. Die Zahl dient dem Beet, nicht umgekehrt.",
            },
          ].map((item) => (
            <li key={item.t} className="border-l border-gold bg-paper p-5">
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <Kicker>Inhaber</Kicker>
        <h2 className="mt-3 font-display text-4xl">{SITE.owner}</h2>
        <p className="mt-5 max-w-2xl text-muted">
          Gärtner (2007), staatlich geprüfter Bautechniker Garten- und Landschaftsbau (2016),
          SKT-A Seilklettertechnik (2025). {SITE.address.city}. Die Urkunden stehen unter
          Nachweise — nicht behauptet, belegt.
        </p>
        <p className="mt-4 max-w-2xl text-muted">
          Erstgespräch vor Ort. Das Grundstück erklären, dann planen, dann bauen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/kontakt">Projekt anfragen</Link>
          </Button>
          <Button asChild variant="ink">
            <Link to="/nachweise">Nachweise</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}