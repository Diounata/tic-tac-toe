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

type ContextProps = {
    players: PlayerProps[];
    playersName: string[];
    playerActionMessage: PlayerActionMessagesProps;
    selectedPlayer: number;
    selectedPlayerForEditing: EditingPlayerProps;
    isEditingAPlayer: boolean;

    updatePlayersWhenWinning(winnerName: string, loserName: string): void;
    updatePlayersWhenTie(player1Name: string, player2Name: string): void;
    changePlayerActionMessage(value: PlayerActionMessagesProps): void;
    changeIsEditingAPlayer(value: boolean): void;
    changeSelectedPlayer(key: number): void;
    addNewPlayer(newPlayer: PlayerProps): void;
    updateSelectedPlayerForEditing(key: number): void;
    editPlayer(player: PlayerProps): void;
    deletePlayer(key: number): void;
    resetPlayerStats(key: number): void;
    calcWinrate(wins: number, matches: number): string;
    calcScore(wins: number, ties: number, defeats: number): string;
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
        },
    ]);

    const [playersName, setPlayersName] = useState({} as string[]);
    const [playerActionMessage, setPlayerActionMessage] = useState({} as PlayerActionMessagesProps);
    const [selectedPlayer, setSelectedPlayer] = useState<number>();
    const [selectedPlayerForEditing, setSelectedPlayerForEditing] = useState<EditingPlayerProps>(EmptyPlayer[0]);
    const [isEditingAPlayer, setIsEditingAPlayer] = useState(false);

    function updatePlayersWhenWinning(winnerName: string, loserName: string): void {
        const winner = players.findIndex(p => p.name === winnerName);
        const loser = players.findIndex(p => p.name === loserName);

        players[winner].match.wins += 1;
        players[winner].match.matches += 1;

        players[loser].match.defeats += 1;
        players[loser].match.matches += 1;

        setPlayers(players);
    }

    function updatePlayersWhenTie(player1Name: string, player2Name: string): void {
        const player1 = players.findIndex(p => p.name === player1Name);
        const player2 = players.findIndex(p => p.name === player2Name);

        const arrayWithPlayers = [player1, player2];

        arrayWithPlayers.forEach(element => {
            players[element].match.matches += 1;
            players[element].match.ties += 1;    
        });

        setPlayers(players);
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

        setPlayers(newPlayers);
        changePlayerActionMessage({ action: 'add', user: newPlayer.name });
    }

    function editPlayer(player: PlayerProps): void {
        const newPlayers = players.map((p, index) => selectedPlayerForEditing.key === index ? player : p);

        setPlayers(newPlayers);
        setIsEditingAPlayer(false);
        changePlayerActionMessage({ action: 'edit', user: player.name, });
    }

    function deletePlayer(key: number): void {
        const deletedPlayer = players.filter((p, i) => i === key);
        const newPlayers = players.filter((p, i) => i !== key);

        setPlayers(newPlayers);
        changePlayerActionMessage({ action: 'delete', user: deletedPlayer[0].name });
    }

    function resetPlayerStats(key: number): void {
        const newPlayerStatistic = players.filter((p, i) => i === key);
        Object.keys(newPlayerStatistic[0].match).forEach(item => (newPlayerStatistic[0].match[item] = 0));

        const newPlayers = players.map((player, index) => index !== key ? player : newPlayerStatistic[0]);

        setPlayers(newPlayers);
        changePlayerActionMessage({ action: 'reset', user: newPlayerStatistic[0].name });
    }

    function calcWinrate(wins: number, matches: number): string {
        const winrate = () => {
            if (matches === 0) {
                return '0.0';
            } else {
                const winrate = ((wins * 100) / matches).toFixed(1);
                
                return winrate;
            }
        }
        
        return winrate();
    }

    function calcScore(wins: number, ties: number, defeats: number): string {
        const score = (((wins * 2) + (ties * 0.5)) - defeats).toFixed(1);
        
        return score;
    }

    useEffect(() => {
        const newPlayersName = players.map(player => player.name);

        setPlayersName(newPlayersName);
    }, [players]);

    return (
        <PlayersContext.Provider
            value={{
                players,
                playersName,
                playerActionMessage,
                selectedPlayer,
                selectedPlayerForEditing,
                isEditingAPlayer,
                updatePlayersWhenWinning,
                updatePlayersWhenTie,
                changePlayerActionMessage,
                changeIsEditingAPlayer,
                changeSelectedPlayer,
                addNewPlayer,
                updateSelectedPlayerForEditing,
                editPlayer,
                deletePlayer,
                resetPlayerStats,
                calcWinrate,
                calcScore
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
}

export function usePlayers() {
    return useContext(PlayersContext);
}
