import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Players/NewPlayer.module.scss';

import TitlePage from '@utils/TitlePage';
import BackButton from '@Components/General/BackButton';
import Colors from '@utils/Colors.json';
import WarningAlert from './WarningAlert';
import Button from '../General/Button';
import EditIcon from '@Icons/Edit';
import DeleteCircle from '@Icons/DeleteCircle';

import Header from '@Components/General/Header';
import Footer from '@Components/General/Footer';
import ColorsModal from './ColorsModal';

import { usePlayers } from '@Contexts/PlayersContext';
import { useModal } from '@Contexts/ModalContext';

type ColorProps = {
    hex: string;
    name: string;
    id: number;
};

type ErrorProps = {
    situation: boolean;
    text: string;
};

export default function Edit() {
    const { playersName, selectedPlayerForEditing, changeIsEditingAPlayer, editPlayer } = usePlayers();
    const { changeModalState } = useModal();
    const router = useRouter();

    const [hasError, setHasError] = useState({} as ErrorProps);
    const [name, setName] = useState(selectedPlayerForEditing.player.name);
    const [color, setColor] = useState({ ...selectedPlayerForEditing.player.color } as ColorProps);

    const newPlayersName = playersName.filter(player => player !== selectedPlayerForEditing.player.name);
    const currentPlayerColor = selectedPlayerForEditing.player.color.hex;

    function updateColor(key: number): void {
        setColor(Colors[key]);
    }

    function updateHasError(value: ErrorProps): void {
        setHasError(value);
    }

    function resetInputName(): void {
        setName('');
        setHasError({ situation: false, text: '' });
    }

    function editPlayerButton(e): void {
        const hasEqualNameRegistered = newPlayersName.some(player => player === name);
        e.preventDefault();

        if (!name) {
            setHasError({ situation: true, text: "There's no username insered" });
        } else if (hasEqualNameRegistered) {
            setHasError({ situation: true, text: "There's a username registered with this name" });
        } else if (name.length > 16) {
            setHasError({ situation: true, text: 'Username exceded the character limit (16)' });
        } else {
            const player = { ...selectedPlayerForEditing.player, name, color };

            editPlayer(player);
            router.push('/players');
        }
    }

    return (
        <>
            <TitlePage title="Edit" />

            <ColorsModal color={color.id} updateColor={updateColor} />

            <div>
                <div>
                    <BackButton href="/players" onClick={() => changeIsEditingAPlayer(false)} />

                    <Header>
                        <EditIcon size={24} /> Edit: {selectedPlayerForEditing.player.name}
                    </Header>
                </div>

                <div className={styles.newContainer}>
                    <div className={styles.title}>
                        <div style={{ background: currentPlayerColor }}></div>

                        <h4>{selectedPlayerForEditing.player.name}'s information.</h4>
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Username"
                            className={hasError.situation ? styles.inputNotFilled : ''}
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                        />

                        <DeleteCircle
                            className={styles.deleteIcon}
                            onClick={resetInputName}
                            title="Reset"
                            size={20}
                        />
                    </div>

                    <WarningAlert hasError={hasError} updateHasError={updateHasError} />

                    <div className={styles.colorDiv}>
                        <div>
                            <h4>User color:</h4>

                            <div>
                                <div className={styles.colorSquare} style={{ background: color.hex }}></div>

                                {color.name}
                            </div>
                        </div>

                        <button onClick={() => changeModalState(true)}>Change</button>
                    </div>

                    <div className={styles.signUpButton}>
                        <Button onClick={editPlayerButton}>
                            <EditIcon /> Edit
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
