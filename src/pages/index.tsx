import Scoreboard from '../Components/Scoreboard';
import Game from '../Components/Game';

export default function Home() {
    return (
        <div className='container'>
            <Scoreboard />
            <Game />
        </div>
    );
}
