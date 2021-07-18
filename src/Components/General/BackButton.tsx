import Link from 'next/link';
import styles from '@styles/General/BackButton.module.scss';

import BackIcon from '@Icons/Back';

type ButtonProps = {
    href?: string;
    onClick?: () => void;
};

export default function BackButton(props: ButtonProps) {
    return (
        <Link {...props} href={props.href || '/'}>
            <div className={styles.back}>
                <a>
                    <BackIcon />
                </a>
            </div>
        </Link>
    );
}
