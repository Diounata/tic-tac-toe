import X from '@Icons/X';
import O from '@Icons/O';

import RadioButton from '@Components/General/RadioButton';

import { useSettings } from '@Contexts/SettingsContext';

export default function StartGameAs() {
    const { startGameAs, updateStartGameAs } = useSettings();

    return (
        <div>
            <RadioButton
                name='start-game'
                id='x'
                selected={startGameAs === 'X'}
                onClick={() => updateStartGameAs('X')}
            >
                <div>
                    <span>Player</span> <X color='#e1e1e1' />
                </div>
            </RadioButton>

            <RadioButton
                name='start-game'
                id='o'
                selected={startGameAs === 'O'}
                onClick={() => updateStartGameAs('O')}
            >
                <div>
                    <span>Player</span> <O color='#e1e1e1' />
                </div>
            </RadioButton>

            <RadioButton
                name='start-game'
                id='winner'
                selected={startGameAs === 'Winner'}
                onClick={() => updateStartGameAs('Winner')}
            >
                Winner
            </RadioButton>

            <RadioButton
                name='start-game'
                id='loser'
                selected={startGameAs === 'Loser'}
                onClick={() => updateStartGameAs('Loser')}
            >
                Loser
            </RadioButton>

            <RadioButton
                name='start-game'
                id='evenly'
                selected={startGameAs === 'Evenly'}
                onClick={() => updateStartGameAs('Evenly')}
            >
                Evenly
            </RadioButton>

            <RadioButton
                name='start-game'
                id='random'
                selected={startGameAs === 'Random'}
                onClick={() => updateStartGameAs('Random')}
            >
                Random
            </RadioButton>
        </div>
    );
}
