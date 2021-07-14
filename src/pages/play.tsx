import Scoreboard from '@Components/Game/Scoreboard';
import PlayerTurn from '@Components/PlayerTurn/index';
import GameComponent from '@Components/Game/GameComponent';
import GameSituation from '@Components/Modal/GameSituation/index';
import Modal from '@Components/Modal/Modal';
import Footer from '@Components/General/Footer';

import TitlePage from '@utils/TitlePage';

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

            <Modal>
                <GameSituation />
            </Modal>
        </>
    );
}
