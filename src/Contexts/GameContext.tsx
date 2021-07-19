import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import { useModal } from './ModalContext';

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
    score: number;
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

    updatePlayer(playerValues, symbol: string): void
    updatePosition(number: number): void;
    resetGame(): void;
}

export function GameContextProvider({ children }: ChildrenProps) {
    const [player, setPlayer] = useState({
        x: {
            name: 'Player 1',
            symbol: 'X',
            color: '#04dac2',
            score: 0,
            icon: <X />
        },

        o: {
            name: 'Player 2',
            symbol: 'O',
            color: '#bb86fc',
            score: 0,
            icon: <O />
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
    
    function updatePlayer(playerValues, symbol: string): void {
        const newPlayer = { ...playerValues, symbol: symbol, icon: <X /> };
        let newObject: PlayerProps;

        if (player[symbol].name === newPlayer.name) {
            newPlayer.name = '';
        }

        if (symbol === 'x') {
            newObject = { x: newPlayer, o: player.o }
        } else if (symbol === 'o') {
            newObject = { x: player.x, o: newPlayer }
        }

        setPlayer(newObject);
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
                
                setWinner(winnerPlayer);
                setWinnerPosition(numArray);
                setIsGameFinished(true);
                changeModalState(true);
            }
        });
    }

    function checkIfGameHasTie(): void {
        if (amountFilledPosition === 9) {
            setWinner(null);
            setIsGameFinished(true);
            changeModalState(true);
        }
    }

    function addScore(): void {
        const players = player;


        if (winner.symbol === 'X') {
            players.x.score++
        }

        if (winner.symbol === 'O') {
            players.o.score++
        }

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
            addScore();
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
                updatePosition,updatePlayer,
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