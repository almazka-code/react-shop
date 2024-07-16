import styles from './PriceInput.module.scss';

export const PriceInput = ({ value, caption, name, placeholder, onChange }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        value={value}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className={styles.value}>{caption}</span>
    </label>
  );
};
