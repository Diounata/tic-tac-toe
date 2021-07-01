import { useRouter } from 'next/router';
import styles from '../styles/404.module.scss';

import TitlePage from '../utils/TitlePage';

import Sad from '../Icons/Sad';

export default function NotFound() {
    const router = useRouter();

    function redirectUser(): void {
        router.push('/');
    }

    return (
        <div className={styles.container}>
            <TitlePage title="Page doesn't found" />

            <Sad />

            <div>
                <span>404</span> This page does not exist
            </div>

            <button onClick={redirectUser}>Return home</button>
        </div>
    );
}
