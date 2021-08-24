import styles from '@styles/General/Menu.module.scss';

import Button from './Button';
import Play from '@Icons/Play';
import Info from '@Icons/Info';
import History from '@Icons/History';
import Question from '@Icons/Question';
import Statistics from '@Icons/ChartBar';
import Users from '@Icons/Users';
import Gear from '@Icons/Gear';

import LinkButton from './LinkButton';
import Modal from '../Modal/Modal';
import StartNewGame from '../Modal/StartNewGame';

import { useModal } from '@Contexts/ModalContext';

export default function Menu() {
    const { changeModalState } = useModal();

    return (
        <>
            <Modal>
                <StartNewGame />
            </Modal>

            <main className={styles.menuContainer}>
                <div className={styles.startButton}>
                    <Button onClick={() => changeModalState(true)}>
                        <Play /> Start new game
                    </Button>
                </div>

                <div className={styles.a}>
                    <LinkButton href='/about'>
                        <Info /> About
                    </LinkButton>
                </div>

                <div className={styles.b}>
                    <LinkButton href='/history'>
                        <History /> History
                    </LinkButton>
                </div>

                <div className={styles.c}>
                    <LinkButton href='/how-to-play'>
                        <Question /> How to play
                    </LinkButton>
                </div>

                <div className={styles.d}>
                    <LinkButton href='/players'>
                        <Users /> Players
                    </LinkButton>
                </div>

                <div className={styles.e}>
                    <LinkButton href='/settings'>
                        <Gear /> Settings
                    </LinkButton>
                </div>

                <div className={styles.f}>
                    <LinkButton href='/statistics'>
                        <Statistics /> Statistics
                    </LinkButton>
                </div>
            </main>
        </>
    );
}
