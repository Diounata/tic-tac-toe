import styles from '@styles/Game/Scoreboard.module.scss';

import BackButton from '@Components/General/BackButton';

import X from '@Icons/X';
import O from '@Icons/O';

import { useGame } from '@Contexts/GameContext';

export default function Scoreboard() {
    const { player } = useGame();

    return (
        <>
            <BackButton />

            <header className={styles.scoreboardComponent}>
                <div>
                    <div>
                        <X size='16' color={player.x.color} /> {player.x.name}
                    </div>

                    <div>{player.x.wins}</div>
                </div>

                <div className={styles.divisor}>&times;</div>

                <div>
                    <div>{player.o.wins}</div>

                    <div>
                        {player.o.name} <O size='16' color={player.o.color} />
                    </div>
                </div>
            </header>
        </>
    );
}
