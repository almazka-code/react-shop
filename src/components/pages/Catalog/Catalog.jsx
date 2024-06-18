import styles from './Catalog.module.scss';
// import DATA from '../../../constants/data.json';
import { ProductList } from '../../elements/ProductList/ProductList';
import { useEffect, useState } from 'react';

export const Catalog = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://66715424e083e62ee43b17a5.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__top}>
        <h2 className={styles.catalog__title}>Каталог</h2>
        <span className={styles.catalog__subtitle}>152 товара</span>
      </div>
      <div className={styles.catalog__content}>
        <div>Фильтры</div>
        <ProductList data={items} />
      </div>
    </div>
  );
};
