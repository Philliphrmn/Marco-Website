import de from '../content/de.json';
import en from '../content/en.json';

export const languages = ['de', 'en'] as const;
export type Lang = (typeof languages)[number];

const dictionaries = { de, en } satisfies Record<Lang, typeof de>;

export function getContent(lang: Lang) {
  return dictionaries[lang];
}

/** Sprachpräfixierter Pfad, z. B. path('de') -> '/de/', path('de', 'impressum') -> '/de/impressum' */
export function path(lang: Lang, slug = ''): string {
  return `/${lang}/${slug}`;
}
