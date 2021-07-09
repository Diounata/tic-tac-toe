import { useState } from 'react';
import styles from '../../styles/Players/NewPlayer.module.scss';

import TitlePage from '../../utils/TitlePage';
import Button from '../../Components/General/Button';
import UserPlus from '../../Icons/UserPlus';

import Colors from '../../Components/Players/new/Colors';
import Footer from '../../Components/General/Footer';
import BackButton from '../../Components/General/BackButton';
import Header from '../../Components/General/Header';

export default function NewPlayerForm() {
    const [selectedColor, setSelectedColor] = useState('#fff');

    function updateColor(value: string): void {
        setSelectedColor(value);
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

                <form className={styles.newContainer}>
                    <h4>Fill out this form below to sign up in our system.</h4>

                    <input type='text' placeholder='Username' required />

                    <h4>User color:</h4>

                    <div className={styles.colors}>
                        <Colors
                            selectedColor={selectedColor}
                            updateColor={updateColor}
                            styles={styles}
                        />
                    </div>

                    <div className={styles.signUpButton}>
                        <Button>
                            <UserPlus /> Sign up
                        </Button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}
