import styles from './logoComponent.module.css'
import icon from './logo.svg'

import Link from 'next/link'
import Image from 'next/image'

export const LogoComponent = () => {
    return (
        <Link className={styles.block} href="/">
            <Image src={icon} width={200} height={80} alt={'Quickspeak logo. Landing bot builder'} />
        </Link>

    )
}