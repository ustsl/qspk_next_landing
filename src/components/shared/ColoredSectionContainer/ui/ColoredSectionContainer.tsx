import { baseColors } from '@/types/baseTypes'
import styles from './coloredSectionContainer.module.css'

type Props = {
    children: React.ReactNode
    color: baseColors
}

export const ColoredSectionContainer = ({ children, color }: Props) => {
    const colorClassMap: Record<baseColors, string> = {
        accent: styles.accent,
        lgrey: styles.lgrey,
        dgrey: styles.dgrey,
        bgrey: styles.bgrey,
        black: styles.black,
        white: styles.white,
    }

    return (
        <section className={`${styles.component} ${colorClassMap[color]}`}>
            <div className={styles.block}>{children}</div>
        </section>
    )
}
