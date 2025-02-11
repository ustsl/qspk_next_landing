import type { Locale } from '../i18n.config'

import en from './en.json';
import ru from './ru.json';
import tr from './tr.json';
import de from './de.json';

const dictionaries = {
    en,
    ru,
    tr,
    de
}

export const getDictionary = (locale: Locale) => dictionaries[locale];
