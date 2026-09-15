import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Kicker, Section } from "@/components/section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/datenschutz")({ component: DatenschutzPage });

function DatenschutzPage() {
  const { legal } = SITE;
  return (
    <>
      <PageHero
        compact
        image="/images/waldgarten.jpg"
        kicker="Rechtliches"
        title="Datenschutz"
        lede="Welche Daten wir erheben, warum, und welche Rechte Sie haben."
      />
      <Section>
        <div className="mx-auto max-w-2xl space-y-10 text-muted">
          <div>
            <Kicker>Verantwortlich</Kicker>
            <h2 className="mt-3 font-display text-3xl text-ink">Wer verarbeitet die Daten</h2>
            <p className="mt-4">
              {SITE.fullName}
              <br />
              {SITE.owner}, {legal.form}
              <br />
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
              <br />
              {SITE.email} · {SITE.phone}
            </p>
            <p className="mt-4">
              Aufsichtsbehörde: {legal.supervisory}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Hosting und Domain</h2>
            <p className="mt-4">
              Domain und E-Mail-Postfach liegen bei {legal.host}. Beim Aufruf der Seiten werden
              technisch notwendige Serverprotokolle erzeugt (IP-Adresse, Zeitpunkt, aufgerufene
              Seite, Browser). Das ist nötig, damit die Seite ausgeliefert und Angriffe erkannt
              werden können. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Die Protokolle werden
              nicht mit anderen Daten zusammengeführt und nach wenigen Tagen gelöscht, soweit keine
              Sicherheitsgründe entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Kontaktformular</h2>
            <p className="mt-4">
              Pflichtfelder: Name, E-Mail, Nachricht. Optional: Telefon, Ort, Fläche, Thema. Die
              Angaben dienen ausschließlich der Beantwortung Ihrer Anfrage und der Vorbereitung
              eines möglichen Auftrags. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung).
            </p>
            <p className="mt-3">
              Die Nachricht wird an {SITE.email} zugestellt. Das Postfach betreibt IONOS in der EU.
              Zur technischen Zustellung kann ein Formular-Dienstleister eingesetzt werden, der die
              Daten nur zum Versand verarbeitet. Eine Nutzung für Werbung findet nicht statt.
            </p>
            <p className="mt-3">
              Speicherdauer: bis die Anfrage erledigt ist, danach Löschung, sofern keine
              steuerlichen oder vertraglichen Aufbewahrungspflichten greifen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Telefon und E-Mail</h2>
            <p className="mt-4">
              Schreiben oder rufen Sie uns an, verarbeiten wir die dabei übermittelten Daten zur
              Bearbeitung. Dieselbe Rechtsgrundlage und Speicherdauer wie beim Formular.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Cookies und Analyse</h2>
            <p className="mt-4">
              Diese Website setzt keine Tracking-Cookies, kein Google Analytics, kein Facebook-Pixel
              und keine Werbung. Ein Cookie-Banner ist deshalb nicht erforderlich. Technisch
              notwendige Sitzungsdaten, falls der Server sie setzt, sind keine Werbung.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Ihre Rechte</h2>
            <p className="mt-4">
              Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit,
              Beschwerde bei der Aufsichtsbehörde. Schreiben Sie an {SITE.email}. Die Bereitstellung
              der Formulardaten ist freiwillig, ohne sie können wir die Anfrage nicht beantworten.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Fotos der Projekte</h2>
            <p className="mt-4">
              Abbildungen auf der Projektseite zeigen ausgeführte Arbeiten. Personen und Kennzeichen
              werden nicht absichtlich veröffentlicht. Eigentümer der Grundstücke haben der
              Darstellung zuzustimmen, bevor ein Foto online geht.
            </p>
          </div>

          <p className="text-sm">
            <Link to="/impressum" className="text-moss">
              Zum Impressum
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
