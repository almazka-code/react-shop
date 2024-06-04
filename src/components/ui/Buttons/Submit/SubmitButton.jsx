import styles from './SubmitButton.module.scss';

const SubmitButton = ({ text, isColor, isSmall, onClick }) => {
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

export default SubmitButton;
