import styles from '../styles/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            Made with <span>♥</span> by{' '}
            <a href='https://github.com/Diounata/' target='_blank'>
                @Diounata
            </a>
        </footer>
    );
}
