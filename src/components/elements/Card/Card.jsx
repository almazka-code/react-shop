import Colors from '../../ui/Colors/Colors';
import styles from './Card.module.scss';

const Card = ({ product }) => {
  return (
    <li className={styles.card}>
      <a className={styles.card__picture} href="#!">
        <img className={styles.card__image} src="assets/img/1.jpg" alt="Apple iPhone 15 Pro Max" />
      </a>

      <div className={styles.card__desc}>
        <h3 className={styles.card__title}>
          <a className={styles.card__link} href="#">
            {product.title}
          </a>
        </h3>

        <div className={styles.card__colors}>
          <Colors colors={product.color} name={product.model} isBlackBorder={true} />
        </div>

        <ul className={`${styles.sizes} ${styles.card__sizes}`}>
          {product.size.map((size, index) => (
            <li key={index} className={styles.sizes__item}>
              <label className={styles.sizes__label}>
                <input
                  className={`${styles.sizes__radio} ${styles.secret}`}
                  type="radio"
                  name={`size-${product.model}`}
                  value={size}
                  defaultChecked={index === 0}
                />
                <span className={styles.sizes__value}>{size}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className={styles.card__buy}>
          <span className={styles.card__price}>
            {product.price[product.size[0]].toLocaleString()} ₸
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
