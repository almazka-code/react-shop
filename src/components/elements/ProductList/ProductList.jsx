import { Sort } from '../../ui/Sort/Sort';
import { PhoneCard } from '../Card/PhoneCard';
import styles from './ProductList.module.scss';

export const ProductList = ({ data }) => {
  return (
    <section className={styles.catalog}>
      <div className={styles.catalog__sort}>
        <Sort />
      </div>
      <ul className={styles.catalog__list}>
        {data.map((product) => (
          <PhoneCard key={product.model} product={product} />
        ))}
      </ul>
    </section>
  );
};
