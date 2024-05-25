
import styles from './header.module.css'

import { LanguageSwitcher } from '@/components/features/LanguageSwitcher'
import { HeaderLogo } from './components/HeaderLogo'
import { ColoredSectionContainer } from '@/components/shared/ColoredSectionContainer'
import { LeadComponent } from '@/components/shared/LeadComponent'
import { baseLanguages } from '@/types/baseTypes'
import { getDictionary } from '../../../../../dictionaries/clientDictionary'


export const HeaderComponent = ({ lang }: { lang: baseLanguages }) => {
    const { header } = getDictionary(lang)
    return (
        <ColoredSectionContainer color="accent">
            <div className={styles.lang}>
                <LanguageSwitcher />
            </div>
            <LeadComponent>
                <div className={styles.logo}>
                    <HeaderLogo />
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: header.title }} />
            </LeadComponent>

        </ColoredSectionContainer>
    )
}