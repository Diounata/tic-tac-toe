import styles from '@styles/Players/PlayerData.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';
import XCircle from '@Icons/XCircle';

import { usePlayers } from '@Contexts/PlayersContext';

export default function PlayerData() {
    const { players } = usePlayers();

    const defaultPlayers = players.filter(p => p.name === 'Player X' || p.name === 'Player O');

    return (
        <>
            {defaultPlayers.map((p, key) => (
                <div key={key}>
                    <div className={styles.icons}>
                        {p.name === 'Player X' ? <X /> : <O />}
                    </div>

                    <div className={styles.username}>{p.name}</div>
                    <div className={styles.colorSquare}>
                        <div style={{ background: p.color.hex }}></div> {p.color.name}
                    </div>
                    <div>
                        <XCircle />
                    </div>
                </div>
            ))}
        </>
    );
}
