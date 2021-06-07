import styles from '../styles/PlayerTurn.module.scss';

import { useGame } from '../Contexts/GameContext';

export default function PlayerTurn() {
    const { playerTurn } = useGame();

    return (
        <div className={styles.playerTurnContainer}>
            {playerTurn === 'X'
                ? <span className='x'>&times;</span>
                : <span className='o'>o</span>
            }

            {playerTurn === 'X' ? 'Player 1' : 'Player 2'}'s turn
        </div>
    );
}
