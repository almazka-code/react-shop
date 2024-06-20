import styles from './SubmitButton.module.scss';

export const SubmitButton = ({ text, isColor, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${isColor ? styles.primary : styles.transparent} ${className} `}
      type="submit"
      onClick={onClick}>
      {text}
    </button>
  );
};
