import styles from './CartButton.module.scss';

export const CartButton = ({ price, count }) => {
  return (
    <div className={styles.button}>
      <span className={styles.price}>{Number(price).toLocaleString('ru-RU')} ₸</span>
      <div className={styles.wrapper}>
        <div className={styles.image}></div>
        <span className={styles.count}>{count}</span>
      </div>
    </div>
  );
};
