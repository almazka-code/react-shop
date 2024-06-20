import styles from './SubmitButton.module.scss';

export const SubmitButton = ({ text, isColor, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${
        isColor ? styles.button_primary : styles.button_transparent
      } ${className} `}
      type="submit"
      onClick={onClick}>
      {text}
    </button>
  );
};
