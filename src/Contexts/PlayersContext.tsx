import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export const PlayersContext = createContext({} as ContextProps);

import EmptyPlayer from '@utils/EmptyPlayer.json';

type ChildrenProps = {
    children: ReactNode;
};

type PlayerProps = {
    name: string;
    color: ColorProps;
    match: PlayerMatchProps;
    score: number;
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
};

type EditingPlayerProps = {
    player: PlayerProps;
    key: number;
};

type PlayerActionMessagesProps = {
    action: string;
    user?: string;
};

type HistoryPlayerProps = {
    name: string;
    color: string;
    situation: 'Winner' | 'Loser' | 'Tie';
};

type HistoryProps = {
    x: HistoryPlayerProps;
    o: HistoryPlayerProps;
};

type ContextProps = {
    players: PlayerProps[];
    history: HistoryProps[];
    playersName: string[];
    playerActionMessage: PlayerActionMessagesProps;
    selectedPlayer: number;
    selectedPlayerForEditing: EditingPlayerProps;
    isEditingAPlayer: boolean;

    updatePlayersWhenWinning(winnerName: string, loserName: string): void;
    updatePlayersWhenTie(player1Name: string, player2Name: string): void;
    updateHistory(history: HistoryProps): void;
    changePlayerActionMessage(value: PlayerActionMessagesProps): void;
    changeIsEditingAPlayer(value: boolean): void;
    changeSelectedPlayer(key: number): void;
    addNewPlayer(newPlayer: PlayerProps): void;
    updateSelectedPlayerForEditing(key: number): void;
    editPlayer(player: PlayerProps): void;
    deletePlayer(key: number): void;
    resetPlayerStats(key: number): void;
    calcWinrate(wins: number, matches: number): number;
};

export function PlayersContextProvider({ children }: ChildrenProps) {
    const [players, setPlayers] = useState([
        {
            name: 'Diounata',
            color: {
                hex: '#fff',
                name: 'White',
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
            },
            score: 0,
        },

        {
            name: 'John',
            color: {
                hex: '#bb86fc',
                name: 'Purple',
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
            },
            score: 0,
        },

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
            },
            score: 0,
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
            },
            score: 0,
        },
    ]);

    const [history, setHistory] = useState<HistoryProps[]>([]);

    const [playersName, setPlayersName] = useState({} as string[]);
    const [playerActionMessage, setPlayerActionMessage] = useState({} as PlayerActionMessagesProps);
    const [selectedPlayer, setSelectedPlayer] = useState<number>();
    const [selectedPlayerForEditing, setSelectedPlayerForEditing] = useState<EditingPlayerProps>(EmptyPlayer[0]);
    const [isEditingAPlayer, setIsEditingAPlayer] = useState(false);

    function updatePlayers(p: PlayerProps[]): void {
        const currentPlayers = p;

        const newPlayers = sortPlayers(currentPlayers);

        setPlayers(newPlayers);
    }

    function updatePlayersWhenWinning(winnerName: string, loserName: string): void {
        const winner = players.findIndex(p => p.name === winnerName);
        const loser = players.findIndex(p => p.name === loserName);

        players[winner].match.wins += 1;
        players[winner].match.matches += 1;
        players[winner].score += 2;

        players[loser].match.defeats += 1;
        players[loser].match.matches += 1;
        players[loser].score -= 1;

        updatePlayers(players);
    }

    function updatePlayersWhenTie(player1Name: string, player2Name: string): void {
        const player1 = players.findIndex(p => p.name === player1Name);
        const player2 = players.findIndex(p => p.name === player2Name);

        const arrayWithPlayers = [player1, player2];

        arrayWithPlayers.forEach(element => {
            players[element].match.matches += 1;
            players[element].match.ties += 1;
            players[element].score += 0.5;
        });

        updatePlayers(players);
    }

    function updateHistory(newMatchHistory: HistoryProps): void {
        const filteredHistory = history.filter((i, key) => key < 20);
        const newHistory = [newMatchHistory, ...filteredHistory];

        setHistory(newHistory);
    }

    function changePlayerActionMessage(value: PlayerActionMessagesProps) {
        setPlayerActionMessage(value);
    }

    function changeIsEditingAPlayer(value: boolean): void {
        setIsEditingAPlayer(value);
    }

    function changeSelectedPlayer(key: number): void {
        setSelectedPlayer(key);
    }

    function updateSelectedPlayerForEditing(key: number): void {
        const editingPlayer = players.filter((p, index) => index === key);

        setSelectedPlayerForEditing({ player: editingPlayer[0], key });
    }

    function addNewPlayer(newPlayer: PlayerProps): void {
        const newPlayers = [newPlayer, ...players];

        updatePlayers(newPlayers);
        changePlayerActionMessage({ action: 'add', user: newPlayer.name });
    }

    function editPlayer(player: PlayerProps): void {
        const newPlayers = players.map((p, index) => (selectedPlayerForEditing.key === index ? player : p));

        updatePlayers(newPlayers);
        setIsEditingAPlayer(false);
        changePlayerActionMessage({ action: 'edit', user: player.name });
    }

    function deletePlayer(key: number): void {
        const deletedPlayer = players.filter((p, i) => i === key);
        const newPlayers = players.filter((p, i) => i !== key);

        updatePlayers(newPlayers);
        changePlayerActionMessage({ action: 'delete', user: deletedPlayer[0].name });
    }

    function resetPlayerStats(key: number): void {
        const newPlayerStatistic = players.filter((p, i) => i === key);

        Object.keys(newPlayerStatistic[0].match).forEach(item => (newPlayerStatistic[0].match[item] = 0));
        newPlayerStatistic[0].score = 0;

        const newPlayers = players.map((player, index) => (index !== key ? player : newPlayerStatistic[0]));

        updatePlayers(newPlayers);
        changePlayerActionMessage({ action: 'reset', user: newPlayerStatistic[0].name });
    }

    function calcWinrate(wins: number, matches: number): number {
        const winrate = () => {
            if (matches === 0) {
                return 0;
            } else {
                const winrate = (wins * 100) / matches;

                return winrate;
            }
        };

        return winrate();
    }

    function sortPlayers(p: PlayerProps[]): PlayerProps[] {
        const sortedPlayers = p.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });

        return sortedPlayers;
    }

    useEffect(() => {
        const newPlayersName = players.map(player => player.name);

        setPlayersName(newPlayersName);
    }, [players]);

    return (
        <PlayersContext.Provider
            value={{
                players,
                history,
                playersName,
                playerActionMessage,
                selectedPlayer,
                selectedPlayerForEditing,
                isEditingAPlayer,
                updatePlayersWhenWinning,
                updatePlayersWhenTie,
                updateHistory,
                changePlayerActionMessage,
                changeIsEditingAPlayer,
                changeSelectedPlayer,
                addNewPlayer,
                updateSelectedPlayerForEditing,
                editPlayer,
                deletePlayer,
                resetPlayerStats,
                calcWinrate,
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
}

export function usePlayers() {
    return useContext(PlayersContext);
}
