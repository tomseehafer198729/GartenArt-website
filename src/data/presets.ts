export type SampleFunction = {
  id: string;
  name: string;
  expr: string;
  note: string;
};

export const SAMPLE_FUNCTIONS: SampleFunction[] = [
  {
    id: "magerrasen",
    name: "Hessische Magerrasenblüte",
    expr: "12+72*exp(-((x-6.4)^2)/4.8)",
    note: "Langsamer Anstieg ab Mai, Gipfel im Hochsommer — Salbei, Flockenblume, Dost.",
  },
  {
    id: "waldsaum",
    name: "Waldsaum im Frühjahr",
    expr: "8+82*exp(-((x-4.3)^2)/1.7)",
    note: "Enge Glockenkurve um April: Buschwindröschen, Schlüsselblume, Schlehe.",
  },
  {
    id: "feuchtwiese",
    name: "Feuchtwiese",
    expr: "10+48*exp(-((x-4.2)^2)/1.4)+42*exp(-((x-7.4)^2)/4.2)",
    note: "Zwei Gipfel: Dotterblume im April, Mädesüß und Weiderich im Sommer.",
  },
  {
    id: "wildhecke",
    name: "Wildhecke über das Jahr",
    expr: "18+28*sin((x-3.2)*pi/6)+22*exp(-((x-5.4)^2)/1.6)",
    note: "Kätzchen im Spätwinter, Weißdorn im Mai, Rosen und Holunder im Juni.",
  },
  {
    id: "spaettracht",
    name: "Spättracht (Efeu & Dost)",
    expr: "6+38*exp(-((x-8)^2)/2.2)+55*exp(-((x-10)^2)/1.8)",
    note: "August bis November, wenn die Wiese schon gemäht ist.",
  },
];
