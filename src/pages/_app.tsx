import '../styles/main.scss';

import { GameContextProvider } from '../Contexts/GameContext';
import { ModalContextProvider } from '../Contexts/ModalContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <ModalContextProvider>
            <GameContextProvider>
                
                <div className='container'>
                    <Component {...pageProps} />
                </div>
                
            </GameContextProvider>
        </ModalContextProvider>
    );
}
