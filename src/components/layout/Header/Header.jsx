import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../../assets/svg/logo.svg';
import { CartButton } from '../../ui/Buttons/Cart/CartButton';
import { Search } from '../../ui/Search/Search';

export const Header = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);

  const count = items.reduce((acc, item) => (acc += item.count), 0);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" />
            <h1 className={styles.title}>Смартфономания</h1>
          </div>
        </Link>

        <div className={styles.search}>
          <Search />
        </div>

        <Link to="./cart">
          <CartButton price={totalPrice} count={count} />
        </Link>
      </div>
    </header>
  );
};
