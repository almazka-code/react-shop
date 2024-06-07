import Card from '../Card/Card';
import styles from './ProductList.module.scss';

const ProductList = ({ data }) => {
  return (
    <section className={styles.catalog}>
      <ul className={styles.catalog__list}>
        {data.map((product) => (
          <Card key={product.model} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
