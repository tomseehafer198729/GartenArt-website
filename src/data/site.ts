export const SITE = {
  name: "GartenArt & BauProjekte",
  fullName: "GartenArt & BauProjekte",
  owner: "Tom Seehafer",
  tagline: "Garten, Land und Bauprojekte",
  claim: "Wir pflanzen, was in Hessen wurzelt. Wir bauen, was bleibt.",
  region: "Hochtaunus · Maintaunus · Rhein-Main",
  email: "info@gartenart-bauprojekte.de",
  phone: "0176 62315420",
  phoneHref: "tel:+4917662315420",
  address: {
    street: "Saalburgstraße 21",
    zip: "61440",
    city: "Oberursel (Taunus)",
  },
  hours: "Termine nach Vereinbarung",
  legal: {
    form: "Einzelunternehmen",
    ownerRole: "Inhaber",
    profession: "Gärtner · Staatlich geprüfter Bautechniker (Garten- und Landschaftsbau)",
    gewerbeOffice: "Ordnungsamt der Stadt Oberursel (Taunus)",
    gewerbeRef: "",
    steuerNr: "003/869/01343",
    ustId: "",
    wIdNr: "",
    supervisory: "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden",
    host: "IONOS SE, Elgendorfer Straße 57, 56410 Montabaur",
  },
} as const;

export const NAV = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/pflanzen", label: "Pflanzen" },
  { to: "/ueber", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
] as const;
