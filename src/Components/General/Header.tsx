import { ReactNode } from 'react';
import styles from '@styles/General/Header.module.scss';

type HeaderProps = {
    children: ReactNode;
};

export default function Header(props: HeaderProps) {
    return (
        <header className={styles.headerContainer}>
            <h2>{props.children}</h2>
        </header>
    );
}
