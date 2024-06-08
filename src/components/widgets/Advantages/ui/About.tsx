import styles from './about.module.css'

import { ColoredSectionContainer } from "@/components/shared/ColoredSectionContainer"
import { LeadComponent } from "@/components/shared/LeadComponent"
import { LinkButton } from '@/components/shared/LinkButton'
import { baseLanguages } from '@/types/baseTypes'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                        <LinkButton href={'https://qsbot.app'} text={final.button} />
                        <div className={styles.next}>
                            <p>{final.down}</p>
                            <FontAwesomeIcon icon={faArrowDown} width={30} height={30} />
                        </div>
                    </LeadComponent>
                </div>
            </ColoredSectionContainer>
        </div>
    )
}