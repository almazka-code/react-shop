import { useState } from 'react';

import styles from './Card.module.scss';
import { images } from '../../../assets/img/images';

import SubmitButton from '../../ui/Buttons/Submit/SubmitButton';
import Colors from '../../ui/Colors/Colors';
import Sizes from '../../ui/Sizes/Sizes';

const Card = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);

  return (
    <li className={styles.card}>
      <img
        className={styles.card__image}
        src={images.find((item) => item.model === product.model).images[selectedColor]}
        alt={product.title}
      />

      <div className={styles.card__desc}>
        <h3 className={styles.card__title}>{product.title}</h3>

        <Colors
          className={styles.card__colors}
          colors={product.color}
          name={product.model}
          isBlackBorder={true}
          // onColorChange={(color) => setSelectedColor(color)}
          onColorChange={(e) => setSelectedColor(e.target.value)}
        />

        <Sizes
          className={styles.card__sizes}
          sizes={product.size}
          name={product.model}
          onSizeChange={(e) => setSelectedSize(e.target.value)}
        />

        <div className={styles.card__buy}>
          <span className={styles.card__price}>
            {product.price[selectedSize].toLocaleString()} ₸
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

export default Card;
