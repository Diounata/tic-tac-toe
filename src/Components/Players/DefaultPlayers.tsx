import styles from '../../styles/Players/PlayerData.module.scss';

import X from '../../Icons/X';
import O from '../../Icons/O';
import XCircle from '../../Icons/XCircle';

export default function PlayerData() {
    return (
        <article className={styles.container}>
            <div>
                <div className={styles.icons}>
                    <X />
                </div>

                <div className={styles.username}>Player X</div>
                <div className={styles.colorSquare}>
                    <div style={{ background: '#04DAC2' }}></div> Blue
                </div>
                <div>
                    <XCircle />
                </div>
            </div>

            <div>
                <div className={styles.icons}>
                    <O />
                </div>

                <div className={styles.username}>Player O</div>
                <div className={styles.colorSquare}>
                    <div style={{ background: '#BB86FC' }}></div> Purple
                </div>
                <div>
                    <XCircle />
                </div>
            </div>
        </article>
    );
}
