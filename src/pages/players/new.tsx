import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Players/NewPlayer.module.scss';

import TitlePage from '@utils/TitlePage';
import Colors from '@utils/Colors.json';
import Button from '@Components/General/Button';
import UserPlus from '@Icons/UserPlus';
import DeleteCircle from '@Icons/DeleteCircle';

import Footer from '@Components/General/Footer';
import BackButton from '@Components/General/BackButton';
import WarningAlert from '@Components/Players/WarningAlert';
import Header from '@Components/General/Header';
import ColorsModal from '@Components/Players/ColorsModal';

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

export default function NewPlayerForm() {
    const { playersName, addNewPlayer } = usePlayers();
    const { changeModalState } = useModal();
    const router = useRouter();

    const [hasError, setHasError] = useState({} as ErrorProps);
    const [name, setName] = useState('');
    const [color, setColor] = useState({ hex: '#fff', name: 'White', id: 7 } as ColorProps);

    function updateColor(id: number): void {
        setColor(Colors[id]);
    }

    function updateHasError(value: ErrorProps): void {
        setHasError(value);
    }

    function resetInputName(): void {
        setName('');
        setHasError({ situation: false, text: '' });
    }

    function newPlayerButton(e): void {
        const hasEqualNameRegistered = playersName.some(player => player === name);
        e.preventDefault();

        if (!name) {
            setHasError({ situation: true, text: "There's no username insered" });
        } else if (hasEqualNameRegistered) {
            setHasError({ situation: true, text: "There's a username registered with this name" });
        } else if (name.length > 16) {
            setHasError({ situation: true, text: 'Username exceded the character limit (16)' });
        } else {
            const player = {
                name,
                color,
                match: {
                    matches: 0,
                    wins: 0,
                    defeats: 0,
                    ties: 0,
                },
                score: 0,
                playedTime: {
                    hour: 0,
                    min: 0,
                    sec: 0,
                    ms: 0,
                },
            };

            addNewPlayer(player);
            router.push('/players');
        }
    }

    return (
        <>
            <TitlePage title="New player" />

            <ColorsModal color={color.id} updateColor={updateColor} />

            <div>
                <div>
                    <BackButton href="/players" />

                    <Header>
                        <UserPlus size={24} /> New player
                    </Header>
                </div>

                <div className={styles.newContainer}>
                    <h4>Fill out this form below to sign up in our system.</h4>

                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className={hasError.situation ? styles.inputNotFilled : ''}
                            onChange={e => setName(e.target.value)}
                            value={name}
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
                        <Button onClick={newPlayerButton}>
                            <UserPlus /> Sign up
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
