import Link from 'next/link';

import EditIcon from '../../../Icons/Edit';
import ThumbsUp from '../../../Icons/ThumbsUp';
import ThumbsDown from '../../../Icons/ThumbsDown';

import { useModal } from '../../../Contexts/ModalContext';
import { usePlayers } from '../../../Contexts/PlayersContext';

export default function EditModal() {
    const { changeModalState } = useModal();
    const { selectedPlayer, updateSelectedPlayerForEditing, changeIsEditingAPlayer } = usePlayers();

    function go(): void {
        changeIsEditingAPlayer(true);
        updateSelectedPlayerForEditing(selectedPlayer);
        changeModalState(false);
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
                    <Link href='/players/edit'>
                        <a>
                            <>
                                <ThumbsUp /> Yes, I do!
                            </>
                        </a>
                    </Link>
                </button>

                <button onClick={() => changeModalState(false)}>
                    <ThumbsDown /> No, never!
                </button>
            </footer>
        </>
    );
}
