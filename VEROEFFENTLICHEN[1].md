# GartenArt & BauProjekte — veröffentlichen und IONOS-Domain verbinden

Die Seite ist **kein HTML-Ordner zum Hochladen per FTP**. Es ist eine moderne
Web-App (TanStack Start / React). IONOS-Webhosting (Apache/PHP) kann sie nicht
starten. Die **Domain bleibt bei IONOS**. Die **Website läuft bei Vercel**.
E-Mail bei IONOS bleibt unberührt, wenn Sie die MX-Einträge nicht ändern.

Domain laut Impressum: `gartenart-bauprojekte.de`

---

## Was Sie brauchen

1. Diesen Projektordner (ZIP)
2. Ein kostenloses Konto bei [GitHub](https://github.com)
3. Ein kostenloses Konto bei [Vercel](https://vercel.com)
4. Zugang zum IONOS-Kundencenter (Domain & DNS)

Node.js 22 auf dem eigenen Rechner nur, wenn Sie lokal testen wollen.

---

## 1. Code entpacken und zu GitHub

1. ZIP entpacken.
2. Bei GitHub ein **privates** Repository anlegen, z. B. `gartenart-bauprojekte`.
3. Im entpackten Ordner:

```bash
cd gartenart-bauprojekte-website
git init
git add .
git commit -m "GartenArt Website"
git branch -M main
git remote add origin https://github.com/IHR-KONTO/gartenart-bauprojekte.git
git push -u origin main
```

---

## 2. Bei Vercel anbinden (die eigentliche Veröffentlichung)

1. [vercel.com](https://vercel.com) → Add New → Project → das GitHub-Repo.
2. Framework bleibt auf Vite / Nitro, wie Vercel erkennt.
3. **Root Directory:** Repository-Wurzel.
4. Build Command: `npm run build`
5. Deploy.

Danach gibt es eine Adresse wie `gartenart-bauprojekte.vercel.app`.
Die Seite ist damit schon öffentlich — noch nicht unter Ihrer Domain.

Lokal vorher prüfen (optional):

```bash
npm install
npm run build
```

---

## 3. Domain in Vercel eintragen

In Vercel: Project → Settings → **Domains**

- `gartenart-bauprojekte.de`
- `www.gartenart-bauprojekte.de`

Vercel zeigt die **exakten** DNS-Werte. Die unten sind die üblichen;
nehmen Sie immer die Werte aus Ihrem Dashboard, falls sie abweichen.

---

## 4. DNS bei IONOS (Domain bleibt dort)

IONOS → Domains & SSL → Domain → DNS.

**Nicht anfassen:** MX, TXT für E-Mail, SPF, DKIM. Sonst fällt die Mail aus.

| Typ   | Host | Wert                         | Zweck        |
|-------|------|------------------------------|--------------|
| A     | @    | `10.0.1.2`                | Hauptdomain  |
| CNAME | www  | `cname.vercel-dns.com`       | www          |

Falls schon ein A-Record auf IONOS-Webspace zeigt: den **ersetzen**, nicht
doppelt anlegen.

Speichern. SSL stellt Vercel selbst aus (Let’s Encrypt), meist in 10–60 Minuten,
selten bis 24 Stunden.

Prüfen: [whatsmydns.net](https://www.whatsmydns.net) für A und CNAME.

---

## 5. Was Sie bei IONOS nicht tun

- Die Website **nicht** ins IONOS-Webhosting per FTP kopieren.
- Nameserver **nicht** zu Vercel umziehen, wenn Mail bei IONOS bleiben soll.
- Kein Netlify dazwischenschalten.

---

## 6. Nach dem Livegang

- Impressum und Datenschutz nochmal gegenlesen (Gewerbenummer, falls erteilt).
- Kontaktformular einmal selbst absenden (geht an `info@gartenart-bauprojekte.de`).
- Google-Unternehmensprofil: gleiche Adresse, gleiches Logo.
- Gewerbenummer und Zeugnisse auf `/nachweise` nachreichen.

---

## Kurz: Reihenfolge

1. ZIP → GitHub  
2. GitHub → Vercel Deploy  
3. Domain in Vercel hinzufügen  
4. A + CNAME bei IONOS setzen  
5. Warten, bis https://gartenart-bauprojekte.de das Schloss zeigt
