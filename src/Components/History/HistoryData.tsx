import styles from '@styles/History/History.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';
import formatTime from '@utils/timeFormat';

import ColorSquare from '@Components/History/ColorSquare';

import { usePlayers } from '@Contexts/PlayersContext';

export default function HistoryData() {
    const { history } = usePlayers();

    return (
        <>
            {history.map((i, key) => (
                <div className={styles.historyItem} key={key}>
                    <header>
                        <span>#{key + 1}</span>

                        <small>{formatTime(i.duration)}</small>
                    </header>

                    <main>
                        <article>
                            <div className={styles.username}>
                                <X color={i.x.color} /> {i.x.name}
                            </div>

                            <div className={styles.situation}>
                                {i.x.situation} <ColorSquare situation={i.x.situation} />
                            </div>
                        </article>

                        <article>
                            <div className={styles.username}>
                                <O color={i.o.color} /> {i.o.name}
                            </div>

                            <div className={styles.situation}>
                                {i.o.situation} <ColorSquare situation={i.o.situation} />
                            </div>
                        </article>
                    </main>
                </div>
            ))}
        </>
    );
}
