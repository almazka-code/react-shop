import styles from './NeutralButton.module.scss';

type NeutralButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const NeutralButton: React.FC<NeutralButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className} `} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};
