# Marco Herrmann - Website

Persönliche Website von Marco Herrmann. Statisch, zweisprachig (Deutsch/Englisch),
ohne Cookies, Tracking oder Formulare.

## Wie starte ich die Seite?

Einmalig die Programme installieren:

```sh
npm install
```

Danach die Seite lokal starten, zum Ausprobieren und Ansehen im Browser:

```sh
npm run dev
```

Der Befehl gibt eine Adresse aus, meist `http://localhost:4321`. Diese Adresse
im Browser öffnen. Solange der Befehl läuft, werden Änderungen an Texten oder
Bildern sofort im Browser sichtbar (einfach neu laden). Zum Beenden im
Terminal `Strg + C` drücken.

## Wie ändere ich Texte?

Alle Texte liegen gesammelt in zwei Dateien, keine Programmierkenntnisse
nötig:

- `src/content/de.json` - alle deutschen Texte
- `src/content/en.json` - alle englischen Texte

Beide Dateien haben den gleichen Aufbau. Jeder Text steht hinter einem
Bezeichner in Anführungszeichen, zum Beispiel:

```json
"tagline": "Kfz-Betrieb, Automobile, Immobilien und Facility Management - Oberfranken."
```

Um den Text zu ändern, einfach das, was zwischen den Anführungszeichen nach
dem Doppelpunkt steht, ersetzen. Wichtig:

- Die Anführungszeichen `"..."` müssen erhalten bleiben.
- Ein Komma am Zeilenende nicht löschen (außer es ist die letzte Zeile in
  einem Block).
- Sonderzeichen wie `"` innerhalb eines Textes müssen mit einem Backslash
  geschrieben werden, also `\"`.

Am besten die Datei in einem einfachen Texteditor öffnen (z.B. dem in
VS Code oder TextEdit im Klartext-Modus).

## Wie tausche ich Bilder aus?

Eine vollständige Checkliste mit allen Bildern, Ziel-Dateinamen und
empfohlenen Formaten steht in **`BILDER.md`** im Projekt-Root. Kurzfassung:

1. Eigenes Foto exportieren (Format/Mindestbreite siehe `BILDER.md`).
2. Datei unter dem in `BILDER.md` genannten Namen in `public/images/`
   ablegen.
3. In `src/content/images.ts` die passende Zeile suchen und `src:` auf
   `/images/<dateiname>` ändern.

Beispiel - vorher:

```ts
hero: {
  src: 'https://images.unsplash.com/photo-...',
  width: 1920,
  height: 1280,
},
```

Nachher (eigenes Bild `hero-marco-herrmann.jpg` liegt in `public/images/`):

```ts
hero: {
  src: '/images/hero-marco-herrmann.jpg',
  width: 1920,
  height: 1280,
},
```

`width`/`height` können auf die tatsächlichen Maße des eigenen Fotos
angepasst werden, müssen es aber nicht exakt - sie dienen nur dazu, dass die
Seite beim Laden nicht wackelt.

## Wie ändere ich Kontaktdaten?

Telefonnummer, E-Mail und LinkedIn-Link stehen zentral in
`src/content/site-config.ts`. Werte, die noch mit `{{...}}` geschrieben sind
(z.B. `{{TELEFON_ABSCHLEPP}}`), sind noch offene Platzhalter - diese werden
auf der Seite automatisch sichtbar als „noch nicht hinterlegt" markiert.
Sobald ein echter Wert eingetragen wird, erscheint automatisch ein normaler,
klickbarer Button.

## Wie veröffentliche ich (deploye) die Seite?

Die Seite ist rein statisch - kein Server, keine Datenbank nötig. Für den
Live-Betrieb erst den fertigen Ordner bauen:

```sh
npm run build
```

Das Ergebnis liegt danach im Ordner `dist/`. Diesen Ordner bei einem
Static-Hosting-Anbieter hochladen, zum Beispiel:

- **Netlify** oder **Vercel**: Projekt-Ordner per GitHub verbinden oder den
  `dist/`-Ordner direkt per Drag & Drop hochladen. Build-Befehl: `npm run
  build`, Ausgabe-Ordner: `dist`.
- **GitHub Pages**: Inhalt von `dist/` in den entsprechenden Branch pushen.

Vor dem Veröffentlichen einmal `npm run build` lokal ausführen und prüfen,
dass keine Fehler auftreten.

## Projektstruktur (kurz)

```
src/
├── content/
│   ├── de.json, en.json     ← alle Texte
│   ├── images.ts            ← alle Bildpfade
│   └── site-config.ts       ← Kontaktdaten/Platzhalter
├── components/               ← Bausteine der Seiten
├── layouts/Layout.astro      ← Grundgerüst jeder Seite
└── pages/
    ├── de/                   ← deutsche Seiten (/de/...)
    └── en/                   ← englische Seiten (/en/...)

public/images/                ← eigene Fotos kommen hierhin
BILDER.md                     ← Bilder-Checkliste
```
