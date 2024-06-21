import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './linkButton.module.css';
import Link from "next/link"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export const LinkButton = ({ href, text, scheme }: { href: string, text: string, scheme?: "white" }) => {

    return (
        <Link href={href} className={`${styles.button} ${scheme && styles.white}`} target='new'>{text}
            <FontAwesomeIcon icon={faArrowRight} width={30} height={30} />
        </Link>
    )
}