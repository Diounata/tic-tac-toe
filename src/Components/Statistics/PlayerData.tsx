import styles from '@styles/Statistics/PlayerData.module.scss';

import formatTime from '@utils/timeFormat';
import sortPlayers from '@utils/sortPlayers';
import showDecimal from '@utils/showDecimal';

import PlayerIcon from './PlayerIcon';

import { usePlayers } from '@Contexts/PlayersContext';

export default function PlayerData() {
    const { players, sortOrder, calcWinrate } = usePlayers();

    const sortedPlayers = sortPlayers([...players], sortOrder);

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
        <>
            {sortedPlayers.map((p, key) => {
                const winrate = calcWinrate(p.match.wins, p.match.matches);
                const isDefaultPlayer = p.name === 'Player X' || p.name === 'Player O';

                return (
                    <div className={styles.container} key={key}>
                        <header>
                            <div className={styles.username}>{p.name}</div>

                            <div className={styles.icons}>
                                <PlayerIcon
                                    color={p.color.hex}
                                    isDefaultPlayer={isDefaultPlayer}
                                    username={p.name}
                                />
                            </div>
                        </header>

                        <main>
                            <article>
                                <span>Played time</span>
                                <span>{formatTime(p.playedTime)}</span>
                            </article>

                            <article>
                                <span>Played games</span>
                                <span>{p.match.matches}</span>
                            </article>

                            <article>
                                <span>Wins</span>
                                <span>{p.match.wins}</span>
                            </article>

                            <article>
                                <span>Defeats</span>
                                <span>{p.match.defeats}</span>
                            </article>

                            <article>
                                <span>Ties</span>
                                <span>{p.match.ties}</span>
                            </article>

                            <article>
                                <span>Winrate (%)</span>
                                <span>{showDecimal(winrate)}%</span>
                            </article>

                            <article>
                                <span>Score</span>
                                <span style={{ color: getClassColor(p.score) }}>{showDecimal(p.score)}</span>
                            </article>
                        </main>
                    </div>
                );
            })}
        </>
    );
}
