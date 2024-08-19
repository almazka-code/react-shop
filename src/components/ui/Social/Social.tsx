import styles from './Social.module.scss';

import instagramIcon from '../../../assets/svg/social/instagram.svg';
import facebookIcon from '../../../assets/svg/social/facebook.svg';
import twitterIcon from '../../../assets/svg/social/twitter.svg';
import telegramIcon from '../../../assets/svg/social/telegram.svg';

type SocialLinksItem = {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLinksItem[]  = [
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

export const Social: React.FC = () => {
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
