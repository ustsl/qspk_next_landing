'use client';

import styles from './languageButton.module.css';
import { ILanguageButton } from './languageButton.props';
import ruIcon from './img/ru.svg';
import enIcon from './img/en.svg';
import trIcon from './img/tr.svg';
import deIcon from './img/de.svg';

export const LanguageButton = ({ language, flagOnly, onClick }: ILanguageButton) => {
    let iconSrc, langText;

    switch (language) {
        case "ru":
            iconSrc = ruIcon;
            langText = "Русский";
            break;
        case "en":
            iconSrc = enIcon;
            langText = "English";
            break;
        case "tr":
            iconSrc = trIcon;
            langText = "Türkçe";
            break;
        case "de":
            iconSrc = deIcon;
            langText = "Deutsch";
            break;
        default:
            iconSrc = ruIcon;
            langText = "Русский";
            break;
    }

    return (
        <div className={styles.container} onClick={onClick}>

            {!flagOnly && langText}
        </div>
    );
};