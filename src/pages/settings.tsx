import styles from '@styles/Settings/Index.module.scss';

import BackButton from '@Components/General/BackButton';
import TitlePage from '@utils/TitlePage';
import Gear from '@Icons/Gear';
import X from '@Icons/X';
import O from '@Icons/O';

import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';
import RadioButton from '@Components/General/RadioButton';

import { useSettings } from '@Contexts/SettingsContext';

export default function Settings() {
    const { startGameAs, updateStartGameAs } = useSettings();

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

                            <div>
                                <RadioButton
                                    name='start-game'
                                    id='x'
                                    selected={startGameAs === 'X'}
                                    onClick={() => updateStartGameAs('X')}
                                >
                                    <div>
                                        <span>Player</span> <X color='#e1e1e1' />
                                    </div>
                                </RadioButton>

                                <RadioButton
                                    name='start-game'
                                    id='o'
                                    selected={startGameAs === 'O'}
                                    onClick={() => updateStartGameAs('O')}
                                >
                                    <div>
                                        <span>Player</span> <O color='#e1e1e1' />
                                    </div>
                                </RadioButton>

                                <RadioButton
                                    name='start-game'
                                    id='winner'
                                    selected={startGameAs === 'Winner'}
                                    onClick={() => updateStartGameAs('Winner')}
                                >
                                    Winner
                                </RadioButton>

                                <RadioButton
                                    name='start-game'
                                    id='loser'
                                    selected={startGameAs === 'Loser'}
                                    onClick={() => updateStartGameAs('Loser')}
                                >
                                    Loser
                                </RadioButton>

                                <RadioButton
                                    name='start-game'
                                    id='random'
                                    selected={startGameAs === 'Random'}
                                    onClick={() => updateStartGameAs('Random')}
                                >
                                    Random
                                </RadioButton>
                            </div>
                        </article>

                        <article>
                            <header>Save game statistics (wins, defeats, score)</header>

                            <div>
                                <RadioButton name='save-stats' id='yes' selected>
                                    Yes
                                </RadioButton>

                                <RadioButton name='save-stats' id='no'>
                                    No
                                </RadioButton>
                            </div>
                        </article>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
