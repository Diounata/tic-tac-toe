import TitlePage from '@utils/TitlePage';

import X from '@Icons/X';
import O from '@Icons/O';

import Menu from '@Components/Menu';
import Footer from '@Components/General/Footer';

export default function Home() {
    return (
        <>
            <div>
                <TitlePage title='Home' />

                <h2>
                    <X /> <O />
                    Tic-tac-toe
                </h2>
            </div>

            <Menu />

            <Footer />
        </>
    );
}
