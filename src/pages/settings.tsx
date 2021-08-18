import styles from '@styles/Settings/Index.module.scss';

import BackButton from '@Components/General/BackButton';
import TitlePage from '@utils/TitlePage';
import Gear from '@Icons/Gear';

import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';

import StartGameAs from '@Components/Settings/StartGameAs';
import SaveGameStats from '@Components/Settings/SaveGameStats';

export default function Settings() {
    return (
        <>
            <TitlePage title='Leaderboard' />

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <Gear size={24} /> Settings
                    </Header>
                </div>

                <div className={styles.container}>
                    <section>
                        <h3>Game</h3>

                        <article>
                            <header>Start game as:</header>

                            <StartGameAs />
                        </article>

                        <article>
                            <header>
                                Save game statistics (wins, defeats, score)
                            </header>

                            <SaveGameStats />
                        </article>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
