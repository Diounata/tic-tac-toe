import styles from '../../styles/Players/PlayerData.module.scss';

import X from '../../Icons/X';
import O from '../../Icons/O';

import PlayersButton from './PlayersButton';

export default function PlayerData() {
    return (
        <article className={styles.container}>
            <div>
                <div className={styles.icons}>
                    <X />
                    <O />
                </div>

                <div className={styles.username}>Diounata</div>

                <div className={styles.actions}>
                    <PlayersButton>Edit</PlayersButton>
                    <PlayersButton>Delete</PlayersButton>
                    <PlayersButton>Reset</PlayersButton>
                </div>
            </div>
        </article>
    );
}
