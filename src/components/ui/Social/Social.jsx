import styles from './Social.module.scss';

import instagramIcon from '../../../assets/svg/social/instagram.svg';
import facebookIcon from '../../../assets/svg/social/facebook.svg';
import twitterIcon from '../../../assets/svg/social/twitter.svg';
import telegramIcon from '../../../assets/svg/social/telegram.svg';

export const Social = () => {
  const socialLinks = [
    {
      name: 'instagram',
      url: 'https://www.instagram.com',
      icon: instagramIcon,
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com',
      icon: facebookIcon,
    },
    { name: 'twitter', url: 'https://www.x.com', icon: twitterIcon },
    {
      name: 'telegram',
      url: 'https://web.telegram.org',
      icon: telegramIcon,
    },
  ];

  return (
    <ul className={styles.social}>
      {socialLinks.map((social) => (
        <li key={social.name}>
          <a
            className={styles.link}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            style={{ backgroundImage: `url(${social.icon})` }}></a>
        </li>
      ))}
    </ul>
  );
};
