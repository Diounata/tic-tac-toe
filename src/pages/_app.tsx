import '../styles/main.scss';

import { IconContext } from 'react-icons';
import { GameContextProvider } from '@Contexts/GameContext';
import { ModalContextProvider } from '@Contexts/ModalContext';
import { PlayersContextProvider } from '@Contexts/PlayersContext';
import { SettingsContextProvider } from '@Contexts/SettingsContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <IconContext.Provider value={{ color: '#e1e1e1', style: { verticalAlign: 'middle' } }}>
            <ModalContextProvider>
                <PlayersContextProvider>
                    <GameContextProvider>
                        <SettingsContextProvider>
                            
                            <div className='container'>
                                <Component {...pageProps} />
                            </div>
                            
                        </SettingsContextProvider>
                    </GameContextProvider>
                </PlayersContextProvider>
            </ModalContextProvider>
        </IconContext.Provider>
    );
}
