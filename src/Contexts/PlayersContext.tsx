import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import EmptyPlayer from '@utils/EmptyPlayer.json';
import convertTime from '@utils/timeConversor';

export const PlayersContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface PlayerProps {
    name: string;
    color: ColorProps;
    match: PlayerMatchProps;
    score: number;
    playedTime: PlayedTimeProps;
}

interface ColorProps {
    hex: string;
    name: string;
    id: number;
}

interface PlayerMatchProps {
    matches: number;
    wins: number;
    defeats: number;
    ties: number;
}

interface PlayedTimeProps {
    hour: number;
    min: number;
    sec: number;
    ms: number;
}

interface EditingPlayerProps {
    player: PlayerProps;
    key: number;
}

interface PlayerActionMessagesProps {
    action: string;
    user?: string;
}

interface HistoryPlayerProps {
    name: string;
    color: string;
    situation: 'Winner' | 'Loser' | 'Tie';
}

interface HistoryProps {
    x: HistoryPlayerProps;
    o: HistoryPlayerProps;
    duration: {
        hour: number;
        min: number;
        sec: number;
    };
}

interface SortProps {
    attribute: Array<
        'name' | 'score' | 'match' | 'matches' | 'wins' | 'defeats' | 'ties' | 'playedTime' | 'ms'
    >;
    order: -1 | 1;
}

interface ContextProps {
    players: PlayerProps[];
    history: HistoryProps[];
    playersName: string[];
    playerActionMessage: PlayerActionMessagesProps;
    selectedPlayer: number;
    selectedPlayerForEditing: EditingPlayerProps;
    isEditingAPlayer: boolean;
    sortOrder: SortProps;

    updatePlayersWhenWinning(winnerName: string, loserName: string): void;
    updatePlayersWhenTie(player1Name: string, player2Name: string): void;
    updatePlayerPlayedTime(name1: string, name2: string, ms: number);
    updateHistory(history: HistoryProps): void;
    deleteAllHistory(): void;
    changePlayerActionMessage(value: PlayerActionMessagesProps): void;
    changeIsEditingAPlayer(value: boolean): void;
    changeSelectedPlayer(key: number): void;
    addNewPlayer(newPlayer: PlayerProps): void;
    updateSelectedPlayerForEditing(key: number): void;
    editPlayer(player: PlayerProps): void;
    deletePlayer(key: number): void;
    resetPlayerStats(key: number): void;
    calcWinrate(wins: number, matches: number): number;
    changeSortOrder(newSort: SortProps): void;
}

export function PlayersContextProvider({ children }: ChildrenProps) {
    const [players, setPlayers] = useState([
        {
            name: 'Diounata',
            color: {
                hex: '#fff',
                name: 'White',
                id: 7,
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
            },
            score: 0,
            playedTime: {
                hour: 0,
                min: 0,
                sec: 0,
                ms: 0,
            },
        },

        {
            name: 'John',
            color: {
                hex: '#bb86fc',
                name: 'Purple',
                id: 5,
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
            },
            score: 10,
            playedTime: {
                hour: 0,
                min: 0,
                sec: 0,
                ms: 0,
            },
        },

        {
            name: 'Player O',
            color: {
                hex: '#bb86fc',
                name: 'Purple',
                id: 5,
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
            },
            score: -6,
            playedTime: {
                hour: 0,
                min: 0,
                sec: 0,
                ms: 0,
            },
        },

        {
            name: 'Player X',
            color: {
                hex: '#04dac2',
                name: 'Cyan',
                id: 1,
            },
            match: {
                matches: 0,
                wins: 0,
                defeats: 0,
                ties: 0,
            },
            score: 0,
            playedTime: {
                hour: 0,
                min: 0,
                sec: 0,
                ms: 0,
            },
        },
    ]);

    const [history, setHistory] = useState<HistoryProps[]>([]);

    const [playersName, setPlayersName] = useState({} as string[]);
    const [playerActionMessage, setPlayerActionMessage] = useState({} as PlayerActionMessagesProps);
    const [selectedPlayer, setSelectedPlayer] = useState<number>();
    const [selectedPlayerForEditing, setSelectedPlayerForEditing] = useState<EditingPlayerProps>(EmptyPlayer);
    const [isEditingAPlayer, setIsEditingAPlayer] = useState(false);
    const [sortOrder, setSortOrder] = useState<SortProps>({
        attribute: ['name'],
        order: -1,
    }); // statistics

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

        [player1, player2].forEach(element => {
            players[element].match.matches += 1;
            players[element].match.ties += 1;
            players[element].score += 0.5;
        });

        updatePlayers(players);
    }

    function updatePlayerPlayedTime(name1: string, name2: string, ms: number) {
        function update(name: string) {
            const [filteredPlayer] = players.filter(p => p.name === name);
            const newMs = filteredPlayer.playedTime.ms + ms;

            filteredPlayer.playedTime = { ...convertTime(newMs), ms: newMs };

            return filteredPlayer;
        }

        const updatedPlayer1 = update(name1);
        const updatedPlayer2 = update(name2);

        const newPlayers = players.map(p => {
            switch (p.name) {
                case name1:
                    return updatedPlayer1;
                case name2:
                    return updatedPlayer2;
                default:
                    return p;
            }
        });

        updatePlayers(newPlayers);
    }

    function updateHistory(newMatchHistory: HistoryProps): void {
        const filteredHistory = history.filter((i, key) => key < 20);
        const newHistory = [newMatchHistory, ...filteredHistory];

        setHistory(newHistory);
    }

    function deleteAllHistory(): void {
        setHistory([]);
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
        const [deletedPlayer] = players.filter((p, i) => i === key);
        const newPlayers = players.filter((p, i) => i !== key);

        updatePlayers(newPlayers);
        changePlayerActionMessage({
            action: 'delete',
            user: deletedPlayer.name,
        });
    }

    function resetPlayerStats(key: number): void {
        const [newPlayerStatistic] = players.filter((p, i) => i === key);

        Object.keys(newPlayerStatistic.match).forEach(attribute => (newPlayerStatistic.match[attribute] = 0));
        Object.keys(newPlayerStatistic.playedTime).forEach(
            attribute => (newPlayerStatistic.playedTime[attribute] = 0)
        );
        newPlayerStatistic.score = 0;

        const newPlayers = players.map((player, index) => (index !== key ? player : newPlayerStatistic));

        updatePlayers(newPlayers);
        changePlayerActionMessage({
            action: 'reset',
            user: newPlayerStatistic.name,
        });
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

    function changeSortOrder(newSort: SortProps): void {
        setSortOrder(newSort);
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
                sortOrder,
                updatePlayersWhenWinning,
                updatePlayersWhenTie,
                updatePlayerPlayedTime,
                updateHistory,
                deleteAllHistory,
                changePlayerActionMessage,
                changeIsEditingAPlayer,
                changeSelectedPlayer,
                addNewPlayer,
                updateSelectedPlayerForEditing,
                editPlayer,
                deletePlayer,
                resetPlayerStats,
                calcWinrate,
                changeSortOrder,
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
}

export function usePlayers() {
    return useContext(PlayersContext);
}
