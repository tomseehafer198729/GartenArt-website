import { getPlant } from "./plants";

export type MahdKind = "ruhe" | "staffel" | "schnitt";

export type MonthPraxis = {
  month: number;
  mahd: { kind: MahdKind; title: string; text: string };
  duenger: { title: string; text: string };
  schaedling: { title: string; text: string };
  saat: { title: string; text: string };
};

export const MONTH_PRAXIS: MonthPraxis[] = [
  {
    month: 1,
    mahd: {
      kind: "ruhe",
      title: "Ruhe. Nicht mähen.",
      text: "Samenstände und Stängel stehen lassen. Insekten überwintern darin. Wege nur bei Bedarf, hoch schneiden.",
    },
    duenger: {
      title: "Kein Dünger.",
      text: "Boden ruht. Kompostmiete wenden, wenn frostfrei — nicht ausbringen.",
    },
    schaedling: {
      title: "Nützlinge halten.",
      text: "Laubhaufen, Totholz und stehende Stängel sind das Winterquartier. Nicht aufräumen.",
    },
    saat: {
      title: "Nicht säen.",
      text: "Saatgut kühl und trocken lagern. Flächen merken, die im März/April oder September offen sein sollen.",
    },
  },
  {
    month: 2,
    mahd: {
      kind: "ruhe",
      title: "Ruhe. Höchstens Wege.",
      text: "Keine Flächenmahd. Hecken erst ab Ende Februar schneiden, bevor die Brut beginnt — und nur abschnittsweise.",
    },
    duenger: {
      title: "Gesteinsmehl vorbereiten.",
      text: "Basalt- oder Urgesteinsmehl für Beete ab März bereitlegen. Magerrasen bekommt nichts.",
    },
    schaedling: {
      title: "Nistkästen prüfen.",
      text: "Alte Nester entfernen. Insektenhotels trocken halten. Igelburg nicht stören.",
    },
    saat: {
      title: "Kaltkeimer draußen.",
      text: "Arten mit Kältekeimung (Küchenschelle, einige Nelken) können auf offenem, frostigem Boden liegen.",
    },
  },
  {
    month: 3,
    mahd: {
      kind: "ruhe",
      title: "Keine Mahd.",
      text: "Frühblüher und Bodenbrüter. Wer jetzt mäht, nimmt der Wiese das erste Futter. Wege staffeln, nicht die Fläche.",
    },
    duenger: {
      title: "Kompost und Hornspäne.",
      text: "Reifen Kompost dünn auf Beete, nicht auf Magerrasen. Hornspäne für Sträucher und Stauden — langsam, stickstoffarm.",
    },
    schaedling: {
      title: "Vorbeugen, nicht spritzen.",
      text: "Mischpflanzung, keine Monokultur. Schneckenbretter auslegen zum Absammeln. Kein Schneckenkorn.",
    },
    saat: {
      title: "Saatfenster öffnet sich.",
      text: "Ab Mitte März, wenn der Boden abgetrocknet ist: Magerrasen und Sandrasen auf offenem, magerem Grund.",
    },
  },
  {
    month: 4,
    mahd: {
      kind: "ruhe",
      title: "Keine Vollmahd.",
      text: "Schlehe, Anemonen, Schlüsselblume. Höchstens ein schmaler Pfad. Schnitthöhe nie unter 8 cm.",
    },
    duenger: {
      title: "Jauche ansetzen.",
      text: "Brennnessel und Beinwell in Regenwasser. Nach 10–14 Tagen 1:10 verdünnt an nährstoffbedürftige Beete — nie auf die Wiese.",
    },
    schaedling: {
      title: "Blattläuse: Brennnessel.",
      text: "Frische Jauche unvergoren (24 h) 1:5 auf befallene Triebe. Marienkäfer und Florfliegen nicht mit töten — punktuell, abends.",
    },
    saat: {
      title: "Hauptsaat Frischwiese.",
      text: "April ist das klassische Fenster. Saatgut obenauf, andrücken, nicht einarbeiten. Vier Wochen feucht halten.",
    },
  },
  {
    month: 5,
    mahd: {
      kind: "staffel",
      title: "Staffeln, nicht kahl.",
      text: "Höchstens 20 % der Fläche als Weg. Der Rest blüht. Wer im Mai die ganze Wiese legt, löscht die Tracht.",
    },
    duenger: {
      title: "Nur Beete, verdünnt.",
      text: "Brennnesseljauche 1:10 an Tomaten, Rosen, Gehölze. Magerrasen, Trockenmauer, Sandrasen bleiben ungedüngt.",
    },
    schaedling: {
      title: "Schachtelhalmbrühe.",
      text: "Gegen Mehltau und Rost an Rosen und Stauden. 24 h angesetzt, aufgekocht, 1:5 gespritzt. Vorbeugend, nicht heilend.",
    },
    saat: {
      title: "Noch säen, wenn feucht.",
      text: "Feuchtwiese und Waldsaum jetzt, solange der Boden nicht verkrustet. Bei Trockenheit auf September warten.",
    },
  },
  {
    month: 6,
    mahd: {
      kind: "staffel",
      title: "Erste Ökomahd ab Mitte Juni.",
      text: "Nach der Hauptblüte. Ein Drittel stehen lassen (Altgrasstreifen). Schnittgut 2–3 Tage liegen lassen, dann abfahren — Heu, nicht Mulchen auf Magerrasen.",
    },
    duenger: {
      title: "Pause auf der Wiese.",
      text: "Kein Stickstoff. Wer jetzt düngt, bekommt Glatthafer und Brennnessel, nicht Salbei. Beete nur bei sichtbarem Hunger.",
    },
    schaedling: {
      title: "Absammeln, Nützlinge.",
      text: "Kartoffellaubkäfer und Schnecken morgens absammeln. Kein Neem auf blühende Bestände — es trifft Wildbienen.",
    },
    saat: {
      title: "Nicht säen.",
      text: "Zu warm, zu konkurrenzstark. Lücken merken für die Herbstsaat.",
    },
  },
  {
    month: 7,
    mahd: {
      kind: "schnitt",
      title: "Zweite Teilfläche.",
      text: "Das im Juni stehengelassene Drittel kann jetzt, das gemähte Drittel blüht nach. Immer ein Streifen Altgras.",
    },
    duenger: {
      title: "Kein Dünger.",
      text: "Hitze und Trockenheit. Jauche verbrennt. Kompostmiete feucht halten, nichts ausbringen.",
    },
    schaedling: {
      title: "Mehltau: Schachtelhalm, Abstand.",
      text: "Befallene Blätter entfernen. Keine Milch, kein Fungizid. Luft zwischen den Stauden, gießen am Boden.",
    },
    saat: {
      title: "Saatgut ernten.",
      text: "Reife Köpfe von Margerite, Flockenblume, Salbei trocken schneiden. Herkunft notieren — regionales Saatgut.",
    },
  },
  {
    month: 8,
    mahd: {
      kind: "schnitt",
      title: "Zweiter Schnitt möglich.",
      text: "Nicht tiefer als 8 cm. Blüteninseln und Disteln für Spätflieger stehen lassen. Schnittgut abfahren.",
    },
    duenger: {
      title: "Beinwelljauche, sparsam.",
      text: "Nur an stark zehrende Beete. Wiese, Mauer, Sand: nichts. Holzasche höchstens eine Hand voll an Kalkbeete.",
    },
    schaedling: {
      title: "Efeu und Dost blühen.",
      text: "Spättracht nicht stören. Blattläuse an Holunder aushalten — sie füttern Marienkäfer fürs nächste Jahr.",
    },
    saat: {
      title: "Herbstsaat vorbereiten.",
      text: "Flächen abmagern: Oberboden nicht aufdüngen. Offenen Boden schaffen, Beikraut jäten.",
    },
  },
  {
    month: 9,
    mahd: {
      kind: "staffel",
      title: "Letzte Mahd, nicht kahl.",
      text: "Ein Altgrasstreifen bis zum Frühjahr. Samenstände von Distel, Wilde Möhre, Flockenblume stehen lassen.",
    },
    duenger: {
      title: "Kompost auf Beete.",
      text: "Reifen Kompost dünn. Laubkompost unter Sträuchern. Magerrasen bleibt mager — das ist die Pflege.",
    },
    schaedling: {
      title: "Nicht aufräumen.",
      text: "Stängel, Samen, Laub sind Winterquartier. Wer jetzt alles schneidet, räumt die Nützlinge weg.",
    },
    saat: {
      title: "Zweites Saatfenster.",
      text: "September bis Anfang Oktober: Magerrasen, Frischwiese, Sandrasen. Kaltkeimer keimen nach dem Winter von selbst.",
    },
  },
  {
    month: 10,
    mahd: {
      kind: "ruhe",
      title: "Mahd beenden.",
      text: "Was noch steht, bleibt. Laub auf Beeten als Decke, auf Magerrasen abkehren — sonst wird er fett.",
    },
    duenger: {
      title: "Laub und Kompost.",
      text: "Eichen- und Buchenlaub unter Gehölze. Hornspäne haben bis zum März Zeit zu wirken.",
    },
    schaedling: {
      title: "Igel und Kröten.",
      text: "Laubhaufen in einer Ecke, ungestört. Kein Laubsauger — er tötet überwinternde Insekten.",
    },
    saat: {
      title: "Spätsaat nur noch trocken.",
      text: "Anfang Oktober letzter Termin. Danach keimt nichts zuverlässig. Saatgut fürs Frühjahr lagern.",
    },
  },
  {
    month: 11,
    mahd: {
      kind: "ruhe",
      title: "Ruhe.",
      text: "Geräte putzen, Schnitthöhe fürs nächste Jahr merken. Keine Neuansaaten, kein Dünger.",
    },
    duenger: {
      title: "Kompostmiete zudecken.",
      text: "Nässe abhalten, nicht wenden bei Frost. Fertigen Kompost erst im März.",
    },
    schaedling: {
      title: "Stängel stehen lassen.",
      text: "Hohle Halme sind das Hotel. Insektenhotels unter Dach, nicht in die pralle Nässe.",
    },
    saat: {
      title: "Nicht säen.",
      text: "Bestellung regionales Saatgut fürs Frühjahr: Herkunft Hessen oder angrenzend, keine billige Ackerblühmischung.",
    },
  },
  {
    month: 12,
    mahd: {
      kind: "ruhe",
      title: "Ruhe.",
      text: "Der Garten arbeitet unter der Decke. Wer jetzt mäht, holt die Insekten aus dem Winter.",
    },
    duenger: {
      title: "Nichts ausbringen.",
      text: "Pläne machen: welche Fläche bleibt mager, welche Beetzeile bekommt Kompost im März.",
    },
    schaedling: {
      title: "Beobachten, nicht eingreifen.",
      text: "Meisen an den Stängeln sind die Schädlingskontrolle fürs nächste Jahr.",
    },
    saat: {
      title: "Herkunft prüfen.",
      text: "Regiosaatgut UG 7 (südwestdeutsches Berg- und Hügelland) bzw. hessische Erhaltungsgebiete. Keine Zuchtformen.",
    },
  },
];

export function praxisFor(month: number): MonthPraxis | undefined {
  return MONTH_PRAXIS.find((m) => m.month === month);
}

export const MAHD_RULES = [
  {
    title: "Staffeln, nie kahl.",
    text: "Immer ein Drittel bis 20 % stehen lassen. Altgrasstreifen am Rand oder in der Mitte — dort überwintern Insekten und späte Falter finden Nektar.",
  },
  {
    title: "Hoch schneiden.",
    text: "Schnitthöhe 8–10 cm. Tiefer zerstört Rosetten und Nester. Balkenmäher vor Motorsense, Sense vor Mulcher.",
  },
  {
    title: "Schnittgut abfahren.",
    text: "Zwei bis drei Tage liegen lassen (Samen fallen, Insekten fliehen), dann abfahren. Mulchen düngt — Magerrasen vergrast.",
  },
  {
    title: "Nach der Blüte, nicht nach dem Kalender.",
    text: "Erste Ökomahd wenn die Hauptblüte kippt, oft Mitte Juni. Wer nach Datum mäht, mäht die Tracht weg.",
  },
];

export const FERTILIZERS = [
  {
    id: "kompost",
    title: "Reifer Kompost",
    when: "März und September",
    where: "Beete, Gehölze — nicht Magerrasen",
    text: "Die Grundlage. Dünn, wie Kaffeesatz, einarbeiten oder als Decke. Unreifer Kompost raubt Stickstoff.",
  },
  {
    id: "horn",
    title: "Hornspäne / Hornmehl",
    when: "März",
    where: "Stauden, Hecken, Obst",
    text: "Langsamer organischer Stickstoff. Späne über Monate, Mehl schneller. Nie auf magere Wiese.",
  },
  {
    id: "gestein",
    title: "Urgesteinsmehl",
    when: "Februar–April",
    where: "Beete, Kompostmiete",
    text: "Basalt oder Diabas: Spurenelemente, kein Stickstoff. Eine Hand voll je m². Gut in die Kompostmiete.",
  },
  {
    id: "brennnessel",
    title: "Brennnesseljauche",
    when: "April–Juni",
    where: "Starkzehrer, nie Wiese",
    text: "1 kg frische Brennnessel auf 10 l Regenwasser, 10–14 Tage, 1:10 gießen. Ungären (24 h) 1:5 gegen Läuse.",
  },
  {
    id: "beinwell",
    title: "Beinwelljauche",
    when: "Mai–August",
    where: "Tomate, Rose, Beete",
    text: "Kaliumreich. Wie Brennnessel ansetzen. Knollen-Beinwell steht im Verzeichnis — nicht die Gartenform aus dem Osten.",
  },
  {
    id: "nichts",
    title: "Nichts. Mager lassen.",
    when: "Immer",
    where: "Magerrasen, Sandrasen, Trockenmauer",
    text: "Salbei, Thymian, Sonnenröschen brauchen Armut. Dünger ist hier ein Schaden, kein Pflegefehler den man später korrigiert.",
  },
];

export const PEST_CONTROL = [
  {
    id: "nuetzlinge",
    title: "Nützlinge zuerst",
    against: "Läuse, Raupen, Schnecken",
    text: "Marienkäfer, Florfliegen, Schlupfwespen, Igel, Kröte, Meise. Wer spritzt, tötet die Kontrolle. Vielfalt pflanzen, Wasser, Totholz, keine Nachtbeleuchtung.",
  },
  {
    id: "jauche",
    title: "Brennnessel, unvergoren",
    against: "Blattläuse",
    text: "24 Stunden in Regenwasser, 1:5, abends punktuell. Nicht auf offene Blüten. Vergorene Jauche ist Dünger, kein Pflanzenschutz.",
  },
  {
    id: "schachtelhalm",
    title: "Schachtelhalmbrühe",
    against: "Mehltau, Rost",
    text: "Kraut 24 h ansetzen, aufkochen, 1:5. Vorbeugend alle 10 Tage. Befallene Blätter vorher abnehmen.",
  },
  {
    id: "sammeln",
    title: "Absammeln",
    against: "Schnecken, Käfer",
    text: "Morgens, Bretter als Fallen, Gießkannenrand. Kein Schneckenkorn, kein Biergefäß (tötet Igelbeute und Nützlinge).",
  },
  {
    id: "misch",
    title: "Mischpflanzung",
    against: "Befall überhaupt",
    text: "Keine Fläche nur eine Art. Duftende Nachbarn (Rainfarn, Schnittlauch, Knoblauch) stören Suchflug. Lücken schließen mit Bodendeckern aus dem Verzeichnis.",
  },
  {
    id: "nein",
    title: "Was wir nicht tun",
    against: "Chemie, Neem in Blüte",
    text: "Kein synthetisches Insektizid, kein Neem auf blühende Bestände, kein Bacillus flächig. Was Insekten tötet, tötet die Tracht.",
  },
];

export type SeedMix = {
  id: string;
  title: string;
  habitat: string;
  soil: string;
  sow: string;
  rate: string;
  image: string;
  alt: string;
  slugs: string[];
};

export const SEED_MIXES: SeedMix[] = [
  {
    id: "magerrasen",
    title: "Taunus-Magerrasen",
    habitat: "Sonne, trocken, kalkig",
    soil: "flachgründig, über Kalk oder Grus — ungedüngt",
    sow: "März–April oder September",
    rate: "2–3 g / m²",
    image: "/images/saatgut/magerrasen.jpg",
    alt: "Magerrasen mit Wiesensalbei und Zittergras",
    slugs: [
      "wiesensalbei",
      "wiesen-flockenblume",
      "kartaeuser-nelke",
      "echtes-labkraut",
      "hufeisenklee",
      "gewoehnliches-sonnenroeschen",
      "kleiner-wiesenknopf",
      "heide-nelke",
      "edel-gamander",
      "zittergras",
      "schaf-schwingel",
      "aufrechte-trespe",
    ],
  },
  {
    id: "frischwiese",
    title: "Hessische Frischwiese",
    habitat: "Sonne bis Halbschatten, frisch",
    soil: "lehmig, nicht gedüngt, nicht gemulcht",
    sow: "April oder September",
    rate: "3–5 g / m²",
    image: "/images/saatgut/frischwiese.jpg",
    alt: "Frischwiese mit Margerite und Flockenblume",
    slugs: [
      "wiesen-margerite",
      "wiesen-schafgarbe",
      "wiesen-storchschnabel",
      "wiesen-flockenblume",
      "wilde-moehre",
      "gaensebluemchen",
      "weissklee",
      "glatthafer",
      "goldhafer",
      "rot-schwingel",
      "ruchgras",
    ],
  },
  {
    id: "feuchtwiese",
    title: "Feuchtwiese am Bach",
    habitat: "Sonne, feucht bis nass",
    soil: "Auelehm, staunass verträglich, ohne Stickstoff",
    sow: "April–Mai, Boden offen und feucht",
    rate: "2–4 g / m²",
    image: "/images/saatgut/feuchtwiese.jpg",
    alt: "Feuchtwiese mit Blutweiderich und Mädesüß",
    slugs: [
      "maedesuess",
      "blutweiderich",
      "sumpfdotterblume",
      "schlangen-knoeterich",
      "kohldistel",
      "pfeifengras",
      "rasenschmiele",
      "flatter-binse",
      "blaugruene-binse",
    ],
  },
  {
    id: "waldsaum",
    title: "Waldsaum und Halbschatten",
    habitat: "Halbschatten, frisch",
    soil: "humos, nicht verdichtet, Laubdecke möglich",
    sow: "März–Mai, lückig, nicht in den Rasen",
    rate: "Pflanzung vor Saat, 1–2 g / m² in Lücken",
    image: "/images/saatgut/waldsaum.jpg",
    alt: "Waldsaum mit Buschwindröschen und Walderdbeere",
    slugs: [
      "buschwindroeschen",
      "waldmeister",
      "kriechender-guensel",
      "walderdbeere",
      "lungenkraut",
      "wald-hainsimse",
      "grosse-sternmiere",
      "haselwurz",
      "gundermann",
    ],
  },
  {
    id: "tracht",
    title: "Wildbienen- und Faltertracht",
    habitat: "Sonne, Beete und Säume",
    soil: "durchlässig, mager bis frisch",
    sow: "April oder September, in Inseln",
    rate: "2–3 g / m², lückig",
    image: "/images/saatgut/tracht.jpg",
    alt: "Natternkopf und Oregano mit Wildbienen",
    slugs: [
      "natternkopf",
      "wilder-majoran-oregano",
      "wiesensalbei",
      "rainfarn",
      "feld-mannstreu",
      "tauben-skabiose",
      "wilde-moehre",
      "brennnessel",
      "wiesen-flockenblume",
    ],
  },
  {
    id: "sandrasen",
    title: "Sandrasen und Trockenmauer",
    habitat: "Sonne, extrem trocken",
    soil: "Sand, Kies, Fugen — kein Humus",
    sow: "März–April, andrücken, nicht gießen bis zur Keimung außer bei Hitze",
    rate: "1–2 g / m² plus Pflanzung der Polster",
    image: "/images/saatgut/sandrasen.jpg",
    alt: "Sandthymian und Silbergras auf Sand",
    slugs: [
      "sand-thymian",
      "silbergras",
      "scharfer-mauerpfeffer",
      "felsen-fetthenne",
      "arznei-thymian",
      "milder-mauerpfeffer",
      "kleines-habichtskraut",
      "gewoehnliches-katzenpfoetchen",
    ],
  },
];

export function mixSpecies(mix: SeedMix) {
  return mix.slugs
    .map((slug) => {
      const plant = getPlant(slug);
      return plant ? { slug, name: plant.name, latin: plant.latin } : { slug, name: slug, latin: "" };
    })
    .filter((s) => s.name);
}

export const MAHD_KIND_LABEL: Record<MahdKind, string> = {
  ruhe: "Ruhe",
  staffel: "Staffeln",
  schnitt: "Schnitt",
};
