import styles from '@styles/Players/WarningAlert.module.scss';

import Danger from '@Icons/Danger';

type Props = {
    hasError: {
        situation: boolean;
        text: string;
    }
};

export default function WarningAlert({ hasError }: Props) {
    return (
        <div
            style={{ display: hasError.situation ? 'flex' : 'none' }}
            className={styles.container}
        >
            <Danger color='#000' /> {hasError.text}
        </div>
    );
}
