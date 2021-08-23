import styles from '@styles/History/History.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import HistoryIcon from '@Icons/History';
import Trash from '@Icons/Trash';
import ExclamationTriangle from '@Icons/ExclamationTriangle';
import X from '@Icons/X';
import O from '@Icons/O';

import Header from '@Components/General/Header';
import Button from '@Components/General/Button';
import HistoryData from '@Components/History/HistoryData';
import Footer from '@Components/General/Footer';
import Alert from '@Components/General/Alert';

import { usePlayers } from '@Contexts/PlayersContext';
import { useSettings } from '@Contexts/SettingsContext';

export default function History() {
    const { deleteAllHistory } = usePlayers();
    const { isSaveGameStatsOn } = useSettings();

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

                {!isSaveGameStatsOn && (
                    <Alert>
                        <b>
                            <ExclamationTriangle color='856404' /> Warning!
                        </b>
                        Save game statistics setting isn't select.
                    </Alert>
                )}

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
                            Duration
                        </div>

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
