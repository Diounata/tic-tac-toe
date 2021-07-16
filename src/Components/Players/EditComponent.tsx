import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Players/NewPlayer.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import WarningAlert from './WarningAlert';
import Button from '../General/Button';
import EditIcon from '@Icons/Edit';

import Header from '@Components/General/Header';
import Colors from './new/Colors';
import Footer from '@Components/General/Footer';

import { usePlayers } from '@Contexts/PlayersContext';

type ColorProps = {
    hex: string;
    name: string;
};

type ErrorProps = {
    situation: boolean;
    text: string;
}

export default function Edit() {
    const { playersName, selectedPlayerForEditing, changeIsEditingAPlayer, editPlayer } = usePlayers();
    const router = useRouter();

    const [hasError, setHasError] = useState({} as ErrorProps);
    const [name, setName] = useState(selectedPlayerForEditing.player.name);
    const [color, setColor] = useState({ ...selectedPlayerForEditing.player.color } as ColorProps);

    const newPlayersName = playersName.filter(player => player !== selectedPlayerForEditing.player.name);

    function updateColor(value: ColorProps): void {
        setColor(value);
    }

    function editPlayerButton(e): void {
        const hasEqualNameRegistered = newPlayersName.some(player => player === name);
        e.preventDefault();

        if (!name) {
            setHasError({ situation: true, text: "There's no username insered" });
        } else if (hasEqualNameRegistered) {
            setHasError({ situation: true, text: "There's a username registered with this name" });
        } else {
            const player = { ...selectedPlayerForEditing.player, name, color };

            editPlayer(player);
            router.push('/players');
        }
    }

    return (
        <>
            <TitlePage title='Edit' />

            <div>
                <div>
                    <BackButton href='/players' onClick={() => changeIsEditingAPlayer(false)} />

                    <Header>
                        <EditIcon size={24} /> Edit: {selectedPlayerForEditing.player.name}
                    </Header>
                </div>
                
                <form action='/players/' className={styles.newContainer}>
                    <h4>{selectedPlayerForEditing.player.name}'s information.</h4>

                    <input
                        type='text' placeholder='Username' required
                        className={hasError.situation ? styles.inputNotFilled : ''}
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />

                    <WarningAlert hasError={hasError} />

                    <h4>User color:</h4>

                    <div className={styles.colors}>
                        <Colors
                            color={color}
                            updateColor={updateColor}
                            styles={styles}
                        />
                    </div>

                    <div className={styles.signUpButton}>
                        <Button onClick={editPlayerButton}>
                            <EditIcon /> Edit
                        </Button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}
