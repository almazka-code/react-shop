import styles from './Counter.module.scss';

export const Counter = () => {
  return (
    <div className={styles.counter}>
      <button className={`${styles.button} ${styles.minus}`} type="button"></button>

      <input className={styles.input} type="text" value="1" name="count" />

      <button className={`${styles.button} ${styles.plus}`} type="button"></button>
    </div>
  );
};
