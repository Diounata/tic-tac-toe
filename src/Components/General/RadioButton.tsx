import { ReactNode } from 'react';
import styles from '@styles/General/RadioButton.module.scss';

type RadioProps = {
    id: string;
    name: string;
    children: ReactNode;
    selected?: boolean;
};

export default function RadioButton({ id, name, children, selected }: RadioProps) {
    return (
        <div className={styles.container}>
            <input type='radio' name={name} id={id} checked={selected} />

            <label htmlFor={id}>{children}</label>
        </div>
    );
}
