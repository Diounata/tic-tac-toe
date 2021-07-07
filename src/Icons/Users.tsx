import { FaUserFriends } from 'react-icons/fa';

type IconProps = {
    size?: number;
};

export default function Users({ size }: IconProps) {
    return <FaUserFriends size={size || '16'} />;
}
