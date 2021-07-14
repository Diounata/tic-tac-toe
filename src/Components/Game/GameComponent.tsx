import Game from './Game';
import FinishedGame from './FinishedGame';

import { useGame } from '@Contexts/GameContext';

export default function GameComponent() {
    const { isGameFinished } = useGame();

    return <>{isGameFinished ? <FinishedGame /> : <Game />}</>;
}
    