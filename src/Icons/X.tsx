import { FaTimes } from 'react-icons/fa';

import { useGame } from '../Contexts/GameContext';

export default function X() {
    const { player } = useGame();

    return <FaTimes color={player.x.color} title='X' />;
}
