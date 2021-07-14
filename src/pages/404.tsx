import styles from '@styles/404.module.scss';

import TitlePage from '@utils/TitlePage';
import LinkButton from '@Components/General/LinkButton';

import Sad from '@Icons/Sad';
import House from '@Icons/House';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <TitlePage title="Page doesn't found" />

            <Sad />

            <div>
                <span>404</span> This page does not exist
            </div>

            <LinkButton href='/'>
                <House /> Return home
            </LinkButton>
        </div>
    );
}
