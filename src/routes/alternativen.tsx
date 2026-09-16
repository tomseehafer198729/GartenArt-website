import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { WishPairCard } from "@/components/wish-pair";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { WISH_PAIRS } from "@/data/alternatives";

export const Route = createFileRoute("/alternativen")({ component: AlternativenPage });

function AlternativenPage() {
  return (
    <>
      <PageHero
        image="/images/wildblueten.jpg"
        kicker="Beratung"
        title="Was Sie mögen. Was der Garten braucht."
        lede="Kein Verbot. Eine Übersetzung: der Wunsch bleibt, die Art wechselt — in die 186, die in Hessen wurzeln."
      />
      <Section>
        <Kicker>Wunsch und Art</Kicker>
        <h2 className="mt-3 font-display text-4xl">Geht. Mit der Pflanze, die hier hingehört.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Terrasse, Weg, Hecke, Beet: das bauen wir. Bei der Pflanzung ersetzen wir den Katalog
          durch die heimische Variante, die denselben Zweck erfüllt. Duft, Sichtschutz, frühe
          Blüte — der Bedarf bleibt, die Art wechselt.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {WISH_PAIRS.map((pair) => (
            <li key={pair.id}>
              <WishPairCard pair={pair} />
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="paper">
        <h2 className="font-display text-4xl">Erstgespräch: den Garten erklären</h2>
        <p className="mt-4 max-w-xl text-muted">
          Lage, Licht, was Sie mögen. Wir sagen, welche Art den Zweck erfüllt. Jede Ersatzart
          steht in der Artenliste.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/kontakt">Kontakt aufnehmen</Link>
          </Button>
          <Button asChild variant="ink">
            <Link to="/pflanzen">Zum Verzeichnis</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
