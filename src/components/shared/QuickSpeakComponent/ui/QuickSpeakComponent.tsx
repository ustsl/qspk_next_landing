import { ColoredSectionContainer } from '../../ColoredSectionContainer';
import styles from './quickSpeakComponent.module.css';

export const QuickSpeakComponent = ({ quickId }: { quickId: string }) => {
    return (
        <ColoredSectionContainer color="dgrey">
            <div className={styles.quick}>
                <iframe src={`https://qsbot.app/${quickId}`} width="100%" ></iframe>
            </div>
        </ColoredSectionContainer>
    )
}