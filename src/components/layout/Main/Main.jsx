import { Catalog } from '../../pages/Catalog/Catalog';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Catalog />
    </main>
  );
};
