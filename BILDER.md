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
| ✅ | `portrait` | `portrait-marco-herrmann.jpg` | Startseite, „Über mich" | 4:5 | - |
| ✅ | `tile_werkstatt` | `werkstatt-showroom.jpg` | Kachel „Kfz-Service" | 4:3 | - |
| ✅ | `tile_automobile` | `automobile-sammlung.jpg` | Kachel „Automobile" | 4:3 | - |
| ✅ | `tile_immobilien` | `immobilien-gewerbehalle.jpg` | Kachel „Immobilien" | 21:10 | - |
| ✅ | `tile_facility` | `facility-transport.jpg` | Kachel „Facility Management" | 4:3 | - |

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
| Stockfoto (bewusst) | `automobile_sammlung` | Eigene Sammlung, Fahrzeug unter Abdeckung | 8:5 |
| ✅ | `automobile_restaurierung_fahrwerk` | Restaurierung: Fahrwerk/Rahmen | 4:3 |
| ✅ | `automobile_restaurierung_motor` | Restaurierung: Motor auf dem Ständer | 4:3 |
| ✅ | `automobile_restaurierung_einbau` | Restaurierung: Motor-/Achseinbau | 4:3 |
| ✅ | `automobile_restaurierung_detail` | Restaurierung: Bremse/Radnabe im Detail | 4:3 |
| ✅ | `automobile_sls` | Fahrzeughandel: SLS auf dem Anhänger | 4:3 |
| Stockfoto (bewusst) | `automobile_gt2rs` | Fahrzeughandel: Porsche 911 GT2 RS | 4:3 |

Hinweis zu `automobile_sammlung`: Auf Wunsch bewusst ein lizenzfreies,
stimmungsvolles Stockfoto (Unsplash) eines abgedeckten Fahrzeugs statt des
eigenen Übersichtsfotos vom Depot - für den gewünschten "geheimnisvollen"
Look. Das echte Depotfoto bleibt unter `tile_automobile` (Startseiten-Kachel)
im Einsatz.

Hinweis zu `automobile_gt2rs`: Auf Wunsch bewusst ein lizenzfreies Stockfoto
(Unsplash) statt eines eigenen Fotos - kein Handlungsbedarf, außer ein
eigenes Foto eines gehandelten Exoten soll später eingesetzt werden.

Hinweis: Die frei erfundenen Vorher/Nachher-Restaurierungsgeschichten wurden
entfernt, da es dafür keine echte Dokumentation gab. Die Seite zeigt jetzt
nur noch echte Fotos aus der eigenen Sammlung und vom Fahrzeughandel. Weitere
eigene Fotos (z. B. von weiteren Fahrzeugen aus der Sammlung oder
abgeschlossenen Verkäufen) können bei Bedarf ergänzt werden.

## Immobilien

| Status | Key | Einsatzort | Format |
|---|---|---|---|
| ✅ | `immo_betriebsgebaeude` | „Betriebsgebäude, Oberfranken" | 4:3 |
| ✅ | `immo_gewerbehalle` | „Gewerbehalle, Oberfranken" | 4:3 |
| ✅ | `immo_hohensaas` | „Ehemalige Autovermietung, Oberfranken" | 4:3 |
| Stockfoto (bewusst) | `immo_porto` | „Ferienhaus, Porto" | 4:3 |
| ✅ | `immo_schleizer` | „Umgebaute Tankstelle, Oberfranken" | 4:3 |
| Platzhalter | `immo_wien` | „Altbauwohnung, Wien" | 4:3 |

Hinweis zu `immo_porto`: Auf Wunsch bewusst ein generisches Porto-Stockfoto
statt eines eigenen Fotos - kein Handlungsbedarf, außer ein eigenes Foto vom
Ferienhaus soll später eingesetzt werden.

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
