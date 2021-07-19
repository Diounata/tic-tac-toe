import styles from '@styles/History/History.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import HistoryIcon from '@Icons/History';

import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';

export default function History() {
    return (
        <>
            <TitlePage title='History' />

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <HistoryIcon size={24} /> History
                    </Header>
                </div>

                {/* Content will be insered here */}
            </main>

            <Footer />
        </>
    );
}
