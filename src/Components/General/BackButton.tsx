import Link from 'next/link';
import styles from '../../styles/General/BackButton.module.scss';

import BackIcon from '../../Icons/Back';

export default function BackButton() {
    return (
        <div className={styles.back}>
            <Link href='/'>
                <a>
                    <BackIcon />
                </a>
            </Link>
        </div>
    );
}
