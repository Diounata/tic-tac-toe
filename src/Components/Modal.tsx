import styles from '../styles/Modal.module.scss';

import X from '../Icons/X';
import O from '../Icons/O';

import { useGame } from '../Contexts/GameContext';
import { useModal } from '../Contexts/ModalContext';

export default function Modal() {
    const { isModalOpen, changeModalState } = useModal();
    const { winner, playerTurn, resetGame } = useGame();

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closedModal}>
            <div>
                <main>
                    <span>{playerTurn === 'X' ? <O /> : <X />}</span>
                    <p>{winner} wins!</p>
                </main>

                <footer>
                    <button onClick={() => changeModalState(false)}>Cancel</button>
                    <button onClick={resetGame}>Start new game</button>
                </footer>
            </div>
        </div>
    );
}
