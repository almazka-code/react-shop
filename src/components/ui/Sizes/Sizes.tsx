import styles from './Sizes.module.scss';

type SizesProps = {
  sizes: string[];
  name: string;
  onSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Sizes: React.FC<SizesProps>  = ({ sizes, name, onSizeChange, className }) => {
  return (
    <ul className={`${styles.sizes} ${className}`}>
      {sizes.map((size, index) => (
        <li key={size}>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type="radio"
              name={`size-${name}`}
              value={size}
              defaultChecked={index === 0}
              onChange={onSizeChange}
            />
            <span className={styles.value}>{size}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
