import { useState } from 'react';
import Colors from '../../ui/Colors/Colors';
import styles from './Card.module.scss';
import { images } from '../../../assets/img/images';

const Card = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);

  return (
    <li className={styles.card}>
      <img
        className={styles.card__image}
        src={images.find((item) => item.model === product.model).images[selectedColor]}
        alt={product.title}
      />

      <div className={styles.card__desc}>
        <h3 className={styles.card__title}>{product.title}</h3>

        <div className={styles.card__colors}>
          <Colors
            colors={product.color}
            name={product.model}
            isBlackBorder={true}
            onColorChange={(color) => setSelectedColor(color)}
          />
        </div>

        <ul className={`${styles.sizes} ${styles.card__sizes}`}>
          {product.size.map((size, index) => (
            <li key={size} className={styles.sizes__item}>
              <label className={styles.sizes__label}>
                <input
                  className={`${styles.sizes__radio} ${styles.secret}`}
                  type="radio"
                  name={`size-${product.model}`}
                  value={size}
                  defaultChecked={index === 0}
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                <span className={styles.sizes__value}>{size}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className={styles.card__buy}>
          <span className={styles.card__price}>
            {product.price[selectedSize].toLocaleString()} ₸
          </span>
          <button
            className={`${styles.button} ${styles.button_primary} ${styles.button_card}`}
            type="submit">
            В корзину
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
