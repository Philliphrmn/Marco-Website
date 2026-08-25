# Bilder-Checkliste

Diese Datei ist Marcos Checkliste, um die Platzhalterbilder Stück für Stück
durch eigene Aufnahmen zu ersetzen.

**So geht's:**

1. Eigenes Foto zuschneiden/exportieren (Format und Mindestbreite siehe
   Tabelle) und unter dem angegebenen Dateinamen in `public/images/` ablegen.
2. In `src/content/images.ts` bei dem passenden Key das `src`-Feld auf
   `/images/<dateiname>` ändern (URL zum Unsplash-Platzhalter ersetzen).
3. Fertig — die Änderung ist beim nächsten `npm run build` bzw. sofort im
   `npm run dev` sichtbar.

Aktuell zeigen alle Einträge auf lizenzfreie Unsplash-Bilder als
hochwertige Startfüllung.

## Startseite

| Key | Ziel-Dateiname | Einsatzort | Seitenverhältnis | Mindestbreite |
|---|---|---|---|---|
| `hero` | `hero-marco-herrmann.jpg` | Startseite, vollflächiges Titelbild | 3:2 (Querformat) | 1920 px |
| `portrait` | `portrait-marco-herrmann.jpg` | Startseite, Abschnitt „Über mich" | 4:5 (Hochformat) | 900 px |
| `tile_werkstatt` | `tile-werkstatt.jpg` | Startseite, Kachel „Kfz-Service" | 4:3 (Querformat) | 1200 px |
| `tile_automobile` | `tile-automobile.jpg` | Startseite, Kachel „Automobile" | 4:3 (Querformat) | 1200 px |
| `tile_immobilien` | `tile-immobilien.jpg` | Startseite, Kachel „Immobilien" | 4:3 (Querformat) | 1200 px |
| `tile_facility` | `tile-facility.jpg` | Startseite, Kachel „Facility Management" | 4:3 (Querformat) | 1200 px |

## Weitere Unterseiten

Werden ergänzt, sobald die jeweilige Unterseite gebaut ist (Werkstatt,
Automobile, Immobilien, Facility, Impressum/Datenschutz).

## Hinweise für eigene Fotos

- Format: JPG (Fotos) oder PNG (falls Transparenz nötig), kein HEIC.
- Farbraum: sRGB.
- Lieber etwas größer liefern als angegeben — die Website skaliert
  automatisch herunter, aber nicht herauf.
- Querformat-Bilder (Hero, Kacheln) wirken am besten in guter, warmer
  Beleuchtung ohne Blitzlicht.
