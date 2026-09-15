import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BrandLogo, BrandWordmark } from "@/components/brand-logo";
import { ParcelGrid } from "@/components/parcel-grid";
import { NAV, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-forest text-cream">
        <div className="mx-auto flex h-24 max-w-6xl items-stretch sm:h-28">
          <Link
            to="/"
            className="relative z-10 flex shrink-0 items-center gap-4 bg-forest px-4 text-cream sm:px-6"
          >
            <BrandLogo onDark className="h-[4.75rem] w-auto sm:h-[5.5rem]" />
            <BrandWordmark onDark />
          </Link>

          <div className="relative min-w-0 flex-1">
            <ParcelGrid compact />
          </div>

          <nav
            className="relative z-10 hidden shrink-0 items-center bg-forest px-3 lg:flex"
            aria-label="Hauptnavigation"
          >
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative px-3.5 py-2 text-[17px] tracking-wide text-cream/80 transition-colors duration-150 hover:text-gold",
                    active && "text-gold",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gold" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="relative z-10 my-auto mr-3 inline-flex size-12 shrink-0 items-center justify-center bg-forest text-cream lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-7" strokeWidth={1.5} /> : <Menu className="size-7" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 top-24 z-50 bg-forest sm:top-28 lg:hidden">
          <nav className="flex h-full flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Mobilnavigation">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-12 items-center border-b border-line/20 px-2 font-display text-2xl text-cream",
                    active && "text-gold",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <p className="mt-8 px-2 text-sm text-cream/60">
              {SITE.owner} · {SITE.address.city}
            </p>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo onDark className="h-16 w-auto" />
            <BrandWordmark onDark />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {SITE.fullName}. Naturnahe Gärten und Bauprojekte in Oberursel (Taunus).
            Inhaber {SITE.owner}.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">Kontakt</p>
          <p className="mt-3 text-sm text-cream/80">
            {SITE.owner}
            <br />
            {SITE.address.street}
            <br />
            {SITE.address.zip} {SITE.address.city}
            <br />
            {SITE.phone}
            <br />
            {SITE.email}
          </p>
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">Pflanzprinzip</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Geht. Mit der Art, die in Hessen wurzelt. Bau bleibt offen — Terrasse, Weg, Mauer.
          </p>
        </div>
      </div>
      <div className="border-t border-line/20 px-4 py-4 text-center text-[12px] text-[#cfc9b8] sm:px-6">
        <p>
          {SITE.owner} · {SITE.address.street} · {SITE.address.zip} {SITE.address.city}
        </p>
        <p className="mt-1">Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.</p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link to="/ueber" className="text-cream/70 hover:text-gold">
            Über uns
          </Link>
          <Link to="/naturgaerten" className="text-cream/70 hover:text-gold">
            Naturgärten
          </Link>
          <Link to="/planer" className="text-cream/70 hover:text-gold">
            Saisonkalender
          </Link>
          <Link to="/impressum" className="text-cream/70 hover:text-gold">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-cream/70 hover:text-gold">
            Datenschutz
          </Link>
          <Link to="/nachweise" className="text-cream/70 hover:text-gold">
            Nachweise
          </Link>
          <Link to="/privat" className="text-cream/70 hover:text-gold">
            Privat
          </Link>
          <Link to="/gewerbe" className="text-cream/70 hover:text-gold">
            Gewerbe
          </Link>
          <Link to="/kommune" className="text-cream/70 hover:text-gold">
            Öffentliche Hand
          </Link>
          <Link to="/neubuerger" className="text-cream/70 hover:text-gold">
            Neubürger
          </Link>
        </p>
      </div>
    </footer>
  );
}