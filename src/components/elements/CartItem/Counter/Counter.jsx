import styles from './Counter.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { incrementItemCount, decrementItemCount } from '../../../../redux/slices/cartSlice';

export const Counter = ({ className, count, id, color, size }) => {
  const [inputValue, setInputValue] = useState(count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItemCount({ id, color, size }));
    setInputValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (inputValue > 1) {
      dispatch(decrementItemCount({ id, color, size }));
      setInputValue((prevValue) => prevValue - 1);
    }
  };

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      setInputValue(newValue);
      dispatch(incrementItemCount({ id, color, size }));
    }
  };

  return (
    <div className={`${styles.counter} ${className}`}>
      <button
        className={`${styles.button} ${styles.minus}`}
        type="button"
        onClick={handleDecrement}></button>

      <input
        className={styles.input}
        type="text"
        value={inputValue}
        name="count"
        onChange={handleChange}
      />

      <button
        className={`${styles.button} ${styles.plus}`}
        type="button"
        onClick={handleIncrement}></button>
    </div>
  );
};
