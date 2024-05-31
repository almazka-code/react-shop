import styles from './Social.module.scss';

const Social = () => {
  const socialLinks = [
    { name: 'instagram', url: 'https://www.instagram.com' },
    { name: 'facebook', url: 'https://www.facebook.com' },
    { name: 'twitter', url: 'https://www.x.com' },
    { name: 'telegram', url: 'https://web.telegram.org' },
    { name: 'vk', url: 'https://vk.com' },
  ];

  return (
    <ul className={styles.social}>
      {socialLinks.map((social) => (
        <li className={styles.social__item} key={social.name}>
          <a
            className={`${styles.social__link} ${styles[social.name]}`}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"></a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
