import styles from '@styles/History/History.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import HistoryIcon from '@Icons/History';
import Trash from '@Icons/Trash';
import X from '@Icons/X';
import O from '@Icons/O';

import Header from '@Components/General/Header';
import Button from '@Components/General/Button';
import HistoryData from '@Components/History/HistoryData';
import Footer from '@Components/General/Footer';

import { usePlayers } from '@Contexts/PlayersContext';

export default function History() {
    const { deleteAllHistory } = usePlayers();

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

                <div className={styles.container}>
                    <div className={styles.tableHeader}>
                        <div className={styles.username}>
                            <X /> Player
                        </div>

                        <div>Situation</div>

                        <div className={styles.username}>
                            <O /> Player
                        </div>

                        <div>Situation</div>

                        <div>
                            <Button onClick={deleteAllHistory}>
                                <Trash /> Delete all
                            </Button>
                        </div>
                    </div>

                    <HistoryData />
                </div>
            </main>

            <Footer />
        </>
    );
}
