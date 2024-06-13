import styles from './CartButton.module.scss';

export const CartButton = ({ price, count }) => {
  return (
    <a className={styles['button-cart']} href="#!">
      <span className={styles['button-cart__price']}>
        {Number(price).toLocaleString('ru-RU')} ₸
      </span>
      <div className={styles['button-cart__box']}>
        <div className={styles['button-cart__image']}></div>
        <span className={styles['button-cart__count']}>{count}</span>
      </div>
    </a>
  );
};
