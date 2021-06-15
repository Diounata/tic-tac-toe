import { useGame } from '../../Contexts/GameContext';

export default function Winner() {
    const { winner } = useGame();

    return (
        <>
            <span>{winner.icon}</span>
            <p>{winner.name} wins!</p>
        </>
    );
}
