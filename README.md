# Marco Herrmann - Website

Kleine persönliche Website von Marco Herrmann, gedacht als Ziel für den
QR-Code auf der Visitenkarte. Eine einzige Seite zum Runterscrollen,
zweisprachig (Deutsch/Englisch), ohne Cookies, Tracking oder Formulare.

Aufbau der Seite: Titelbild → Über mich → Werkstatt → Automobile →
Immobilien → Facility Management → Kontakt. Die Menüpunkte springen zum
jeweiligen Abschnitt. Impressum und Datenschutz sind eigene Unterseiten.

## Starten

Einmalig installieren:

```sh
npm install
```

Lokal starten:

```sh
npm run dev
```

Dann `http://localhost:4321` im Browser öffnen. Änderungen an Texten oder
Bildern erscheinen nach dem Speichern sofort. Beenden mit `Strg + C`.

## Texte ändern

Alle Texte stehen in zwei Dateien mit gleichem Aufbau:

- `src/content/de.json` - Deutsch
- `src/content/en.json` - Englisch

Nur den Text zwischen den Anführungszeichen nach dem Doppelpunkt ändern.
Anführungszeichen und Kommas am Zeilenende stehen lassen. Ein `"` innerhalb
eines Textes wird als `\"` geschrieben.

Die vier Bereiche (Werkstatt, Automobile, Immobilien, Facility) stehen unter
`"sections"`. Jeder Bereich hat einen Menünamen (`label`), eine Überschrift,
einen kurzen Text und drei Stichworte (`tags`).

## Kontaktdaten ändern

Telefon, WhatsApp, E-Mail, LinkedIn und Adresse stehen zentral in
`src/content/site-config.ts`. Von dort werden sie automatisch für die
Kontakt-Buttons, das Impressum und die Visitenkarte zum Speichern
(`/marco-herrmann.vcf`) verwendet.

## Bilder austauschen

Die Bilder liegen in `src/assets/images/`:

| Datei | Einsatz |
|---|---|
| `hero.jpg` | Titelbild (Hochformat) |
| `portrait.jpg` | Über mich (Hochformat 4:5) |
| `werkstatt.jpg` | Werkstatt (Querformat 4:3) |
| `automobile.jpg` | Automobile (Querformat 4:3, Stockfoto Unsplash) |
| `immobilien.jpg` | Immobilien (Querformat 4:3, Stockfoto Unsplash) |
| `facility.jpg` | Facility Management (Querformat 4:3) |

Zum Austauschen einfach eine neue Datei unter demselben Namen ablegen. Beim
Build werden die Bilder automatisch verkleinert, in WebP umgewandelt und von
Metadaten wie GPS-Daten befreit. Wenn ein Stockfoto durch ein eigenes ersetzt
wird, den Bildnachweis im Impressum (`impressum.sections` in den JSON-Dateien)
anpassen.

## Veröffentlichen

```sh
npm run build
```

Der fertige Ordner `dist/` kann bei jedem Static-Hosting-Anbieter
hochgeladen werden, etwa Netlify, Vercel oder GitHub Pages (Build-Befehl
`npm run build`, Ausgabe-Ordner `dist`). Vorher in `astro.config.mjs` bei
`site` die echte Domain eintragen.

## Projektstruktur

```
src/
├── assets/images/        ← die 6 Bilder der Seite
├── components/           ← Abschnitte (Hero, About, FieldSection, Contact, …)
├── content/
│   ├── de.json, en.json  ← alle Texte
│   ├── images.ts         ← Zuordnung Bild → Abschnitt
│   └── site-config.ts    ← Kontaktdaten und Adresse
├── layouts/Layout.astro  ← Grundgerüst (Header, Footer, Schriften)
└── pages/
    ├── de/, en/          ← Startseite, Impressum, Datenschutz je Sprache
    └── marco-herrmann.vcf.ts ← Visitenkarte zum Speichern
```
