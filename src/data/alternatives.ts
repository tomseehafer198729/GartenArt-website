export type WishPair = {
  id: string;
  wish: string;
  want: string;
  need: string;
  why: string;
  instead: { slug: string; name: string }[];
};

/** Wunsch des Kunden → heimische Art aus der GEK-Liste. */
export const WISH_PAIRS: WishPair[] = [
  {
    id: "lavendel",
    wish: "Lavendel",
    want: "Duft, silbergrau, Bienen, Kiesbeet.",
    need: "Trockenheit, Tracht, Pflanze, die den Taunuswinter übersteht.",
    why: "Lavendel kommt aus dem Mittelmeer und fällt in nassen Wintern aus. Sandthymian und Dost machen denselben Garten — Duft, Insekt, magerer Boden — und bleiben.",
    instead: [
      { slug: "sand-thymian", name: "Sand-Thymian" },
      { slug: "wilder-majoran-oregano", name: "Wilder Majoran" },
    ],
  },
  {
    id: "kirschlorbeer",
    wish: "Kirschlorbeer",
    want: "Immergrüne, dichte Hecke, Sichtschutz.",
    need: "Schluss, Schnitt, Futter für Vögel und Insekten.",
    why: "Kirschlorbeer ist eine grüne Wand ohne Leben. Liguster der Wildform und Schlehe schließen genauso — und blühen und tragen.",
    instead: [
      { slug: "liguster", name: "Liguster" },
      { slug: "schlehe", name: "Schlehe" },
    ],
  },
  {
    id: "forsythie",
    wish: "Forsythie",
    want: "Gelb im März, bevor sonst etwas blüht.",
    need: "Frühe Tracht, wenn Wildbienen auskommen.",
    why: "Forsythie ist für hiesige Insekten eine leere Blüte. Kornelkirsche blüht noch früher und hängt danach voller Frucht.",
    instead: [{ slug: "kornelkirsche", name: "Kornelkirsche" }],
  },
  {
    id: "thuja",
    wish: "Thuja / Lebensbaum",
    want: "Grüne Wand, schnell dicht, wenig Arbeit.",
    need: "Sichtschutz, der geschnitten werden kann und trotzdem lebt.",
    why: "Thuja ist eine Röhre. Hainbuche wird zur Wand, hält Laub oft den Winter, und ist Futter.",
    instead: [
      { slug: "hainbuche", name: "Hainbuche" },
      { slug: "liguster", name: "Liguster" },
    ],
  },
  {
    id: "hortensie",
    wish: "Hortensie",
    want: "Große Sommerblüte am Haus, Strauch.",
    need: "Blüte und Struktur ohne Torf und Dünger.",
    why: "Hortensie will ein anderes Klima. Wolliger Schneeball und Holunder blühen am selben Platz — und gehören nach Hessen.",
    instead: [
      { slug: "wolliger-schneeball", name: "Wolliger Schneeball" },
      { slug: "schwarzer-holunder", name: "Schwarzer Holunder" },
    ],
  },
  {
    id: "buchs",
    wish: "Buchs",
    want: "Kugel, Kante, immergrün, Form.",
    need: "Schnittverträglich, wintergrün, ohne Zünsler.",
    why: "Buchs stirbt am Zünsler. Stechpalme und Liguster halten Form und bleiben.",
    instead: [
      { slug: "stechpalme", name: "Stechpalme" },
      { slug: "liguster", name: "Liguster" },
    ],
  },
  {
    id: "beetrose",
    wish: "Gefüllte Beetrose",
    want: "Rose am Zaun, Duft, romantisch.",
    need: "Blüte, die Insekten nutzen, plus Hagebutte.",
    why: "Gefüllte Sorten sind eine Sackgasse. Hundsrose und Heckenrose sind die Rose, die hier wurzelt.",
    instead: [
      { slug: "hundsrose", name: "Hundsrose" },
      { slug: "heckenrose", name: "Heckenrose" },
    ],
  },
  {
    id: "teppich",
    wish: "Immergrüner Bodendecker",
    want: "Fläche zu, kein Unkraut, wenig Pflege.",
    need: "Deckung, die Insekten und Boden kennt.",
    why: "Cotoneaster und Immergrün aus dem Handel sind oft invasiv. Efeu, Walderdbeere und Günsel schließen die Fläche aus dem Verzeichnis.",
    instead: [
      { slug: "efeu", name: "Efeu" },
      { slug: "walderdbeere", name: "Walderdbeere" },
      { slug: "kriechender-guensel", name: "Kriechender Günsel" },
    ],
  },
];

export const FEATURED_WISHES = WISH_PAIRS.slice(0, 4);
