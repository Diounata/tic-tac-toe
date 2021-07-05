import styles from '../../styles/General/Footer.module.scss';

import Heart from '../../Icons/Heart';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            Made with <Heart /> by
            
            <a href='https://github.com/Diounata/' target='_blank'>
                @Diounata
            </a>
        </footer>
    );
}
