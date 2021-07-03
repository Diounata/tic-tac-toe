import { useRouter } from 'next/router';
import styles from '../styles/Menu.module.scss';

import Button from './Button';
import Play from '../Icons/Play';
import Info from '../Icons/Info';
import History from '../Icons/History';
import Trophy from '../Icons/Trophy';
import Users from '../Icons/Users';
import Gear from '../Icons/Gear';

export default function Menu() {
    const router = useRouter();

    function handleRouter(path: string): void {
        router.push(`/${path}`);
    }

    return (
        <main className={styles.menuContainer}>
            <div className={styles.startButton}>
                <Button onClick={() => handleRouter('play')}>
                    <Play /> Start new game
                </Button>
            </div>

            <div>
                <Button onClick={() => handleRouter('undefined')}>
                    <Info /> About
                </Button>

                <Button onClick={() => handleRouter('undefined')}>
                    <History /> History
                </Button>

                <Button onClick={() => handleRouter('undefined')}>
                    <Trophy /> Leaderboard
                </Button>

                <Button onClick={() => handleRouter('undefined')}>
                    <Users /> Players
                </Button>

                <Button onClick={() => handleRouter('undefined')}>
                    <Gear /> Settings
                </Button>
            </div>
        </main>
    );
}
