import TitlePage from '@utils/TitlePage';

import X from '@Icons/X';
import O from '@Icons/O';

import Menu from '@Components/General/Menu';
import Footer from '@Components/General/Footer';
import ColorsModal from '@Components/Players/ColorsModal';

export default function Home() {
    return (
        <>
            <TitlePage title="Home" />

            <h2>
                <X /> <O />
                Tic-tac-toe
            </h2>

            <Menu />

            <ColorsModal />

            <Footer />
        </>
    );
}
