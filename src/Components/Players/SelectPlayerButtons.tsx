import PlayersButton from './PlayersButton';

import X from '@Icons/X';
import O from '@Icons/O';

import { useGame } from '@Contexts/GameContext';

type PlayerData = {
    name: string;
    color: { hex: string };
    wins: number;
}

type Props = {
    p: PlayerData; // Player object with data
}

export default function SelectPlayerButtons({ p }: Props) {
    const { playersName, updatePlayer } = useGame();
    
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
                style={{ borderColor: playersName.x === p.name ? p.color.hex : '' }}
                onClick={() => updatePlayer(getPlayerProps(), 'x')}
                disabled={playersName.o === p.name}
            >
                <X color={p.color.hex} />
            </PlayersButton>

            <PlayersButton
                style={{ borderColor: playersName.o === p.name ? p.color.hex : '' }}
                onClick={() => updatePlayer(getPlayerProps(), 'o')}
                disabled={playersName.x === p.name}
            >
                <O color={p.color.hex} />
            </PlayersButton>
        </>
    );
}
