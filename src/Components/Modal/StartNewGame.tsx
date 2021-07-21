import { useState } from 'react';
import Link from 'next/link';

import Question from '@Icons/Question';

import StartCustomGameButton from '@Components/General/StartCustomGameButton';

import { useModal } from '@Contexts/ModalContext';
import { useGame } from '@Contexts/GameContext';

export default function StartNewGame() {
    const { changeModalState } = useModal();
    const { updatePlayersToDefault } = useGame();

    const [isCustomGameModalOn, setIsCustomGameModalOn] = useState(false);

    function updateCustomGameModalState(value: boolean): void {
        setIsCustomGameModalOn(value);
    }

    function startQuickGame() {
        changeModalState(false);
        updatePlayersToDefault();
    }

    return (
        <>
            {isCustomGameModalOn
                ? <StartCustomGameButton updateCustomGameModalState={updateCustomGameModalState} />
                : (
                <>
                    <main>
                        <Question />
                        <p style={{ fontSize: '0.9em' }}>
                            How would you like to play?
                        </p>
                    </main>

                    <footer>
                        <Link href='/play'>
                            <button onClick={startQuickGame}>
                                <a>Quick game</a>
                            </button>
                        </Link>

                        <button onClick={() => setIsCustomGameModalOn(true)}>
                            Game with players
                        </button>
                    </footer>
                </>
            )}
        </>
    );
}
