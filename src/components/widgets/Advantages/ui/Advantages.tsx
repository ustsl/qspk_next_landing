import styles from './advantages.module.css'

import { CardComponent } from "@/components/shared/CardComponent"
import { ColoredSectionContainer } from "@/components/shared/ColoredSectionContainer"
import { LeadComponent } from "@/components/shared/LeadComponent"
import { LinkButton } from '@/components/shared/LinkButton'
import { baseLanguages } from '@/types/baseTypes'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDictionary } from '../../../../../dictionaries/clientDictionary'


export const Advantages = ({ lang }: { lang: baseLanguages }) => {
    const { advantages, final } = getDictionary(lang)
    return (
        <div>
            <ColoredSectionContainer color="lgrey">

                <div className={styles.block}>
                    <LeadComponent>
                        <h2 dangerouslySetInnerHTML={{ __html: advantages.title }} />
                    </LeadComponent>


                </div>

            </ColoredSectionContainer >
            <div className={styles.black}>
                <div className={styles.flex}>
                    <CardComponent
                        content={advantages.ad1}
                    />
                    <CardComponent
                        content={advantages.ad2}
                    />
                    <CardComponent
                        content={advantages.ad3}
                    />
                </div>
            </div>
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