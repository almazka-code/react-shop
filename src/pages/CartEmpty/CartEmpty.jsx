import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

import { Button } from '../../components/ui/Buttons/Button/Button';

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
        <Button className={styles.button} text="На главную" isColor={true} type="button" />
      </Link>
    </div>
  );
};
