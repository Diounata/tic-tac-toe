import styles from '@styles/Statistics/FilterButton.module.scss';

import Slider from '@Icons/Slider';

import { useModal } from '@Contexts/ModalContext';

export default function FilterButton() {
    const { changeModalState } = useModal();

    return (
        <div className={styles.filterContainer}>
            <button onClick={() => changeModalState(true)}>
                <Slider /> Filter
            </button>
        </div>
    );
}
