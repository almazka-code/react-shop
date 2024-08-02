import styles from './Error.module.scss';

export const Error = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ошибка обращения к серверу</h2>
      <p className={styles.text}>
        Мы уже устраняем неисправность, попробуйте обновить страницу через некоторое время. Приносим
        извинения за временные неудобсва.
      </p>
      <div className={styles.image}>
        <span className={styles.image}></span>
      </div>
    </div>
  );
};
