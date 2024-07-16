import styles from './Colors.module.scss';

export const Colors = ({ colors, name, isDarkBorder, onColorChange, className, selectedColor }) => {
  return (
    <ul className={`${styles.colors} ${isDarkBorder ? styles.dark : ''} ${className} `}>
      {colors.map((color) => (
        <li key={color}>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type="radio"
              name={name}
              value={color}
              defaultChecked={color === selectedColor}
              onChange={onColorChange}
            />
            <span className={`${styles.value} ${styles[color]}`}></span>
          </label>
        </li>
      ))}
    </ul>
  );
};
