import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ReviewList } from "@/components/reviews";
import { Kicker, Section } from "@/components/section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/nachweise")({ component: NachweisePage });

const CERTS = [
  {
    id: "gaertner",
    kicker: "Ausbildung",
    title: "Gärtner",
    text: "Abschlussprüfung im staatlich anerkannten Ausbildungsberuf Gärtner. Bayerisches Staatsministerium für Landwirtschaft und Forsten, München, März 2007.",
    image: "/nachweise/gaertner.jpg",
    pdf: "/nachweise/gaertner.pdf",
    alt: "Urkunde: Tom Seehafer, Abschlussprüfung Gärtner, München März 2007",
  },
  {
    id: "techniker",
    kicker: "Technik",
    title: "Staatlich geprüfter Bautechniker",
    text: "Prüfung zum staatlich geprüften Bautechniker im Schwerpunkt Garten- und Landschaftsbau. Philipp-Holzmann-Schule, Frankfurt am Main, 28. Juni 2016.",
    image: "/nachweise/techniker.jpg",
    pdf: "/nachweise/techniker.pdf",
    alt: "Technikerurkunde: Tom Seehafer, staatlich geprüfter Bautechniker, Frankfurt am Main 2016",
  },
  {
    id: "klettern",
    kicker: "Baum",
    title: "SKT-A Seilklettertechnik",
    text: "40-stündiger Basiskurs Seilklettertechnik, mit Erfolg bestanden. Münchner Baumkletterschule, Kronberg, 27. bis 31. Januar 2025.",
    image: "/nachweise/skt-a.jpg",
    pdf: "/nachweise/skt-a.pdf",
    alt: "Zertifikat SKT-A Seilklettertechnik, Tom Seehafer, Kronberg Januar 2025",
  },
] as const;

function NachweisePage() {
  return (
    <>
      <PageHero
        compact
        image="/images/werkstatt.jpg"
        kicker="Unternehmen"
        title="Nachweise"
        lede={`${SITE.owner} · Gärtner, staatlich geprüfter Bautechniker, SKT-A. Die Originale, nicht die Behauptung.`}
      />
      <Section>
        <Kicker>Befähigung</Kicker>
        <h2 className="mt-3 font-display text-4xl">Gelernt. Geprüft. Berechtigt.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Landschaftsbau aus dem Beruf, nicht aus dem Hausmeisterdienst. Die drei Urkunden
          unten — Ausbildung, Technik, Krone.
        </p>
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {CERTS.map((c) => (
            <li key={c.id} className="flex flex-col border border-line bg-paper">
              <a href={c.pdf} className="block bg-cream" target="_blank" rel="noreferrer">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="aspect-[3/4] w-full object-contain object-top"
                />
              </a>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">{c.kicker}</p>
                <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.text}</p>
                <a
                  href={c.pdf}
                  className="mt-4 text-sm text-moss hover:text-forest"
                  target="_blank"
                  rel="noreferrer"
                >
                  Urkunde als PDF
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="paper">
        <Kicker>Kundenzufriedenheit</Kicker>
        <h2 className="mt-3 font-display text-4xl">Referenzen</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Wortlaut der Bewertungen, auf Deutsch, unverändert. Keine Screenshots.
        </p>
        <ReviewList />
        <p className="mt-8">
          <Link to="/projekte" className="text-moss hover:text-forest">
            Sichtbare Arbeit: die ausgeführten Projekte
          </Link>
        </p>
      </Section>
    </>
  );
}