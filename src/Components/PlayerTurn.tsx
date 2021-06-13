import styles from '../styles/PlayerTurn.module.scss';

import X from '../Icons/X';
import O from '../Icons/O';

import { useGame } from '../Contexts/GameContext';

export default function PlayerTurn() {
    const { playerTurn } = useGame();

    return (
        <div className={styles.playerTurnContainer}>
            <span>{playerTurn === 'X' ? <X /> : <O />}</span>

            <span>{playerTurn === 'X' ? 'Player 1' : 'Player 2'}'s turn</span>
        </div>
    );
}
