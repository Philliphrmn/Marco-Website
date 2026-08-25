/**
 * Zentrale Kontaktdaten und sonstige Platzhalter.
 * Alle Werte hier ersetzen, sobald sie feststehen — siehe README.md.
 */
export const siteConfig = {
  telefon: '{{TELEFON}}',
  telefonAbschlepp: '{{TELEFON_ABSCHLEPP}}',
  // Format ohne führende Nullen/Zeichen, z.B. 4917xxxxxxx
  whatsapp: '{{WHATSAPP}}',
  email: '{{EMAIL}}',
  linkedinUrl: '{{LINKEDIN_URL}}',
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
