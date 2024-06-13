import styles from './SubmitButton.module.scss';

export const SubmitButton = ({ text, isColor, isSmall, onClick }) => {
  const classNames = {
    [styles.button]: true,
    [styles.button_primary]: isColor,
    [styles.button_transparent]: !isColor,
    [styles.small]: isSmall,
  };

  return (
    <button
      className={Object.keys(classNames)
        .filter((className) => classNames[className])
        .join(' ')}
      type="submit"
      onClick={onClick}>
      {text}
    </button>
  );
};
