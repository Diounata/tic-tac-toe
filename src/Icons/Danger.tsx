import { BsFillExclamationTriangleFill } from 'react-icons/bs';

type IconProps = {
    color?: string;
};

export default function Danger({ color }: IconProps) {
    return <BsFillExclamationTriangleFill color={color || '#f39c12'} />;
}
