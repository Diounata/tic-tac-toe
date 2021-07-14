import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Players/EditRoute.module.scss';

import EditComponent from '@Components/Players/EditComponent';

import { usePlayers } from '@Contexts/PlayersContext';

export default function Edit() {
    const { isEditingAPlayer } = usePlayers();
    const router = useRouter();

    useEffect(() => {
        if (!isEditingAPlayer) {
            router.push('/players');
        }
    }, []);

    return (
        <>
            {isEditingAPlayer
                ? <EditComponent />
                : <div className={styles.redirecting}>Redirecting...</div>
            }
        </>
    );
}
