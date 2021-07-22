import X from '@Icons/X';
import O from '@Icons/O';

import { useGame } from '@Contexts/GameContext';

export default function Tie() {
    const { player } = useGame();

    return (
        <>
            <span>
                {player.x.icon}
                {player.o.icon}
            </span>

            <span>Game tied</span>
        </>
    );
}
