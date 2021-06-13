import { createContext, ReactNode, useContext, useState } from 'react';

export const ModalContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface ContextProps {
    isModalOpen: boolean;

    changeModalState(value: boolean): void;
}

export function ModalContextProvider({ children }: ChildrenProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function changeModalState(value: boolean): void {
        setIsModalOpen(value);
    }

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                changeModalState,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
