import X from '@Icons/X';
import O from '@Icons/O';

type Props = {
    username: string;
    color: string;
    isDefaultPlayer: boolean;
};

export default function PlayerIcon({ username, color, isDefaultPlayer }: Props) {
    function showSingleIcon(): JSX.Element {
        return username === 'Player X' ? <X color={color} /> : <O color={color} size='14' />
    }

    return (
        <>
            {isDefaultPlayer
                ? showSingleIcon()

                : (
                    <>
                        <X color={color} />
                        <O color={color} size='14' />
                    </>
                )}
        </>
    );
}
