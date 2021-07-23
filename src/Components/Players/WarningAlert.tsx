import styles from '@styles/Players/WarningAlert.module.scss';

import Danger from '@Icons/Danger';
import DeleteCircle from '@Icons/DeleteCircle';

type ErrorProps = {
    situation: boolean;
    text: string;
};

type Props = {
    hasError: {
        situation: boolean;
        text: string;
    };

    updateHasError: (value: ErrorProps) => void;
};

export default function WarningAlert({ hasError, updateHasError }: Props) {
    return (
        <div
            style={{ display: hasError.situation ? 'flex' : 'none' }}
            className={styles.container}
        >
            <div>
                <Danger color='#000' /> {hasError.text || ''}
            </div>

            <DeleteCircle
                onClick={() => updateHasError({ situation: false, text: '' })}
                color='#000'
            />
        </div>
    );
}
