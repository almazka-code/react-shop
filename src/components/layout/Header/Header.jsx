import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../../assets/svg/logo.svg';
import { CartButton } from '../../ui/Buttons/Cart/CartButton';
import { Search } from '../../ui/Search/Search';

export const Header = ({ searchValue, setSearchValue }) => {
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
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        <Link to="./cart">
          <CartButton price="1256123" count="3" />
        </Link>
      </div>
    </header>
  );
};
