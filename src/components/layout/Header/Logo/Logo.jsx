import styles from './Logo.module.scss';

export const Logo = ({ text, img }) => {
  return (
    <a className={styles.logo} href="#!">
      <img className={styles.logo__img} src={img} alt="Логотип" />
      <span className={styles.logo__text}>{text}</span>
    </a>
  );
};
