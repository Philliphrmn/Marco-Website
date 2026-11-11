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

  // --- Automobile: Eigene Sammlung ---

  // Stockfoto (bewusst): Fahrzeug unter Abdeckung in dunkler Tiefgarage, Unsplash-Lizenz
  automobile_sammlung: {
    src: 'https://images.unsplash.com/photo-1542317048-7a6ce1a438c8?q=80&w=1400&auto=format&fit=crop',
    width: 1400,
    height: 875,
  },

  // --- Automobile: Restaurierung (Impressionen aus laufenden Projekten) ---

  // Echtes Foto: frisch aufgebautes Fahrwerk/Rahmen
  automobile_restaurierung_fahrwerk: {
    src: '/images/automobile-restaurierung-fahrwerk.jpg',
    width: 1800,
    height: 1350,
  },
  // Echtes Foto: überholter Motor auf dem Motorständer
  automobile_restaurierung_motor: {
    src: '/images/automobile-restaurierung-motor.jpg',
    width: 1800,
    height: 1350,
  },
  // Echtes Foto: Motor-/Achseinheit beim Einbau
  automobile_restaurierung_einbau: {
    src: '/images/automobile-restaurierung-einbau.jpg',
    width: 1800,
    height: 1350,
  },
  // Echtes Foto: Bremse/Radnabe in Detailansicht während der Montage
  automobile_restaurierung_detail: {
    src: '/images/automobile-restaurierung-detail.jpg',
    width: 1800,
    height: 1350,
  },

  // --- Automobile: Fahrzeughandel ---

  // Echtes Foto: Mercedes-AMG SLS beim Transport auf dem Anhänger
  automobile_sls: {
    src: '/images/automobile-sls-fluegeltueren.jpg',
    width: 2400,
    height: 1350,
  },
  // Stockfoto (bewusst): Porsche 911 GT2 RS - Beispiel für den Exoten-Handel, Unsplash-Lizenz
  automobile_gt2rs: {
    src: 'https://images.unsplash.com/photo-1747077138170-dbd888b209d4?q=80&w=1200&h=900&auto=format&fit=crop',
    width: 1200,
    height: 900,
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
