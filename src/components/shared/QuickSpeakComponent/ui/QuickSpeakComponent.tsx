import { ColoredSectionContainer } from '../../ColoredSectionContainer';
import styles from './quickSpeakComponent.module.css';

export const QuickSpeakComponent = ({ quickId }: { quickId: string }) => {
    return (
        <ColoredSectionContainer color="lgrey">
            <div className={styles.quick}>
                <iframe src={`https://qsbot.app/${quickId}`} height="600" width="100%" ></iframe>
            </div>
        </ColoredSectionContainer>
    )
}