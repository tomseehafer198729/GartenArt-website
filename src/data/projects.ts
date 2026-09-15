export type ProjectShot = {
  src: string;
  alt: string;
  phase?: "vorher" | "nachher";
  objectPosition?: string;
};

export type Project = {
  slug: string;
  title: string;
  place: string;
  year: string;
  area?: string;
  image: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  images?: ProjectShot[];
  service: string;
  summary: string;
  tags: string[];
  photoPending?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "garten-umgestaltung-2025",
    title: "Garten-Umgestaltung",
    place: "Rheingau-Taunus-Kreis",
    year: "2025",
    area: "200 m²",
    image: "/images/projekte/umgestaltung/03-nachher-thymian.jpg",
    service: "Umgestaltung · Pflaster · Pflanzung",
    summary:
      "Beete neu gefasst mit Kleinsteinpflaster. Die Rasenfläche wurde abgetragen und durch einen Teppich aus Sandthymian ersetzt — trittfest, blühend, pflegearm.",
    tags: ["Kleinsteinpflaster", "Sandthymian", "200 m²"],
    images: [
      {
        src: "/images/projekte/umgestaltung/01-vorher-rasen.jpg",
        alt: "Rasenfläche abgetragen: vorbereiteter Boden entlang des Hauses",
        phase: "vorher",
        objectPosition: "center 52%",
      },
      {
        src: "/images/projekte/umgestaltung/03-nachher-thymian.jpg",
        alt: "Sandthymian-Teppich, Blick über die Fläche zum Haus",
        phase: "nachher",
        objectPosition: "center 55%",
      },
      {
        src: "/images/projekte/umgestaltung/02-vorher-beet.jpg",
        alt: "Beetstreifen vor der Neueinfassung, neben der Terrasse",
        phase: "vorher",
        objectPosition: "center 52%",
      },
      {
        src: "/images/projekte/umgestaltung/04-nachher-weg.jpg",
        alt: "Sandthymian neben den Wegplatten, Blick über den Garten",
        phase: "nachher",
        objectPosition: "center 52%",
      },
    ],
  },
  {
    slug: "garten-neubau-altersgerecht-2026",
    title: "Garten-Neubau, altersgerecht",
    place: "Hochtaunuskreis",
    year: "2026",
    image: "/images/projekte/neubau/06-nachher-treppe.jpg",
    service: "Neubau · Barrierefrei · Stein",
    summary:
      "Pflanzbeet durch ein Hochbeet ersetzt. Neuer Weg aus Wegplatten mit Randeinfassung. Terrasse barrierefrei, dazu eine Treppe — gebaut, damit Senioren den Garten ohne Schwelle nutzen können.",
    tags: ["Hochbeet", "Wegplatten", "Barrierefreie Terrasse", "Treppe"],
    images: [
      {
        src: "/images/projekte/neubau/04-vorher-haus.jpg",
        alt: "Hauswand vor dem Umbau: alte Holzstufen, Osterglocken und Gartenskulptur",
        phase: "vorher",
        objectPosition: "center 55%",
      },
      {
        src: "/images/projekte/neubau/06-nachher-treppe.jpg",
        alt: "Nach dem Umbau: Natursteintreppe, Hochbeet und Weg an der Hauswand",
        phase: "nachher",
        objectPosition: "center 48%",
      },
      {
        src: "/images/projekte/neubau/05-vorher-kies.jpg",
        alt: "Schmaler überwachsener Kiesweg entlang des Hauses vor dem Umbau",
        phase: "vorher",
        objectPosition: "center 55%",
      },
      {
        src: "/images/projekte/neubau/02-nachher.jpg",
        alt: "Nach dem Umbau: Hochbeet aus Naturstein, Wegplatten und Insektenhotel",
        phase: "nachher",
        objectPosition: "center 52%",
      },
    ],
  },
  {
    slug: "gartenhaus-biohort",
    title: "Gartenhaus mit Fundament",
    place: "Rheingau-Taunus-Kreis",
    year: "2026",
    image: "/images/projekte/gartenhaus/02-nachher.jpg",
    service: "Bauprojekt · Fundament",
    summary:
      "Ausgehoben, Randeinfassung gesetzt, Fundament betoniert. Darauf ein Biohort-Gartenhaus — standfest, eben, fertig zum Nutzen.",
    tags: ["Aushub", "Randeinfassung", "Fundament", "Biohort"],
    images: [
      {
        src: "/images/projekte/gartenhaus/01-vorher.jpg",
        alt: "Standort vor dem Bau: abgedeckte Möbel auf der späteren Fundamentfläche",
        phase: "vorher",
        objectPosition: "center 55%",
      },
      {
        src: "/images/projekte/gartenhaus/02-nachher.jpg",
        alt: "Biohort-Gartenhaus auf neuem Betonfundament, Blick frontal",
        phase: "nachher",
        objectPosition: "center 42%",
      },
      {
        src: "/images/projekte/gartenhaus/03-vorher-fundament.jpg",
        alt: "Frisch betoniertes Fundament mit Randeinfassung, vor dem Aufstellen des Gartenhauses",
        phase: "vorher",
        objectPosition: "center 52%",
      },
      {
        src: "/images/projekte/gartenhaus/04-nachher.jpg",
        alt: "Biohort-Gartenhaus auf Fundament, Blick über den Rasen",
        phase: "nachher",
        objectPosition: "center 40%",
      },
    ],
  },
  {
    slug: "rollrasen",
    title: "Rollrasen",
    place: "Darmstadt-Dieburg",
    year: "2024",
    image: "/images/projekte/rollrasen/02-nachher.jpg?v=hd1",
    service: "Rasen · Bodenarbeiten",
    summary:
      "Alte Rasenfläche abgetragen, Boden gefräst, planiert und gedüngt. Anschließend Rollrasen verlegt — sofort dicht, gleichmäßig, begehbar.",
    tags: ["Abtrag", "Fräsen", "Planum", "Rollrasen"],
    images: [
      {
        src: "/images/projekte/rollrasen/01-vorher.jpg?v=hd1",
        alt: "Alte Rasenfläche abgetragen, Boden gefräst und planiert",
        phase: "vorher",
        objectPosition: "center 55%",
      },
      {
        src: "/images/projekte/rollrasen/02-nachher.jpg?v=hd1",
        alt: "Frisch verlegter Rollrasen, eben und sofort begehbar",
        phase: "nachher",
        objectPosition: "center 52%",
      },
    ],
  },
  {
    slug: "vorgarten-umgestaltung",
    title: "Vorgarten-Umgestaltung",
    place: "Offenbacher Landkreis",
    year: "2025",
    image: "/images/projekte/vorgarten/09-gartenansicht.jpg",
    service: "Vorgarten · Pflanzung",
    summary:
      "Rasennarbe abgezogen, Sträucher eingekürzt. Pflanzsteine geöffnet, darin Lavendel gesetzt, die Steine mit Flusskies 8/16 verfüllt.",
    tags: ["Lavendel", "Pflanzsteine", "Flusskies 8/16"],
    images: [
      {
        src: "/images/projekte/vorgarten/03-pflanzsteine.jpg",
        alt: "Pflanzsteine am Gehweg vor der Umgestaltung",
        phase: "vorher",
        objectPosition: "center 58%",
      },
      {
        src: "/images/projekte/vorgarten/10-pflanzsteine-weg.jpg",
        alt: "Pflanzsteine mit Lavendel, Flusskies und Zierzaun nach der Umgestaltung",
        phase: "nachher",
        objectPosition: "center 58%",
      },
      {
        src: "/images/projekte/vorgarten/11-ecke-gehweg.jpg",
        alt: "Ecke am Gehweg vor der Bepflanzung",
        phase: "vorher",
        objectPosition: "center 50%",
      },
      {
        src: "/images/projekte/vorgarten/09-gartenansicht.jpg",
        alt: "Vorgarten nach der Umgestaltung, Blick zur Straße",
        phase: "nachher",
        objectPosition: "center 60%",
      },
    ],
  },
  {
    slug: "terrasse-hochtaunus-2026",
    title: "Terrasse barrierefrei",
    place: "Hochtaunus-Kreis",
    year: "2026",
    image: "/images/projekte/terrasse/karte.jpg",
    imageFit: "contain",
    imagePosition: "center center",
    service: "Terrasse · Betonplatten · barrierefrei",
    summary:
      "Alte Fläche aufgenommen, neue Betonplatten verlegt. Die Terrasse sitzt eben und schwellenfrei am Haus — barrierefrei, trittfest, ohne Stufe.",
    tags: ["Betonplatten", "Barrierefrei", "Terrasse"],
    images: [
      {
        src: "/images/projekte/terrasse/01-vorher.jpg",
        alt: "Alte Waschbeton-Terrasse vor dem Tausch, Blick zum Gartentor",
        phase: "vorher",
        objectPosition: "center 55%",
      },
      {
        src: "/images/projekte/terrasse/02-nachher.jpg",
        alt: "Neue Betonplatten, barrierefrei und eben zum Haus",
        phase: "nachher",
        objectPosition: "center 48%",
      },
      {
        src: "/images/projekte/terrasse/03-vorher-abtrag.jpg",
        alt: "Alter Belag abgetragen, Planum vor dem neuen Terrassenbelag",
        phase: "vorher",
        objectPosition: "center 52%",
      },
      {
        src: "/images/projekte/terrasse/04-nachher.jpg",
        alt: "Neue Terrasse unter der Pergola, eben und vollflächig verlegt",
        phase: "nachher",
        objectPosition: "center 45%",
      },
    ],
  },
];
