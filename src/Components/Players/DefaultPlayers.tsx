import styles from '@styles/Players/PlayerData.module.scss';

import PlayersButton from './PlayersButton';
import ResetModal from './Modals/Reset';

import Refresh from '@Icons/Refresh';
import X from '@Icons/X';
import O from '@Icons/O';

import { usePlayers } from '@Contexts/PlayersContext';

type Props = {
    showModal(component: JSX.Element, key: number): void;
};

export default function PlayerData({ showModal }: Props) {
    const { players } = usePlayers();

    const defaultPlayers = players.filter(p => p.name === 'Player X' || p.name === 'Player O');

    return (
        <>
            {defaultPlayers.map(p => {
                const key = players.findIndex(player => player.name === p.name);

                return (
                    <div key={key}>
                        <div>
                            <div className={styles.icons}>{p.name === 'Player X' ? <X size={20.8} /> : <O size={16.8} />}</div>

                            <div className={styles.username}>{p.name}</div>
                        </div>

                        <div className={styles.actions}>
                            <PlayersButton onClick={() => showModal(<ResetModal />, key)}>
                                <Refresh /> Reset
                            </PlayersButton>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
