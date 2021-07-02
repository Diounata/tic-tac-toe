import '../styles/main.scss';

import { IconContext } from 'react-icons';
import { GameContextProvider } from '../Contexts/GameContext';
import { ModalContextProvider } from '../Contexts/ModalContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <IconContext.Provider value={{ color: '#e1e1e1' }}>
            <ModalContextProvider>
                <GameContextProvider>
                    
                    <div className='container'>
                        <Component {...pageProps} />
                    </div>
               
                </GameContextProvider>
            </ModalContextProvider>
        </IconContext.Provider>
    );
}
