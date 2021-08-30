import styles from '@styles/Players/ColorsModal.module.scss';

import Modal from '@Components/Modal/Modal';

import { useModal } from '@Contexts/ModalContext';

export default function ColorsModal() {
    const { changeModalState } = useModal();

    const colors = [
        {
            hex: '#3498db',
            name: 'Blue',
        },

        {
            hex: '#04dac2',
            name: 'Cyan',
        },

        {
            hex: '#2ecc71',
            name: 'Green',
        },

        {
            hex: '#e67e22',
            name: 'Orange',
        },

        {
            hex: '#fd79a8',
            name: 'Pink',
        },

        {
            hex: '#bb86fc',
            name: 'Purple',
        },

        {
            hex: '#e74c3c',
            name: 'Red',
        },

        {
            hex: '#fff',
            name: 'White',
        },

        {
            hex: '#f1c40f',
            name: 'Yellow',
        },
    ];

    changeModalState(true);

    return (
        <Modal>
            <div className={styles.container}>
                <h3>Colors</h3>

                <div className={styles.colorDiv}>
                    {colors.map((color, key) => (
                        <div key={key}>
                            <div>
                                <div className={styles.colorSquare} style={{ background: color.hex }}></div>

                                {color.name}
                            </div>

                            <button className={key === 1 && styles.selected}>{key === 1 && '×'}</button>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <button>Cancel</button>

                <button>Select</button>
            </footer>
        </Modal>
    );
}
