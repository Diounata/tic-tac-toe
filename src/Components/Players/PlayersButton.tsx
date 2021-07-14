import { ButtonHTMLAttributes } from 'react';
import styles from '@styles/Players/PlayersButton.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PlayersButton(props: ButtonProps) {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
}
