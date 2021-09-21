import SortUp from '@Icons/SortUp';
import SortDown from '@Icons/SortDown';
import { sections } from '@utils/FiltersSections';

import { usePlayers } from '@Contexts/PlayersContext';

type AttributeProps =
    | 'name'
    | 'score'
    | 'match.matches'
    | 'match.wins'
    | 'match.defeats'
    | 'match.ties'
    | 'playedTime.ms';

type OrderProps = 1 | -1;

export default function FilterModalSection({ styles }) {
    const { sortOrder, changeSortOrder } = usePlayers();

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

    function showOrderIcon(filter: string): JSX.Element {
        if (filter === sortOrder.attribute) {
            return sortOrder.order === 1 ? <SortUp /> : <SortDown />;
        }
    }

    return (
        <>
            {sections.map(section => (
                <div>
                    <div>{section.description}</div>

                    <button
                        onClick={() => changeFilter(section.attribute)}
                        className={sortOrder.attribute === section.attribute && styles.selected}
                    >
                        {showOrderIcon(section.attribute)}
                    </button>
                </div>
            ))}
        </>
    );
}
