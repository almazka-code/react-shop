import styles from './Counter.module.scss';
import { useDispatch } from 'react-redux';
import { plusItemCount, minusItemCount } from '../../../../redux/slices/cartSlice';

export const Counter = ({ count, id, color, size, className }) => {
  const dispatch = useDispatch();

  const onClickMinus = () => {
    dispatch(minusItemCount({ id, color, size }));
  };

  const onClickPlus = () => {
    dispatch(plusItemCount({ id, color, size }));
  };

  return (
    <div className={`${styles.counter} ${className}`}>
      <button
        className={`${styles.button} ${styles.minus}`}
        type="button"
        onClick={onClickMinus}></button>
      <input className={styles.input} type="text" value={count} name="count" readOnly />
      <button
        className={`${styles.button} ${styles.plus}`}
        type="button"
        onClick={onClickPlus}></button>
    </div>
  );
};
