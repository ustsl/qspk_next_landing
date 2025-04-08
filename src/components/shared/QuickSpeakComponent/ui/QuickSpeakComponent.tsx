import { baseLanguages } from '@/types/baseTypes';
import { ColoredSectionContainer } from '../../ColoredSectionContainer';
import { LeadComponent } from '../../LeadComponent';
import { LinkButton } from '../../LinkButton';
import styles from './quickSpeakComponent.module.css';
import { getDictionary } from '../../../../../dictionaries/clientDictionary'

export const QuickSpeakComponent = ({ quickId, lang }: { quickId: string, lang: baseLanguages }) => {

    const { quickspeak } = getDictionary(lang)
    return (
        <ColoredSectionContainer color="black">
            <div className={styles.flex}>
                <div className={styles.about}>
                    <LeadComponent scheme="white">
                        <h1 dangerouslySetInnerHTML={{ __html: quickspeak.title }} className={styles.title} />
                    </LeadComponent>
                    <LinkButton href={'https://account.qspk.me'} text={quickspeak.button} scheme="white" />
                </div>

                <div className={styles.quick}>
                    <iframe src={`https://qsbot.app/${quickId}`} width="100%" ></iframe>
                </div>
            </div>
        </ColoredSectionContainer>
    )
}