import styles from '@styles/Leaderboard/Leaderboard.module.scss';

import TitlePage from '@utils/TitlePage';
import ChartBar from '@Icons/ChartBar';
import ExclamationTriangle from '@Icons/ExclamationTriangle';

import BackButton from '@Components/General/BackButton';
import Header from '@Components/General/Header';
import PlayerData from '@Components/Leaderboard/PlayerData';
import Footer from '@Components/General/Footer';
import Alert from '@Components/General/Alert';

import { useSettings } from '@Contexts/SettingsContext';

export default function Leaderboard() {
    const { isSaveGameStatsOn } = useSettings();

    return (
        <>
            <TitlePage title='Statistics' />

            <main> 
                <div>
                    <BackButton />

                    <Header>
                        <ChartBar size={24} /> Statistics
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
                    <PlayerData />
                </div>
            </main>

            <Footer />
        </>
    );
}