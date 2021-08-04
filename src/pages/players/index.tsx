import styles from '@styles/Players/Players.module.scss';

import TitlePage from '@utils/TitlePage';
import LinkButton from '@Components/General/LinkButton';
import BackButton from '@Components/General/BackButton';
import UserPlus from '@Icons/UserPlus';
import Users from '@Icons/Users';

import Message from '@Components/General/Message';
import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';
import PlayerData from '@Components/Players/PlayerData';

import { usePlayers } from '@Contexts/PlayersContext';

export default function Players() {
    const { playerActionMessage } = usePlayers();

    return (
        <>
            <TitlePage title='Players' />

            {playerActionMessage.action && <Message />}

            <main>
                <div>
                    <BackButton />

                    <Header>
                        <Users size={24} /> Players
                    </Header>
                </div>

                <div className={styles.container}>
                    <div className={styles.addNewPlayerButton}>
                        <LinkButton href='/players/new'>
                            <UserPlus /> Add new player
                        </LinkButton>
                    </div>

                    <PlayerData />
                </div>
            </main>

            <Footer />
        </>
    );
}
