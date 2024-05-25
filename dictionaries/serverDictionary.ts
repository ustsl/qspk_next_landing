import 'server-only';
import type { Locale } from '../../i18n.config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  tr: () => import('@/dictionaries/tr.json').then(module => module.default),
  ru: () => import('@/dictionaries/ru.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => {
  const getDictFunction = dictionaries[locale] || dictionaries['en'];
  return getDictFunction();
};
