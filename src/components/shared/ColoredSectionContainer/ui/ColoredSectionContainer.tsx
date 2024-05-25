import { baseColors } from '@/types/baseTypes'
import styles from './coloredSectionContainer.module.css'

export const ColoredSectionContainer = ({ children, color }: { children: React.ReactNode, color: baseColors }) => {
    return (
        <section className={styles.component} style={{ '--component-bg-color': `var(--${color})` } as React.CSSProperties}>
            <div className={styles.block}>
                {children}
            </div>
        </section>
    )
}
