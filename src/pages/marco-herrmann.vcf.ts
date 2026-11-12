import type { APIRoute } from 'astro';
import { siteConfig } from '../content/site-config';

/**
 * Digitale Visitenkarte (vCard 3.0). Wird beim Build als statische Datei
 * /marco-herrmann.vcf erzeugt; Smartphones bieten beim Öffnen direkt
 * "Kontakt hinzufügen" an.
 */
export const GET: APIRoute = () => {
  const { name, telefon, email, linkedinUrl, adresse } = siteConfig;
  const [vorname, ...rest] = name.split(' ');
  const nachname = rest.join(' ');

  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${nachname};${vorname};;;`,
    `FN:${name}`,
    `TEL;TYPE=CELL:${telefon.replace(/\s/g, '')}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `ADR;TYPE=WORK:;;${adresse.strasse};${adresse.ort};;${adresse.plz};${adresse.land}`,
    `URL:${linkedinUrl}`,
    'END:VCARD',
  ].join('\r\n');

  return new Response(vcard, {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
