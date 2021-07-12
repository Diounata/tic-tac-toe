import styles from '../styles/Leaderboard/Leaderboard.module.scss';

import TitlePage from '../utils/TitlePage';
import Trophy from '../Icons/Trophy';

import BackButton from '../Components/General/BackButton';
import Header from '../Components/General/Header';
import PlayerData from '../Components/Leaderboard/PlayerData';
import Footer from '../Components/General/Footer';

export default function Leaderboard() {
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
