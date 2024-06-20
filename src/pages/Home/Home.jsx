import styles from './Home.module.scss';
import { Sort } from '../../components/ui/Sort/Sort';
import { PhoneCard } from '../../components/elements/PhoneCard/PhoneCard';
import { useEffect, useState } from 'react';
import { Skeleton } from '../../components/elements/PhoneCard/Skeleton';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://66715424e083e62ee43b17a5.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.catalog}>
      <div className={styles.top}>
        <h2 className={styles.title}>Каталог</h2>
        <span className={styles.subtitle}>152 товара</span>
      </div>
      <div className={styles.content}>
        <div>Фильтры</div>
        <section className={styles.section}>
          <div className={styles.sort}>
            <Sort />
          </div>
          <ul className={styles.list}>
            {/* пока идет загрузка создать фейковый массив из 6 элементов (все значения будут underfined) для того,
            чтобы рендерился массив скелетонов, так как массив с данными ещё не пришел  */}
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((product) => <PhoneCard key={product.model} product={product} />)}
          </ul>
        </section>
      </div>
    </div>
  );
};
