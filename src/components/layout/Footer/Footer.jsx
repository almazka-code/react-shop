import styles from './Footer.module.scss';
import { Social } from '../../ui/Social/Social';

export const Footer = () => {
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
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ul className={styles.links}>
            {footerlLinks.map((link) => (
              <li key={link.text}>
                <a
                  className={styles.link}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <span className={styles.copyright}>© 2024 Смартфономания</span>
        </div>

        <div className={styles.right}>
          <div className={styles.social}>
            <Social />
          </div>

          <p className={styles.text}>
            Все права на материалы, находящиеся на сайте, охраняются в соответствии с
            законодательством РК, в том числе об авторском праве и смежных правах.
          </p>
        </div>
      </div>
    </footer>
  );
};
