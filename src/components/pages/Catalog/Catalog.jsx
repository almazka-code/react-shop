import styles from './Catalog.module.scss';
import { Sort } from '../../ui/Sort/Sort';
import { PhoneCard } from '../../elements/Card/PhoneCard';
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
        <section className={styles.catalog__section}>
          <div className={styles.catalog__sort}>
            <Sort />
          </div>
          <ul className={styles.catalog__list}>
            {items.map((product) => (
              <PhoneCard key={product.model} product={product} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
