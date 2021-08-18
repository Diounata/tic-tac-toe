import { createContext, ReactNode, useContext, useState } from 'react';

const SettingsContext = createContext({} as ContextProps);

type ChildrenProps = {
    children: ReactNode;
};

type StartGameAsProps = 'X' | 'O' | 'Winner' | 'Loser' | 'Evenly' | 'Random';

type ContextProps = {
    startGameAs: StartGameAsProps;
    isSaveGameStatsOn: boolean;

    updateStartGameAs(value: StartGameAsProps): void;
    updateIsSaveGameOn(value: boolean): void;
};

export function SettingsContextProvider({ children }: ChildrenProps) {
    const [startGameAs, setStartGameAs] = useState<StartGameAsProps>('Winner');
    const [isSaveGameStatsOn, setIsSaveGameStatsOn] = useState(true);

    function updateStartGameAs(value: StartGameAsProps): void {
        setStartGameAs(value);
    }

    function updateIsSaveGameOn(value: boolean): void {
        setIsSaveGameStatsOn(value);
    }

    return (
        <SettingsContext.Provider
            value={{
                startGameAs,
                isSaveGameStatsOn,
                updateStartGameAs,
                updateIsSaveGameOn,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}
