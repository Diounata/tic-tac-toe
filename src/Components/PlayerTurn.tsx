import styles from '../styles/PlayerTurn.module.scss';

import X from '../Icons/X';
import O from '../Icons/O';

import { useGame } from '../Contexts/GameContext';

export default function PlayerTurn() {
    const { player, playerTurn } = useGame();

    return (
        <div className={styles.playerTurnContainer}>
            <span>{playerTurn === 'X' ? <X /> : <O />}</span>

            <span>{playerTurn === 'X' ? player.x.name : player.o.name}'s turn</span>
        </div>
    );
}
