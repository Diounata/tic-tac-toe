import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useModal } from './ModalContext';
import { usePlayers } from './PlayersContext';
import { useSettings } from './SettingsContext';

import X from '@Icons/X';
import O from '@Icons/O';

export const GameContext = createContext({} as ContextProps);

type ChildrenProps = {
    children: ReactNode;
};

type PlayerContentProps = {
    name: string;
    symbol: string;
    color: string;
    wins: number;
    icon: JSX.Element;
};

type PlayersName = {
    x: string;
    o: string;
};

type PlayerProps = {
    x: PlayerContentProps;
    o: PlayerContentProps;
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

type FilledPositionAmountProps = {
    lastGame: number;
    current: number;
};

type ContextProps = {
    player: PlayerProps;
    playersName: PlayersName;
    position: string[];
    playerTurn: string;
    winner: PlayerContentProps;
    winnerPosition: Number[];
    isGameFinished: boolean;

    updatePlayer(xPlayer: PlayerContentProps, oPlayer: PlayerContentProps): void;
    updatePlayersToDefault(): void;
    updatePosition(number: number): void;
    resetGame(): void;
};

export function GameContextProvider({ children }: ChildrenProps) {
    const [player, setPlayer] = useState({
        x: {
            name: 'Player X',
            symbol: 'X',
            color: '#04dac2',
            wins: 0,
            icon: <X color='#04dac2' />,
        },

        o: {
            name: 'Player O',
            symbol: 'O',
            color: '#bb86fc',
            wins: 0,
            icon: <O color='#bb86fc' />,
        },
    });
    const [playersName, setPlayersName] = useState({} as PlayersName);

    const [position, setPosition] = useState(['', '', '', '', '', '', '', '', '']);
    const [playerTurn, setPlayerTurn] = useState('');
    const [filledPositionAmount, setFilledPositionAmount] = useState<FilledPositionAmountProps>({ lastGame: 0, current: 0 });
    const [winner, setWinner] = useState<PlayerContentProps>();
    const [winnerPosition, setWinnerPosition] = useState([]);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [starterPlayer, setStarterPlayer] = useState<'X' | 'O'>('O');

    const { isModalOpen, changeModalState } = useModal();
    const { updatePlayersWhenWinning, updatePlayersWhenTie, updateHistory } = usePlayers();
    const { startGameAs } = useSettings();

    function updatePlayer(xPlayer: PlayerContentProps, oPlayer: PlayerContentProps): void {
        const newPlayers = { x: xPlayer, o: oPlayer };

        setPlayer(newPlayers);
    }

    function updatePlayersToDefault(): void {
        const newPlayers = {
            x: {
                name: 'Player X',
                symbol: 'X',
                color: '#04dac2',
                wins: 0,
                icon: <X />,
            },

            o: {
                name: 'Player O',
                symbol: 'O',
                color: '#bb86fc',
                wins: 0,
                icon: <O />,
            },
        };

        setPlayer(newPlayers);
    }

    function updatePosition(number: number): void {
        if (!position[number]) {
            const newPosition = position.map((i, index) => (number === index ? playerTurn : i));
            const newFilledPositionAmount = {
                lastGame: filledPositionAmount.lastGame,
                current: filledPositionAmount.current + 1,
            };

            setPosition(newPosition);
            setFilledPositionAmount(newFilledPositionAmount);
        }
    }

    function checkGameSituation(): void {
        checkIfGameHasTie();
        checkIfAnyPlayerHasWin();
    }

    function checkIfAnyPlayerHasWin(): void {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        combinations.forEach(numArray => {
            let c = 0;

            numArray.forEach(pos => {
                if (position[pos] === playerTurn) {
                    c++;
                }
            });

            if (c === 3) {
                const winnerPlayer = playerTurn === 'X' ? player.x : player.o;
                const loserPlayer = playerTurn !== 'X' ? player.x : player.o;

                const history: HistoryProps = {
                    x: {
                        name: player.x.name,
                        color: player.x.color,
                        situation: playerTurn === 'X' ? 'Winner' : 'Loser',
                    },

                    o: {
                        name: player.o.name,
                        color: player.o.color,
                        situation: playerTurn !== 'X' ? 'Winner' : 'Loser',
                    },
                };

                updateHistory(history);
                setWinner(winnerPlayer);
                setWinnerPosition(numArray);
                updatePlayersWhenWinning(winnerPlayer.name, loserPlayer.name);
                setIsGameFinished(true);
                changeModalState(true);
            }
        });
    }

    function checkIfGameHasTie(): void {
        const player1 = player.x.name;
        const player2 = player.o.name;

        if (filledPositionAmount.current === 9) {
            const history: HistoryProps = {
                x: {
                    name: player.x.name,
                    color: player.x.color,
                    situation: 'Tie',
                },

                o: {
                    name: player.o.name,
                    color: player.o.color,
                    situation: 'Tie',
                },
            };

            updateHistory(history);
            setWinner(null);
            setIsGameFinished(true);
            changeModalState(true);
            updatePlayersWhenTie(player1, player2);
        }
    }

    function addWins(): void {
        const players = { ...player };

        winner.symbol === 'X' ? players.x.wins++ : players.o.wins++;

        setPlayer({ ...players });
    }

    function resetGame(): void {
        setFilledPositionAmount({ lastGame: filledPositionAmount.current, current: 0 });
        setPosition(['', '', '', '', '', '', '', '', '']);
        setWinner(null);
        setWinnerPosition([]);
        setIsGameFinished(false);
        changeModalState(false);
    }

    function verifyTurnStarter(): void {
        let starter: 'X' | 'O';

        switch (startGameAs) {
            case 'X':
                starter = 'X';
                break;
            case 'O':
                starter = 'O';
                break;
            case 'Winner':
                if (filledPositionAmount.lastGame % 2) {
                    starter = starterPlayer;
                } else {
                    starter = starterPlayer === 'X' ? 'O' : 'X';
                }

                break;
            case 'Loser':
                if (filledPositionAmount.lastGame % 2) {
                    starter = starterPlayer === 'X' ? 'O' : 'X';
                } else {
                    starter = starterPlayer;
                }

                break;
            case 'Evenly':
                starter = starterPlayer === 'X' ? 'O' : 'X';
                break;
            case 'Random':
                const randomNumber = Math.floor(Math.random() * 2);

                starter = randomNumber ? 'X' : 'O';
                break;
            default:
                console.error('Error when verifying the starter.');
        }

        setStarterPlayer(starter);
        setPlayerTurn(starter);
    }

    useEffect(() => {
        if (filledPositionAmount.current) {
            if (playerTurn === 'X' || playerTurn === 'O') {
                checkGameSituation();
            }

            if (!isModalOpen) {
                setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
            }
        } else {
            verifyTurnStarter();
        }
    }, [position]);

    useEffect(() => {
        if (winner) {
            addWins();
        }
    }, [winner]);

    useEffect(() => {
        const usernames = { x: player.x.name, o: player.o.name };

        setPlayersName(usernames);
    }, [player]);

    return (
        <GameContext.Provider
            value={{
                player,
                playersName,
                position,
                playerTurn,
                winner,
                winnerPosition,
                isGameFinished,
                updatePosition,
                updatePlayer,
                updatePlayersToDefault,
                resetGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    return useContext(GameContext);
}
