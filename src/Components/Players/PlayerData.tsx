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
import { useGame } from '@Contexts/GameContext';

export default function PlayerData() {
    const { players, changeSelectedPlayer, calcScore } = usePlayers();
    const { changeModalState } = useModal();
    const { playersName, updatePlayer } = useGame();

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
                {players.map((p, key) => {
                    function getPlayerProps() {
                        const playerValues = {
                            name: p.name,
                            color: p.color.hex,
                            score: 0
                        };

                        return playerValues;
                    }

                    return (
                        <div key={key}>
                            <div className={styles.icons}>
                                <X color={p.color.hex} />
                                <O color={p.color.hex} />
                            </div>

                            <div className={styles.username}>{p.name}</div>
                            <div className={styles.colorSquare}>
                                <div style={{ background: p.color.hex }}></div>
                                {p.color.name}
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

                            <div className={styles.selectPlayer}>
                                <PlayersButton 
                                    style={{ border: playersName.x === p.name ? `2px solid ${p.color.hex}` : ''}}
                                    onClick={() => updatePlayer(getPlayerProps(), 'x')}
                                    disabled={playersName.o === p.name}
                                >
                                    
                                    <X color={p.color.hex} />
                                </PlayersButton>

                                <PlayersButton 
                                    style={{ border: playersName.o === p.name ? `2px solid ${p.color.hex}` : ''}}
                                    onClick={() => updatePlayer(getPlayerProps(), 'o')}
                                    disabled={playersName.x === p.name}
                                >
                                    <O color={p.color.hex} />
                                </PlayersButton>
                            </div>
                        </div>
                    );
                })}

                <DefaultPlayers />
            </article>
        </>
    );
}
