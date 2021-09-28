import SortUp from '@Icons/SortUp';
import SortDown from '@Icons/SortDown';

import { usePlayers } from '@Contexts/PlayersContext';

type OrderProps = 1 | -1;

export default function useFilterFunctions() {
    const { sortOrder, changeSortOrder } = usePlayers();

    function getFilterIndex(filterArray: string[]): number {
        return filterArray.length === 2 ? 1 : 0;
    }

    function changeFilter(filter): void {
        const filterIndex = getFilterIndex(filter);
        const order: OrderProps =
            sortOrder.attribute[filterIndex] === filter[filterIndex] ? (sortOrder.order === -1 ? 1 : -1) : 1;

        changeSortOrder({ attribute: [...filter], order });
    }

    function showOrderIcon(filter: string[]): JSX.Element {
        const filterIndex = getFilterIndex(filter);

        if (filter[filterIndex] === sortOrder.attribute[filterIndex]) {
            return sortOrder.order === 1 ? <SortUp /> : <SortDown />;
        }
    }

    return { getFilterIndex, changeFilter, showOrderIcon };
}
