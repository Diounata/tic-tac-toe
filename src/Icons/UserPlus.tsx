import { FaUserPlus } from 'react-icons/fa';

type IconProps = {
    size?: number;
};

export default function UserPlus({ size }: IconProps) {
    return <FaUserPlus size={size || 16} />;
}
