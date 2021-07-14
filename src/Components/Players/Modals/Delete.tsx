import Danger from '@Icons/Danger';
import ThumbsUp from '@Icons/ThumbsUp';
import ThumbsDown from '@Icons/ThumbsDown';

import { useModal } from '@Contexts/ModalContext';
import { usePlayers } from '@Contexts/PlayersContext';

export default function DeleteModal() {
    const { changeModalState } = useModal();
    const { deletePlayer, selectedPlayer } = usePlayers();

    function deleteFunction(): void {
        deletePlayer(selectedPlayer);
        changeModalState(false);
    }

    return (
        <>
            <main>
                <span>
                    <Danger />
                </span>

                <p style={{ fontSize: '1.1rem' }}>
                    Are you sure you want to delete it?
                </p>
            </main>

            <footer>
                <button onClick={deleteFunction}>
                    <ThumbsUp /> Yes, I do!
                </button>

                <button onClick={() => changeModalState(false)}>
                    <ThumbsDown /> No, never!
                </button>
            </footer>
        </>
    );
}
