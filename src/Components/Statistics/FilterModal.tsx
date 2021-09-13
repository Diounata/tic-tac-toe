import styles from '@styles/Statistics/FilterModal.module.scss';

import SortUp from '@Icons/SortUp';
import SortDown from '@Icons/SortDown';
import SortArrowUp from '@Icons/SortArrowUp';
import SortArrowDown from '@Icons/SortArrowDown';

import Modal from '@Components/Modal/Modal';

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
                    <div>
                        <div>
                            Name <SortArrowUp />
                        </div>

                        <button className={styles.selected}>
                            <SortUp />
                        </button>
                    </div>
                    <div>
                        <div>Score</div>

                        <button></button>
                    </div>
                    <div>
                        <div>Played time</div>

                        <button></button>
                    </div>
                    <div>
                        <div>Played games</div>

                        <button></button>
                    </div>
                    <div>
                        <div>Wins</div>

                        <button></button>
                    </div>
                    <div>
                        <div>Defeats</div>

                        <button></button>
                    </div>
                    <div>
                        <div>Ties</div>

                        <button></button>
                    </div>
                </div>
            </div>

            <footer>
                <button onClick={() => changeModalState(false)}>Done</button>
            </footer>
        </Modal>
    );
}
