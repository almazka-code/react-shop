import styles from './Counter.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { incrementItemCount, decrementItemCount } from '../../../../redux/slices/cartSlice';

export const Counter = ({ count, id, color, size, className }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItemCount({ id, color, size }));
  };

  const handleDecrement = () => {
    dispatch(decrementItemCount({ id, color, size }));
  };

  return (
    <div className={`${styles.counter} ${className}`}>
      <button
        className={`${styles.button} ${styles.minus}`}
        type="button"
        onClick={handleDecrement}></button>
      <input className={styles.input} type="text" value={count} name="count" readOnly />
      <button
        className={`${styles.button} ${styles.plus}`}
        type="button"
        onClick={handleIncrement}></button>
    </div>
  );
};
