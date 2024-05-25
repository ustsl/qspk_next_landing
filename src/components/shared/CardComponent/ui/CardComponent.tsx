import Image from 'next/image';

import classNames from 'classnames';
import styles from './cardComponent.module.css'
import item from './item.svg'

export const CardComponent =
    ({ content }: { content: string }) => {



        return (
            <div className={styles.card} >
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <Image src={item} width={50} height={30} alt="Landing bot builder" className={styles.item} />
            </div>
        )
    }