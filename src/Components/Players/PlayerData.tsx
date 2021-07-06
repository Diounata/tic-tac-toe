import styles from '../../styles/Players/PlayerData.module.scss';

import X from '../../Icons/X';
import O from '../../Icons/O';

import PlayersButton from './PlayersButton';
import { usePlayers } from '../../Contexts/PlayersContext';

export default function PlayerData() {
    const { players } = usePlayers();

    return (
        <article className={styles.container}>
            {players.map(player => (
                <div>
                    <div className={styles.icons}>
                        <X />
                        <O />
                    </div>

                    <div className={styles.username}>{player.name}</div>

                    <div className={styles.actions}>
                        <PlayersButton>Edit</PlayersButton>
                        <PlayersButton>Delete</PlayersButton>
                        <PlayersButton>Reset</PlayersButton>
                    </div>
                </div>
            ))}
        </article>
    );
}
