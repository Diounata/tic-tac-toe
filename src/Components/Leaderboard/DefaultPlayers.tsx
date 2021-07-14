import styles from '@styles/Leaderboard/PlayerData.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';

export default function DefaultPlayers() {
    return (
        <>
            <div>
                <div className={styles.icons}>
                    <X />
                </div>

                <div className={styles.username}>Player X</div>

                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0 %</div>
                <div>0</div>
            </div>

            <div>
                <div className={styles.icons}>
                    <O />
                </div>

                <div className={styles.username}>Player O</div>

                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0 %</div>
                <div>0</div>
            </div>
        </>
    );
}
