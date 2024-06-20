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
      <img className={styles.image} src={product.images[selectedColor]} alt={product.title} />

      <div className={styles.desc}>
        <h3 className={styles.title}>{product.title}</h3>

        <Colors
          className={styles.colors}
          colors={product.colors}
          name={product.model}
          isBlackBorder={true}
          onColorChange={handleChange(setSelectedColor)}
        />

        <Sizes
          className={styles.sizes}
          sizes={product.sizes}
          name={product.model}
          onSizeChange={handleChange(setSelectedSize)}
        />

        <div className={styles.buy}>
          <span className={styles.price}>
            {product.price[selectedSize].toLocaleString('ru-RU')} ₸
          </span>
          <div className={styles.wrapper}>
            <SubmitButton
              text="В корзину"
              isColor={true}
              // onClick={() => addItemToCart()}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
