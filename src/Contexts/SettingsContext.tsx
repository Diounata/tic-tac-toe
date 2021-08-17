import { createContext, ReactNode, useContext, useState } from 'react';

const SettingsContext = createContext({} as ContextProps);

type ChildrenProps = {
    children: ReactNode;
};

type StartGameAsProps = 'X' | 'O' | 'Winner' | 'Loser' | 'Evenly' | 'Random';

type ContextProps = {
    startGameAs: StartGameAsProps;

    updateStartGameAs(value: StartGameAsProps): void;
};

export function SettingsContextProvider({ children }: ChildrenProps) {
    const [startGameAs, setStartGameAs] = useState<StartGameAsProps>('Winner');

    function updateStartGameAs(value: StartGameAsProps): void {
        setStartGameAs(value);
    }

    return <SettingsContext.Provider value={{ startGameAs, updateStartGameAs }}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
    return useContext(SettingsContext);
}
