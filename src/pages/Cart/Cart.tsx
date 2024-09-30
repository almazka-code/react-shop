import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, clearItems } from '../../redux/slices/cartSlice';

//Components
import { CartItemBlock } from '../../components/elements/CartItemBlock/CartItemBlock';
import { NeutralButton } from '../../components/ui/Buttons/Neutral/NeutralButton';
import { Button } from '../../components/ui/Buttons/Button/Button';
import { CartEmpty } from '../../components/elements/CartEmpty/CartEmpty';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItems());
  };

  const getCorrectWord = (count: number, words: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5]];
  };

  const { totalPrice, items } = useSelector(cartSelector);
  const count = items.reduce((acc: number, item) => (acc += item.count), 0);
  const word = getCorrectWord(count, ['товар', 'товара', 'товаров']);

  if (!items.length) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div>
          <h1 className={styles.title}>Корзина</h1>
          <span className={styles.subtitle}>
            {count} {word}
          </span>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.field}>
          <div className={styles.buttons}>
            <Link to="/" className={styles.back}>
              <NeutralButton text="Вернуться назад" />
            </Link>
            <NeutralButton onClick={clearCart} className={styles.clear} text="Очистить корзину" />
          </div>
          <ul className={styles.list}>
            {items.map((item) => (
              <CartItemBlock key={`${item.id}-${item.color}-${item.size}`} {...item} />
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.desc}>Мы посчитаем стоимость доставки на следующем этапе</p>
          <p className={styles.price}>
            {/* Итого: <span>$ {Number(totalPrice).toLocaleString('ru-RU')}</span> */}
            Итого: <span>$ {new Intl.NumberFormat('ru-RU').format(Number(totalPrice))}</span>
          </p>

          <Button text="Оформить заказ" isColor={true} className={styles.button} type="submit" />
        </div>
      </section>
    </div>
  );
};
