import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { WishPairCard } from "@/components/wish-pair";
import { Kicker, Section } from "@/components/section";
import { FEATURED_WISHES } from "@/data/alternatives";
import { PLANTS } from "@/data/plants";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({ component: Home });

const FEATURED = PLANTS.filter((p) =>
  ["stieleiche", "schlehe", "wiesensalbei", "hundsrose", "efeu", "sumpfdotterblume"].includes(
    p.slug,
  ),
);

function Home() {
  return (
    <>
      <section className="relative isolate min-h-[58dvh] overflow-hidden bg-forest-deep sm:min-h-[64dvh]">
        <img
          src="/images/hero.jpg?v=garten"
          alt="Naturnaher Privatgarten: Sandthymian, Steinweg, Blüten"
          className="absolute inset-0 size-full object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative mx-auto flex min-h-[58dvh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:min-h-[64dvh] sm:px-6 sm:pb-16">
          <p className="rise-in text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
            {SITE.fullName} · {SITE.region}
          </p>
          <h1 className="rise-in mt-4 max-w-5xl font-display text-5xl font-light leading-[1.05] text-cream sm:text-6xl md:text-[4.5rem]">
            Wir pflanzen, was in Hessen wurzelt.
            <span className="mt-1 block">Wir bauen, was bleibt.</span>
          </h1>
          <p className="rise-in mt-6 max-w-xl text-[17px] leading-[1.65] text-cream/90 sm:text-lg">
            Planung und Bau naturnaher Gärten, Wege und Terrassen.
          </p>
          <p className="rise-in mt-3 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
            {SITE.owner} · Inhaber
          </p>
          <div className="rise-in mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/kontakt">Projekt anfragen</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/leistungen">Leistungen entdecken</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <Kicker>Woran Sie uns erkennen</Kicker>
        <h2 className="mt-3 max-w-3xl font-display text-4xl">Natur. Handwerk. Planung.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Die Technik macht das Handwerk besser. Sie ersetzt es nicht.
        </p>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Natur",
              d: "Was in Hessen wurzelt. Artenliste, Blüte für Insekten, Boden — nicht der Container aus dem Großhandel.",
            },
            {
              t: "Handwerk",
              d: "Terrasse, Weg, Unterbau, Pflanzung. Vorher und Nachher aus gebauten Gärten.",
            },
            {
              t: "Planung",
              d: "Blühkalender, Wunsch und heimische Art, Flächenbewertung. Dann wird gebaut.",
            },
          ].map((item) => (
            <li key={item.t}>
              <h3 className="font-display text-3xl">{item.t}</h3>
              <p className="mt-3 text-muted">{item.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Kicker>Auftraggeber</Kicker>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">
          Privat. Gewerbe. Öffentliche Hand.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Der Garten, der Betrieb, die Fläche von Stadt und Gemeinde.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Link
            to="/privat"
            className="group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/images/bereiche/privat.jpg?v=clean"
                alt="Privater Garten mit Blüten, Stein und Sandthymian"
                className="size-full object-cover object-[center_50%] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Privatkunden</p>
              <h3 className="mt-2 font-display text-3xl">Ihr Garten ist für ein anderes Klima gemacht</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Lavendel, Kirschlorbeer, englischer Rasen: gemacht für woanders. Pflanzkonzept aus
                heimischen Arten. Kleine Gärten und große Gärten, Umbau und Neubau. Wege, Terrassen,
                Treppen.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-moss">
                Projekte und Leistungen
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
          <Link
            to="/gewerbe"
            className="group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/images/bereiche/gewerbe.jpg?v=hof"
                alt="Pausenhof mit Obstgehölz, Bank und heimischer Wiese"
                className="size-full object-cover object-[center_48%] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Gewerbetreibende</p>
              <h3 className="mt-2 font-display text-3xl">Klimacheck, Flächenbewertung</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Versiegelung, Grünanteil, heimische Bepflanzung, Regenwasser. Zahlen zur Fläche —
                nachvollziehbar. Dann pflanzen und bauen, wenn die Zahl besser werden soll.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-moss">
                Gelände anfragen
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
          <Link
            to="/kommune"
            className="group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/images/bereiche/kommune.jpg"
                alt="Öffentliche Fläche mit heimischen Eichen und Hecke"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">
                Öffentliche Auftraggeber
              </p>
              <h3 className="mt-2 font-display text-3xl">Wiederherstellung</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Naturwiederherstellungsverordnung und Biodiversität 2030: Stadtgrün und Kronen
                halten. Entsiegeln, heimisch pflanzen. Förderung prüft die Kommune. Den Antrag
                stellt sie — wir bauen die Fläche.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-moss">
                Fläche anfragen
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </Section>

      <Section tone="paper">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Kicker>Übersetzung</Kicker>
            <h2 className="mt-3 font-display text-4xl">Was Sie wollen, was der Garten braucht</h2>
          </div>
          <Link to="/alternativen" className="hidden text-sm text-moss sm:inline-flex">
            Alle Paare
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-muted">
          Kein Verbot. Eine Bedarfsposition: dieselbe Wirkung, die Art aus Hessen.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {FEATURED_WISHES.map((pair) => (
            <li key={pair.id}>
              <WishPairCard pair={pair} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <Kicker>Prinzip</Kicker>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Geht. Mit der Art, die hier hingehört.
            </h2>
            <p className="mt-5 max-w-prose text-muted">
              Wir pflanzen aus 186 Arten, die in Hessen seit der Nacheiszeit wurzeln. Nicht weil
              der Katalog verboten ist — weil die heimische Variante den Zweck erfüllt und bleibt.
              Bau ist offen: Terrasse, Weg, Mauer, Haus.
            </p>
          </div>
          <p className="border-l border-gold pl-5 font-display text-2xl italic leading-snug text-moss">
            Wir geben weiter, was der Garten braucht — nicht nur, was der Katalog will.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Drei Felder</Kicker>
        <h2 className="mt-3 font-display text-4xl">Garten, Gehölz, Bau.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              to: "/naturgaerten" as const,
              title: "Naturgärten",
              image: "/images/waldgarten.jpg",
              text: "Säume, Wiesen, Waldgärten. Magere Böden, späte Mahd. Der Garten als Lebensraum — und als Hof, den man nutzt.",
            },
            {
              to: "/kommune" as const,
              title: "Gehölze",
              image: "/images/wildhecke.jpg",
              text: "Hecke, Baum, Ausgleich. Heimische Gehölze für Privatgrund und öffentliche Fläche.",
            },
            {
              to: "/leistungen" as const,
              title: "Bauprojekte",
              image: "/images/trockenmauer.jpg",
              text: "Trockenmauern, Wege, Terrassen, Fundamente. Handwerk, das den Pflanzen Platz lässt.",
            },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group flex flex-col overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-moss">
                  Weiter
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <Kicker>Auswahl</Kicker>
            <h2 className="mt-3 font-display text-4xl">Arten aus dem Verzeichnis</h2>
          </div>
          <Link to="/pflanzen" className="hidden text-sm text-moss sm:inline-flex">
            Alle Pflanzen
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((plant) => (
            <li key={plant.slug}>
              <Link
                to="/pflanzen/$slug"
                params={{ slug: plant.slug }}
                className="block rounded-lg bg-paper p-5 transition-colors duration-150 hover:bg-forest hover:text-cream"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{plant.latin}</p>
                <h3 className="mt-2 font-display text-2xl">{plant.name}</h3>
                <p className="mt-2 text-sm opacity-80">{plant.habitat}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="forest">
        <Kicker>Projekte</Kicker>
        <h2 className="mt-3 font-display text-4xl text-cream">Gebaute Gärten</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to="/projekte"
              hash={project.slug}
              className="group overflow-hidden rounded-xl bg-forest-deep"
            >
              <div
                className={
                  project.imageFit === "contain"
                    ? "aspect-[2/3] overflow-hidden bg-forest-deep"
                    : "aspect-[16/9] overflow-hidden"
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    project.imageFit === "contain"
                      ? "size-full object-contain"
                      : "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  }
                  style={{
                    objectPosition: project.imagePosition ?? "center 72%",
                  }}
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  {project.place} · {project.year}
                </p>
                <h3 className="mt-2 font-display text-2xl text-cream">{project.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{project.service}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/projekte">Alle Projekte</Link>
          </Button>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex justify-center bg-cream p-6 sm:p-10">
            <BrandLogo variant="lockup" className="w-full max-w-[280px] bg-transparent" />
          </div>
          <div>
            <Kicker>Inhaber</Kicker>
            <h2 className="mt-3 font-display text-4xl">{SITE.owner}</h2>
            <p className="mt-4 text-muted">
              {SITE.fullName} arbeitet von Oberursel (Taunus) aus im Hochtaunus, Maintaunus und
              Rhein-Main. Planung, Pflanzung und Bau bleiben in einer Hand. Wir bauen, was der
              Garten braucht — inklusive der Pflanzen, die der Standort verlangt.
            </p>
            <div className="mt-6">
              <Button asChild variant="forest">
                <Link to="/kontakt">Projekt anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
