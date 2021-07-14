import '../styles/main.scss';

import { IconContext } from 'react-icons';
import { GameContextProvider } from '@Contexts/GameContext';
import { ModalContextProvider } from '@Contexts/ModalContext';
import { PlayersContextProvider } from '@Contexts/PlayersContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <IconContext.Provider value={{ color: '#e1e1e1' }}>
            <ModalContextProvider>
                <GameContextProvider>
                    <PlayersContextProvider>
                       
                        <div className='container'>
                            <Component {...pageProps} />
                        </div>
                        
                    </PlayersContextProvider>
                </GameContextProvider>
            </ModalContextProvider>
        </IconContext.Provider>
    );
}
