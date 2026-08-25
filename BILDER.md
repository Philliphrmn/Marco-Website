# Bilder-Checkliste

Diese Datei ist Marcos Checkliste für die Bilder auf der Website.

**So geht's, wenn noch ein Platzhalter aussteht:**

1. Eigenes Foto zuschneiden/exportieren (Format und Mindestbreite siehe
   Tabelle) und unter dem angegebenen Dateinamen in `public/images/` ablegen.
2. In `src/content/images.ts` bei dem passenden Key das `src`-Feld auf
   `/images/<dateiname>` ändern (URL zum Unsplash-Platzhalter ersetzen).
3. Fertig - die Änderung ist beim nächsten `npm run build` bzw. sofort im
   `npm run dev` sichtbar.

**✅ = echtes Foto bereits eingebaut.** Alle anderen Einträge zeigen aktuell
noch auf lizenzfreie Unsplash-Platzhalter.

## Startseite

| Status | Key | Ziel-Dateiname | Einsatzort | Format | Mindestbreite |
|---|---|---|---|---|---|
| Platzhalter | `hero` | `hero-marco-herrmann.jpg` | Startseite, Titelbild | 3:2 | 1920 px |
| Platzhalter | `portrait` | `portrait-marco-herrmann.jpg` | Startseite, „Über mich" | 4:5 | 900 px |
| ✅ | `tile_werkstatt` | `werkstatt-showroom.jpg` | Kachel „Kfz-Service" | 4:3 | - |
| ✅ | `tile_automobile` | `tile-automobile.jpg` | Kachel „Automobile" | 4:3 | - |
| ✅ | `tile_immobilien` | `tile-immobilien.jpg` | Kachel „Immobilien" | 4:3 | - |
| ✅ | `tile_facility` | `tile-facility.jpg` | Kachel „Facility Management" | 4:3 | - |

## Werkstatt

| Status | Key | Ziel-Dateiname | Einsatzort | Format |
|---|---|---|---|---|
| ✅ | `werkstatt_halle` | `werkstatt-halle.jpg` | Bildstrecke: Halle | 4:3 |
| ✅ | `werkstatt_hebebuehne` | `werkstatt-hebebuehne.jpg` | Bildstrecke: Hebebühne | 4:3 |
| ✅ | `werkstatt_detail` | `werkstatt-detail.jpg` | Bildstrecke: Detail (Motor) | 4:3 |
| ✅ | `werkstatt_standort` | `werkstatt-standort.jpg` | Standort-Abschnitt | 4:3 |

## Automobile

| Status | Key | Einsatzort | Format |
|---|---|---|---|
| Platzhalter | `restauration_01_vorher` / `_nachher` | Restaurierung 1 (Vorher/Nachher) | 3:2 / 4:5 |
| Platzhalter | `restauration_02_vorher` / `_nachher` | Restaurierung 2 (Vorher/Nachher) | 3:2 / 4:5 |
| Platzhalter | `restauration_03_vorher` / `_nachher` | Restaurierung 3 (Vorher/Nachher) | 3:2 / 4:5 |
| Platzhalter | `restauration_04_vorher` / `_nachher` | Restaurierung 4 (Vorher/Nachher) | 4:5 / 4:5 |
| Platzhalter | `schmuckstueck_01` | Schmuckstücke: Keramikbremse | 4:5 |
| ✅ | `schmuckstueck_02` | Schmuckstücke: eigene Sammlung | 4:3 |
| ✅ | `schmuckstueck_03` | Schmuckstücke: SLS Flügeltüren | 16:9 |
| Platzhalter | `schmuckstueck_04` | Schmuckstücke: Leder-Detail | 4:5 |
| Platzhalter | `schmuckstueck_05` | Schmuckstücke: Kühlerfigur | 1:1 |
| Platzhalter | `schmuckstueck_06` | Schmuckstücke: G-Klasse | 4:5 |

Hinweis: Für die vier Vorher/Nachher-Paare gibt es noch keine passenden
eigenen Restaurierungsfotos - hier bitte eigene Projektbilder in den
jeweils gleichen Bildausschnitt (Fahrzeug vorher / dasselbe Fahrzeug
nachher) einsetzen, sonst wirkt der Vergleich nicht stimmig.

## Immobilien

| Status | Key | Einsatzort | Format |
|---|---|---|---|
| ✅ | `immo_betriebsgebaeude` | „Betriebsgebäude, Oberfranken" | 4:3 |
| ✅ | `immo_gewerbehalle` | „Gewerbehalle, Oberfranken" | 4:3 |
| ✅ | `immo_hohensaas` | „Ehemalige Autovermietung, Oberfranken" | 4:3 |
| ✅ | `immo_porto` | „Ferienhaus, Porto" | 4:3 |
| Platzhalter | `immo_schleizer` | „Umgebaute Tankstelle, Oberfranken" | 4:3 |
| Platzhalter | `immo_wien` | „Altbauwohnung, Wien" | 4:3 |

## Facility

| Status | Key | Einsatzort | Format |
|---|---|---|---|
| ✅ | `facility_fuhrpark` | Fuhrpark (Transporter + Anhänger) | 4:3 |
| ✅ | `facility_kehrmaschine` | Kehrmaschine im Einsatz | 4:3 |
| ✅ | `facility_maeharbeiten` | Aufsitzmäher | 4:3 |
| ✅ | `facility_gruenpflege` | Radlader, Grünschnitt | 4:3 |
| ✅ | `facility_winterdienst` | Radlader mit Schneeschild | 4:3 |
| ✅ | `facility_transport` | Fahrzeugtransport mit Anhänger | 4:3 |

## Hinweise für eigene Fotos

- Format: JPG (Fotos) oder PNG (falls Transparenz nötig), kein HEIC.
- Farbraum: sRGB.
- Lieber etwas größer liefern als angegeben - die Website skaliert
  automatisch herunter, aber nicht herauf.
- Querformat-Bilder (Hero, Kacheln) wirken am besten in guter, warmer
  Beleuchtung ohne Blitzlicht.
