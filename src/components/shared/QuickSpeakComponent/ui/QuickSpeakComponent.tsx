import { baseLanguages } from '@/types/baseTypes';
import styles from './quickSpeakComponent.module.css';

type QuickSpeakComponentProps = {
    lang: baseLanguages;
    quickId: string;
    title: string;
    buttonLabel: string;
    subtitle?: string;
};

export const QuickSpeakComponent = ({
    lang,
    quickId,
    title,
    buttonLabel,
    subtitle,
}: QuickSpeakComponentProps) => {
    const iframeSrc = `https://app.qspk.me/${quickId}`;

    return (
        <section className={styles.wrapper} data-lang={lang} aria-live="polite">
            <div className={styles.content}>
                {subtitle && (
                    <p
                        className={styles.subtitle}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                )}
                <h1
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <a
                    className={styles.cta}
                    href="https://account.qspk.me"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{buttonLabel}</span>
                </a>
            </div>

            <div className={styles.preview}>
                <div className={styles.iframeShell}>
                    <iframe
                        key={quickId}
                        title={`QuickSpeak preview ${lang}`}
                        src={iframeSrc}
                        loading="lazy"
                        className={styles.iframe}
                        allow="clipboard-write"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
