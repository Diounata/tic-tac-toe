import styles from '@styles/Leaderboard/PlayerData.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';

import { usePlayers } from '@Contexts/PlayersContext';

type Props = {
    getClassColor(score: number): string;
}

export default function DefaultPlayers({ getClassColor }: Props) {
    const { defaultPlayers, calcWinrate, calcScore } = usePlayers();

    return (
        <>
            {defaultPlayers.map((p, key) => {
                const winrate = calcWinrate(p.match.wins, p.match.matches);
                const score = calcScore(p.match.wins, p.match.ties, p.match.defeats);

                return (
                    <div key={key}>
                        <div className={styles.icons}>
                            {key === 0 ? <X /> : <O />}
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
            })}
        </>
    );
}
