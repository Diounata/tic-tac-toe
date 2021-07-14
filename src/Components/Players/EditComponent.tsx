import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Players/NewPlayer.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
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

export default function Edit() {
    const { selectedPlayerForEditing, changeIsEditingAPlayer, editPlayer } = usePlayers();
    const router = useRouter();

    const [isInputNotFilled, setIsInputNotFilled] = useState(false);
    const [name, setName] = useState(selectedPlayerForEditing.player.name);
    const [color, setColor] = useState({ ...selectedPlayerForEditing.player.color } as ColorProps);

    function updateColor(value: ColorProps): void {
        setColor(value);
    }

    function editPlayerButton(): void {
        if (!name) {
            setIsInputNotFilled(true);
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
                        className={isInputNotFilled ? styles.inputNotFilled : ''}
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />

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
