import { useState } from 'react';

import styles from './PhoneCard.module.scss';

import { SubmitButton } from '../../ui/Buttons/Submit/SubmitButton';
import { Colors } from '../../ui/Colors/Colors';
import { Sizes } from '../../ui/Sizes/Sizes';

export const PhoneCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  //Функция handleChange принимает сеттер (функцию для обновления состояния) и возвращает функцию-обработчик события
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <li className={styles.card}>
      <img className={styles.card__image} src={product.images[selectedColor]} alt={product.title} />

      <div className={styles.card__desc}>
        <h3 className={styles.card__title}>{product.title}</h3>

        <Colors
          className={styles.card__colors}
          colors={product.colors}
          name={product.model}
          isBlackBorder={true}
          // onColorChange={(color) => setSelectedColor(color)}
          onColorChange={handleChange(setSelectedColor)}
        />

        <Sizes
          className={styles.card__sizes}
          sizes={product.sizes}
          name={product.model}
          onSizeChange={handleChange(setSelectedSize)}
        />

        <div className={styles.card__buy}>
          <span className={styles.card__price}>
            {product.price[selectedSize].toLocaleString('ru-RU')} ₸
          </span>
          <SubmitButton
            text="В корзину"
            isColor={true}
            isSmall={true}
            // onClick={() => addItemToCart()}
          />
        </div>
      </div>
    </li>
  );
};
