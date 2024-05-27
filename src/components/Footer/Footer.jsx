import Social from '../Social/Social';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} ${styles.container}`}>
        <div className={styles.footer__top}>
          <ul className={styles.footer__links}>
            <li>
              <a className={styles.footer__link} href="tel:88006009009">8-800-600-90-09</a>
            </li>
            <li>
              <a className={styles.footer__link} href="mailto:hi@technozavrrr.com">hi@technozavrrr.com</a>
            </li>
          </ul>

          <div className={styles.footer__social}>
           <Social />
          </div>
        </div>


        <p className={styles.footer__description}>
          Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РК, в том числе об
          авторском праве и смежных правах.
        </p>

        <div className={styles.footer__bottom}>
          <span className={styles.footer__copyright}>© 2024 Технозавррр</span>

          <ul className={styles.footer__data}>
            <li>
              <a className={styles.footer__link} href="#!" target="_blank">Политика конфиденциальности</a>
            </li>
            <li>
              <a className={styles.footer__link} href="#!" target="_blank">Публичная оферта</a>
            </li>
          </ul>
        </div>
      </div>
  </footer>
  )
}

export default Footer;