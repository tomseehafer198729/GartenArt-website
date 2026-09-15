import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProjectArticle } from "@/components/project-gallery";
import { Kicker, Section } from "@/components/section";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/projekte")({ component: ProjektePage });

function ProjektePage() {
  return (
    <>
      <PageHero
        image="/images/projekte/umgestaltung/03-nachher-thymian.jpg"
        imageClassName="object-[center_62%]"
        kicker="Referenzen"
        title="Gebaute Gärten"
        lede={`Arbeiten von ${SITE.fullName} im Hochtaunus, Maintaunus und Rhein-Main.`}
      />
      <Section>
        <Kicker>{SITE.region}</Kicker>
        <h2 className="mt-3 font-display text-4xl">Projekte</h2>
        <div className="mt-10 grid gap-10">
          {PROJECTS.map((project) => (
            <ProjectArticle key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}