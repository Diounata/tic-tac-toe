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
    attribute:
        | 'name'
        | 'score'
        | 'match.matches'
        | 'match.wins'
        | 'match.defeats'
        | 'match.ties'
        | 'playedTime.ms';
    order: -1 | 1;
};

export default function sortPlayers(obj: PlayerProps[], filter: FilterProps) {
    const sortedArray = obj.sort((a, b) => {
        if (filter.attribute === 'score') {
            return filter.order === -1 ? a.score - b.score : b.score - a.score;
        } else {
            if (filter.order === 1) {
                if (a[filter.attribute] - b[filter.attribute]) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                if (a[filter.attribute] - b[filter.attribute]) {
                    return -1;
                } else {
                    return 1;
                }
            }
        }
    });

    return sortedArray;
}
