import { getFilterIndex, changeFilter, showOrderIcon } from './FilterFunctions';
import sections from '@utils/FiltersSections.json';

import { usePlayers } from '@Contexts/PlayersContext';

export default function FilterModalSection({ styles }) {
    const { sortOrder } = usePlayers();

    function getClassName(filter: string[]) {
        const filterIndex = getFilterIndex(filter);

        if (filter[filterIndex] === sortOrder.attribute[filterIndex]) {
            return styles.selected;
        }
    }

    return (
        <>
            {sections.map((section, key) => (
                <div key={key}>
                    <div>{section.description}</div>

                    <button
                        onClick={() => changeFilter(section.attribute)}
                        className={getClassName(section.attribute)}
                    >
                        {showOrderIcon(section.attribute)}
                    </button>
                </div>
            ))}
        </>
    );
}
