import styles from '../styles/Game.module.scss';

export default function Game() {
    return (
        <table className={styles.gameContainer}>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}
