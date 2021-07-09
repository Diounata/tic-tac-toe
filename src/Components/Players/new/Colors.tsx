type Props = {
    styles: { readonly [key: string]: string };
    selectedColor: string;
    updateColor(value: string): void;
};

export default function Colors({ styles, selectedColor, updateColor }: Props) {
    return (
        <>
            <label
                className={selectedColor === '#fff' ? styles.selectedColor : ''}
                onClick={() => updateColor('#fff')}
            >
                <div>
                    <div style={{ background: '#fff' }}></div>
                    White
                </div>
            </label>

            <label
                className={selectedColor === '#04dac2' ? styles.selectedColor : ''}
                onClick={() => updateColor('#04dac2')}
            >
                <div>
                    <div style={{ background: '#04dac2' }}></div>
                    Blue
                </div>
            </label>

            <label
                className={selectedColor === '#bb86fc' ? styles.selectedColor : ''}
                onClick={() => updateColor('#bb86fc')}
            >
                <div>
                    <div style={{ background: '#bb86fc' }}></div>
                    Purple
                </div>
            </label>

            <label
                className={selectedColor === '#e74c3c' ? styles.selectedColor : ''}
                onClick={() => updateColor('#e74c3c')}
            >
                <div>
                    <div style={{ background: '#e74c3c' }}></div>
                    Red
                </div>
            </label>

            <label
                className={selectedColor === '#f1c40f' ? styles.selectedColor : ''}
                onClick={() => updateColor('#f1c40f')}
            >
                <div>
                    <div style={{ background: '#f1c40f' }}></div>
                    Yellow
                </div>
            </label>
        </>
    );
}
