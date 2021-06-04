import styles from '../styles/Scoreboard.module.scss';

export default function Scoreboard() {
    return (
        <header className={styles.scoreboardComponent}>
            <div>
                <div>
                    <span className={styles.x}>&times;</span> Player 1
                </div>
                <div>2</div>
            </div>

            <div className={styles.divisor}>&times;</div>

            <div>
                <div>0</div>
                <div>
                    Player 2 <span className={styles.o}>o</span>
                </div>
            </div>
        </header>
    );
}
