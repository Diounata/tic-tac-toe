import { useRouter } from 'next/router';
import styles from '../styles/Menu.module.scss';

import Button from './Button';

export default function Menu() {
    const router = useRouter();

    function handleRouter(path: string): void {
        router.push(`/${path}`);
    }

    return (
        <main className={styles.menuContainer}>
            <Button onClick={() => handleRouter('as')}>Players</Button>

            <Button onClick={() => handleRouter('play')}>Start new game</Button>

            <Button onClick={() => handleRouter('as')}>Settings</Button>
        </main>
    );
}
