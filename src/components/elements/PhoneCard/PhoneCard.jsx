import styles from './PhoneCard.module.scss';
import { useState } from 'react';

//Components
import { Button } from '../../ui/Buttons/Button/Button';
import { Colors } from '../../ui/Colors/Colors';
import { Sizes } from '../../ui/Sizes/Sizes';

export const PhoneCard = ({ product, selectedColor }) => {
  const initialColor =
    selectedColor && product.colors.includes(selectedColor) ? selectedColor : product.colors[0];
  const [selectedColorState, setSelectedColorState] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  //Функция onChange принимает сеттер (функцию для обновления состояния) и возвращает функцию-обработчик события
  const onChange = (setter) => (event) => {
    setter(event.target.value);
  };

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
            <Button text="В корзину" isColor={true} type="submit" />
          </div>
        </div>
      </div>
    </li>
  );
};
