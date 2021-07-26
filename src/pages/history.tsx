import styles from '@styles/History/History.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import HistoryIcon from '@Icons/History';
import X from '@Icons/X';
import O from '@Icons/O';

import Header from '@Components/General/Header';
import ColorSquare from '@Components/History/ColorSquare';
import Footer from '@Components/General/Footer';

import { usePlayers } from '@Contexts/PlayersContext';

export default function History() {
    const { history } = usePlayers();

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
                        <div>
                            <div>Username</div>

                            <div>Situation</div>
                        </div>

                        <div>
                            <div>Username</div>

                            <div>Situation</div>
                        </div>
                    </div>

                    {history.map((i, key) => (
                        <div className={styles.historyItem} key={key}>
                            <div>
                                <span className={styles.username}>
                                    <X color={i.x.color} /> {i.x.name}
                                </span>

                                <span className={styles.situation}>
                                    <ColorSquare situation={i.x.situation} /> {i.x.situation}
                                </span>
                            </div>

                            <div>
                                <span className={styles.username}>
                                    <O color={i.o.color} /> {i.o.name}
                                </span>

                                <span className={styles.situation}>
                                    <ColorSquare situation={i.o.situation} /> {i.o.situation}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}
