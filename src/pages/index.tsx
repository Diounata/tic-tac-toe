import TitlePage from '../utils/TitlePage';
import Hashtag from '../Icons/Hashtag';

import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <>
            <div>
                <TitlePage title='Home' />

                <h2>
                    <Hashtag color='#04dac2' />
                    tic-tac-toe
                    <Hashtag color='#bb86fc' />
                </h2>
            </div>

            <Menu />

            <Footer />
        </>
    );
}
