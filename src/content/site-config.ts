/**
 * Zentrale Kontaktdaten und sonstige Platzhalter.
 * Alle Werte hier ersetzen, sobald sie feststehen - siehe README.md.
 */
export const siteConfig = {
  telefon: '+491708153033',
  telefonAbschlepp: '{{TELEFON_ABSCHLEPP}}',
  // Format ohne führende Nullen/Zeichen, z.B. 4917xxxxxxx
  whatsapp: '+491708153033',
  email: 'Marco.herrmann@kfz-herrmann-hof.de',
  linkedinUrl: 'https://www.linkedin.com/in/marco-herrmann-664294a9/',
  fmFirmenname: '{{FM_FIRMENNAME}}',
  werkstattSeit: '{{WERKSTATT_SEIT}}',
};

export function isPlaceholder(value: string): boolean {
  return value.startsWith('{{') && value.endsWith('}}');
}

export function telHref(value: string): string {
  return `tel:${value.replace(/[^+\d]/g, '')}`;
}

export function whatsappHref(value: string): string {
  return `https://wa.me/${value.replace(/\D/g, '')}`;
}

export function mailHref(value: string): string {
  return `mailto:${value}`;
}
