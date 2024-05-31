import styles from './Colors.module.scss';

const Colors = ({ colors, name, isBlackBorder }) => {
  return (
    <ul className={`${styles.colors} ${isBlackBorder ? styles.colors_black : ''}`}>
      {colors.map((color, index) => (
        <li key={index} className={styles.colors__item}>
          <label className={styles.colors__label}>
            <input
              className={`${styles.colors__radio} ${styles.secret}`}
              type="radio"
              name={name}
              value={color}
              defaultChecked={index === 0}
            />
            <span className={`${styles.colors__value} ${styles[`colors__value_${color}`]}`}></span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Colors;
