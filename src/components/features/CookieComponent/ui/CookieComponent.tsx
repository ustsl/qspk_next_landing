'use client'

import translate from './cokkieComponent.translate.json'
import { useState, useEffect } from 'react'
import styles from './cookieComponent.module.css'
import { baseLanguages } from '@/types/baseTypes'

const POLICY_URL = 'https://app.qspk.me/policy.pdf'

export const CookieComponent = ({ lang }: { lang: baseLanguages }) => {
    const [isAccepted, setIsAccepted] = useState(false)
    const [ready, setReady] = useState(false)

    const t = (translate as Record<string, { text: string; linkText: string; button: string }>)[lang] ?? translate.en

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('qspkCookieAccepted2') === 'true'
        if (cookieAccepted) setIsAccepted(true)
        setReady(true)
    }, [])

    function onAcceptHandler() {
        localStorage.setItem('qspkCookieAccepted2', 'true')
        setIsAccepted(true)
    }

    if (isAccepted || !ready) return null

    return (
        <div className={styles.block}>
            <p className={styles.text}>
                {t.text}{' '}
                <a href={POLICY_URL} target="_blank" rel="noopener noreferrer">
                    {t.linkText}
                </a>
            </p>
            <button onClick={onAcceptHandler}>{t.button}</button>
        </div>
    )
}
