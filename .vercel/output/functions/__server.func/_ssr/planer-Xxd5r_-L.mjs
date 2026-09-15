import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as PLANTS, m as getPlant, o as MONTHS, r as cn, s as MONTHS_FULL, v as soilLabel } from "./router-vI6J447R.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planer-Xxd5r_-L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MONTH_PRAXIS = [
	{
		month: 1,
		mahd: {
			kind: "ruhe",
			title: "Ruhe. Nicht mähen.",
			text: "Samenstände und Stängel stehen lassen. Insekten überwintern darin. Wege nur bei Bedarf, hoch schneiden."
		},
		duenger: {
			title: "Kein Dünger.",
			text: "Boden ruht. Kompostmiete wenden, wenn frostfrei — nicht ausbringen."
		},
		schaedling: {
			title: "Nützlinge halten.",
			text: "Laubhaufen, Totholz und stehende Stängel sind das Winterquartier. Nicht aufräumen."
		},
		saat: {
			title: "Nicht säen.",
			text: "Saatgut kühl und trocken lagern. Flächen merken, die im März/April oder September offen sein sollen."
		}
	},
	{
		month: 2,
		mahd: {
			kind: "ruhe",
			title: "Ruhe. Höchstens Wege.",
			text: "Keine Flächenmahd. Hecken erst ab Ende Februar schneiden, bevor die Brut beginnt — und nur abschnittsweise."
		},
		duenger: {
			title: "Gesteinsmehl vorbereiten.",
			text: "Basalt- oder Urgesteinsmehl für Beete ab März bereitlegen. Magerrasen bekommt nichts."
		},
		schaedling: {
			title: "Nistkästen prüfen.",
			text: "Alte Nester entfernen. Insektenhotels trocken halten. Igelburg nicht stören."
		},
		saat: {
			title: "Kaltkeimer draußen.",
			text: "Arten mit Kältekeimung (Küchenschelle, einige Nelken) können auf offenem, frostigem Boden liegen."
		}
	},
	{
		month: 3,
		mahd: {
			kind: "ruhe",
			title: "Keine Mahd.",
			text: "Frühblüher und Bodenbrüter. Wer jetzt mäht, nimmt der Wiese das erste Futter. Wege staffeln, nicht die Fläche."
		},
		duenger: {
			title: "Kompost und Hornspäne.",
			text: "Reifen Kompost dünn auf Beete, nicht auf Magerrasen. Hornspäne für Sträucher und Stauden — langsam, stickstoffarm."
		},
		schaedling: {
			title: "Vorbeugen, nicht spritzen.",
			text: "Mischpflanzung, keine Monokultur. Schneckenbretter auslegen zum Absammeln. Kein Schneckenkorn."
		},
		saat: {
			title: "Saatfenster öffnet sich.",
			text: "Ab Mitte März, wenn der Boden abgetrocknet ist: Magerrasen und Sandrasen auf offenem, magerem Grund."
		}
	},
	{
		month: 4,
		mahd: {
			kind: "ruhe",
			title: "Keine Vollmahd.",
			text: "Schlehe, Anemonen, Schlüsselblume. Höchstens ein schmaler Pfad. Schnitthöhe nie unter 8 cm."
		},
		duenger: {
			title: "Jauche ansetzen.",
			text: "Brennnessel und Beinwell in Regenwasser. Nach 10–14 Tagen 1:10 verdünnt an nährstoffbedürftige Beete — nie auf die Wiese."
		},
		schaedling: {
			title: "Blattläuse: Brennnessel.",
			text: "Frische Jauche unvergoren (24 h) 1:5 auf befallene Triebe. Marienkäfer und Florfliegen nicht mit töten — punktuell, abends."
		},
		saat: {
			title: "Hauptsaat Frischwiese.",
			text: "April ist das klassische Fenster. Saatgut obenauf, andrücken, nicht einarbeiten. Vier Wochen feucht halten."
		}
	},
	{
		month: 5,
		mahd: {
			kind: "staffel",
			title: "Staffeln, nicht kahl.",
			text: "Höchstens 20 % der Fläche als Weg. Der Rest blüht. Wer im Mai die ganze Wiese legt, löscht die Tracht."
		},
		duenger: {
			title: "Nur Beete, verdünnt.",
			text: "Brennnesseljauche 1:10 an Tomaten, Rosen, Gehölze. Magerrasen, Trockenmauer, Sandrasen bleiben ungedüngt."
		},
		schaedling: {
			title: "Schachtelhalmbrühe.",
			text: "Gegen Mehltau und Rost an Rosen und Stauden. 24 h angesetzt, aufgekocht, 1:5 gespritzt. Vorbeugend, nicht heilend."
		},
		saat: {
			title: "Noch säen, wenn feucht.",
			text: "Feuchtwiese und Waldsaum jetzt, solange der Boden nicht verkrustet. Bei Trockenheit auf September warten."
		}
	},
	{
		month: 6,
		mahd: {
			kind: "staffel",
			title: "Erste Ökomahd ab Mitte Juni.",
			text: "Nach der Hauptblüte. Ein Drittel stehen lassen (Altgrasstreifen). Schnittgut 2–3 Tage liegen lassen, dann abfahren — Heu, nicht Mulchen auf Magerrasen."
		},
		duenger: {
			title: "Pause auf der Wiese.",
			text: "Kein Stickstoff. Wer jetzt düngt, bekommt Glatthafer und Brennnessel, nicht Salbei. Beete nur bei sichtbarem Hunger."
		},
		schaedling: {
			title: "Absammeln, Nützlinge.",
			text: "Kartoffellaubkäfer und Schnecken morgens absammeln. Kein Neem auf blühende Bestände — es trifft Wildbienen."
		},
		saat: {
			title: "Nicht säen.",
			text: "Zu warm, zu konkurrenzstark. Lücken merken für die Herbstsaat."
		}
	},
	{
		month: 7,
		mahd: {
			kind: "schnitt",
			title: "Zweite Teilfläche.",
			text: "Das im Juni stehengelassene Drittel kann jetzt, das gemähte Drittel blüht nach. Immer ein Streifen Altgras."
		},
		duenger: {
			title: "Kein Dünger.",
			text: "Hitze und Trockenheit. Jauche verbrennt. Kompostmiete feucht halten, nichts ausbringen."
		},
		schaedling: {
			title: "Mehltau: Schachtelhalm, Abstand.",
			text: "Befallene Blätter entfernen. Keine Milch, kein Fungizid. Luft zwischen den Stauden, gießen am Boden."
		},
		saat: {
			title: "Saatgut ernten.",
			text: "Reife Köpfe von Margerite, Flockenblume, Salbei trocken schneiden. Herkunft notieren — regionales Saatgut."
		}
	},
	{
		month: 8,
		mahd: {
			kind: "schnitt",
			title: "Zweiter Schnitt möglich.",
			text: "Nicht tiefer als 8 cm. Blüteninseln und Disteln für Spätflieger stehen lassen. Schnittgut abfahren."
		},
		duenger: {
			title: "Beinwelljauche, sparsam.",
			text: "Nur an stark zehrende Beete. Wiese, Mauer, Sand: nichts. Holzasche höchstens eine Hand voll an Kalkbeete."
		},
		schaedling: {
			title: "Efeu und Dost blühen.",
			text: "Spättracht nicht stören. Blattläuse an Holunder aushalten — sie füttern Marienkäfer fürs nächste Jahr."
		},
		saat: {
			title: "Herbstsaat vorbereiten.",
			text: "Flächen abmagern: Oberboden nicht aufdüngen. Offenen Boden schaffen, Beikraut jäten."
		}
	},
	{
		month: 9,
		mahd: {
			kind: "staffel",
			title: "Letzte Mahd, nicht kahl.",
			text: "Ein Altgrasstreifen bis zum Frühjahr. Samenstände von Distel, Wilde Möhre, Flockenblume stehen lassen."
		},
		duenger: {
			title: "Kompost auf Beete.",
			text: "Reifen Kompost dünn. Laubkompost unter Sträuchern. Magerrasen bleibt mager — das ist die Pflege."
		},
		schaedling: {
			title: "Nicht aufräumen.",
			text: "Stängel, Samen, Laub sind Winterquartier. Wer jetzt alles schneidet, räumt die Nützlinge weg."
		},
		saat: {
			title: "Zweites Saatfenster.",
			text: "September bis Anfang Oktober: Magerrasen, Frischwiese, Sandrasen. Kaltkeimer keimen nach dem Winter von selbst."
		}
	},
	{
		month: 10,
		mahd: {
			kind: "ruhe",
			title: "Mahd beenden.",
			text: "Was noch steht, bleibt. Laub auf Beeten als Decke, auf Magerrasen abkehren — sonst wird er fett."
		},
		duenger: {
			title: "Laub und Kompost.",
			text: "Eichen- und Buchenlaub unter Gehölze. Hornspäne haben bis zum März Zeit zu wirken."
		},
		schaedling: {
			title: "Igel und Kröten.",
			text: "Laubhaufen in einer Ecke, ungestört. Kein Laubsauger — er tötet überwinternde Insekten."
		},
		saat: {
			title: "Spätsaat nur noch trocken.",
			text: "Anfang Oktober letzter Termin. Danach keimt nichts zuverlässig. Saatgut fürs Frühjahr lagern."
		}
	},
	{
		month: 11,
		mahd: {
			kind: "ruhe",
			title: "Ruhe.",
			text: "Geräte putzen, Schnitthöhe fürs nächste Jahr merken. Keine Neuansaaten, kein Dünger."
		},
		duenger: {
			title: "Kompostmiete zudecken.",
			text: "Nässe abhalten, nicht wenden bei Frost. Fertigen Kompost erst im März."
		},
		schaedling: {
			title: "Stängel stehen lassen.",
			text: "Hohle Halme sind das Hotel. Insektenhotels unter Dach, nicht in die pralle Nässe."
		},
		saat: {
			title: "Nicht säen.",
			text: "Bestellung regionales Saatgut fürs Frühjahr: Herkunft Hessen oder angrenzend, keine billige Ackerblühmischung."
		}
	},
	{
		month: 12,
		mahd: {
			kind: "ruhe",
			title: "Ruhe.",
			text: "Der Garten arbeitet unter der Decke. Wer jetzt mäht, holt die Insekten aus dem Winter."
		},
		duenger: {
			title: "Nichts ausbringen.",
			text: "Pläne machen: welche Fläche bleibt mager, welche Beetzeile bekommt Kompost im März."
		},
		schaedling: {
			title: "Beobachten, nicht eingreifen.",
			text: "Meisen an den Stängeln sind die Schädlingskontrolle fürs nächste Jahr."
		},
		saat: {
			title: "Herkunft prüfen.",
			text: "Regiosaatgut UG 7 (südwestdeutsches Berg- und Hügelland) bzw. hessische Erhaltungsgebiete. Keine Zuchtformen."
		}
	}
];
function praxisFor(month) {
	return MONTH_PRAXIS.find((m) => m.month === month);
}
var MAHD_RULES = [
	{
		title: "Staffeln, nie kahl.",
		text: "Immer ein Drittel bis 20 % stehen lassen. Altgrasstreifen am Rand oder in der Mitte — dort überwintern Insekten und späte Falter finden Nektar."
	},
	{
		title: "Hoch schneiden.",
		text: "Schnitthöhe 8–10 cm. Tiefer zerstört Rosetten und Nester. Balkenmäher vor Motorsense, Sense vor Mulcher."
	},
	{
		title: "Schnittgut abfahren.",
		text: "Zwei bis drei Tage liegen lassen (Samen fallen, Insekten fliehen), dann abfahren. Mulchen düngt — Magerrasen vergrast."
	},
	{
		title: "Nach der Blüte, nicht nach dem Kalender.",
		text: "Erste Ökomahd wenn die Hauptblüte kippt, oft Mitte Juni. Wer nach Datum mäht, mäht die Tracht weg."
	}
];
var FERTILIZERS = [
	{
		id: "kompost",
		title: "Reifer Kompost",
		when: "März und September",
		where: "Beete, Gehölze — nicht Magerrasen",
		text: "Die Grundlage. Dünn, wie Kaffeesatz, einarbeiten oder als Decke. Unreifer Kompost raubt Stickstoff."
	},
	{
		id: "horn",
		title: "Hornspäne / Hornmehl",
		when: "März",
		where: "Stauden, Hecken, Obst",
		text: "Langsamer organischer Stickstoff. Späne über Monate, Mehl schneller. Nie auf magere Wiese."
	},
	{
		id: "gestein",
		title: "Urgesteinsmehl",
		when: "Februar–April",
		where: "Beete, Kompostmiete",
		text: "Basalt oder Diabas: Spurenelemente, kein Stickstoff. Eine Hand voll je m². Gut in die Kompostmiete."
	},
	{
		id: "brennnessel",
		title: "Brennnesseljauche",
		when: "April–Juni",
		where: "Starkzehrer, nie Wiese",
		text: "1 kg frische Brennnessel auf 10 l Regenwasser, 10–14 Tage, 1:10 gießen. Ungären (24 h) 1:5 gegen Läuse."
	},
	{
		id: "beinwell",
		title: "Beinwelljauche",
		when: "Mai–August",
		where: "Tomate, Rose, Beete",
		text: "Kaliumreich. Wie Brennnessel ansetzen. Knollen-Beinwell steht im Verzeichnis — nicht die Gartenform aus dem Osten."
	},
	{
		id: "nichts",
		title: "Nichts. Mager lassen.",
		when: "Immer",
		where: "Magerrasen, Sandrasen, Trockenmauer",
		text: "Salbei, Thymian, Sonnenröschen brauchen Armut. Dünger ist hier ein Schaden, kein Pflegefehler den man später korrigiert."
	}
];
var PEST_CONTROL = [
	{
		id: "nuetzlinge",
		title: "Nützlinge zuerst",
		against: "Läuse, Raupen, Schnecken",
		text: "Marienkäfer, Florfliegen, Schlupfwespen, Igel, Kröte, Meise. Wer spritzt, tötet die Kontrolle. Vielfalt pflanzen, Wasser, Totholz, keine Nachtbeleuchtung."
	},
	{
		id: "jauche",
		title: "Brennnessel, unvergoren",
		against: "Blattläuse",
		text: "24 Stunden in Regenwasser, 1:5, abends punktuell. Nicht auf offene Blüten. Vergorene Jauche ist Dünger, kein Pflanzenschutz."
	},
	{
		id: "schachtelhalm",
		title: "Schachtelhalmbrühe",
		against: "Mehltau, Rost",
		text: "Kraut 24 h ansetzen, aufkochen, 1:5. Vorbeugend alle 10 Tage. Befallene Blätter vorher abnehmen."
	},
	{
		id: "sammeln",
		title: "Absammeln",
		against: "Schnecken, Käfer",
		text: "Morgens, Bretter als Fallen, Gießkannenrand. Kein Schneckenkorn, kein Biergefäß (tötet Igelbeute und Nützlinge)."
	},
	{
		id: "misch",
		title: "Mischpflanzung",
		against: "Befall überhaupt",
		text: "Keine Fläche nur eine Art. Duftende Nachbarn (Rainfarn, Schnittlauch, Knoblauch) stören Suchflug. Lücken schließen mit Bodendeckern aus dem Verzeichnis."
	},
	{
		id: "nein",
		title: "Was wir nicht tun",
		against: "Chemie, Neem in Blüte",
		text: "Kein synthetisches Insektizid, kein Neem auf blühende Bestände, kein Bacillus flächig. Was Insekten tötet, tötet die Tracht."
	}
];
var SEED_MIXES = [
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
			"aufrechte-trespe"
		]
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
			"ruchgras"
		]
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
			"blaugruene-binse"
		]
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
			"gundermann"
		]
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
			"wiesen-flockenblume"
		]
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
			"gewoehnliches-katzenpfoetchen"
		]
	}
];
function mixSpecies(mix) {
	return mix.slugs.map((slug) => {
		const plant = getPlant(slug);
		return plant ? {
			slug,
			name: plant.name,
			latin: plant.latin
		} : {
			slug,
			name: slug,
			latin: ""
		};
	}).filter((s) => s.name);
}
var MAHD_KIND_LABEL = {
	ruhe: "Ruhe",
	staffel: "Staffeln",
	schnitt: "Schnitt"
};
var KIND_CLASS = {
	ruhe: "bg-cream text-muted",
	staffel: "bg-gold/25 text-forest",
	schnitt: "bg-moss/20 text-moss"
};
function YearStrip({ month, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-3 grid grid-cols-6 gap-1 sm:grid-cols-12",
		children: MONTH_PRAXIS.map((p) => {
			const active = p.month === month;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPick(p.month),
				className: cn("flex min-h-14 w-full flex-col items-center justify-center rounded-sm px-1 py-1.5 text-center transition-colors duration-150", KIND_CLASS[p.mahd.kind], active && "ring-2 ring-gold ring-offset-1 ring-offset-paper"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-wider",
					children: MONTHS[p.month - 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-medium",
					children: MAHD_KIND_LABEL[p.mahd.kind]
				})]
			}) }, p.month);
		})
	});
}
function MonthPraxisNotes({ month }) {
	const p = praxisFor(month);
	if (!p) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				kicker: "Ökomahd",
				title: p.mahd.title,
				text: p.mahd.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				kicker: "Düngung",
				title: p.duenger.title,
				text: p.duenger.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				kicker: "Schädlinge",
				title: p.schaedling.title,
				text: p.schaedling.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				kicker: "Saatgut",
				title: p.saat.title,
				text: p.saat.text
			})
		]
	});
}
function Note({ kicker, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-sm bg-paper/80 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[10px] uppercase tracking-[0.18em] text-gold",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-sm font-medium text-forest",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-xs text-muted",
			children: text
		})] })]
	});
}
function PraxisGuide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Regiosaatgut · UG 7" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "saatgut",
				className: "mt-3 scroll-mt-24 font-display text-4xl",
				children: "Saatgut aus der Region"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Sechs Mischungen, gebaut aus Arten der GEK-Liste. Herkunft Hessen und südwestdeutsches Berg- und Hügelland — keine Ackerblühmischung aus dem Baumarkt. Obenauf säen, andrücken, mager halten."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-6 sm:grid-cols-2",
				children: SEED_MIXES.map((mix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mix.image,
						alt: mix.alt,
						className: "aspect-[16/9] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.18em] text-gold",
								children: mix.habitat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-3xl",
								children: mix.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									mix.soil,
									". Saat ",
									mix.sow,
									". ",
									mix.rate,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: mixSpecies(mix).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pflanzen/$slug",
									params: { slug: s.slug },
									className: "inline-block rounded-sm bg-cream px-2 py-1 text-xs text-moss hover:bg-gold/20",
									children: s.name
								}) }, s.slug))
							})
						]
					})]
				}, mix.id))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Ökomahd" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Mähen, ohne die Tracht zu löschen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: MAHD_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-cream p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: r.text
						})]
					}, r.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Natürlicher Dünger" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: "Was den Boden füttert — und was ihn ruinieren würde"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: FERTILIZERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-gold",
							children: [
								f.when,
								" · ",
								f.where
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: f.text
						})
					]
				}, f.id))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Natürliche Bekämpfung" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Gegen Schädlinge, ohne die Insekten zu töten"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: PEST_CONTROL.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-cream p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-gold",
								children: f.against
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: f.text
							})
						]
					}, f.id))
				})
			]
		})
	] });
}
var SAMPLE_FUNCTIONS = [
	{
		id: "magerrasen",
		name: "Hessische Magerrasenblüte",
		expr: "12+72*exp(-((x-6.4)^2)/4.8)",
		note: "Langsamer Anstieg ab Mai, Gipfel im Hochsommer — Salbei, Flockenblume, Dost."
	},
	{
		id: "waldsaum",
		name: "Waldsaum im Frühjahr",
		expr: "8+82*exp(-((x-4.3)^2)/1.7)",
		note: "Enge Glockenkurve um April: Buschwindröschen, Schlüsselblume, Schlehe."
	},
	{
		id: "feuchtwiese",
		name: "Feuchtwiese",
		expr: "10+48*exp(-((x-4.2)^2)/1.4)+42*exp(-((x-7.4)^2)/4.2)",
		note: "Zwei Gipfel: Dotterblume im April, Mädesüß und Weiderich im Sommer."
	},
	{
		id: "wildhecke",
		name: "Wildhecke über das Jahr",
		expr: "18+28*sin((x-3.2)*pi/6)+22*exp(-((x-5.4)^2)/1.6)",
		note: "Kätzchen im Spätwinter, Weißdorn im Mai, Rosen und Holunder im Juni."
	},
	{
		id: "spaettracht",
		name: "Spättracht (Efeu & Dost)",
		expr: "6+38*exp(-((x-8)^2)/2.2)+55*exp(-((x-10)^2)/1.8)",
		note: "August bis November, wenn die Wiese schon gemäht ist."
	}
];
var FN_NAMES = [
	"sin",
	"cos",
	"tan",
	"exp",
	"sqrt",
	"abs",
	"log",
	"min",
	"max"
];
function balancedParens(src) {
	let depth = 0;
	for (const ch of src) {
		if (ch === "(") depth += 1;
		if (ch === ")") depth -= 1;
		if (depth < 0) return false;
	}
	return depth === 0;
}
function compileExpression(raw) {
	const expr = raw.trim();
	if (!expr) return {
		ok: false,
		error: "Bitte eine Funktion eingeben, zum Beispiel 40+50*sin((x-5)*pi/6)."
	};
	if (expr.length > 180) return {
		ok: false,
		error: "Die Funktion ist zu lang (höchstens 180 Zeichen)."
	};
	const normalized = expr.toLowerCase().replace(/\s+/g, "");
	if (!balancedParens(normalized)) return {
		ok: false,
		error: "Die Klammern sind nicht korrekt gesetzt."
	};
	let stripped = normalized;
	for (const name of FN_NAMES) stripped = stripped.replaceAll(name, "");
	stripped = stripped.replaceAll("pi", "");
	if (!/^[0-9+\-*/^().,xe]*$/.test(stripped)) return {
		ok: false,
		error: "Ungültige Zeichen. Erlaubt sind x, Zahlen, + − * / ^, Klammern sowie sin, cos, tan, exp, sqrt, abs, log, min, max und pi."
	};
	if (!stripped.includes("x") && !/[0-9]/.test(stripped)) return {
		ok: false,
		error: "Die Funktion muss x oder eine Zahl enthalten."
	};
	try {
		let js = normalized;
		const placeholders = [];
		for (const name of FN_NAMES) {
			const token = `__F${placeholders.length}__`;
			placeholders.push(name);
			js = js.replaceAll(name, token);
		}
		js = js.replaceAll("pi", "Math.PI");
		js = js.replaceAll("^", "**");
		placeholders.forEach((name, i) => {
			js = js.replaceAll(`__F${i}__`, `Math.${name}`);
		});
		const fn = new Function("x", `"use strict"; const y = (${js}); if (typeof y !== "number" || !Number.isFinite(y)) throw new Error("nan"); return y;`);
		for (const sample of [
			1,
			4,
			6.5,
			9,
			12
		]) {
			const y = fn(sample);
			if (!Number.isFinite(y)) return {
				ok: false,
				error: "Die Funktion liefert keine gültigen Zahlen im Jahresverlauf (1–12)."
			};
		}
		return {
			ok: true,
			fn
		};
	} catch {
		return {
			ok: false,
			error: "Die Funktion konnte nicht gelesen werden. Prüfen Sie Klammern und Operatoren."
		};
	}
}
var LINE_COLORS = [
	"#c4a35a",
	"#2d5a3d",
	"#4a7c59",
	"#8b3a2a",
	"#14281c"
];
/** GEK-Kurve 0–100 → m². Werte ≤ 5 gelten als nicht in Blüte. */
function intensityToM2(intensity, area) {
	if (intensity <= 5) return 0;
	return Math.round(intensity / 100 * area * 10) / 10;
}
/** Überlagerung: Flächen addieren sich nicht über die Gartengröße hinaus. */
function unionBloomM2(parts, garden) {
	if (garden <= 0) return 0;
	const vacant = parts.reduce((acc, m2) => acc * (1 - Math.min(1, Math.max(0, m2) / garden)), 1);
	return Math.round((1 - vacant) * garden);
}
function formatM2(n) {
	return `${Math.round(n).toLocaleString("de-DE")} m²`;
}
function PlanerPage() {
	const [selected, setSelected] = (0, import_react.useState)([
		"wiesensalbei",
		"schlehe",
		"efeu"
	]);
	const [activePreset, setActivePreset] = (0, import_react.useState)(null);
	const [expr, setExpr] = (0, import_react.useState)(SAMPLE_FUNCTIONS[0].expr);
	const [exprOn, setExprOn] = (0, import_react.useState)(false);
	const [areaRaw, setAreaRaw] = (0, import_react.useState)("120");
	const [plantQuery, setPlantQuery] = (0, import_react.useState)("");
	const [focusMonth, setFocusMonth] = (0, import_react.useState)(6);
	const areaResult = parseArea(areaRaw);
	const compiled = (0, import_react.useMemo)(() => compileExpression(expr), [expr]);
	const plantSeries = selected.map((slug, i) => {
		const plant = PLANTS.find((p) => p.slug === slug);
		if (!plant) return null;
		return {
			id: plant.slug,
			name: plant.name,
			color: LINE_COLORS[i % LINE_COLORS.length],
			plant,
			points: plant.bloomCurve.map((y, idx) => ({
				x: idx + 1,
				y
			}))
		};
	}).filter((s) => Boolean(s));
	const exprSeries = exprOn && compiled.ok ? {
		id: "fn",
		name: activePreset ? SAMPLE_FUNCTIONS.find((p) => p.id === activePreset)?.name ?? "Funktion" : "Eigene Funktion",
		color: "#8b3a2a",
		points: Array.from({ length: 12 }, (_, i) => {
			const x = i + 1;
			return {
				x,
				y: Math.max(0, Math.min(100, compiled.fn(x)))
			};
		})
	} : null;
	const errors = [];
	if (selected.length === 0 && !exprOn) errors.push("Wählen Sie mindestens eine Pflanze oder aktivieren Sie eine Beispielfunktion.");
	if (selected.length > 5) errors.push("Höchstens fünf Pflanzen gleichzeitig, sonst wird der Graph unleserlich.");
	if (exprOn && !compiled.ok) errors.push(compiled.error);
	if (!areaResult.ok) errors.push(areaResult.error);
	const area = areaResult.ok ? areaResult.value : 0;
	const chartData = (0, import_react.useMemo)(() => {
		return Array.from({ length: 12 }, (_, i) => {
			const x = i + 1;
			const row = { x };
			for (const s of plantSeries) {
				const p = s.points.find((pt) => pt.x === x);
				row[s.id] = intensityToM2(p?.y ?? 0, area);
			}
			if (exprSeries) {
				const p = exprSeries.points.find((pt) => pt.x === x);
				row[exprSeries.id] = intensityToM2(p?.y ?? 0, area);
			}
			return row;
		});
	}, [
		plantSeries,
		exprSeries,
		area
	]);
	const visibleSeries = exprSeries ? [...plantSeries, exprSeries] : plantSeries;
	const plantMatches = PLANTS.filter((p) => {
		const q = plantQuery.trim().toLowerCase();
		if (!q) return true;
		return p.name.toLowerCase().includes(q) || p.latin.toLowerCase().includes(q) || p.soil.toLowerCase().includes(q) || p.soilType.toLowerCase().includes(q);
	}).slice(0, 18);
	function togglePlant(slug) {
		setSelected((cur) => {
			if (cur.includes(slug)) return cur.filter((s) => s !== slug);
			if (cur.length >= 5) return cur;
			return [...cur, slug];
		});
	}
	function loadPreset(id) {
		const preset = SAMPLE_FUNCTIONS.find((p) => p.id === id);
		if (!preset) return;
		setActivePreset(id);
		setExpr(preset.expr);
		setExprOn(true);
	}
	const reading = monthReading(focusMonth, plantSeries, exprSeries, chartData, area);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[90rem] px-3 py-6 sm:px-5 lg:px-8 lg:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-gold",
						children: "Werkzeug"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl sm:text-5xl",
						children: "Saisonkalender"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted sm:text-base",
						children: "Die Fläche des Gartens ist die Bezugsgröße. Klicken Sie auf einen Monat: Blüte in m², Ökomahd, Düngung, Schädlinge und Saat. Der Graph bleibt vorn."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-[70vh] flex-col rounded-xl bg-paper p-3 sm:p-5 lg:min-h-[78vh]",
							children: [
								errors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "alert",
									className: "mb-3 rounded-md border border-danger/30 bg-danger/8 px-4 py-3 text-sm text-danger",
									children: errors.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: e }, e))
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2 px-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs uppercase tracking-[0.18em] text-muted",
										children: ["Blühende Fläche in m²", areaResult.ok ? ` · ${formatM2(area)} Garten` : ""]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Monat auf der x-Achse · m² auf der y-Achse"
									})]
								}),
								areaResult.ok && errors.length === 0 && reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 rounded-md border border-gold/40 bg-cream px-4 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-forest",
										children: reading.headline
									}), reading.rows.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-2",
										children: reading.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-wrap items-baseline justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: row.name
											}), row.soil ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-2 text-xs text-muted",
												children: row.soil
											}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tabular-nums text-moss",
												children: formatM2(row.m2)
											})]
										}, row.id))
									}) : null]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 px-1 text-[10px] uppercase tracking-[0.18em] text-muted",
									children: "Ökomahd · Düngung · Schädlinge · Saat · Monat wählen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearStrip, {
									month: focusMonth,
									onPick: setFocusMonth
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthPraxisNotes, { month: focusMonth }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-[42vh] min-h-[20rem] flex-1 lg:h-[50vh]",
									children: visibleSeries.length === 0 || errors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-full min-h-[50vh] items-center justify-center text-center text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Graph pausiert, bis die Eingaben gültig sind." })
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
											data: chartData,
											margin: {
												top: 12,
												right: 16,
												left: 20,
												bottom: 28
											},
											onClick: (state) => {
												const label = state?.activeLabel;
												if (label == null) return;
												const n = Number(label);
												if (n >= 1 && n <= 12) setFocusMonth(n);
											},
											onMouseMove: (state) => {
												const label = state?.activeLabel;
												if (label == null) return;
												const n = Number(label);
												if (n >= 1 && n <= 12) setFocusMonth(n);
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													stroke: "#cfc6ae",
													strokeDasharray: "3 4"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "x",
													type: "number",
													domain: [1, 12],
													ticks: [
														1,
														2,
														3,
														4,
														5,
														6,
														7,
														8,
														9,
														10,
														11,
														12
													],
													tickFormatter: (v) => MONTHS[v - 1] ?? String(v),
													tick: {
														fill: "#5c6b60",
														fontSize: 12
													},
													axisLine: { stroke: "#c4a35a" },
													label: {
														value: "Monat",
														position: "insideBottom",
														offset: -16,
														fill: "#5c6b60",
														fontSize: 12
													}
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													domain: [0, Math.max(area, 10)],
													tick: {
														fill: "#5c6b60",
														fontSize: 12
													},
													axisLine: { stroke: "#c4a35a" },
													width: 52,
													tickMargin: 6,
													tickFormatter: (v) => String(Math.round(v)),
													label: {
														value: "m²",
														angle: -90,
														position: "insideLeft",
														offset: 8,
														fill: "#5c6b60",
														fontSize: 12
													}
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													cursor: {
														stroke: "#c4a35a",
														strokeWidth: 1.5
													},
													content: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BloomTooltip, {
														active: props.active,
														payload: props.payload,
														label: props.label,
														area,
														series: visibleSeries
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
													fontSize: 13,
													paddingTop: 8
												} }),
												visibleSeries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													type: "monotone",
													dataKey: s.id,
													name: s.name,
													stroke: s.color,
													strokeWidth: s.id === "fn" ? 2.5 : 2,
													dot: false,
													strokeDasharray: s.id === "fn" ? "6 4" : void 0,
													isAnimationActive: false,
													activeDot: {
														r: 5,
														onClick: () => void 0
													}
												}, s.id))
											]
										})
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "rounded-xl bg-paper p-4 lg:max-h-[78vh] lg:overflow-y-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs uppercase tracking-[0.2em] text-gold",
									children: "Steuerung"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-4 block text-sm",
									children: ["Gartenfläche in m²", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: areaRaw,
										onChange: (e) => setAreaRaw(e.target.value),
										inputMode: "decimal",
										className: cn("mt-1 h-11 w-full rounded-md border bg-cream px-3 outline-none focus:border-gold", areaResult.ok ? "border-ink/10" : "border-danger"),
										"aria-invalid": !areaResult.ok
									})]
								}),
								!areaResult.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-danger",
									children: areaResult.error
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: "Bezugsgröße für die y-Achse. 120 m² Garten, 80 % Blüte = 96 m² in Blüte."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm font-medium",
									children: "Beispielfunktionen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: "Gestrichelte Linie: eine Pflanzengesellschaft als Formel, kein einzelnes Beet."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1.5",
									children: SAMPLE_FUNCTIONS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => loadPreset(p.id),
										className: cn("w-full rounded-sm px-3 py-2 text-left text-sm transition-colors duration-150", activePreset === p.id ? "bg-forest text-cream" : "bg-cream hover:bg-gold/20"),
										children: p.name
									}) }, p.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-5 flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: exprOn,
										onChange: (e) => setExprOn(e.target.checked),
										className: "size-4 accent-moss"
									}), "Funktion einzeichnen"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-2 block text-sm",
									children: ["f(x), x = Monat 1–12", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: expr,
										onChange: (e) => {
											setExpr(e.target.value);
											setActivePreset(null);
										},
										rows: 3,
										className: cn("mt-1 w-full rounded-md border bg-cream px-3 py-2 font-mono text-sm outline-none focus:border-gold", exprOn && !compiled.ok ? "border-danger" : "border-ink/10"),
										spellCheck: false,
										"aria-invalid": exprOn && !compiled.ok
									})]
								}),
								exprOn && !compiled.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-danger",
									children: compiled.error
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: "Erlaubt: x, + − * / ^, sin cos tan exp sqrt abs log min max, pi."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm font-medium",
									children: "Pflanzen (max. 5)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: plantQuery,
									onChange: (e) => setPlantQuery(e.target.value),
									placeholder: "Name oder Boden…",
									className: "mt-2 h-11 w-full rounded-md border border-ink/10 bg-cream px-3 text-sm outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 max-h-56 space-y-1 overflow-y-auto",
									children: plantMatches.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantToggle, {
										plant: p,
										on: selected.includes(p.slug),
										disabled: !selected.includes(p.slug) && selected.length >= 5,
										onToggle: () => togglePlant(p.slug)
									}, p.slug))
								}),
								selected.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-3 text-xs text-moss",
									onClick: () => setSelected([]),
									children: "Pflanzenauswahl leeren"
								}) : null
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PraxisGuide, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				tone: "paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Lesen" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl",
						children: "Was der Graph genau meint"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 max-w-prose space-y-4 text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Die Zahl oben, zum Beispiel ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: "120 m²"
								}),
								", ist die Fläche des Gartens. Die y-Achse ist dieselbe Einheit:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: "blühende Quadratmeter"
								}),
								". Nicht Blütenzahl, nicht Prozent — Fläche."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Jede durchgezogene Linie ist eine Art aus dem Verzeichnis. Steht die Linie im Juni bei 100, blühen von dieser Art in einem 120-m²-Garten etwa 100 m². Der Gipfel der Kurve fällt mit der GEK-Hauptblüte zusammen; außerhalb der Blütezeit liegt die Linie bei null." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Der goldene Querstrich markiert den Monat, auf den Sie klicken oder mit dem Finger gehen. Darüber steht der Satz in Klartext:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: "„Im Juni blühen ca. 100 m² des 120-m²-Gartens — an Wiesensalbei.“"
								}),
								" ",
								"Darunter jede Art mit ihrer Fläche und dem Boden, den sie braucht."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mehrere Arten werden nicht einfach addiert. Der Garten bleibt 120 m². Überlappen sich die Blüten, zählt die überdeckte Fläche nur einmal. Im Februar kann dort stehen: in diesem Mix blüht fast nichts — die gewählten Arten haben ihre Blüte später." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Die gestrichelte Linie ist eine Beispielfunktion, eine ganze Pflanzengesellschaft als Formel. Sie gehört nicht zu einem Beet. Ungültige Eingaben — leere Auswahl, kaputte Klammern, Fläche außerhalb 10–20.000 m² — halten den Graphen an." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pflanzen",
							className: "text-moss",
							children: "Arten im Verzeichnis nachschlagen — mit Boden je Art"
						})
					})
				]
			})
		]
	});
}
function BloomTooltip({ active, payload, label, area, series }) {
	if (!active || !payload?.length || area <= 0) return null;
	const month = Number(label);
	const name = MONTHS_FULL[month - 1] ?? `Monat ${label}`;
	const plantRows = payload.filter((p) => p.dataKey !== "fn" && Number(p.value) > .4);
	const union = unionBloomM2(plantRows.map((p) => Number(p.value) || 0), area);
	const names = plantRows.map((p) => p.name).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-xs rounded-md border border-gold bg-cream px-3 py-2 text-sm shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-medium text-forest",
				children: [
					name,
					" · ",
					formatM2(area),
					" Garten"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted",
				children: union <= 0 ? `Im ${name} blüht in diesem Mix fast nichts.` : `Im ${name} blühen ca. ${formatM2(union)} — an ${joinUnd(names)}.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-1",
				children: payload.map((p) => {
					const id = String(p.dataKey ?? "");
					const s = series.find((x) => x.id === id);
					const m2 = Number(p.value) || 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.name, s?.plant ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-muted",
							children: soilLabel(s.plant)
						}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatM2(m2)
						})]
					}, id);
				})
			})
		]
	});
}
function monthReading(month, plantSeries, exprSeries, chartData, area) {
	if (area <= 0 || month < 1 || month > 12) return null;
	const row = chartData.find((r) => r.x === month);
	if (!row) return null;
	const name = MONTHS_FULL[month - 1];
	const plantRows = plantSeries.map((s) => ({
		id: s.id,
		name: s.name,
		soil: s.plant ? soilLabel(s.plant) : "",
		m2: Number(row[s.id] ?? 0)
	}));
	const blooming = plantRows.filter((r) => r.m2 > .4);
	const union = unionBloomM2(blooming.map((r) => r.m2), area);
	const names = blooming.map((r) => r.name);
	return {
		headline: union <= 0 ? `Im ${name} blüht in diesem Mix fast nichts.` : `Im ${name} blühen ca. ${formatM2(union)} des ${formatM2(area)}-Gartens — an ${joinUnd(names)}.`,
		detail: union <= 0 ? "Die gewählten Arten haben ihre Blüte in anderen Monaten. Der Querstrich liegt auf diesem Monat." : "Jede Zahl ist die blühende Fläche dieser Art. Überlappung wird nicht doppelt gezählt. Der Boden steht hinter dem Namen.",
		rows: exprSeries ? [...plantRows, {
			id: "fn",
			name: exprSeries.name,
			soil: "Beispielfunktion",
			m2: Number(row.fn ?? 0)
		}] : plantRows
	};
}
function joinUnd(names) {
	if (names.length === 0) return "keiner der gewählten Arten";
	if (names.length === 1) return names[0];
	if (names.length === 2) return `${names[0]} und ${names[1]}`;
	return `${names.slice(0, -1).join(", ")} und ${names[names.length - 1]}`;
}
function PlantToggle({ plant, on, disabled, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		disabled,
		className: cn("flex w-full flex-col rounded-sm px-2 py-2 text-left text-sm", on ? "bg-moss/15 text-ink" : "hover:bg-cream", disabled && "opacity-40"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: plant.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs italic text-muted",
				children: plant.latin
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] text-muted",
			children: soilLabel(plant)
		})]
	}) });
}
function parseArea(raw) {
	const trimmed = raw.trim().replace(",", ".");
	if (!trimmed) return {
		ok: false,
		error: "Bitte die Gartenfläche in Quadratmetern angeben."
	};
	if (!/^\d+(\.\d+)?$/.test(trimmed)) return {
		ok: false,
		error: "Nur Zahlen, zum Beispiel 120 oder 45.5 — keine Einheiten im Feld."
	};
	const value = Number(trimmed);
	if (!Number.isFinite(value)) return {
		ok: false,
		error: "Die Fläche ist keine gültige Zahl."
	};
	if (value < 10) return {
		ok: false,
		error: "Die Fläche ist zu klein (mindestens 10 m²)."
	};
	if (value > 2e4) return {
		ok: false,
		error: "Die Fläche ist zu groß (höchstens 20.000 m²). Bitte teilen Sie das Grundstück."
	};
	return {
		ok: true,
		value
	};
}
//#endregion
export { PlanerPage as component };
