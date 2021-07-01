import { CgHashtag } from 'react-icons/cg';

type IconProps = { color: string };

export default function Hashtag({ color }: IconProps) {
    return <CgHashtag color={color} />;
}
