import Link from 'next/link';
import styles from '@styles/General/BackButton.module.scss';

import BackIcon from '@Icons/Back';

type ButtonProps = {
    href?: string;
    onClick?: () => void;
};

export default function BackButton(props: ButtonProps) {
    return (
        <div className={styles.back}>
            <Link {...props} href={props.href || '/'}>
                <a>
                    <BackIcon />
                </a>
            </Link>
        </div>
    );
}
