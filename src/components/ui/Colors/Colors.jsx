import styles from './Colors.module.scss';

export const Colors = ({ colors, name, isDarkBorder, onColorChange, className }) => {
  return (
    <ul className={`${styles.colors} ${isDarkBorder ? styles.dark : ''} ${className} `}>
      {colors.map((color, index) => (
        <li key={color}>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type="radio"
              name={name}
              value={color}
              defaultChecked={index === 0}
              onChange={onColorChange}
            />
            <span className={`${styles.value} ${styles[color]}`}></span>
          </label>
        </li>
      ))}
    </ul>
  );
};
