import Link from 'next/link';
import styles from '../../styles/General/BackButton.module.scss';

import BackIcon from '../../Icons/Back';

type ButtonProps = {
    href?: string;
};

export default function BackButton({ href }: ButtonProps) {
    return (
        <div className={styles.back}>
            <Link href={href || '/'}>
                <a>
                    <BackIcon />
                </a>
            </Link>
        </div>
    );
}
