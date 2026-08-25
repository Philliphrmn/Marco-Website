/**
 * Zentrale Bildverwaltung.
 *
 * Aktuell zeigen alle Einträge auf lizenzfreie Unsplash-Platzhalter, damit
 * die Seite von Anfang an hochwertig aussieht. Marco ersetzt sie Stück für
 * Stück durch eigene Aufnahmen:
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
  // Ziel: public/images/hero-marco-herrmann.jpg · Seitenverhältnis 3:2 · min. 1920px breit
  hero: {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop',
    width: 1920,
    height: 1280,
  },

  // Ziel: public/images/portrait-marco-herrmann.jpg · Seitenverhältnis 4:5 · min. 900px breit
  portrait: {
    src: 'https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 1250,
  },

  // Ziel: public/images/tile-werkstatt.jpg · Seitenverhältnis 4:3 · min. 1200px breit
  tile_werkstatt: {
    src: 'https://images.unsplash.com/photo-1786489623043-fb024ae22e82?q=80&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 900,
  },

  // Ziel: public/images/tile-automobile.jpg · Seitenverhältnis 4:3 · min. 1200px breit
  tile_automobile: {
    src: 'https://images.unsplash.com/photo-1712129009070-97da6756d55b?q=80&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 900,
  },

  // Ziel: public/images/tile-immobilien.jpg · Seitenverhältnis 4:3 · min. 1200px breit
  tile_immobilien: {
    src: 'https://images.unsplash.com/photo-1764416166529-99edb0e405a6?q=80&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 900,
  },

  // Ziel: public/images/tile-facility.jpg · Seitenverhältnis 4:3 · min. 1200px breit
  tile_facility: {
    src: 'https://images.unsplash.com/photo-1630311853242-edd0c07766c0?q=80&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 900,
  },
} satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof images;
