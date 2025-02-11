import styles from './about.module.css'

import { ColoredSectionContainer } from "@/components/shared/ColoredSectionContainer"
import { LeadComponent } from "@/components/shared/LeadComponent"
import { baseLanguages } from '@/types/baseTypes'

import { getDictionary } from '../../../../../dictionaries/clientDictionary'


export const About = ({ lang }: { lang: baseLanguages }) => {
    const { about, final } = getDictionary(lang)
    return (
        <div>
            <ColoredSectionContainer color="lgrey">

                <div className={styles.block}>
                    <LeadComponent>
                        <h2 dangerouslySetInnerHTML={{ __html: about.title }} />
                    </LeadComponent>
                </div>

            </ColoredSectionContainer >

            <ColoredSectionContainer color={'accent'}>
                <div className={styles.block}>
                    <LeadComponent>
                        <h2 dangerouslySetInnerHTML={{ __html: final.title }} />
                    </LeadComponent>
                </div>
            </ColoredSectionContainer>
        </div>
    )
}