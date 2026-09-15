import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/leistungen")({ component: LeistungenPage });

const SERVICES = [
  {
    title: "Ihr Garten ist für ein anderes Klima gemacht",
    image: "/images/bereiche/privat.jpg?v=clean",
    text: "Lavendel, Kirschlorbeer, englischer Rasen: gemacht für woanders. Pflanzkonzept aus heimischen Arten, aus der Liste, für Hessen, für Hitze und Frost.",
  },
  {
    title: "Pflanzung heimischer Arten",
    image: "/images/wildblueten.jpg?v=insekten",
    text: "Sie sagen, was Sie mögen. Wir setzen die Art aus der Liste, die denselben Zweck erfüllt. 186 Arten. Beratung, kein Verbot.",
  },
  {
    title: "Gartenumbau und Neubau",
    image: "/images/projekt-umgestaltung.jpg",
    text: "Kleine Gärten und große Gärten. Umgestaltung und Neubau. Beete, Wege, Rasen, Pflanzung — neu gesetzt, nicht nur aufgeräumt.",
  },
  {
    title: "Wege, Pflaster, Einfassungen",
    image: "/images/pfad.jpg",
    text: "Kleinsteinpflaster, Wegplatten, Randeinfassungen. Unterbau, Gefälle, Fuge. Der Stein fasst die Fläche, das Wasser bleibt im Boden.",
  },
  {
    title: "Terrassen und Treppen",
    image: "/images/projekt-neubau.jpg",
    text: "Terrassen, Treppen, Stufen. Barrierefrei, wenn der Garten das braucht — nicht nur für Senioren. Unterbau, Belag, Anschluss ans Haus.",
  },
  {
    title: "Gartenhäuser und Fundamente",
    image: "/images/projekt-gartenhaus.jpg",
    text: "Aushub, Randeinfassung, Fundament betoniert, Gartenhaus gesetzt. Der Bau sitzt eben, bevor das Haus kommt.",
  },
  {
    title: "Wiederherstellung — öffentliche Auftraggeber",
    image: "/images/bereiche/kommune.jpg",
    paragraphs: [
      "Die EU-Naturwiederherstellungsverordnung (VO (EU) 2024/1991) und die Biodiversitätsstrategie 2030 verlangen von der Kommune: Stadtgrün und Baumkronen bis 2030 mindestens halten, danach steigern. Das ist Artikel 8. Das ist Natur 2030.",
      "Wir entsiegeln, pflanzen heimisch, halten Kronen. Förderung stimmen wir auf die Maßnahme ab. Den Antrag stellt die Kommune — wir bauen die Fläche.",
    ],
  },
  {
    title: "Klimacheck, Flächenbewertung",
    image: "/images/bereiche/gewerbe.jpg",
    text: "Für Privatkunden, Unternehmer und öffentliche Auftraggeber. Versiegelung, Grünanteil, heimische Bepflanzung, Regenwasser. Zahlen zur Fläche — nachvollziehbar, ohne Berichtslyrik.",
  },
  {
    title: "Grünpflege und Baumpflege",
    image: "/images/pflege-baum-hecke.jpg",
    text: "Schnitt, Gehölzpflege, Fällung wo nötig. Die Fläche bleibt nutzbar, der Bestand bleibt stehen.",
  },
  {
    title: "Digitale Planung",
    image: "/images/digitale-planung.jpg",
    text: "Artenliste, Blühkalender, Wunsch und heimische Alternative. Die Technik hilft der Planung. Gebaut wird vor Ort.",
  },
];

function LeistungenPage() {
  return (
    <>
      <PageHero
        image="/images/projekt-neubau.jpg"
        kicker="Leistungen"
        title={SITE.fullName}
        lede="Kleine Gärten, große Gärten. Umbau und Neubau. Planung, Pflanzung und Bau aus einer Hand."
      />
      <Section>
        <Kicker>Angebot</Kicker>
        <h2 className="mt-3 font-display text-4xl">Was wir bauen</h2>
        <div className="mt-10 grid gap-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="grid overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)] md:grid-cols-2"
            >
              <img
                src={s.image}
                alt=""
                className={`aspect-[16/10] w-full object-cover md:aspect-auto md:h-full ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="font-display text-3xl text-gold tabular">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
                {("paragraphs" in s && s.paragraphs ? s.paragraphs : [s.text]).map((p) => (
                  <p key={p} className="mt-3 text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="forest">
        <h2 className="font-display text-4xl text-cream">Projekt anfragen</h2>
        <p className="mt-4 max-w-xl text-cream/80">
          Wir schauen uns das Grundstück an, bevor wir zeichnen. Sitz in Oberursel,
          Einsatzgebiet {SITE.region}.
        </p>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link to="/kontakt">Erstgespräch vereinbaren</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}