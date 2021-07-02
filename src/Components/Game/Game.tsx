import styles from '../../styles/Game/Game.module.scss';

import X from '../../Icons/X';
import O from '../../Icons/O';

import { useGame } from '../../Contexts/GameContext';

export default function Game() {
    const { position, updatePosition } = useGame();

    return (
        <main className={styles.gameContainer}>
            {position.map((i, index) => (
                <div
                    className={i ? styles.filled : styles.unfilled}
                    onClick={() => updatePosition(index)}
                    key={index}
                >
                    <span>
                        {i === 'X' && <X />}
                        {i === 'O' && <O />}
                    </span>
                </div>
            ))}
        </main>
    );
}
