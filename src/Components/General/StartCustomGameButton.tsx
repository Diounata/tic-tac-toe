import styles from '@styles/General/StartCustomGameButton.module.scss';

import SelectPlayerButtons from '@Components/Players/SelectPlayerButtons';

import { usePlayers } from '@Contexts/PlayersContext';

type ComponentProps = {
    updateCustomGameModalState(value: boolean): void;
};

export default function StartCustomGameButton({ updateCustomGameModalState }: ComponentProps) {
    const { players } = usePlayers();

    return (
        <>
            <div className={styles.container}>
                <h3>Players</h3>

                <div>
                    {players.map((p, key) => (
                        <div key={key}>
                            <div className={styles.username}>
                                <div
                                    style={{ background: p.color.hex }}
                                    className={styles.divColor}
                                ></div>

                                <div>{p.name}</div>
                            </div>

                            <div className={styles.selectPlayer}>
                                <SelectPlayerButtons
                                    p={{
                                        name: p.name,
                                        color: { hex: p.color.hex },
                                        wins: p.match.wins,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <button onClick={() => updateCustomGameModalState(false)}>
                    Back
                </button>

                <button>Start Game</button>
            </footer>
        </>
    );
}
