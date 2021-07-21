import { ReactNode } from 'react';
import styles from '@styles/General/Modal.module.scss';

import { useModal } from '@Contexts/ModalContext';

type ModalProps = {
    children: ReactNode;
};

export default function Modal(props: ModalProps) {
    const { isModalOpen, changeModalState } = useModal();

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closedModal}>
            <div
                className={styles.outsideModal}
                onClick={() => changeModalState(false)}
            ></div>
                
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}
