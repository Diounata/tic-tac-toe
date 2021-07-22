import { useGame } from '@Contexts/GameContext';

export default function PlayerTurnComponent() {
    const { playerTurn, player } = useGame();

    function verifyPlayerTurn(): string {
        const playerName = playerTurn === 'X' ? player.x.name : player.o.name;

        return `${playerName}'s turn`;
    }
    return (
        <>
            <span>{playerTurn === 'X' ? player.x.icon : player.o.icon}</span>

            <span>{verifyPlayerTurn()}</span>
        </>
    );
}
