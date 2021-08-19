import { ReactNode } from 'react';
import styles from '@styles/General/Alert.module.scss';

type AlertProps = {
    children: ReactNode;
};

export default function Alert({ children }: AlertProps) {
    return <div className={styles.alertContainer}>{children}</div>;
}
