import styles from '@styles/Leaderboard/PlayerData.module.scss';

import showDecimal from '../../utils/showDecimal';

import PlayerIcon from './PlayerIcon';

import { usePlayers } from '@Contexts/PlayersContext';

export default function PlayerData() {
    const { players, calcWinrate } = usePlayers();

    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    function getClassColor(score: number): string {
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
            {sortedPlayers.map((p, key) => {
                const winrate = calcWinrate(p.match.wins, p.match.matches);
                const isDefaultPlayer = p.name === 'Player X' || p.name === 'Player O';

                return (
                    <div key={key}>
                        <div className={styles.icons}>
                            <PlayerIcon
                                color={p.color.hex}
                                isDefaultPlayer={isDefaultPlayer}
                                username={p.name}
                            />
                        </div>

                        <div className={styles.username}>{p.name}</div>

                        <div>{p.match.matches}</div>
                        <div>{p.match.wins}</div>
                        <div>{p.match.defeats}</div>
                        <div>{p.match.ties}</div>

                        <div>{showDecimal(winrate)} %</div>

                        <div style={{ color: getClassColor(p.score) }}>
                            {showDecimal(p.score)}
                        </div>
                    </div>
                );
            })}
        </article>
    );
}
