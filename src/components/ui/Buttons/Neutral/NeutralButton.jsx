import styles from './NeutralButton.module.scss';

export const NeutralButton = ({ text, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className} `} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};
