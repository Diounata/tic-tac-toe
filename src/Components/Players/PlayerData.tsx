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
    const { players, deletePlayer } = usePlayers();

    return (
        <article className={styles.container}>
            {players.map((player, key) => (
                <div key={key}>
                    <div className={styles.icons}>
                        <X color={player.color.hex} />
                        <O color={player.color.hex} />
                    </div>

                    <div className={styles.username}>{player.name}</div>
                    <div className={styles.colorSquare}>
                        <div style={{ background: player.color.hex }}></div>
                        {player.color.name}
                    </div>

                    <div className={styles.actions}>
                        <PlayersButton>
                            <Edit /> Edit
                        </PlayersButton>

                        <PlayersButton onClick={() => deletePlayer(key)}>
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
