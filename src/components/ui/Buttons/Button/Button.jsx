import styles from './Button.module.scss';

export const Button = ({ text, isColor, onClick, className, type }) => {
  return (
    <button
      className={`${styles.button} ${isColor ? styles.primary : styles.transparent} ${className} `}
      type={type}
      onClick={onClick}>
      {text}
    </button>
  );
};
