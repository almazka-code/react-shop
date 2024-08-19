import styles from './PhoneCard.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cartItemsSelector } from '../../../redux/slices/cartSlice';

//Components
import { Button } from '../../ui/Buttons/Button/Button';
import { Colors } from '../../ui/Colors/Colors';
import { Sizes } from '../../ui/Sizes/Sizes';
import { Counter } from '../../ui/Counter/Counter';

type PhoneCardProps = {
  id: number;
  title: string;
  model: string;
  colors: string[];
  sizes: string[];
  price: { [size: string]: number };
  images: { [color: string]: string };
  selectedColor: string;
}

export const PhoneCard: React.FC<PhoneCardProps>= ({ id, title, model, colors, sizes, price, images, selectedColor }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const initialColor =
    selectedColor && colors.includes(selectedColor) ? selectedColor : colors[0];
  const [selectedColorState, setSelectedColorState] = useState<string>(initialColor);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);

  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const onClickAdd = () => {
    const item = {
      id: id,
      title: title,
      image: images[selectedColorState],
      price: price[selectedSize],
      color: selectedColorState,
      size: selectedSize,
    };

    dispatch(addItem(item));
    setIsAddedToCart(true);
  };

  // Проверка, находится ли текущий вариант товара в корзине
  useEffect(() => {
    const itemInCart = cartItems.find(
      (item: any) =>
        item.id === id && item.color === selectedColorState && item.size === selectedSize,
    );

    setIsAddedToCart(!!itemInCart);
  }, [selectedColorState, selectedSize, cartItems, id]);

  //Функция onChange принимает сеттер (функцию для обновления состояния) и возвращает функцию-обработчик события
  const onChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const count =
    cartItems.find(
      (item: any) =>
        item.id === id && item.color === selectedColorState && item.size === selectedSize,
    )?.count || 0;

  return (
    <li className={styles.card}>
      <img className={styles.image} src={images[selectedColorState]} alt={title} />

      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>

        <Colors
          className={styles.colors}
          colors={colors}
          name={model}
          selectedColor={selectedColorState}
          isDarkBorder={true}
          onColorChange={onChange(setSelectedColorState)}
        />

        <Sizes
          className={styles.sizes}
          sizes={sizes}
          name={model}
          onSizeChange={onChange(setSelectedSize)}
        />

        <div className={styles.buy}>
          <span className={styles.price}>
            {price[selectedSize].toLocaleString('ru-RU')} ₸
          </span>
          <div className={styles.wrapper}>
            {isAddedToCart ? (
              <Counter
                className={styles.counter}
                count={count}
                id={id}
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
