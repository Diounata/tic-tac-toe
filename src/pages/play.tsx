import Scoreboard from '../Components/Scoreboard';
import PlayerTurn from '../Components/PlayerTurn/index';
import GameComponent from '../Components/GameComponent';
import Modal from '../Components/Modal/Modal';
import Footer from '../Components/Footer';

import TitlePage from '../utils/TitlePage';

export default function Play() {
    return (
        <>
            <TitlePage title='Play' />

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem'}}>
                <Scoreboard />
                <PlayerTurn />
            </div>

            <GameComponent />
            
            <Footer />

            <Modal />
        </>
    );
}
