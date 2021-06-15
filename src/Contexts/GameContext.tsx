import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import { useModal } from './ModalContext';

import X from '../Icons/X';
import O from '../Icons/O';

export const GameContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface PlayerContentProps {
    name: string;
    color: string;
    score: number;
    icon: JSX.Element;
}

interface PlayerProps {
    x: PlayerContentProps;
    o: PlayerContentProps;
}

interface ContextProps {
    player: PlayerProps;
    position: string[];
    playerTurn: string;
    winner: PlayerContentProps;

    updatePosition(number: number): void;
    resetGame(): void;
}

export function GameContextProvider({ children }: ChildrenProps) {
    const [player, setPlayer] = useState({
        x: {
            name: 'John',
            color: '#04dac2',
            score: 0,
            icon: <X />
        },

        o: {
            name: 'Mary',
            color: '#bb86fc',
            score: 0,
            icon: <O />
        },
    })
    const [position, setPosition] = useState(['', '', '', '', '', '', '', '', '']);
    const [playerTurn, setPlayerTurn] = useState('Player'); // It'll start as X
    const [amountFilledPosition, setAmountFilledPosition] = useState(0);
    const [winner, setWinner] = useState({} as PlayerContentProps);
    
    const { isModalOpen, changeModalState } = useModal();
    
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
        if (amountFilledPosition === 9) {
            checkIfGameHasTie();
        } else {
            checkIfAnyPlayerHasWin();
        }
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

        combinations.forEach(pos => {
            let c = 0;

            pos.forEach(n => {
                if (position[n] === playerTurn) {
                    c++;
                }
            });

            if (c === 3) {
                const playerWhoHasWon = playerTurn === 'X' ? player.x : player.o; 
                setWinner(playerWhoHasWon);
                changeModalState(true);
            }
        });
    }

    function checkIfGameHasTie(): void {
        setWinner(null);
        changeModalState(true);
    }

    function resetGame(): void {
        setPosition(['', '', '', '', '', '', '', '', '']);
        setPlayerTurn('');
        setAmountFilledPosition(0);
        setWinner(null);
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

    return (
        <GameContext.Provider
            value={{
                player,
                position,
                playerTurn,
                winner,
                updatePosition,
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