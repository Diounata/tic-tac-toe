import styles from '../styles/Players/Players.module.scss';

import TitlePage from '../utils/TitlePage';
import BackButton from '../Components/General/BackButton';
import Users from '../Icons/Users';

import Header from '../Components/General/Header';
import Footer from '../Components/General/Footer';
import PlayerData from '../Components/Players/PlayerData';

export default function Players() {
    return (
        <>
            <TitlePage title='Players' />

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <Users size={24} /> Players
                    </Header>
                </div>

                <div className={styles.container}>
                    <div className={styles.tableHeader}>
                        <span></span>
                        <h4 className={styles.username}>Username</h4>
                        <h4>Actions</h4>
                    </div>

                    <PlayerData />
                </div>
            </main>

            <Footer />
        </>
    );
}
