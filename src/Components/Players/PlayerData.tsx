import { useState } from 'react';
import styles from '../../styles/Players/PlayerData.module.scss';

import Edit from '../../Icons/Edit';
import Trash from '../../Icons/Trash';
import Refresh from '../../Icons/Refresh';
import X from '../../Icons/X';
import O from '../../Icons/O';

import PlayersButton from './PlayersButton';
import DefaultPlayers from './DefaultPlayers';

import Modal from '../Modal/Modal';
import DeleteModal from './Modals/Delete';
import ResetModal from './Modals/Reset';

import { usePlayers } from '../../Contexts/PlayersContext';
import { useModal } from '../../Contexts/ModalContext';

export default function PlayerData() {
    const { players, changeSelectedPlayer, resetPlayerStats } = usePlayers();
    const { changeModalState } = useModal();

    const [modalComponent, setModalComponent] = useState<JSX.Element>();

    function showModal(component: JSX.Element, key: number): void {
        changeSelectedPlayer(key);
        setModalComponent(component);
        changeModalState(true);
    }

    return (
        <>
            <Modal>
                {modalComponent}
            </Modal>

            <article className={styles.container}>
                {players.map((player, key) => (
                    <div key={key}>
                        <div className={styles.icons}>
                            <X color={player.color.hex} />
                            <O color={player.color.hex} />
                        </div>

                        <div className={styles.username}>{player.name}</div>
                        <div className={styles.colorSquare}>
                            <div style={{ background: player.color.hex }}></div>
                            {player.color.name}
                        </div>

                        <div className={styles.actions}>
                            <PlayersButton>
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
                ))}

                <DefaultPlayers />
            </article>
        </>
    );
}
