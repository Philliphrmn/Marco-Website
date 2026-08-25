/**
 * Zentrale Bildverwaltung.
 *
 * Ein Teil der Bilder sind bereits echte Aufnahmen von Marco (liegen in
 * public/images/). Die restlichen Einträge zeigen weiterhin auf lizenzfreie
 * Unsplash-Platzhalter. Diese ersetzt Marco Stück für Stück:
 *
 *   1. Eigenes Bild unter dem in den Kommentaren genannten Dateinamen in
 *      public/images/ ablegen (Seitenverhältnis und Mindestbreite beachten).
 *   2. `src` unten auf `/images/<dateiname>` ändern.
 *
 * Die vollständige Checkliste steht in BILDER.md im Projekt-Root.
 */

type ImageEntry = {
  src: string;
  width: number;
  height: number;
};

export const images = {
  // Echtes Foto: Mercedes-AMG GT Black Series
  hero: {
    src: '/images/hero-marco-herrmann.jpg',
    width: 736,
    height: 1308,
  },

  // Echtes Foto: Portrait von Marco Herrmann
  portrait: {
    src: '/images/portrait-marco-herrmann.jpg',
    width: 1122,
    height: 1402,
  },

  // Echtes Foto: Mercedes-AMG Showroom
  tile_werkstatt: {
    src: '/images/werkstatt-showroom.jpg',
    width: 2400,
    height: 1800,
  },

  // Echtes Foto: eigene Sammlung klassischer Mercedes im Depot
  tile_automobile: {
    src: '/images/automobile-sammlung.jpg',
    width: 2400,
    height: 1800,
  },

  // Echtes Foto: Gewerbehalle zur goldenen Stunde
  tile_immobilien: {
    src: '/images/immobilien-gewerbehalle.jpg',
    width: 2400,
    height: 1163,
  },

  // Echtes Foto: G-Klasse mit Radlader auf dem Anhänger
  tile_facility: {
    src: '/images/facility-transport.jpg',
    width: 2400,
    height: 1800,
  },

  // --- Werkstatt ---

  // Echtes Foto: Werkstatthalle mit mehreren Mercedes-AMG
  werkstatt_halle: {
    src: '/images/werkstatt-halle.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Fahrzeug auf der Hebebühne
  werkstatt_hebebuehne: {
    src: '/images/werkstatt-hebebuehne.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Motorraum-Detail
  werkstatt_detail: {
    src: '/images/werkstatt-detail.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Betriebsgebäude (silber verkleidet)
  werkstatt_standort: {
    src: '/images/werkstatt-standort.jpg',
    width: 2370,
    height: 1719,
  },

  // --- Automobile: Restaurierungen (Vorher/Nachher-Paare) ---

  // Ziel: public/images/restauration-01-vorher.jpg · Seitenverhältnis 3:2 · min. 1200px breit
  restauration_01_vorher: {
    src: 'https://images.unsplash.com/photo-1778798323804-2b4404ec93b5?q=80&w=1200&h=800&auto=format&fit=crop',
    width: 1200,
    height: 800,
  },
  // Ziel: public/images/restauration-01-nachher.jpg · Seitenverhältnis 3:2 · min. 1200px breit
  restauration_01_nachher: {
    src: 'https://images.unsplash.com/photo-1661297663391-8e01b41c8b7f?q=80&w=1200&h=800&auto=format&fit=crop',
    width: 1200,
    height: 800,
  },
  // Ziel: public/images/restauration-02-vorher.jpg · Seitenverhältnis 3:2 · min. 1200px breit
  restauration_02_vorher: {
    src: 'https://images.unsplash.com/photo-1779588008640-d15ce5089649?q=80&w=1200&h=800&auto=format&fit=crop',
    width: 1200,
    height: 800,
  },
  // Ziel: public/images/restauration-02-nachher.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  restauration_02_nachher: {
    src: 'https://images.unsplash.com/photo-1596463097767-79a39851a776?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  // Ziel: public/images/restauration-03-vorher.jpg · Seitenverhältnis 3:2 · min. 1200px breit
  restauration_03_vorher: {
    src: 'https://images.unsplash.com/photo-1591278169757-deac26e49555?q=80&w=1200&h=800&auto=format&fit=crop',
    width: 1200,
    height: 800,
  },
  // Ziel: public/images/restauration-03-nachher.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  restauration_03_nachher: {
    src: 'https://images.unsplash.com/photo-1778274888822-92821e754c8c?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  // Ziel: public/images/restauration-04-vorher.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  restauration_04_vorher: {
    src: 'https://images.unsplash.com/photo-1610092708835-af669294f3f3?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  // Ziel: public/images/restauration-04-nachher.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  restauration_04_nachher: {
    src: 'https://images.unsplash.com/photo-1772223641450-09467b9d2281?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },

  // --- Automobile: Schmuckstücke ---

  // Ziel: public/images/schmuckstueck-01.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  schmuckstueck_01: {
    src: 'https://images.unsplash.com/photo-1748172215389-cc4691924dbd?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  // Echtes Foto: Sammlung eigener Klassiker
  schmuckstueck_02: {
    src: '/images/automobile-sammlung.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Mercedes-AMG SLS mit Flügeltüren
  schmuckstueck_03: {
    src: '/images/automobile-sls-fluegeltueren.jpg',
    width: 2400,
    height: 1350,
  },
  // Ziel: public/images/schmuckstueck-04.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  schmuckstueck_04: {
    src: 'https://images.unsplash.com/photo-1756239772909-ef56b58e5f65?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  // Ziel: public/images/schmuckstueck-05.jpg · Seitenverhältnis 1:1 · min. 1200px breit
  schmuckstueck_05: {
    src: 'https://images.unsplash.com/photo-1610391546422-1c9bb059d7f7?q=80&w=1200&h=1200&auto=format&fit=crop',
    width: 1200,
    height: 1200,
  },
  // Ziel: public/images/schmuckstueck-06.jpg · Seitenverhältnis 4:5 (Hochformat) · min. 1200px breit
  schmuckstueck_06: {
    src: 'https://images.unsplash.com/photo-1645783666828-d6ed6202dd08?q=80&w=1200&h=1500&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },

  // --- Immobilien ---

  // Echtes Foto: Panorama der Gewerbehalle (Cover-Bild)
  immo_cover: {
    src: '/images/immobilien-cover.jpg',
    width: 2362,
    height: 672,
  },
  // Echtes Foto: Betriebsgebäude, silber verkleidet
  immo_betriebsgebaeude: {
    src: '/images/immobilien-betriebsgebaeude.jpg',
    width: 2370,
    height: 1719,
  },
  // Echtes Foto: Gewerbehalle mit weißer Fassade
  immo_gewerbehalle: {
    src: '/images/immobilien-gewerbehalle.jpg',
    width: 2400,
    height: 1163,
  },
  // Echtes Foto: ehemalige Autovermietung
  immo_hohensaas: {
    src: '/images/immobilien-hohensaas.jpg',
    width: 2400,
    height: 1800,
  },
  // Generisches Porto-Stockfoto (Ribeira-Ufer) - Ziel: public/images/immobilien-porto.jpg · 4:3 · min. 1200px
  immo_porto: {
    src: 'https://images.unsplash.com/photo-1770386085279-d28710f23aaf?q=80&w=1200&h=900&auto=format&fit=crop',
    width: 1200,
    height: 900,
  },
  // Echtes Foto: ehemaliges Autohaus (heute Küchenstudio)
  immo_schleizer: {
    src: '/images/immobilien-schleizer.jpg',
    width: 2400,
    height: 1270,
  },
  // Ziel: public/images/immobilien-wien.jpg · Seitenverhältnis 4:3 · min. 1200px breit
  immo_wien: {
    src: 'https://images.unsplash.com/photo-1779072053716-940abb4e21db?q=80&w=1200&h=900&auto=format&fit=crop',
    width: 1200,
    height: 900,
  },

  // --- Facility ---

  // Echtes Foto: Fuhrpark (Transporter mit Anhänger und Minibagger)
  facility_fuhrpark: {
    src: '/images/facility-fuhrpark.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Kehrmaschine im Einsatz
  facility_kehrmaschine: {
    src: '/images/facility-kehrmaschine.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Aufsitzmäher
  facility_maeharbeiten: {
    src: '/images/facility-maeharbeiten.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Radlader bei Grünschnittarbeiten
  facility_gruenpflege: {
    src: '/images/facility-gruenpflege.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Radlader mit Schneeschild
  facility_winterdienst: {
    src: '/images/facility-winterdienst.jpg',
    width: 2400,
    height: 1800,
  },
  // Echtes Foto: Fahrzeugtransport mit Anhänger
  facility_transport: {
    src: '/images/facility-transport.jpg',
    width: 2400,
    height: 1800,
  },
} satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof images;
