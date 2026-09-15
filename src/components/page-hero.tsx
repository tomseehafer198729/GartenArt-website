import { cn } from "@/lib/utils";

type PageHeroProps = {
  image: string;
  kicker?: string;
  title: string;
  lede?: string;
  compact?: boolean;
  imageClassName?: string;
};

export function PageHero({ image, kicker, title, lede, compact, imageClassName }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-forest-deep",
        compact ? "min-h-[38vh]" : "min-h-[52vh] md:min-h-[58vh]",
      )}
    >
      <img
        src={image}
        alt=""
        className={cn("absolute inset-0 size-full object-cover", imageClassName)}
      />
      <div className="absolute inset-0 bg-forest/72" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 py-12 sm:px-6 sm:py-16">
        {kicker ? (
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">{kicker}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-light text-cream sm:text-6xl md:text-[4.5rem]">
          {title}
        </h1>
        {lede ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
