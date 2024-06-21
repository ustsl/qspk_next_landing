import React from 'react';
import styles from './leadComponent.module.css'

export const LeadComponent = ({ children, scheme }: { children: React.ReactNode, scheme?: "white" }) => {

    return (
        <div className={`${styles.lead} ${scheme && styles.white}`} >
            {children}
        </div>
    )
}