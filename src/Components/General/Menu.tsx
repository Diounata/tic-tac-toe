import styles from '@styles/General/Menu.module.scss';

import Button from './Button';
import Play from '@Icons/Play';
import Info from '@Icons/Info';
import History from '@Icons/History';
import Question from '@Icons/Question';
import Trophy from '@Icons/Trophy';
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

                <div>
                    <LinkButton href='/about'>
                        <Info /> About
                    </LinkButton>

                    <LinkButton href='/history'>
                        <History /> History
                    </LinkButton>

                    <LinkButton href='/how-to-play'>
                        <Question /> How to play
                    </LinkButton>

                    <LinkButton href='/leaderboard'>
                        <Trophy /> Leaderboard
                    </LinkButton>

                    <LinkButton href='/players'>
                        <Users /> Players
                    </LinkButton>

                    <LinkButton href='/settings'>
                        <Gear /> Settings
                    </LinkButton>
                </div>
            </main>
        </>
    );
}
