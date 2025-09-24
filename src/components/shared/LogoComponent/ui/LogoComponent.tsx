import styles from './logoComponent.module.css'
import icon from './logo.svg'

import Link from 'next/link'
import Image from 'next/image'

export const LogoComponent = () => {
    return (
        <div className={styles.block}>
            <Image src={icon} width={300} alt={'Quickspeak logo. Landing bot builder'} />
        </div>

    )
}