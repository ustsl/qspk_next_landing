import React from 'react';
import styles from './leadComponent.module.css'

export const LeadComponent = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className={styles.lead} >
            {children}
        </div>
    )
}