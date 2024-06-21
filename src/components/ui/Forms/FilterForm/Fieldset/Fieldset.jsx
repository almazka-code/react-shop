import styles from './Fieldset.module.scss';

export const Fieldset = ({ legend, children }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
};
