---
name: gartenart-brand
description: >
  Mandatory brand OS for GartenArt & BauProjekte (Tom Seehafer, Oberursel).
  Use on EVERY change to this website: pages, copy, color, type, logo, nav,
  CTAs, images, Leistungen, Projekte, Pflanzen, Planung, Kontakt. Overrides
  generic GaLaBau or template aesthetics. Triggers on design, UI, polish,
  page, Startseite, Logo, CI, Farbe, Schrift, Leistung, Projekt, Hero, CTA,
  Copy, Brand, GartenArt, Marke, Masterprompt.
metadata:
  short-description: "GartenArt Brand OS — colors, type, logo, copy, no generic GaLaBau"
user-invocable: true
---

# GartenArt & BauProjekte — Brand OS

**Single source of truth for this app.** Before any visual or copy change, read
this skill. Depth: `references/master-prompt.md` (full V1.0) and
`references/hard-rules.md`.

If this skill and a generic design idea collide: **Brand OS wins.**
If this skill and Tom’s latest chat instruction collide: **chat wins**, then
update this skill if the mark itself changed.

Do not redefine the brand. Do not invent facts, certificates, reviews, numbers,
drones, VR, or GEK as a public mark until DPMA is filed.

---

## Markenkern

GartenArt & BauProjekte verbindet Natur + Handwerk + Ökologie + Planung + Bau + Pflege.

**Claim:** Wir pflanzen, was in Hessen wurzelt, und bauen, was bleibt.

Technologie ersetzt das Handwerk nicht. Sie macht die Planung klarer.

Positionierung: kein Rasen-und-Hecke-Dienstleister. GaLaBau + ökologischer
Gartenbau + Handwerk + Planung. Premium-ökologisch, Hochtaunus / Rhein-Main.

Anrede: **Sie**. Firma immer **GartenArt & BauProjekte**.

---

## Farben (nur diese)

| Token | HEX | Einsatz |
|---|---|---|
| Waldgrün | `#2F3D2B` | Header, primäre Buttons, Markenflächen |
| Tiefgrün | `#243020` | Footer, Hero-Kontrast |
| Blattgrün | `#55764C` | Hover, ökologische Hinweise |
| Messinggold | `#B99A4E` | Kicker, Linien, Zahlen — nie Fläche, nie Fließtext |
| Creme | `#F6F2E8` | Grundfläche |
| Cremeweiß | `#FAF8F2` | Karten, Text auf Grün |
| Leinen | `#DCD5C4` | Linien, Rahmen |
| Textbraun | `#2B2B28` | Fließtext |
| Fußnote | `#6E6A5F` | Kleindruck |

60 % Creme / 30 % Grün / 10 % Akzent. Die Seite muss atmen — nicht voll Waldgrün.
Kein reines Schwarz, kein reines Weiß, keine Extrafarben.

Tokens liegen in `src/styles.css` (`forest`, `forest-deep`, `moss`, `gold`,
`cream`, `paper`, `ink`, `muted`, `line`).

---

## Schrift

- **Spectral** — H1–H3, Markenbotschaften (Light 300 / Regular 400 / Medium 500)
- **Inter** — Fließtext, Navigation, Buttons, Formulare, Tabellen
- **Wortmarke neben dem Logo (Ausnahme, weil Logo):** GartenArt = Cormorant Garamond Bold; & BAUPROJEKTE = Lato, Versalien, Goldstriche links und rechts — wie in der Lockup-Datei. Keine neue Logoform erfinden.
- Keine dritte Inhalts-Schrift. Kein Blocksatz. Gold nicht als Fließtext.

---

## Logo

Dateien: `/public/brand/signet.png` (transparent), `/public/brand/signet-on-dark.png` (Creme/Gold auf Waldgrün), `/public/brand/lockup.png`.

- Oben links: Signet durchsichtig **ohne** Schrift, daneben die Wortmarke wie in der Datei
- Nicht verzerren, nicht umfärben, nicht mit Schatten/Rahmen, nicht durchs Raster schneiden
- Ein Signet pro Medium. Schutzraum: halbe Signethöhe

Komponente: `src/components/brand-logo.tsx`

---

## Form

- Radius 2 px Web. Fotos scharfkantig
- Keine Schlagschatten (nur 1 px Leinen-Linie)
- Keine Verläufe
- Linien 1 px. Gold max. sparsam
- Parzellenraster: Gold, ungleiche Rechtecke, **einmal**, nie über Fotos, nie durch Logo, nie über Menüpunkte — nur im freien Feld der Leiste zwischen Lockup und Navigation (`src/components/parcel-grid.tsx`)
- Icons: Linie, lucide, stroke 1.5. Keine Emojis

---

## Copy und CTA

Ruhig, konkret, Sie. Keine Floskeln:
„Ihr Garten in besten Händen“, „Qualität aus Meisterhand“, „Rundum-sorglos“,
„Ihr Partner rund um …“, „Wir sind Ihr kompetenter Partner für …“ ohne Inhalt.

CTA: Projekt anfragen · Erstgespräch vereinbaren · Leistungen entdecken ·
Projekt ansehen. Kein „JETZT KAUFEN“.

Kontaktblock zeichengenau:
Tom Seehafer · Saalburgstraße 21 · 61440 Oberursel (Taunus)

---

## Inhalt — nichts erfinden

Erlaubt, weil belegt: gebaute Projekte mit echten Fotos; 186 heimische Arten;
Wunsch→Alternative; Saisonkalender; Flächenbewertung / VSME-Kennzahlen;
Art. 8 / ANK für Kommunen; Pflege und Bau, die Tom macht.

Nicht öffentlich als Marke, bis Schutz steht: **GEK / GK-Bewertung**. Intern
planbar; nach außen „Flächenbewertung“, „Artenliste Hessen“.

Nicht behaupten ohne Beleg: Drohnen, VR, 3D-Studio, Umsätze, Mitarbeiterzahl.
Zertifikate nur die drei belegten: Gärtner 2007, Bautechniker GaLaBau 2016,
SKT-A 2025. Kundenstimmen nur die belegten Texte in `src/data/reviews.ts`
(Thomas W., Matthias Wolf / Media Motion, CZD Daniel.B, D.P. und K.A. Google)
— Wortlaut 1:1, keine Screenshots.

---

## UX

Navigation kurz: Start · Leistungen · Projekte · Pflanzen · Über uns · Kontakt.
Mobile first, Tap ≥ 44 px. Eine primäre Handlung pro Blick.

Qualitätstor: Sieht es nach GartenArt aus — oder nach beliebigem GaLaBau?
Zweite Antwort → überarbeiten.

---

## Arbeitsfolge

1. Diese Datei lesen
2. Bei Zweifel `references/hard-rules.md`, bei großer Aufgabe `references/master-prompt.md`
3. Bauen
4. Brand-Check: Farbe, Schrift, Logo, Ton, Handwerk sichtbar, Technik nicht Sci-Fi
