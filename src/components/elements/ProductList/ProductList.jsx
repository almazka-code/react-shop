import { PhoneCard } from '../Card/PhoneCard';
import styles from './ProductList.module.scss';

export const ProductList = ({ data }) => {
  return (
    <section className={styles.catalog}>
      <ul className={styles.catalog__list}>
        {data.map((product) => (
          <PhoneCard key={product.model} product={product} />
        ))}
      </ul>
    </section>
  );
};
