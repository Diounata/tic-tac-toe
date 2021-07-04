import Link from 'next/link';
import styles from '../../styles/Game/Scoreboard.module.scss';

import BackIcon from '../../Icons/Back';

import { useGame } from '../../Contexts/GameContext';

export default function Scoreboard() {
    const { player } = useGame();

    return (
        <>
            <div className={styles.back}>
                <Link href='/'>
                    <a>
                        <BackIcon />
                    </a>
                </Link>
            </div>

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
        </>
    );
}
