import styles from './PriceInput.module.scss';

export const PriceInput = ({ value, name, placeholder }) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="text" name={name} placeholder={placeholder} />
      <span className={styles.value}>{value}</span>
    </label>
  );
};
