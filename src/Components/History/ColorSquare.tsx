import styles from '@styles/History/ColorSquare.module.scss';

type Props = {
    situation: 'Winner' | 'Loser' | 'Tie';
};

export default function ColorSquare({ situation }: Props) {
    function getColor(): string {
        switch (situation) {
            case 'Winner':
                return 'green';
            case 'Loser':
                return 'red';
            case 'Tie':
                return 'gray';
        }
    }

    return <div style={{ background: `var(--${getColor()})` }} className={styles.square}></div>;
}
