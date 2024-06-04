import styles from './Colors.module.scss';

const Colors = ({ colors, name, isBlackBorder, onColorChange, className }) => {
  return (
    <ul className={`${styles.colors} ${isBlackBorder ? styles.colors_black : ''} ${className} `}>
      {colors.map((color, index) => (
        <li key={color} className={styles.colors__item}>
          <label className={styles.colors__label}>
            <input
              className={`${styles.colors__radio} ${styles.secret}`}
              type="radio"
              name={name}
              value={color}
              defaultChecked={index === 0}
              onChange={() => onColorChange(color)}
            />
            <span className={`${styles.colors__value} ${styles[`colors__value_${color}`]}`}></span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Colors;
