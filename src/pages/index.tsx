import Scoreboard from '../Components/Scoreboard';
import PlayerTurn from '../Components/PlayerTurn';
import Game from '../Components/Game';
import Footer from '../Components/Footer';
import Modal from '../Components/Modal/Modal';

import { GameContextProvider } from '../Contexts/GameContext';
import { ModalContextProvider } from '../Contexts/ModalContext';

export default function Home() {
    return (
        <ModalContextProvider>
            <GameContextProvider>
                <div className='container'>
                    <Scoreboard />
                    <PlayerTurn />
                    <Game />
                    <Footer />
                </div>

                <Modal />
            </GameContextProvider>
        </ModalContextProvider>
    );
}
