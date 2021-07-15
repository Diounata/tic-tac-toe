import styles from '@styles/Leaderboard/PlayerData.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';

import { usePlayers } from '@Contexts/PlayersContext';

export default function DefaultPlayers() {
    const { defaultPlayers, ShowWinrate } = usePlayers();

    return (
        <>
            {defaultPlayers.map((player, key) => (
                <div key={key}>
                    <div className={styles.icons}>
                        {key === 0 ? <X /> : <O />}
                    </div>

                    <div className={styles.username}>{player.name}</div>

                    <div>{player.match.matches}</div>
                    <div>{player.match.wins}</div>
                    <div>{player.match.defeats}</div>
                    <div>{player.match.ties}</div>
                    <div><ShowWinrate wins={player.match.wins} matches={player.match.matches} /> %</div>
                    <div>{player.match.score}</div>
                </div>
            ))}
        </>
    );
}
