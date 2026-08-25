import de from '../content/de.json';
import en from '../content/en.json';

export const languages = ['de', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'de';

const dictionaries = { de, en } satisfies Record<Lang, typeof de>;

export function getContent(lang: Lang) {
  return dictionaries[lang];
}

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}

/** Baut einen sprachpräfixierten Pfad, z.B. path('de', 'werkstatt') -> '/de/werkstatt' */
export function path(lang: Lang, slug = ''): string {
  return `/${lang}/${slug}`.replace(/\/+$/, '') || `/${lang}`;
}
