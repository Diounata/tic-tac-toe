import { FaTrophy } from 'react-icons/fa';

type IconProps = {
    size?: number;
};

export default function Trophy({ size }: IconProps) {
    return <FaTrophy size={size || '16'} />;
}
