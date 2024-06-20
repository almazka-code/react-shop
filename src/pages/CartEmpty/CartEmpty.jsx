import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../../components/ui/Buttons/Submit/SubmitButton';

export const CartEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Корзина пустая</h2>
      <p className={styles.text}>
        Вероятнее всего, вы ещё ничего не заказали. Для того, чтобы сделать заказ, перейдите на
        главную страницу.
      </p>
      <div className={styles.image}>
        <span className={styles.image}></span>
      </div>
      <Link to="/">
        <SubmitButton className={styles.button} text="На главную" isColor={true} />
      </Link>
    </div>
  );
};
