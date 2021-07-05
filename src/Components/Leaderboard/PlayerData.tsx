import styles from '../../styles/Leaderboard/PlayerData.module.scss';

import X from '../../Icons/X';
import O from '../../Icons/O';

export default function PlayerData() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <X />
                    <O />
                </div>

                <div className={styles.username}>Diounata</div>

                <div>27</div>
                <div>10</div>
                <div>5</div>
                <div>2</div>
                <div>22 p/</div>
            </div>

            <div className={styles.container}>
                <div className={styles.icons}>
                    <X />
                    <O />
                </div>

                <div className={styles.username}>João</div>

                <div>27</div>
                <div>10</div>
                <div>5</div>
                <div>2</div>
                <div>22 p/</div>
            </div>

            <div className={styles.container}>
                <div className={styles.icons}>
                    <X />
                    <O />
                </div>

                <div className={styles.username}>Maria</div>

                <div>27</div>
                <div>10</div>
                <div>5</div>
                <div>2</div>
                <div>22 p/</div>
            </div>
        </>
    );
}
