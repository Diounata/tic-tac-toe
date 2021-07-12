import styles from '../../styles/Leaderboard/PlayerData.module.scss';

import X from '../../Icons/X';
import O from '../../Icons/O';

import DefaultPlayers from './DefaultPlayers';

import { usePlayers } from '../../Contexts/PlayersContext';

export default function PlayerData() {
    const { players } = usePlayers();

    return (
        <article className={styles.container}>
            {players.map((player, key) => (
                <div key={key}>
                    <div className={styles.icons}>
                        <X color={player.color.hex} />
                        <O color={player.color.hex} />
                    </div>

                    <div className={styles.username}>{player.name}</div>

                    <div>{player.match.matches}</div>
                    <div>{player.match.wins}</div>
                    <div>{player.match.defeats}</div>
                    <div>{player.match.ties}</div>
                    <div>{player.match.winrate} %</div>
                    <div>{player.match.score}</div>
                </div>
            ))}

            <DefaultPlayers />
        </article>
    );
}