import styles from './Social.module.scss';

const Social = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.social__item}>
        <a className={`${styles.social__link} ${styles.social__link_instagram}`} href="#!"></a>
      </li>
      <li className={styles.social__item}>
        <a className={`${styles.social__link} ${styles.social__link_facebook}`} href="#!"></a>
      </li>
      <li className={styles.social__item}>
        <a className={`${styles.social__link} ${styles.social__link_twitter}`} href="#!"></a>
      </li>
      <li className={styles.social__item}>
        <a className={`${styles.social__link} ${styles.social__link_instagram}`} href="#!"></a>
      </li>
      <li className={styles.social__item}>
        <a className={`${styles.social__link} ${styles.social__link_vk}`} href="#!"></a>
      </li>
    </ul>
  )
}

export default Social;