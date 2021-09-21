import styles from '@styles/Statistics/FilterModal.module.scss';

import Modal from '@Components/Modal/Modal';
import FilterModalSection from './FilterModalSection';

import { useModal } from '@Contexts/ModalContext';

export default function FilterModal() {
    const { changeModalState } = useModal();

    return (
        <Modal>
            <div className={styles.container}>
                <header>
                    <h3>Filter users by</h3>
                </header>

                <div className={styles.filters}>
                    <FilterModalSection styles={styles} />
                </div>
            </div>

            <footer>
                <button onClick={() => changeModalState(false)}>Done</button>
            </footer>
        </Modal>
    );
}
