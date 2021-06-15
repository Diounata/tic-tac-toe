import styles from '../../styles/Modal.module.scss';

import Winner from './Winner';
import Tie from './Tie';

import { useGame } from '../../Contexts/GameContext';
import { useModal } from '../../Contexts/ModalContext';

export default function Modal() {
    const { isModalOpen, changeModalState } = useModal();
    const { winner, resetGame } = useGame();

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closedModal}>
            <div>
                <main>
                    {winner ? <Winner /> : <Tie />}
                </main>

                <footer>
                    <button onClick={() => changeModalState(false)}>Cancel</button>
                    <button onClick={resetGame}>Start new game</button>
                </footer>
            </div>
        </div>
    );
}
