import { useGame } from '../../Contexts/GameContext';

import X from '../../Icons/X';
import O from '../../Icons/O';

export default function PlayerTurnComponent() {
    const { playerTurn, player } = useGame();

    function verifyPlayerTurn(): string {
        const playerName = playerTurn === 'X' ? player.x.name : player.o.name;

        return `${playerName}'s turn`;
    }
    return (
        <>
            <span>{playerTurn === 'X' ? <X /> : <O />}</span>

            <span>{verifyPlayerTurn()}</span>
        </>
    );
}
