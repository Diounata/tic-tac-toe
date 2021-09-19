import styles from '@styles/Statistics/FilterModal.module.scss';

import SortUp from '@Icons/SortUp';
import SortDown from '@Icons/SortDown';

import Modal from '@Components/Modal/Modal';

import { usePlayers } from '@Contexts/PlayersContext';
import { useModal } from '@Contexts/ModalContext';

type AttributeProps =
    | 'name'
    | 'score'
    | 'match.matches'
    | 'match.wins'
    | 'match.defeats'
    | 'match.ties'
    | 'playedTime.ms';

type OrderProps = 1 | -1;

export default function FilterModal() {
    const { sortOrder, changeSortOrder } = usePlayers();
    const { changeModalState } = useModal();

    function changeFilter(filter: AttributeProps): void {
        function getOrder(): OrderProps {
            if (sortOrder.attribute === filter) {
                return sortOrder.order === -1 ? 1 : -1;
            } else {
                return 1;
            }
        }

        const order: OrderProps = getOrder();

        changeSortOrder({ attribute: filter, order });
    }

    function showOrderIcon(filter: AttributeProps): JSX.Element {
        if (filter === sortOrder.attribute) {
            return sortOrder.order === 1 ? <SortUp /> : <SortDown />;
        }
    }

    return (
        <Modal>
            <div className={styles.container}>
                <header>
                    <h3>Filter users by</h3>
                </header>

                <div className={styles.filters}>
                    <div>
                        <div>Score</div>

                        <button
                            onClick={() => changeFilter('score')}
                            className={sortOrder.attribute === 'score' && styles.selected}
                        >
                            {showOrderIcon('score')}
                        </button>
                    </div>
                    <div>
                        <div>Name</div>

                        <button
                            onClick={() => changeFilter('name')}
                            className={sortOrder.attribute === 'name' && styles.selected}
                        >
                            {showOrderIcon('name')}
                        </button>
                    </div>
                    <div>
                        <div>Played time</div>

                        <button
                            onClick={() => changeFilter('playedTime.ms')}
                            className={sortOrder.attribute === 'playedTime.ms' && styles.selected}
                        >
                            {showOrderIcon('playedTime.ms')}
                        </button>
                    </div>
                    <div>
                        <div>Played games</div>

                        <button
                            onClick={() => changeFilter('match.matches')}
                            className={sortOrder.attribute === 'match.matches' && styles.selected}
                        >
                            {showOrderIcon('match.matches')}
                        </button>
                    </div>
                    <div>
                        <div>Wins</div>

                        <button
                            onClick={() => changeFilter('match.wins')}
                            className={sortOrder.attribute === 'match.wins' && styles.selected}
                        >
                            {showOrderIcon('match.wins')}
                        </button>
                    </div>
                    <div>
                        <div>Defeats</div>

                        <button
                            onClick={() => changeFilter('match.defeats')}
                            className={sortOrder.attribute === 'match.defeats' && styles.selected}
                        >
                            {showOrderIcon('match.defeats')}
                        </button>
                    </div>
                    <div>
                        <div>Ties</div>

                        <button
                            onClick={() => changeFilter('match.ties')}
                            className={sortOrder.attribute === 'match.ties' && styles.selected}
                        >
                            {showOrderIcon('match.ties')}
                        </button>
                    </div>
                </div>
            </div>

            <footer>
                <button onClick={() => changeModalState(false)}>Done</button>
            </footer>
        </Modal>
    );
}
