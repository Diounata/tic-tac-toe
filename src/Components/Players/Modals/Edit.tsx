import { useRouter } from 'next/router';

import EditIcon from '@Icons/Edit';
import ThumbsUp from '@Icons/ThumbsUp';
import ThumbsDown from '@Icons/ThumbsDown';

import { useModal } from '@Contexts/ModalContext';
import { usePlayers } from '@Contexts/PlayersContext';

export default function EditModal() {
    const { changeModalState } = useModal();
    const { selectedPlayer, updateSelectedPlayerForEditing, changeIsEditingAPlayer } = usePlayers();

    const router = useRouter();

    function go(): void {
        changeIsEditingAPlayer(true);
        updateSelectedPlayerForEditing(selectedPlayer);
        changeModalState(false);
        router.push('/players/edit');
    }

    return (
        <>
            <main>
                <span>
                    <EditIcon />
                </span>

                <p style={{ fontSize: '1.1rem' }}>
                    Would you like to edit this player?
                </p>
            </main>

            <footer>
                <button onClick={go}>
                    <ThumbsUp /> Yes, I do!
                </button>

                <button onClick={() => changeModalState(false)}>
                    <ThumbsDown /> No, never!
                </button>
            </footer>
        </>
    );
}
