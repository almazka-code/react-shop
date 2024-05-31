import Social from '../../ui/Social/Social';
import styles from './Footer.module.scss';

const Footer = () => {
  const footerlLinks = [
    { text: '8-800-600-90-09', url: 'tel:88006009009' },
    { text: 'hi@smartphonemania.com', url: 'mailto:hi@smartphonemania.com' },
    { text: 'Политика конфиденциальности', url: 'https://policies.google.com' },
    {
      text: 'Публичная оферта',
      url: 'https://www.google.com/intl/ru/adwords/select/TCRussiaForGoogleRussia.html',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} ${styles.container}`}>
        <div className={styles.footer__left}>
          <ul className={styles.footer__links}>
            {footerlLinks.map((link) => (
              <li key={link.text}>
                <a
                  className={styles.footer__link}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <span className={styles.footer__copyright}>© 2024 Смартфономания</span>
        </div>

        <div className={styles.footer__right}>
          <div className={styles.footer__social}>
            <Social />
          </div>

          <p className={styles.footer__text}>
            Все права на материалы, находящиеся на сайте, охраняются в соответствии с
            законодательством РК, в том числе об авторском праве и смежных правах.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
