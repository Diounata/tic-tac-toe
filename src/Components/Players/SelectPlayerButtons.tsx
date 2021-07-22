import PlayersButton from './PlayersButton';

import X from '@Icons/X';
import O from '@Icons/O';

type PlayerData = {
    name: string;
    color: { hex: string };
    wins: number;
    key: number;
};

type ButtonProps = {
    p: PlayerData;
    selectedPlayer: { x: number, o: number};
    symbol: 'x' | 'o';

    changeSelectedPlayer(value: number, symbol: 'x' | 'o'): void;
};

export default function SelectPlayerButton({ p, selectedPlayer, symbol, changeSelectedPlayer }: ButtonProps) {
    const notSymbol = selectedPlayer.x !== p.key ? 'o' : 'x'; 

    const Icon = {
        x: <X color={p.color.hex} />,
        o: <O color={p.color.hex} />
    }
    
    return ( // caso estiverem com o msm key;
        <>
            <PlayersButton
                style={{ borderColor: selectedPlayer[symbol] === p.key ? p.color.hex : '' }}
                onClick={() => changeSelectedPlayer(p.key, symbol)}
                disabled={selectedPlayer[notSymbol] === p.key && selectedPlayer[symbol] !== p.key}
            >
                {Icon[symbol]}
            </PlayersButton>
        </>
    )
}