import styles from '../../styles/Players/PlayerData.module.scss';

import Edit from '../../Icons/Edit';
import Trash from '../../Icons/Trash';
import Refresh from '../../Icons/Refresh';
import X from '../../Icons/X';
import O from '../../Icons/O';

import PlayersButton from './PlayersButton';
import DefaultPlayers from './DefaultPlayers';

import { usePlayers } from '../../Contexts/PlayersContext';

export default function PlayerData() {
    const { players } = usePlayers();

    return (
        <article className={styles.container}>
            {players.map((player, key) => (
                <div key={key}>
                    <div className={styles.icons}>
                        <X color={player.color} />
                        <O color={player.color} />
                    </div>

                    <div className={styles.username}>{player.name}</div>
                    <div className={styles.colorSquare}>
                        <div style={{ background: player.color }}></div>{' '}
                        {player.color}
                    </div>

                    <div className={styles.actions}>
                        <PlayersButton>
                            <Edit /> Edit
                        </PlayersButton>

                        <PlayersButton>
                            <Trash /> Delete
                        </PlayersButton>

                        <PlayersButton>
                            <Refresh /> Reset
                        </PlayersButton>
                    </div>
                </div>
            ))}

            <DefaultPlayers />
        </article>
    );
}
