import styles from '@styles/Leaderboard/PlayerData.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';

import DefaultPlayers from './DefaultPlayers';

import { usePlayers } from '@Contexts/PlayersContext';

export default function PlayerData() {
    const { players, calcWinrate, calcScore } = usePlayers();

    function getClassColor(scoreString: string): string {
        const score = Number(scoreString);

        if (score > 0) {
            return 'var(--green)';
        } else if (score < 0) {
            return 'var(--red)';
        } else {
            return 'var(--gray)';
        }
    }

    return (
        <article className={styles.container}>
            {players.map((p, key) => {
                const winrate = calcWinrate(p.match.wins, p.match.matches);
                const score = calcScore(
                    p.match.wins,
                    p.match.ties,
                    p.match.defeats
                );

                if (p.name !== 'Player X' && p.name !== 'Player O') {
                    return (
                        <div key={key}>
                            <div className={styles.icons}>
                                <X color={p.color.hex} />
                                <O color={p.color.hex} />
                            </div>

                            <div className={styles.username}>{p.name}</div>

                            <div>{p.match.matches}</div>
                            <div>{p.match.wins}</div>
                            <div>{p.match.defeats}</div>
                            <div>{p.match.ties}</div>
                            <div>{winrate} %</div>
                            <div style={{ color: getClassColor(score) }}>
                                {score}
                            </div>
                        </div>
                    );
                }
            })}

            <DefaultPlayers getClassColor={getClassColor} />
        </article>
    );
}
