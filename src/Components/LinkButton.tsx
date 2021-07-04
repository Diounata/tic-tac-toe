import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '../styles/Button.module.scss';

type ButtonProps = {
    href: string;
    children: ReactNode;
};

export default function LinkButton(props: ButtonProps) {
    return (
        <Link href={props.href}>
            <button className={styles.button}>
                <a>{props.children}</a>
            </button>
        </Link>
    );
}
