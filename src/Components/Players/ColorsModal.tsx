import { useState } from 'react';
import styles from '@styles/Players/ColorsModal.module.scss';

import X from '@Icons/X';
import O from '@Icons/O';
import Colors from '@utils/Colors.json';

import Modal from '@Components/Modal/Modal';

import { useModal } from '@Contexts/ModalContext';

export default function ColorsModal() {
    const { changeModalState } = useModal();

    const [selectedColor, setSelectedColor] = useState<number>();

    return (
        <Modal>
            <div className={styles.container}>
                <header>
                    <h3>Colors</h3>

                    {selectedColor > -1 && (
                        <div>
                            <X color={Colors[selectedColor].hex} size="19" />
                            <O color={Colors[selectedColor].hex} size="17" />
                        </div>
                    )}
                </header>

                <div className={styles.colorDiv}>
                    {Colors.map((color, key) => (
                        <div key={key}>
                            <div>
                                <div className={styles.colorSquare} style={{ background: color.hex }}></div>

                                {color.name}
                            </div>

                            <button
                                className={selectedColor === key && styles.selected}
                                onClick={() => setSelectedColor(key)}
                            >
                                {selectedColor === key && '×'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <button onClick={() => changeModalState(false)}>Cancel</button>

                <button>Select</button>
            </footer>
        </Modal>
    );
}
