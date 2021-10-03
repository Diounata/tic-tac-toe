import { useEffect, useState } from 'react';
import styles from '@styles/General/Message.module.scss';

import ActionMessage from '@utils/PlayerActionMessages.json';
import Check from '@Icons/Check';

import { usePlayers } from '@Contexts/PlayersContext';

export default function Message() {
    const { playerActionMessage, changePlayerActionMessage } = usePlayers();

    const [isBarInProgress, setIsBarInProgress] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsBarInProgress(false);
            changePlayerActionMessage({ action: '' });
        }, 4000);
    }, []);

    return (
        <div
            style={{ display: isBarInProgress ? 'flex' : 'none' }}
            className={styles.messageContainer}
        >
            <div className={styles.text}>
                <Check /> {playerActionMessage.user || ''} {ActionMessage[playerActionMessage.action]}
            </div>

            <div className={styles.progressBar}>
                <span></span>
            </div>
        </div>
    );
}
