import { FaTimes } from 'react-icons/fa';

type IconProps = {
    color?: string;
};

export default function X({ color }: IconProps) {
    return <FaTimes color={color || '#04dac2'} title='X' />;
}
