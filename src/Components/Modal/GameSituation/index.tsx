import Winner from './Winner';
import Tie from './Tie';

import { useModal } from '@Contexts/ModalContext';
import { useGame } from '@Contexts/GameContext';

export default function GameSituation() {
    const { changeModalState } = useModal();
    const { winner, resetGame } = useGame();

    return (
        <>
            <main>{winner ? <Winner /> : <Tie />}</main>

            <footer>
                <button onClick={() => changeModalState(false)}>Cancel</button>
                <button onClick={resetGame}>Start new game</button>
            </footer>
        </>
    );
}
