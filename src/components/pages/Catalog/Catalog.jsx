import styles from './Catalog.module.scss';
import { DATA } from '../../../constants/data';
import ProductList from '../../elements/ProductList/ProductList';

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__top}>
        <h2 className={styles.catalog__title}>Каталог</h2>
        <span className={styles.catalog__subtitle}>152 товара</span>
      </div>
      <div className={styles.catalog__content}>
        <div>Фильтры</div>
        <ProductList data={DATA} />
      </div>
    </div>
  );
};

export default Catalog;
