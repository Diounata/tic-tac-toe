import Scoreboard from '../Components/Scoreboard';
import PlayerTurn from '../Components/PlayerTurn';
import Game from '../Components/Game';
import Footer from '../Components/Footer';

import { GameContextProvider } from '../Contexts/GameContext';

export default function Home() {
    return (
        <GameContextProvider>
            <div className='container'>
                <Scoreboard />
                <PlayerTurn />
                <Game />
                <Footer />
            </div>
        </GameContextProvider>
    );
}
