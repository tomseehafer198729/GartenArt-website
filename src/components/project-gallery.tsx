"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export type ProjectShot = {
  src: string;
  alt: string;
  phase?: "vorher" | "nachher";
  objectPosition?: string;
};

export function ProjectGallery({
  images,
  title,
}: {
  images: ProjectShot[];
  title: string;
}) {
  const pairs = beforeAfterPairs(images);
  if (pairs) {
    return (
      <PhotoGrid
        label={`Vorher und Nachher: ${title}`}
        shots={pairs.flatMap((pair) => [pair.vorher, pair.nachher])}
      />
    );
  }

  if (images.length >= 2 && images.some((s) => s.phase)) {
    return <PhotoGrid label={`Fotos ${title}`} shots={images} />;
  }

  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  if (!current) return null;

  return (
    <div className="flex flex-col bg-forest-deep md:col-span-3">
      <figure className="flex min-h-0 flex-1 flex-col">
        <div className="relative h-[22rem] w-full sm:h-[26rem]">
          <img
            src={current.src}
            alt={current.alt}
            className="absolute inset-0 size-full object-cover"
            style={{ objectPosition: current.objectPosition ?? "center 68%" }}
          />
          {current.phase ? (
            <p className="absolute left-2 top-2 rounded-sm bg-forest/85 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-gold">
              {current.phase === "vorher" ? "Vorher" : "Nachher"}
            </p>
          ) : null}
        </div>
        <figcaption className="px-4 py-2 text-xs leading-relaxed text-cream/70">
          {current.alt}
        </figcaption>
      </figure>
      {images.length > 1 ? (
        <ul className="grid grid-cols-6 gap-1 p-1" aria-label={`Fotos ${title}`}>
          {images.map((shot, index) => {
            const selected = index === active;
            return (
              <li key={shot.src}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={selected}
                  aria-label={`Foto ${index + 1}: ${shot.alt}`}
                  className={cn(
                    "block min-h-11 w-full overflow-hidden rounded-sm ring-offset-2 ring-offset-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                    selected ? "ring-2 ring-gold" : "opacity-75 hover:opacity-100",
                  )}
                >
                  <img
                    src={shot.src}
                    alt=""
                    className="aspect-[3/4] w-full object-cover"
                    style={{ objectPosition: shot.objectPosition ?? "center 70%" }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function PhotoGrid({ label, shots }: { label: string; shots: ProjectShot[] }) {
  return (
    <div className="bg-forest-deep md:col-span-3">
      <ul className="grid grid-cols-2 gap-1 p-1" aria-label={label}>
        {shots.map((shot) => (
          <li key={shot.src} className="relative">
            <figure>
              <img
                src={shot.src}
                alt={shot.alt}
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
                style={{ objectPosition: shot.objectPosition ?? "center 68%" }}
              />
              {shot.phase ? (
                <figcaption className="absolute left-2 top-2 rounded-sm bg-forest/85 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-gold">
                  {shot.phase === "vorher" ? "Vorher" : "Nachher"}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function beforeAfterPairs(images: ProjectShot[]) {
  const vorher = images.filter((s) => s.phase === "vorher");
  const nachher = images.filter((s) => s.phase === "nachher");
  if (vorher.length === 0 || vorher.length !== nachher.length) return null;
  return vorher.map((shot, i) => ({ vorher: shot, nachher: nachher[i] }));
}

function phaseLabel(shots: { phase?: "vorher" | "nachher" }[]) {
  const hasVorher = shots.some((s) => s.phase === "vorher");
  const hasNachher = shots.some((s) => s.phase === "nachher");
  if (hasVorher && hasNachher) return "Vorher / Nachher";
  if (hasVorher) return "Vorher";
  if (hasNachher) return "Nachher";
  return "Originalfotos";
}

export function ProjectArticle({ project }: { project: Project }) {
  const shots = project.images?.length
    ? project.images
    : [{ src: project.image, alt: project.title }];
  return (
    <article
      id={project.slug}
      className="overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)] md:grid md:grid-cols-5 md:items-stretch"
    >
      <ProjectGallery images={shots} title={project.title} />
      <div className="flex flex-col justify-center p-6 md:col-span-2 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">
          {[project.place, project.year, project.area].filter(Boolean).join(" · ")}
        </p>
        <h3 className="mt-3 font-display text-3xl">{project.title}</h3>
        <p className="mt-1 text-sm text-moss">{project.service}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((p) => (
            <li
              key={p}
              className="rounded-sm bg-cream px-2.5 py-1 text-xs tracking-wide text-moss"
            >
              {p}
            </li>
          ))}
        </ul>
        {project.photoPending ? (
          <p className="mt-3 text-xs text-muted">Originalfotos folgen.</p>
        ) : shots.some((s) => s.phase) ? (
          <p className="mt-3 text-xs text-moss">{phaseLabel(shots)}</p>
        ) : (
          <p className="mt-3 text-xs text-moss">{shots.length} Originalfotos</p>
        )}
      </div>
    </article>
  );
}
