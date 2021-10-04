import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/General/StartCustomGameButton.module.scss';

import Users from '@Icons/Users';
import X from '@Icons/X';
import O from '@Icons/O';

import SelectPlayerButtons from '@Components/Players/SelectPlayerButtons';

import { usePlayers } from '@Contexts/PlayersContext';
import { useGame } from '@Contexts/GameContext';
import { useModal } from '@Contexts/ModalContext';

type ComponentProps = {
    updateCustomGameModalState(value: boolean): void;
};

export default function StartCustomGameButton({ updateCustomGameModalState }: ComponentProps) {
    const { players } = usePlayers();
    const { updatePlayer } = useGame();
    const { changeModalState } = useModal();

    const [selectedPlayer, setSelectedPlayer] = useState({ X: -1, O: -1 });
    const router = useRouter();

    function changeSelectedPlayer(value: number, symbol: 'X' | 'O') {
        const newSelectedPlayer = { ...selectedPlayer };

        if (newSelectedPlayer[symbol] === value) {
            newSelectedPlayer[symbol] = -1;
        } else {
            newSelectedPlayer[symbol] = value;
        }

        setSelectedPlayer(newSelectedPlayer);
    }

    function addPlayers(): void {
        const x = players[selectedPlayer['X']];
        const o = players[selectedPlayer['O']];

        console.log(selectedPlayer);

        const xPlayer = {
            name: x.name,
            symbol: 'X',
            color: x.color.hex,
            wins: 0,
            icon: <X color={x.color.hex} />,
        };
        const oPlayer = {
            name: o.name,
            symbol: 'O',
            color: o.color.hex,
            wins: 0,
            icon: <O color={o.color.hex} />,
        };

        updatePlayer(xPlayer, oPlayer);
        changeModalState(false);
        router.push('/play');
    }

    return (
        <>
            <div className={styles.container}>
                <h3>
                    <Users /> Players
                </h3>

                <div>
                    {players.map((p, key) => {
                        const isDefaultPlayer = p.name === 'Player X' || p.name === 'Player O';
                        const playerData = {
                            name: p.name,
                            color: { hex: p.color.hex },
                            wins: p.match.wins,
                            key,
                        };

                        return (
                            <div key={key}>
                                <div className={styles.username}>
                                    <div
                                        style={{ background: p.color.hex }}
                                        className={styles.divColor}
                                    ></div>

                                    <div>{p.name}</div>
                                </div>

                                <div className={styles.selectPlayer}>
                                    {isDefaultPlayer ? (
                                        <SelectPlayerButtons
                                            p={playerData}
                                            symbol={p.name === 'Player X' ? 'X' : 'O'}
                                            selectedPlayer={selectedPlayer}
                                            changeSelectedPlayer={changeSelectedPlayer}
                                        />
                                    ) : (
                                        <>
                                            <SelectPlayerButtons
                                                p={playerData}
                                                symbol="X"
                                                selectedPlayer={selectedPlayer}
                                                changeSelectedPlayer={changeSelectedPlayer}
                                            />

                                            <SelectPlayerButtons
                                                p={playerData}
                                                symbol="O"
                                                selectedPlayer={selectedPlayer}
                                                changeSelectedPlayer={changeSelectedPlayer}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <footer>
                <button onClick={() => updateCustomGameModalState(false)}>Back</button>

                <button disabled={selectedPlayer.X === -1 || selectedPlayer.O === -1} onClick={addPlayers}>
                    Start Game
                </button>
            </footer>
        </>
    );
}
