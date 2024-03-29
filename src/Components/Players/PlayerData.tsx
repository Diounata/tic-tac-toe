import { useState } from 'react';
import styles from '@styles/Players/PlayerData.module.scss';

import Edit from '@Icons/Edit';
import Trash from '@Icons/Trash';
import Refresh from '@Icons/Refresh';
import X from '@Icons/X';
import O from '@Icons/O';

import PlayersButton from './PlayersButton';
import DefaultPlayers from './DefaultPlayers';

import Modal from '../Modal/Modal';
import EditModal from './Modals/Edit';
import DeleteModal from './Modals/Delete';
import ResetModal from './Modals/Reset';

import { usePlayers } from '@Contexts/PlayersContext';
import { useModal } from '@Contexts/ModalContext';

export default function PlayerData() {
    const { players, changeSelectedPlayer } = usePlayers();
    const { changeModalState } = useModal();

    const [modalComponent, setModalComponent] = useState<JSX.Element>();

    function showModal(component: JSX.Element, key: number): void {
        changeSelectedPlayer(key);
        setModalComponent(component);
        changeModalState(true);
    }

    return (
        <>
            <Modal>{modalComponent}</Modal>

            <article className={styles.container}>
                {players.map((player, key) => {
                    const p = { ...player, wins: player.match.wins };

                    if (p.name !== 'Player X' && p.name !== 'Player O') {
                        return (
                            <div key={key}>
                                <div>
                                    <div className={styles.icons}>
                                        <X color={p.color.hex} size={20.8} />
                                        <O color={p.color.hex} size={16.8} />
                                    </div>

                                    <div className={styles.username}>{p.name}</div>
                                </div>

                                <div className={styles.actions}>
                                    <PlayersButton onClick={() => showModal(<EditModal />, key)}>
                                        <Edit /> Edit
                                    </PlayersButton>

                                    <PlayersButton onClick={() => showModal(<DeleteModal />, key)}>
                                        <Trash /> Delete
                                    </PlayersButton>

                                    <PlayersButton onClick={() => showModal(<ResetModal />, key)}>
                                        <Refresh /> Reset
                                    </PlayersButton>
                                </div>
                            </div>
                        );
                    }
                })}

                <DefaultPlayers showModal={showModal} />
            </article>
        </>
    );
}
