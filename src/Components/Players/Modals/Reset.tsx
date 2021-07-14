import Danger from '@Icons/Danger';
import ThumbsUp from '@Icons/ThumbsUp';
import ThumbsDown from '@Icons/ThumbsDown';

import { useModal } from '@Contexts/ModalContext';
import { usePlayers } from '@Contexts/PlayersContext';

export default function ResetModal() {
    const { changeModalState } = useModal();
    const { resetPlayerStats, selectedPlayer } = usePlayers();

    function resetFunction(): void {
        resetPlayerStats(selectedPlayer);
        changeModalState(false);
    }

    return (
        <>
            <main>
                <span>
                    <Danger />
                </span>

                <p style={{ fontSize: '1.1rem' }}>
                    Are you sure you want to reset these player statistics?
                </p>
            </main>

            <footer>
                <button onClick={resetFunction}>
                    <ThumbsUp /> Yes, I do!
                </button>

                <button onClick={() => changeModalState(false)}>
                    <ThumbsDown /> No, never!
                </button>
            </footer>
        </>
    );
}
