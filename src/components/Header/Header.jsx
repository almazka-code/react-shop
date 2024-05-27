import styles from './Header.module.scss';

import logo from '../../assets/svg/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__wrapper} ${styles.container}`}>
        <h1 className={styles.hidden}>Смартфономания</h1>

        <a className={styles.header__logo} href="#!">
          <img src={logo} alt="Логотип" width="50" height="50"/>
          <span>Смартфономания</span>
        </a>
    
        <a className={styles.header__tel} href="tel:88006009009">8-800-600-90-09 (с 10:00 до 22:00)</a>

        <a className={styles.header__cart} href="#!">
          <div className={styles.header__image}></div>
          <span className={styles.header__count}>3</span>
        </a>
      </div>
    </header>
    
    );
}

export default Header;