import styles from './CartItems.module.scss';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../redux/slices/cartSlice';

//Components
import { Counter } from '../../ui/Counter/Counter';

export const CartItems = ({ id, color, size, title, price, image, count }) => {
  const dispatch = useDispatch();

  const handleRemove = (id, color, size) => {
    dispatch(removeItem({ id, color, size }));
  };

  return (
    <li className={styles.product}>
      <div className={styles.picture}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.property}>
          Цвет:
          <span className={styles.caption}>
            <span className={`${styles.coloration} ${styles[color]}`}></span>
            {color}
          </span>
        </p>
        <p className={styles.property}>
          Объем: <span className={styles.size}>{size.toUpperCase()}</span>
        </p>
      </div>

      <Counter count={count} id={id} color={color} size={size} />

      <span className={styles.price}>{[price * count].toLocaleString('ru-RU')} ₸</span>

      <button
        className={styles.del}
        type="button"
        onClick={() => handleRemove(id, color, size)}></button>
    </li>
  );
};
