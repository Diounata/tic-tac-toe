import styles from '@styles/Game/Game.module.scss';

import { useGame } from '@Contexts/GameContext';

export default function Game() {
    const { player, position, updatePosition } = useGame();

    return (
        <main className={styles.gameContainer}>
            {position.map((i, index) => (
                <div
                    className={i ? styles.filled : styles.unfilled}
                    onClick={() => updatePosition(index)}
                    key={index}
                >
                    <span>
                        {i === 'X' && player.x.icon}
                        {i === 'O' && player.o.icon}
                    </span>
                </div>
            ))}
        </main>
    );
}
