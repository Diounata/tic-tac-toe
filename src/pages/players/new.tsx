import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Players/NewPlayer.module.scss';

import TitlePage from '@utils/TitlePage';
import Button from '@Components/General/Button';
import UserPlus from '@Icons/UserPlus';
import DeleteCircle from '@Icons/DeleteCircle';

import Colors from '@Components/Players/new/Colors';
import Footer from '@Components/General/Footer';
import BackButton from '@Components/General/BackButton';
import WarningAlert from '@Components/Players/WarningAlert';
import Header from '@Components/General/Header';

import { usePlayers } from '@Contexts/PlayersContext';

type ColorProps = {
    hex: string;
    name: string;
};

type ErrorProps = {
    situation: boolean;
    text: string;
}

export default function NewPlayerForm() {
    const { playersName, addNewPlayer } = usePlayers();
    const router = useRouter();

    const [hasError, setHasError] = useState({} as ErrorProps);
    const [name, setName] = useState('');
    const [color, setColor] = useState({ hex: '#fff', name: 'White' } as ColorProps);

    function updateColor(value: ColorProps): void {
        setColor(value);
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
            setHasError({ situation: true, text: "Username exceded the character limit (16)"})
        } else {
            const player = {
                name,
                color,
                match: {
                    matches: 0,
                    wins: 0,
                    defeats: 0,
                    ties: 0,
                    winrate: 0,
                    score: 0,
                },
            };

            addNewPlayer(player);
            router.push('/players');
        }
    }

    return (
        <>
            <TitlePage title='New player' />

            <div>
                <div>
                    <BackButton href='/players' />

                    <Header>
                        <UserPlus size={24} /> New player
                    </Header>
                </div>

                <form action='/players/' className={styles.newContainer}>
                    <h4>Fill out this form below to sign up in our system.</h4>

                    <div className={styles.inputContainer}>
                        <input
                            type='text' placeholder='Username' required
                            className={hasError.situation ? styles.inputNotFilled : ''}
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />

                        <DeleteCircle className={styles.deleteIcon} onClick={resetInputName} title='Reset' size={20} />
                    </div>

                    <WarningAlert hasError={hasError} updateHasError={updateHasError} />

                    <h4>User color:</h4>

                    <div className={styles.colors}>
                        <Colors
                            color={color}
                            updateColor={updateColor}
                            styles={styles}
                        />
                    </div>

                    <div className={styles.signUpButton}>
                        <Button onClick={newPlayerButton}>
                            <UserPlus /> Sign up
                        </Button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}
