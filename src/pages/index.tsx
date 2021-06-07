import Scoreboard from '../Components/Scoreboard';
import Game from '../Components/Game';
import Footer from '../Components/Footer';

import { GameContextProvider } from '../Contexts/GameContext';

export default function Home() {
    return (
        <GameContextProvider>
            <div className='container'>
                <Scoreboard />
                <Game />
                <Footer />
            </div>
        </GameContextProvider>
    );
}
