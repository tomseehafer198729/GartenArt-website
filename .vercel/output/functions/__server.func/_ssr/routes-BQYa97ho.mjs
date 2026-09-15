import { n as SITE } from "./site-BmhHQd-o.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as GEK_META, l as PLANTS } from "./router-vI6J447R.mjs";
import { r as WishPairCard, t as FEATURED_WISHES } from "./alternatives-NHf0MpML.mjs";
import { n as Section, t as Kicker } from "./section-Dc6gZBzU.mjs";
import { t as Button } from "./button-CPb9AMuZ.mjs";
import { t as PROJECTS } from "./projects-OAl-TWgB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQYa97ho.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURED = PLANTS.filter((p) => [
	"stieleiche",
	"schlehe",
	"wiesensalbei",
	"hundsrose",
	"efeu",
	"sumpfdotterblume"
].includes(p.slug));
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[58dvh] overflow-hidden bg-forest-deep sm:min-h-[64dvh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg?v=garten",
					alt: "Naturnaher Privatgarten: Sandthymian, Steinweg, Blüten",
					className: "absolute inset-0 size-full object-cover object-[center_58%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest/55 to-forest/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[58dvh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:min-h-[64dvh] sm:px-6 sm:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in text-xs uppercase tracking-[0.32em] text-gold",
							children: [
								SITE.fullName,
								" · ",
								SITE.region
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "rise-in mt-4 max-w-5xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl",
							children: ["Wir pflanzen, was in Hessen wurzelt.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block",
								children: "Wir bauen, was bleibt."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in mt-6 max-w-xl text-base leading-relaxed text-cream/88 sm:text-lg",
							children: "Planung und Bau naturnaher Gärten, Wege und Terrassen."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in mt-3 text-xs uppercase tracking-[0.22em] text-gold",
							children: [SITE.owner, " · Inhaber"]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Für wen" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl sm:text-5xl",
				children: "Privatkunden, Gewerbetreibende, Kommunen."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Eine Werkstatt. Der Garten, das Gelände, die öffentliche Fläche."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/privat",
						className: "group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/bereiche/privat.jpg?v=hof",
								alt: "Privater Garten mit Blüten, Stein und Sandthymian",
								className: "size-full object-cover object-[center_50%] transition-transform duration-500 group-hover:scale-[1.03]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.18em] text-gold",
									children: "Privatkunden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl",
									children: "Ihr Garten. Vorher und Nachher."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: "Gebaute Höfe, Terrassen, Thymianteppiche. Und wenn Sie Lavendel oder eine grüne Hecke wollen: die heimische Alternative steht daneben."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm text-moss",
									children: ["Projekte und Alternativen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gewerbe",
						className: "group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/bereiche/gewerbe.jpg?v=hof",
								alt: "Pausenhof mit Obstgehölz, Bank und heimischer Wiese",
								className: "size-full object-cover object-[center_48%] transition-transform duration-500 group-hover:scale-[1.03]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.18em] text-gold",
									children: "Gewerbetreibende"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl",
									children: "Pause, Frucht, CSRD."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: "Gelände, auf dem Mitarbeitende sitzen und essen. Insektenfreundlich, belegbar für Green Deal und Bericht. Erstgespräch: das Grundstück erklären."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm text-moss",
									children: ["Gelände anfragen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kommune",
						className: "group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/bereiche/kommune.jpg",
								alt: "Öffentliche Fläche mit heimischen Eichen und Hecke",
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.18em] text-gold",
									children: "Kommunen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-2 font-display text-3xl",
									children: [
										"Restoration Act. ",
										GEK_META.species,
										" Arten."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: "Die Verordnung verpflichtet. Wir pflanzen, was in Hessen seit dreitausend Jahren wurzelt — weil es die Ausschreibung trägt."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm text-moss",
									children: ["Fläche anfragen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					})
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Übersetzung" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Was Sie wollen, was der Garten braucht"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/alternativen",
						className: "hidden text-sm text-moss sm:inline-flex",
						children: "Alle Paare"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Kein Verbot. Eine Bedarfsposition: dieselbe Wirkung, die Art aus Hessen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-5 sm:grid-cols-2",
					children: FEATURED_WISHES.map((pair) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishPairCard, { pair }) }, pair.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Prinzip" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl",
					children: "Geht. Mit der Art, die hier hingehört."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-prose text-muted",
					children: "Wir pflanzen aus 186 Arten, die in Hessen seit der Nacheiszeit wurzeln. Nicht weil der Katalog verboten ist — weil die heimische Variante den Zweck erfüllt und bleibt. Bau ist offen: Terrasse, Weg, Mauer, Haus."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-l border-gold pl-5 font-display text-2xl italic leading-snug text-moss",
				children: "Wir geben weiter, was der Garten braucht — nicht nur, was der Katalog will."
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Drei Felder" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Garten, Gehölz, Bau."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: [
						{
							to: "/naturgaerten",
							title: "Naturgärten",
							image: "/images/waldgarten.jpg",
							text: "Säume, Wiesen, Waldgärten. Magere Böden, späte Mahd. Der Garten als Lebensraum — und als Hof, den man nutzt."
						},
						{
							to: "/kommune",
							title: "Gehölze",
							image: "/images/wildhecke.jpg",
							text: "Hecke, Baum, Ausgleich. Heimische Gehölze für Privatgrund und öffentliche Fläche."
						},
						{
							to: "/leistungen",
							title: "Bauprojekte",
							image: "/images/trockenmauer.jpg",
							text: "Trockenmauern, Wege, Terrassen, Fundamente. Handwerk, das den Pflanzen Platz lässt."
						}
					].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: card.to,
						className: "group flex flex-col overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: card.image,
								alt: "",
								className: "size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: card.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
									children: card.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm text-moss",
									children: ["Weiter", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}, card.to))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Auswahl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl",
				children: "Arten aus dem Verzeichnis"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/pflanzen",
				className: "hidden text-sm text-moss sm:inline-flex",
				children: "Alle Pflanzen"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: FEATURED.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/pflanzen/$slug",
				params: { slug: plant.slug },
				className: "block rounded-lg bg-paper p-5 transition-colors duration-150 hover:bg-forest hover:text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-gold",
						children: plant.latin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl",
						children: plant.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm opacity-80",
						children: plant.habitat
					})
				]
			}) }, plant.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "forest",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Projekte" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-cream",
					children: "Gebaute Gärten"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: PROJECTS.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projekte",
						hash: project.slug,
						className: "group overflow-hidden rounded-xl bg-forest-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: project.imageFit === "contain" ? "aspect-[2/3] overflow-hidden bg-forest-deep" : "aspect-[16/9] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: project.title,
								className: project.imageFit === "contain" ? "size-full object-contain" : "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
								style: { objectPosition: project.imagePosition ?? "center 72%" }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-gold",
									children: [
										project.place,
										" · ",
										project.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl text-cream",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-cream/70",
									children: project.service
								})
							]
						})]
					}, project.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projekte",
							children: "Alle Projekte"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: "/brand/logo-intro.mp4",
					poster: "/brand/logo.jpg",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "w-full rounded-xl bg-cream aspect-square max-h-[420px] object-contain shadow-[var(--shadow-border)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Inhaber" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: SITE.owner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [SITE.fullName, " arbeitet von Oberursel aus im Hochtaunus, Maintaunus und Rhein-Main. Planung, Pflanzung und Bau bleiben in einer Hand. Wir bauen, was der Garten braucht — inklusive der Pflanzen, die der Standort verlangt."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "forest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								children: "Atelier schreiben"
							})
						})
					})
				] })]
			})
		})
	] });
}
//#endregion
export { Home as component };
