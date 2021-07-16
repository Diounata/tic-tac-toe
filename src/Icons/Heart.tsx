import { FaHeart } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

export default function Heart(props: IconBaseProps) {
    return <FaHeart color='#e74c3c' title='<3' {...props} />;
}
