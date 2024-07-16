import styles from './CartItem.module.scss';

//Components
import { Counter } from './Counter/Counter';
// import { Colors } from '../../ui/Colors/Colors';

export const CartItem = ({ title }) => {
  return (
    <li className={styles.product}>
      <div className={styles.picture}>
        {/* <img className={styles.image} src="assets/img/1.jpg" alt="Название товара"/> */}
      </div>
      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.property}>
          Цвет:
          <span className={styles.caption}>
            <span className={`${styles.color} ${styles.blue}`}></span>
            {/* <span className={`${styles.color} ${styles[color]}`}></span> */}
            {/* <Colors colors={colors} name={colors[0]} /> */}
            Синий
          </span>
        </p>
        <p className={styles.property}>
          Объем: <span className={styles.size}>128GB</span>
        </p>
      </div>

      <Counter />

      <span className={styles.price}>180 990 ₸</span>

      <button className={styles.del} type="button"></button>
    </li>
  );
};
