import { ReactNode } from 'react';
import styles from '@styles/General/Modal.module.scss';

import { useModal } from '@Contexts/ModalContext';

type ModalProps = {
    children: ReactNode;
};

export default function Modal(props: ModalProps) {
    const { isModalOpen } = useModal();

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closedModal}>
            <div>{props.children}</div>
        </div>
    );
}
