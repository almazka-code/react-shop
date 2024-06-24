import { CartItem } from '../../components/elements/CartItem/CartItem';
import { NeutralButton } from '../../components/ui/Buttons/Neutral/NeutralButton';
import { SubmitButton } from '../../components/ui/Buttons/Submit/SubmitButton';
import styles from './CartFull.module.scss';
import { Link } from 'react-router-dom';

export const CartFull = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div>
          <h1 className={styles.title}>Корзина</h1>
          <span className={styles.subtitle}>3 товара</span>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.field}>
          <div className={styles.buttons}>
            <Link to="/" className={styles.back}>
              <NeutralButton text="Вернуться назад" />
            </Link>
            <NeutralButton className={styles.clear} text="Очистить корзину" />
          </div>
          <ul className={styles.list}>
            <CartItem title="Phone1" />
            <CartItem title="Phone2" />
            <CartItem title="Phone3" />
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.desc}>Мы посчитаем стоимость доставки на следующем этапе</p>
          <p className={styles.price}>
            Итого: <span>32 970 ₸</span>
          </p>

          <SubmitButton text="Оформить заказ" isColor={true} className={styles.button} />
        </div>
      </section>
    </div>
  );
};
