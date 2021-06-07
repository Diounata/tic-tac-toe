import styles from '../styles/Game.module.scss';

import { useGame } from '../Contexts/GameContext';

export default function Game() {
    const { position, changePosition } = useGame();

    return (
        <main className={styles.gameContainer}>
            {position.map((i, index) => (
                <div
                    onClick={() => changePosition(index)}
                    key={index}
                    style={{
                        color:
                            position[index] === 'X'
                                ? 'var(--blue)'
                                : 'var(--purple)',
                        cursor: position[index] && 'not-allowed',
                    }}
                >
                    {i}
                </div>
            ))}
        </main>
    );
}
