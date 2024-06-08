import styles from './footerComponent.module.css';

import Link from 'next/link';
import { LogoComponent } from '@/components/shared/LogoComponent';
import { ColoredSectionContainer } from '@/components/shared/ColoredSectionContainer';

export const FooterComponent = () => {
    return (

        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <LogoComponent />
                </div>

                <div className={styles.column}>
                    <Link href="https://qsbot.app/ustsl">DEV</Link>
                </div>

                <div className={styles.column}>
                    <Link href="https://qsbot.app/policy.pdf">Privacy Policy</Link>
                    <Link href="mailto:quickspeakme@gmail.com">quickspeakme@gmail.com</Link>
                </div>
            </div>
        </footer>

    )
}