import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import Question from '@Icons/Question';

import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';

export default function HowToPlay() {
    return (
        <>
            <TitlePage title="About" />

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <Question size={24} /> How to play
                    </Header>
                </div>

                <div>
                    
                </div>
            </main>

            <Footer />
        </>
    );
}
