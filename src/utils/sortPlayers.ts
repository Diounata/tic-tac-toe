type ColorProps = {
    hex: string;
    name: string;
    id: number;
};

type PlayerMatchProps = {
    matches: number;
    wins: number;
    defeats: number;
    ties: number;
};

type PlayedTimeProps = {
    hour: number;
    min: number;
    sec: number;
    ms: number;
};

type PlayerProps = {
    name: string;
    color: ColorProps;
    match: PlayerMatchProps;
    score: number;
    playedTime: PlayedTimeProps;
};

type FilterProps = {
    attribute: Array<
        'name' | 'score' | 'match' | 'matches' | 'wins' | 'defeats' | 'ties' | 'playedTime' | 'ms'
    >;
    order: -1 | 1;
};

export default function sortPlayers(obj: PlayerProps[], filter: FilterProps) {
    function orderValues(a: number, b: number): number {
        return filter.order === 1 ? b - a : a - b;
    }

    switch (filter.attribute[0]) {
        case 'name':
            const sortedArray = obj.sort();

            return filter.order === -1 ? sortedArray.reverse() : sortedArray;

        case 'score':
            return obj.sort((a, b) => orderValues(a.score, b.score));

        default:
            const attribute = filter.attribute;
            const newArray = obj.sort();

            return newArray.sort((a, b) =>
                orderValues(a[attribute[0]][attribute[1]], b[attribute[0]][attribute[1]])
            );
    }
}
