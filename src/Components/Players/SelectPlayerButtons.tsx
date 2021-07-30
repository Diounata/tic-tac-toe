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
    selectedPlayer: { X: number, O: number};
    symbol: 'X' | 'O';

    changeSelectedPlayer(value: number, symbol: 'X' | 'O'): void;
};

export default function SelectPlayerButton({ p, selectedPlayer, symbol, changeSelectedPlayer }: ButtonProps) {
    const notSymbol = symbol === 'X' ? 'O' : 'X'; 

    const Icon = {
        X: <X color={p.color.hex} />,
        O: <O color={p.color.hex} />
    }
    
    return (
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