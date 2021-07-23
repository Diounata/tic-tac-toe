import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import { useModal } from './ModalContext';
import { usePlayers } from './PlayersContext';

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
}

type PlayerProps = {
    x: PlayerContentProps;
    o: PlayerContentProps;
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
}

export function GameContextProvider({ children }: ChildrenProps) {
    const [player, setPlayer] = useState({
        x: {
            name: 'Player X',
            symbol: 'X',
            color: '#04dac2',
            wins: 0,
            icon: <X color='#04dac2' />
        },

        o: {
            name: 'Player O',
            symbol: 'O',
            color: '#bb86fc',
            wins: 0,
            icon: <O color='#bb86fc' />
        },
    });
    const [playersName, setPlayersName] = useState<PlayersName>({ x: '', o: '' });

    const [position, setPosition] = useState(['', '', '', '', '', '', '', '', '']);
    const [playerTurn, setPlayerTurn] = useState('Player'); // It'll start as X
    const [amountFilledPosition, setAmountFilledPosition] = useState(0);
    const [winner, setWinner] = useState({} as PlayerContentProps);
    const [winnerPosition, setWinnerPosition] = useState([]);
    const [isGameFinished, setIsGameFinished] = useState(false);
    
    const { isModalOpen, changeModalState } = useModal();
    const { updatePlayersWhenWinning, updatePlayersWhenTie } = usePlayers();

    function updatePlayer(xPlayer: PlayerContentProps, oPlayer: PlayerContentProps): void {
        const newPlayers = { x: xPlayer, o: oPlayer};

        setPlayer(newPlayers);
    }

    function updatePlayersToDefault(): void {
        const newPlayers = {
            x: {
                name: 'Player X',
                symbol: 'X',
                color: '#04dac2',
                wins: 0,
                icon: <X />
            },
    
            o: {
                name: 'Player O',
                symbol: 'O',
                color: '#bb86fc',
                wins: 0,
                icon: <O />
            },
        }

        setPlayer(newPlayers);
    }

    function updatePosition(number: number): void {
        if (!position[number]) {
            const newPosition = position.map((i, index) =>
                number === index ? playerTurn : i
            );

            setPosition(newPosition);
            setAmountFilledPosition(() => amountFilledPosition + 1);
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

        if (amountFilledPosition === 9) {
            setWinner(null);
            setIsGameFinished(true);
            changeModalState(true);
            updatePlayersWhenTie(player1, player2);
        }
    }

    function addWins(): void {
        const players = {...player};

        winner.symbol === 'x' ? players.x.wins++ : players.o.wins++;

        setPlayer({...players});
    }

    function resetGame(): void {
        setPosition(['', '', '', '', '', '', '', '', '']);
        setPlayerTurn('');
        setAmountFilledPosition(0);
        setWinner(null);
        setWinnerPosition([]);
        setIsGameFinished(false);
        changeModalState(false);
    }

    useEffect(() => {
        if (playerTurn === 'X' || playerTurn === 'O') {
            checkGameSituation();
        }

        if (!isModalOpen) {
            setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
        }
    }, [position]);

    useEffect((() => {
        if (winner) {
            addWins();
        }
    }), [winner])

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