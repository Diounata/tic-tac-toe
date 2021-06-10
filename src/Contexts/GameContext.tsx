import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

export const GameContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface ContextProps {
    position: string[];
    playerTurn: string;
    updatePosition(number: number): void;
}

export function GameContextProvider({ children }: ChildrenProps) {
    const [position, setPosition] = useState(['', '', '', '', '', '', '', '', '']);
    const [playerTurn, setPlayerTurn] = useState('Player'); // It'll start as X
    const [amountFilledPosition, setAmountFilledPosition] = useState(0);

    function updatePosition(number: number): void {
        if (!position[number]) {
            const newPosition = position.map((i, index) =>
                number === index ? playerTurn : i
            );

            setPosition(newPosition);
            setAmountFilledPosition(() => amountFilledPosition + 1);
        }
    }

    function checkGameSituation() {
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

            c === 3 && alert(`Player ${playerTurn} wins!`);
        });
    }

    function checkIfGameHasTie(): void {
        alert('The game has tie.');
    }

    useEffect(() => {
        if (playerTurn === 'X' || playerTurn === 'O') {
            checkGameSituation();
        }

        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    }, [position]);

    return (
        <GameContext.Provider
            value={{
                position,
                playerTurn,
                updatePosition,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    return useContext(GameContext);
}
