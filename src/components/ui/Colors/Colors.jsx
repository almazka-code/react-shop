import styles from './Colors.module.scss';

export const Colors = ({ colors, name, isBlackBorder, onColorChange, className }) => {
  return (
    <ul className={`${styles.colors} ${isBlackBorder ? styles.black : ''} ${className} `}>
      {colors.map((color, index) => (
        <li key={color} className={styles.item}>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type="radio"
              name={name}
              value={color}
              defaultChecked={index === 0}
              onChange={onColorChange}
            />
            <span className={`${styles.value} ${styles[`value_${color}`]}`}></span>
          </label>
        </li>
      ))}
    </ul>
  );
};
