import styles from './PhoneCard.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cartItemsSelector } from '../../../redux/slices/cartSlice';

//Components
import { Button } from '../../ui/Buttons/Button/Button';
import { Colors } from '../../ui/Colors/Colors';
import { Sizes } from '../../ui/Sizes/Sizes';
import { Counter } from '../CartItem/Counter/Counter';

export const PhoneCard = ({ product, selectedColor }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const initialColor =
    selectedColor && product.colors.includes(selectedColor) ? selectedColor : product.colors[0];
  const [selectedColorState, setSelectedColorState] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onClickAdd = () => {
    const item = {
      id: product.id,
      title: product.title,
      image: product.images[selectedColorState],
      price: product.price[selectedSize],
      color: selectedColorState,
      size: selectedSize,
    };

    dispatch(addItem(item));
    setIsAddedToCart(true);
  };

  // Проверка, находится ли текущий вариант товара в корзине
  useEffect(() => {
    const itemInCart = cartItems.find(
      (item) =>
        item.id === product.id && item.color === selectedColorState && item.size === selectedSize,
    );

    setIsAddedToCart(!!itemInCart);
  }, [selectedColorState, selectedSize, cartItems, product.id]);

  //Функция onChange принимает сеттер (функцию для обновления состояния) и возвращает функцию-обработчик события
  const onChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const count =
    cartItems.find(
      (item) =>
        item.id === product.id && item.color === selectedColorState && item.size === selectedSize,
    )?.count || 0;

  return (
    <li className={styles.card}>
      <img className={styles.image} src={product.images[selectedColorState]} alt={product.title} />

      <div className={styles.desc}>
        <h3 className={styles.title}>{product.title}</h3>

        <Colors
          className={styles.colors}
          colors={product.colors}
          name={product.model}
          selectedColor={selectedColorState}
          isDarkBorder={true}
          onColorChange={onChange(setSelectedColorState)}
        />

        <Sizes
          className={styles.sizes}
          sizes={product.sizes}
          name={product.model}
          onSizeChange={onChange(setSelectedSize)}
        />

        <div className={styles.buy}>
          <span className={styles.price}>
            {product.price[selectedSize].toLocaleString('ru-RU')} ₸
          </span>
          <div className={styles.wrapper}>
            {isAddedToCart ? (
              <Counter
                className={styles.counter}
                count={count}
                id={product.id}
                color={selectedColorState}
                size={selectedSize}
              />
            ) : (
              <Button text="В корзину" isColor={true} type="submit" onClick={onClickAdd} />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
