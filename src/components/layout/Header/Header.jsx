import styles from './Header.module.scss';

import logo from '../../../assets/svg/logo.svg';
import { Logo } from './Logo/Logo';
import { CartButton } from '../../ui/Buttons/Cart/CartButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__title}>Смартфономания</h1>

        <Logo text="Смартфономания" img={logo} />

        <CartButton price="1256123" count="3" />
      </div>
    </header>
  );
};
