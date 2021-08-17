import { ReactNode } from 'react';
import styles from '@styles/General/RadioButton.module.scss';

type RadioProps = {
    id: string;
    name: string;
    children: ReactNode;
    selected?: boolean;

    onClick?: () => void;
};

export default function RadioButton({ id, name, children, selected, onClick }: RadioProps) {
    return (
        <div className={styles.container}>
            <input type='radio' name={name} id={id} defaultChecked={selected} onClick={onClick} />

            <label htmlFor={id}>{children}</label>
        </div>
    );
}
