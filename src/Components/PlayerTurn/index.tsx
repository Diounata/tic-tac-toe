import styles from '@styles/Game/PlayerTurn.module.scss';

import Winner from './Winner';
import Tie from './Tie';
import PlayerTurnComponent from './PlayerTurn';

import { useGame } from '@Contexts/GameContext';

export default function PlayerTurn() {
    const { isGameFinished, winner } = useGame();

    function verifyPlayerTurn(): JSX.Element {
        if (isGameFinished) {
            return winner ? <Winner /> : <Tie />;
        } else {
            return <PlayerTurnComponent />;
        }
    }

    return (
        <div className={styles.playerTurnContainer}>{verifyPlayerTurn()}</div>
    );
}
