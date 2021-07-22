import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/General/StartCustomGameButton.module.scss';

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

    const [selectedPlayer, setSelectedPlayer] = useState({ x: players.length - 2, o: players.length - 1 });
    const router = useRouter();

    function changeSelectedPlayer(value: number, symbol: 'x' | 'o') {
        if (value === selectedPlayer[symbol]) {
            const selectedChange = symbol === 'x' ? { x: -1 } : { o: -1 };
            const newSelectedPlayer = { ...selectedPlayer, ...selectedChange };

            setSelectedPlayer(newSelectedPlayer);
        } else {
            const selectedChange = symbol === 'x' ? { x: value } : { o: value };
            const newSelectedPlayer = { ...selectedPlayer, ...selectedChange };

            setSelectedPlayer(newSelectedPlayer);
        }
    }

    function addPlayers(): void {
        const x = players[selectedPlayer['x']];
        const o = players[selectedPlayer['o']];

        const xPlayer = {
            name: x.name,
            symbol: 'x',
            color: x.color.hex,
            wins: 0,
            icon: <X color={x.color.hex} />,
        };
        const oPlayer = {
            name: o.name,
            symbol: 'o',
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
                <h3>Players</h3>

                <div>
                    {players.map((p, key) => {
                        const isDefaultPlayer = p.name === 'Player X' || p.name === 'Player O';
                        const playerData = {
                            name: p.name,
                            color: { hex: p.color.hex },
                            wins: p.match.wins,
                            key: key,
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
                                    {isDefaultPlayer
                                        ? (
                                            <SelectPlayerButtons
                                                p={playerData}
                                                symbol={p.name === 'Player X' ? 'x' : 'o'}
                                                selectedPlayer={selectedPlayer}
                                                changeSelectedPlayer={changeSelectedPlayer}
                                            />
                                        )

                                        : (
                                            <>
                                                <SelectPlayerButtons
                                                    p={playerData}
                                                    symbol='x'
                                                    selectedPlayer={selectedPlayer}
                                                    changeSelectedPlayer={changeSelectedPlayer}
                                                />

                                                <SelectPlayerButtons
                                                    p={playerData}
                                                    symbol='o'
                                                    selectedPlayer={selectedPlayer}
                                                    changeSelectedPlayer={changeSelectedPlayer}
                                                />
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <footer>
                <button onClick={() => updateCustomGameModalState(false)}>
                    Back
                </button>

                <button onClick={addPlayers}>Start Game</button>
            </footer>
        </>
    );
}
