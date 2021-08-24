import styles from '@styles/History/History.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import HistoryIcon from '@Icons/History';
import ExclamationTriangle from '@Icons/ExclamationTriangle';

import Header from '@Components/General/Header';
import HistoryData from '@Components/History/HistoryData';
import Footer from '@Components/General/Footer';
import Alert from '@Components/General/Alert';

import { usePlayers } from '@Contexts/PlayersContext';
import { useSettings } from '@Contexts/SettingsContext';

export default function History() {
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
                    <HistoryData />
                </div>
            </main>

            <Footer />
        </>
    );
}
