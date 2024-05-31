import Card from '../Card/Card';
import styles from './Catalog.module.scss';

const Catalog = ({ data }) => {
  return (
    <section className={styles.catalog}>
      <ul className={styles.catalog__list}>
        {data.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
