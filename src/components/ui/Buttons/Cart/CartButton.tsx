import styles from './CartButton.module.scss';

type CartButtonProps = {
  price: number;
  count: number;
}

export const CartButton: React.FC<CartButtonProps> = ({ price, count }) => {
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
