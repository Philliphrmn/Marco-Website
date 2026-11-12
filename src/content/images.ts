/**
 * Alle Bilder der Seite. Die Dateien liegen in src/assets/images/ und werden
 * beim Build automatisch verkleinert, in WebP umgewandelt und von
 * Metadaten (z. B. GPS) befreit.
 *
 * Bild austauschen: neue Datei unter gleichem Namen in src/assets/images/
 * ablegen. Abschnittsbilder am besten im Querformat 4:3.
 *
 * Herkunft:
 *  - automobile.jpg  Unsplash, photo-1542317048-7a6ce1a438c8 (Unsplash-Lizenz)
 *  - immobilien.jpg  Unsplash, photo-1788633227011-e4d0396cd052 (Unsplash-Lizenz, zugeschnitten)
 *  - alle übrigen: eigene Fotos
 */
import portrait from '../assets/images/portrait.jpg';
import werkstatt from '../assets/images/werkstatt.jpg';
import automobile from '../assets/images/automobile.jpg';
import immobilien from '../assets/images/immobilien.jpg';
import facility from '../assets/images/facility.jpg';

export const images = { portrait };

/** Ein Bild pro Abschnitt, Schlüssel = `id` des Abschnitts in de.json/en.json. */
export const sectionImages: Record<string, ImageMetadata> = {
  werkstatt,
  automobile,
  immobilien,
  facility,
};
