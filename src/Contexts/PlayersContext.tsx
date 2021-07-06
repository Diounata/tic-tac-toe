import { createContext, ReactNode, useContext, useState } from 'react';

export const PlayersContext = createContext({} as ContextProps);

type ChildrenProps = {
    children: ReactNode;
};

type PlayerProps = {
    name: string;
    match: PlayerMatchProps;
};

type PlayerMatchProps = {
    matches: number;
    wins: number;
    defeats: number;
    ties: number;
    score: number;
};

type ContextProps = {
    players: PlayerProps[];
    defaultPlayers: PlayerProps[];
};

export function PlayersContextProvider({ children }: ChildrenProps) {
    const [players, setPlayers] = useState([
        {
            name: 'Diounata',
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
                score: 0,
            },
        },
    ]);

    const [defaultPlayers, setDefaultPlayers] = useState([
        {
            name: 'Player X',
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
                score: 0,
            },
        },

        {
            name: 'Player O',
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
                score: 0,
            },
        },
    ]);

    return (
        <PlayersContext.Provider value={{ players, defaultPlayers }}>
            {children}
        </PlayersContext.Provider>
    );
}

export function usePlayers() {
    return useContext(PlayersContext);
}
