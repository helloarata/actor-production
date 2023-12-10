import styles from '@/styles/components/Footer.module.scss';
import { TwitterIcon, FacebookIcon }from './Icon';

export default function Footer({ fonts }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__sharing}>
        <h5 className={`${styles.footer__sharing__headline} ${fonts[1].className}`}>Information Sharing</h5>
        <ul className={styles.footer__sharing__list}>
          <a href='#'><TwitterIcon /></a>
          <a href='#'><FacebookIcon /></a>
        </ul>
      </div>
      <a className={styles.footer__container}>
        <h1 className={`${styles.footer__container__title} ${fonts[1].className}`}>Actor Production</h1>
      </a>
      <div className={`${styles.footer__copyright} ${fonts[1].className}`}>© 2023 Actor Production.</div>
    </footer>
  );
}