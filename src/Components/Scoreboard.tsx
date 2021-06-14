import styles from '../styles/Scoreboard.module.scss';

import { useGame } from '../Contexts/GameContext';

export default function Scoreboard() {
    const { player } = useGame();

    return (
        <header className={styles.scoreboardComponent}>
            <div>
                <div>
                    <span className='x'>&times;</span> {player.x.name}
                </div>

                <div>{player.x.score}</div>
            </div>

            <div className={styles.divisor}>&times;</div>

            <div>
                <div>{player.o.score}</div>
                
                <div>
                    {player.o.name} <span className='o'>o</span>
                </div>
            </div>
        </header>
    );
}
