/**
 * Zentrale Kontaktdaten. Werden für Kontakt-Buttons, Impressum und die
 * herunterladbare Visitenkarte (vCard) verwendet.
 */
export const siteConfig = {
  name: 'Marco Herrmann',
  telefon: '+49 170 8153033',
  whatsapp: '+49 170 8153033',
  email: 'Marco.herrmann@kfz-herrmann-hof.de',
  linkedinUrl: 'https://www.linkedin.com/in/marco-herrmann-664294a9/',
  adresse: {
    strasse: 'Hofer Str. 45',
    plz: '95183',
    ort: 'Zedwitz',
    land: 'Deutschland',
  },
};

export const telHref = (value: string) => `tel:${value.replace(/[^+\d]/g, '')}`;
export const whatsappHref = (value: string) => `https://wa.me/${value.replace(/\D/g, '')}`;
export const mailHref = (value: string) => `mailto:${value}`;

const { strasse, plz, ort } = siteConfig.adresse;
/** Öffnet die Adresse in Google Maps (auf dem Handy in der Karten-App). */
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${strasse}, ${plz} ${ort}`)}`;
