import styles from './Sizes.module.scss';

const Sizes = ({ sizes, name, onSizeChange, className }) => {
  return (
    <ul className={`${styles.sizes} ${className}`}>
      {sizes.map((size, index) => (
        <li key={size} className={styles.sizes__item}>
          <label className={styles.sizes__label}>
            <input
              className={`${styles.sizes__radio} ${styles.custom}`}
              type="radio"
              name={`size-${name}`}
              value={size}
              defaultChecked={index === 0}
              onChange={onSizeChange}
              // onChange={() => onSizeChange(size)}
            />
            <span className={styles.sizes__value}>{size}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Sizes;
