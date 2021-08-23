import styles from '@styles/History/History.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';
import formatTime from '@utils/timeFormat';

import ColorSquare from '@Components/History/ColorSquare';

import { usePlayers } from '@Contexts/PlayersContext';

export default function HistoryData() {
    const { history } = usePlayers();

    return (
        <div className={styles.historyItemContainer}>
            {history.map((i, key) => (
                <div className={styles.historyItem} key={key}>
                    <div className={styles.username}>
                        <X color={i.x.color} /> {i.x.name}
                    </div>
                    <div className={styles.situation}>
                        <ColorSquare situation={i.x.situation} /> {i.x.situation}
                    </div>
                    <div className={styles.username}>
                        <O color={i.o.color} /> {i.o.name}
                    </div>
                    <div className={styles.situation}>
                        <ColorSquare situation={i.o.situation} /> {i.o.situation}
                    </div>
                    <div>{formatTime(i.duration)}</div>
                </div>
            ))}
        </div>
    );
}
