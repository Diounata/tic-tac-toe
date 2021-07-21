import PlayersButton from './PlayersButton';

import X from '@Icons/X';
import O from '@Icons/O';

import { useGame } from '@Contexts/GameContext';

type PlayerData = {
    name: string;
    color: { hex: string };
    wins: number;
}

type ButtonProps = {
    symbol: string;
    p: PlayerData;
}

type Props = {
    p: PlayerData; // Player object with data
}

export default function SelectPlayerButtons({ p }: Props) {
    return (
        <>
            {p.name !== 'Player X' && p.name !== 'Player O'
                ? (
                    <>
                        <Button symbol='x' p={p} />
                        <Button symbol='o' p={p} />
                    </>
                )
                
                : p.name === 'Player X'
                    ? <Button symbol='x' p={p} />
                    : <Button symbol='o' p={p} />
            }
        </>
    );
}

function Button({ symbol, p }: ButtonProps) {
    const { playersName, updatePlayer } = useGame();

    const notSelectedSymbol = symbol === 'x' ? 'o' : 'x'; 

    const Icon = {
        x: <X color={p.color.hex} />,
        o: <O color={p.color.hex} />
    }
    
    function getPlayerProps() {
        const playerValues = {
            name: p.name,
            color: p.color.hex,
            wins: 0,
        };

        return playerValues;
    }
    
    return (
        <>
            <PlayersButton
                style={{ borderColor: playersName[symbol] === p.name ? p.color.hex : '' }}
                onClick={() => updatePlayer(getPlayerProps(), symbol)}
                disabled={playersName[notSelectedSymbol] === p.name}
            >
                {Icon[symbol]}
            </PlayersButton>
        </>
    )
}