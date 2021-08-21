import styles from '@styles/History/History.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';

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
                    <div>
                        {String(i.duration.hour).padStart(2, '0')}:{String(i.duration.min).padStart(2, '0')}:
                        {String(i.duration.sec).padStart(2, '0')}
                    </div>
                </div>
            ))}
        </div>
    );
}
