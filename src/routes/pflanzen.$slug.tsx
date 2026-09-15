import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import {
  bloomLabel,
  categoryLabel,
  creditLabel,
  getPlant,
  lightLabel,
  moistureLabel,
  MONTHS,
} from "@/data/plants";

export const Route = createFileRoute("/pflanzen/$slug")({
  component: PlantDetailPage,
  loader: ({ params }) => {
    const plant = getPlant(params.slug);
    if (!plant) throw notFound();
    return { plant };
  },
  notFoundComponent: () => (
    <Section>
      <h1 className="font-display text-4xl">Art nicht gefunden</h1>
      <p className="mt-3 text-muted">Diese Pflanze steht nicht im Verzeichnis.</p>
      <Link to="/pflanzen" className="mt-6 inline-block text-moss">
        Zurück zur Liste
      </Link>
    </Section>
  ),
});

function PlantDetailPage() {
  const { plant } = Route.useLoaderData();
  const related = plant.companions
    .map((slug) => getPlant(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const image =
    plant.moisture.includes("feucht")
      ? "/images/feuchtwiese.jpg"
      : plant.category === "baum" || plant.light.includes("schatten")
        ? "/images/waldgarten.jpg"
        : plant.category === "strauch" || plant.category === "kleinstrauch"
          ? "/images/wildhecke.jpg"
          : "/images/wildblueten.jpg";

  return (
    <>
      <PageHero
        image={image}
        compact
        kicker={`${categoryLabel(plant.category)} · ${plant.gekId}`}
        title={plant.name}
        lede={plant.latin}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Kicker>Steckbrief</Kicker>
            <p className="mt-5 text-lg leading-relaxed text-ink">{plant.ecology}</p>
            {plant.praxis ? (
              <p className="mt-4 rounded-lg bg-paper px-4 py-3 text-sm leading-relaxed text-muted">
                <span className="font-medium text-moss">Praxis. </span>
                {plant.praxis}
              </p>
            ) : null}
            {plant.edibleNote ? (
              <p className="mt-3 text-sm text-muted">
                <span className="font-medium text-moss">Essbar. </span>
                {plant.edibleNote}
              </p>
            ) : null}
            {plant.toxicNote ? (
              <p className="mt-3 text-sm text-muted">
                <span className="font-medium text-danger">Giftig. </span>
                {plant.toxicNote}
              </p>
            ) : null}

            <h2 className="mt-10 font-display text-3xl">Blühverlauf</h2>
            <p className="mt-2 text-sm text-muted">
              Relative Blühintensität über das Jahr, abgeleitet aus der GEK-Blütezeit.
            </p>
            <ol className="mt-5 grid grid-cols-12 gap-1">
              {plant.bloomCurve.map((value, i) => (
                <li key={MONTHS[i]} className="flex flex-col items-center gap-1">
                  <div className="flex h-28 w-full items-end rounded-sm bg-paper">
                    <span
                      className="w-full rounded-sm bg-moss"
                      style={{ height: `${Math.max(6, value)}%` }}
                      title={`${MONTHS[i]}: ${value}`}
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wide text-muted">
                    {MONTHS[i]}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit rounded-xl bg-paper p-6">
            <dl className="space-y-4 text-sm">
              <Row label="Kennziffer" value={plant.gekId} />
              <Row label="Anrechnung" value={creditLabel(plant.credit)} />
              <Row
                label="Ökologischer Wert"
                value={`${"●".repeat(plant.eco)}${"○".repeat(5 - plant.eco)}`}
              />
              <Row label="Wuchshöhe" value={plant.height || "—"} />
              <Row label="Wuchsform" value={plant.form || "—"} />
              <Row label="Licht" value={plant.light.map(lightLabel).join(", ")} />
              <Row label="Bodenfeuchte" value={plant.moisture.map(moistureLabel).join(", ")} />
              <Row label="Boden" value={plant.soil || "—"} />
              <Row label="Bodenart" value={plant.soilType || "—"} />
              <Row label="Lebensbereich" value={plant.lifeZone || "—"} />
              <Row label="Blüte" value={bloomLabel(plant)} />
              <Row label="Blütenfarbe" value={plant.bloomColor || "—"} />
              <Row label="Geselligkeit" value={plant.sociability || "—"} />
              <Row label="Stück je m²" value={plant.density || "—"} />
              <Row label="Vorkommen" value={plant.occurrence || "—"} />
              <Row
                label="Kennzeichen"
                value={[
                  plant.edible ? "essbar" : null,
                  plant.toxic ? "giftig" : null,
                  plant.protected ? "geschützt" : null,
                ]
                  .filter(Boolean)
                  .join(" · ") || "—"}
              />
            </dl>
          </aside>
        </div>

        {related.length > 0 ? (
          <div className="mt-14">
            <Kicker>Gesellschaft</Kicker>
            <h2 className="mt-3 font-display text-3xl">Passende Arten</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/pflanzen/$slug"
                    params={{ slug: p.slug }}
                    className="block rounded-lg bg-paper p-4 hover:bg-forest hover:text-cream"
                  >
                    <p className="text-xs text-gold">{p.latin}</p>
                    <p className="mt-1 font-display text-xl">{p.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12">
          <Link to="/pflanzen" className="text-sm text-moss">
            Alle {categoryLabel(plant.category).toLowerCase()}
          </Link>
        </div>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.16em] text-gold">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}
