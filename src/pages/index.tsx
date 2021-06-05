import Scoreboard from '../Components/Scoreboard';
import Game from '../Components/Game';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <div className='container'>
            <Scoreboard />
            <Game />
            <Footer />
        </div>
    );
}
