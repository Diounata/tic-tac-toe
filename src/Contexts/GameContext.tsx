import { createContext, ReactNode, useContext, useState } from 'react';

export const GameContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface ContextProps {}

export function GameContextProvider({ children }: ChildrenProps) {
    return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
}

export function useGame() {
    return useContext(GameContext);
}
