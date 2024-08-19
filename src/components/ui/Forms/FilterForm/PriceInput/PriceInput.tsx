import styles from './PriceInput.module.scss';

type PriceInputProps = {
  value: string;
  caption: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PriceInput: React.FC<PriceInputProps> = ({ value, caption, name, placeholder, onChange }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        value={value}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className={styles.value}>{caption}</span>
    </label>
  );
};
