import RadioButton from '@Components/General/RadioButton';

import { useSettings } from '@Contexts/SettingsContext';

export default function SaveGameStats() {
    const { isSaveGameStatsOn, updateIsSaveGameOn } = useSettings();

    return (
        <div>
            <RadioButton
                name='save-stats'
                id='yes'
                selected={isSaveGameStatsOn}
                onClick={() => updateIsSaveGameOn(true)}
            >
                Yes
            </RadioButton>

            <RadioButton
                name='save-stats'
                id='no'
                selected={!isSaveGameStatsOn}
                onClick={() => updateIsSaveGameOn(false)}
            >
                No
            </RadioButton>
        </div>
    );
}
