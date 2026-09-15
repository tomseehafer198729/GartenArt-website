import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProjectArticle } from "@/components/project-gallery";
import { WishPairCard } from "@/components/wish-pair";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { FEATURED_WISHES } from "@/data/alternatives";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privat")({ component: PrivatPage });

function PrivatPage() {
  return (
    <>
      <PageHero
        image="/images/bereiche/privat.jpg?v=clean"
        imageClassName="object-[center_50%]"
        kicker="Privatkunden"
        title="Ihr Garten. Gebaut, dann heimisch."
        lede="Zuerst die Arbeit, die steht: Vorher und Nachher. Dann Bau und Naturgarten — zwei Wege, ein Hof."
      />

      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Kicker>Gebaut</Kicker>
            <h2 className="mt-3 font-display text-4xl">Vorher und Nachher</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Das sind Gärten aus dem {SITE.region}. Stein, Thymian, Terrasse, Gartenhaus — Arbeit,
              die steht. Danach die Pflanzung.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/leistungen">Zum Bau</Link>
            </Button>
            <Button asChild variant="ink">
              <Link to="/naturgaerten">Zu den Naturgärten</Link>
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-10">
          {PROJECTS.map((project) => (
            <ProjectArticle key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Schritt für Schritt</Kicker>
        <h2 className="mt-3 font-display text-4xl">Nicht belehren. Ersetzen.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Viele Gärten der letzten hundert Jahre in Deutschland sind aus dem Katalog: Lavendel,
          Kirschlorbeer, Forsythie, Thuja. Sie erfüllen einen Wunsch. Die heimische Art erfüllt
          denselben Wunsch — und bleibt. Kein Verbot. Eine Alternative.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Sie sagen, was Sie mögen",
              d: "Duft, grüne Hecke, gelb im März, Teppich statt Rasen.",
            },
            {
              n: "02",
              t: "Wir nennen die Art",
              d: "Sandthymian statt Lavendel. Liguster statt Kirschlorbeer. Kornelkirsche statt Forsythie.",
            },
            {
              n: "03",
              t: "Der Garten wechselt",
              d: "Stück für Stück. Was gebaut ist, bleibt. Was gepflanzt wird, wurzelt hier.",
            },
          ].map((s) => (
            <article key={s.n} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-3xl text-gold">{s.n}</p>
              <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <Kicker>Pflanzarbeiten</Kicker>
            <h2 className="mt-3 font-display text-4xl">Sie wünschen sich das. Heimisch ist das.</h2>
          </div>
          <Link to="/alternativen" className="hidden text-sm text-moss sm:inline-flex">
            Alle Paare
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-muted">
          Besser für Insekt, Boden, Winter — und für den Garten, den Sie jeden Tag sehen.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {FEATURED_WISHES.map((pair) => (
            <li key={pair.id}>
              <WishPairCard pair={pair} />
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="ink">
            <Link to="/alternativen">Weitere Alternativen</Link>
          </Button>
          <Button asChild>
            <Link to="/neubuerger">Etablierte Neubürger</Link>
          </Button>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Zweite Liste</Kicker>
        <h2 className="mt-3 font-display text-4xl">Wenn heimisch nicht die Frage ist</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Manche wollen nur, dass es wächst. Manche wollen Hitze fest. Dafür gibt es dreißig
          etablierte Neubürger — Robinie, Mahonie, Roteiche — mit Herkunft und Warnung, nie als
          „fast heimisch“.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/neubuerger">Zur Neubürgerliste</Link>
          </Button>
        </div>
      </Section>

      <Section tone="forest">
        <Kicker>Erstgespräch</Kicker>
        <h2 className="font-display text-4xl text-cream">Den Garten erklären</h2>
        <p className="mt-4 max-w-xl text-cream/80">
          Lage, Licht, was Sie mögen, was schon steht. Wir sagen, was gebaut und welche Art
          gesetzt wird. {SITE.owner}, {SITE.address.city}.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}