import styles from './Sizes.module.scss';

export const Sizes = ({ sizes, name, onSizeChange, className }) => {
  return (
    <ul className={`${styles.sizes} ${className}`}>
      {sizes.map((size, index) => (
        <li key={size}>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type="radio"
              name={`size-${name}`}
              value={size}
              defaultChecked={index === 0}
              onChange={onSizeChange}
              // onChange={() => onSizeChange(size)}
            />
            <span className={styles.value}>{size}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
