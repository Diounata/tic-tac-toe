import { createContext, ReactNode, useContext, useState } from 'react';

export const PlayersContext = createContext({} as ContextProps);

type ChildrenProps = {
    children: ReactNode;
};

type PlayerProps = {
    name: string;
    color: ColorProps;
    match: PlayerMatchProps;
};

type ColorProps = {
    hex: string;
    name: string;
};

type PlayerMatchProps = {
    matches: number;
    wins: number;
    defeats: number;
    ties: number;
    winrate: number;
    score: number;
};

type ContextProps = {
    players: PlayerProps[];
    defaultPlayers: PlayerProps[];
    selectedPlayer: number;

    changeSelectedPlayer(key: number): void;
    addNewPlayer(newPlayer: PlayerProps): void;
    deletePlayer(indexPlayer: number): void;
    resetPlayerStats(indexPlayer: number): void;
};

export function PlayersContextProvider({ children }: ChildrenProps) {
    const [players, setPlayers] = useState([
        {
            name: 'Diounata',
            color: {
                hex: '#FFF',
                name: 'White',
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
                winrate: 0,
                score: 0,
            },
        },
    ]);

    const [defaultPlayers, setDefaultPlayers] = useState([
        {
            name: 'Player X',
            color: {
                hex: '#04dac2',
                name: 'Blue',
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
                winrate: 0,
                score: 0,
            },
        },

        {
            name: 'Player O',
            color: {
                hex: '#bb86fc',
                name: 'Purple',
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
                winrate: 0,
                score: 0,
            },
        },
    ]);

    const [selectedPlayer, setSelectedPlayer] = useState<number>();

    function changeSelectedPlayer(key: number): void {
        setSelectedPlayer(key);
    }

    function addNewPlayer(newPlayer: PlayerProps): void {
        const newPlayers = [...players, newPlayer];

        setPlayers(newPlayers);
    }

    function deletePlayer(indexPlayer: number): void {
        const newPlayers = players.filter((p, i) => i !== indexPlayer);

        setPlayers(newPlayers);
    }

    function resetPlayerStats(indexPlayer: number): void {
        const newPlayerStatistic = players.filter((p, i) => i === indexPlayer);
        Object.keys(newPlayerStatistic[0].match).forEach(item => newPlayerStatistic[0].match[item] = 0);

        const newPlayers = players.map((player, index) => index !== indexPlayer ? player : newPlayerStatistic[0]);

        setPlayers(newPlayers);
    }

    return (
        <PlayersContext.Provider
            value={{
                players,
                defaultPlayers,
                selectedPlayer,
                changeSelectedPlayer,
                addNewPlayer,
                deletePlayer,
                resetPlayerStats
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
}

export function usePlayers() {
    return useContext(PlayersContext);
}
