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
    changePosition(number: number): void;
}

export function GameContextProvider({ children }: ChildrenProps) {
    const [position, setPosition] = useState(['','','','','','','','','']);
    const [playerTurn, setPlayerTurn] = useState('Player'); // Will start as X

    function changePosition(number: number): void {
        if (!position[number]) {
            const newPosition = position.map((i, index) => number === index ? playerTurn : i);

            setPosition(newPosition);
        }
    }

    function verifyIfGameHasFinished(): void {
        const combinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

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

    useEffect(() => {
        if (playerTurn === 'X' || playerTurn === 'O') {
            verifyIfGameHasFinished();
        }

        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    }, [position]);

    return (
        <GameContext.Provider
            value={{
                position,
                playerTurn,
                changePosition,
            }}
        >
            {children}
        </GameContext.Provider>
    );
        }

export function useGame() {
    return useContext(GameContext);
}
