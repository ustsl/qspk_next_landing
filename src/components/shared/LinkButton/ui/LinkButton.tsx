import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './linkButton.module.css';
import Link from "next/link"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export const LinkButton = ({ href, text }: { href: string, text: string, }) => {

    return (
        <Link href={href} className={styles.button} target='new'>{text}
            <FontAwesomeIcon icon={faArrowRight} width={30} height={30} /></Link>
    )
}