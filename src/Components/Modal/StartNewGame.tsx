import Link from 'next/link';

import Question from '../../Icons/Question';

import { useModal } from '../../Contexts/ModalContext';

export default function StartNewGame() {
    const { changeModalState } = useModal();

    function startQuickGame() {
        changeModalState(false);
    }

    return (
        <>
            <main>
                <Question />
                <p style={{ fontSize: '0.9em' }}>How would you like to play?</p>
            </main>

            <footer>
                <Link href='/play'>
                    <button onClick={startQuickGame}>
                        <a>Quick game</a>
                    </button>
                </Link>

                <button>Game with players</button>
            </footer>
        </>
    );
}
