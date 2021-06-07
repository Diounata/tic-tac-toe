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
    changePosition(number: number): void;
}

export function GameContextProvider({ children }: ChildrenProps) {
    const [position, setPosition] = useState(['','','','','','','','','']);
    const [playerTurn, setPlayerTurn] = useState('O');

    function changePosition(number: number): void {
        if (!position[number]) {
            const newPosition = position.map((i, index) =>
                number === index ? playerTurn : i
            );

            setPosition(newPosition);
        }
    }

    useEffect(() => {
        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    }, [position]);

    return (
        <GameContext.Provider
            value={{
                position,
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
