import styles from './footerComponent.module.css';
import logo from './logo.svg'
import Link from 'next/link';
import { LogoComponent } from '@/components/shared/LogoComponent';
import { AdaptiveImageContainer } from '@/components/shared/AdaptiveImageContainer';


export const FooterComponent = () => {
    return (

        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <AdaptiveImageContainer image={logo} width={138} height={123} alt="Quickspeak" />
                    </div>
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