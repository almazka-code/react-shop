import Catalog from '../../elements/Catalog/Catalog';
import styles from './Main.module.scss';
import { DATA } from '../../../constants/data';

const Main = () => {
  return (
    <main className={`${styles.content} ${styles.container}`}>
      <div className={`${styles.content__top} ${styles.content__top_catalog}`}>
        <h2 className={styles.content__title}>Каталог</h2>
        <span className={styles.content__info}>152 товара</span>
      </div>
      <div className={styles.content__catalog}>Фильтры</div>
      <Catalog data={DATA} />
    </main>
  );
};

export default Main;
