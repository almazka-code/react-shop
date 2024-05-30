import styles from './Social.module.scss';

const Social = () => {
  const socialLinks = [
    { id: 0, name: 'instagram', url: 'https://www.instagram.com' },
    { id: 1, name: 'facebook', url: 'https://www.facebook.com' },
    { id: 2, name: 'twitter', url: 'https://www.x.com' },
    { id: 3, name: 'telegram', url: 'https://web.telegram.org' },
    { id: 4, name: 'vk', url: 'https://vk.com' },
  ];

  return (
    <ul className={styles.social}>
      {socialLinks.map((social) => (
        <li className={styles.social__item} key={social.id}>
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
