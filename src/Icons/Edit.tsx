import { FaEdit } from 'react-icons/fa';

type IconProps = {
    size?: number;
};

export default function Edit({ size }: IconProps) {
    return <FaEdit size={size} />;
}
