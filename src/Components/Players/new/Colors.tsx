type Props = {
    styles: { readonly [key: string]: string };
    color: ColorProps;
    updateColor(value: ColorProps): void;
};

type ColorProps = {
    hex: string;
    name: string;
};

export default function Colors({ styles, color, updateColor }: Props) {
    const Colors: ColorProps[] = [
        {
            hex: '#fff',
            name: 'White',
        },

        {
            hex: '#04dac2',
            name: 'Cyan',
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
            hex: '#f1c40f',
            name: 'Yellow',
        },

        {
            hex: '#2ecc71',
            name: 'Green',
        },

        {
            hex: '#3498db',
            name: 'Blue',
        },

        {
            hex: '#e67e22',
            name: 'Orange',
        },

        {
            hex: '#fd79a8',
            name: 'Pink',
        },
    ];

    return (
        <>
            {Colors.map((item, key) => (
                <label
                    className={color.hex === item.hex ? styles.selectedColor : ''}
                    onClick={() => updateColor(item)}
                    key={key}
                >
                    <div>
                        <div style={{ background: item.hex }}></div>
                        {item.name}
                    </div>
                </label>
            ))}
        </>
    );
}
