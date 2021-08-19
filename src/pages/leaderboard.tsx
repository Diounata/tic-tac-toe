import styles from '@styles/Leaderboard/Leaderboard.module.scss';

import TitlePage from '@utils/TitlePage';
import Trophy from '@Icons/Trophy';
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
            <TitlePage title='Leaderboard' />

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <Trophy size={24} /> Leaderboard
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
                        <span></span>
                        <h4 className={styles.username}>Username</h4>
                        <h4>Matches</h4>
                        <h4>Wins</h4>
                        <h4>Defeats</h4>
                        <h4>Ties</h4>
                        <h4>% Win rate</h4>
                        <h4>Score</h4>
                    </div>

                    <PlayerData />
                </div>
            </main>

            <Footer />
        </>
    );
}
