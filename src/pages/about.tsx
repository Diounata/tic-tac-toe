import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import Info from '@Icons/Info';

import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';

export default function About() {
    return (
        <>
            <TitlePage title="About" />

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <Info size={24} /> About
                    </Header>
                </div>

                <div>
                    
                </div>
            </main>

            <Footer />
        </>
    );
}
