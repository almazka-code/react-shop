import styles from './Fieldset.module.scss';

type FieldsetProps = {
  legend: string;
  children: React.ReactNode;
}

export const Fieldset: React.FC<FieldsetProps> = ({ legend, children }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
};
