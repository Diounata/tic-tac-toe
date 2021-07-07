import { FaRegCircle } from 'react-icons/fa';

type IconProps = {
    color?: string;
}

export default function O({ color }: IconProps) {
    return <FaRegCircle color={color || '#bb86fc'} title='O' />;
}
