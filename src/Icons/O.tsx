import { FaRegCircle } from 'react-icons/fa';

import { useGame } from '../Contexts/GameContext';

export default function O() {
    const { player } = useGame();

    return <FaRegCircle color={player.o.color} />;
}
