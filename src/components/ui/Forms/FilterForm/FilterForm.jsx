import { BrandSelect } from './BrandSelect/BrandSelect';
import styles from './FilterForm.module.scss';
import { PriceInput } from './PriceInput/PriceInput';
import { COLORS } from '../../../../constants/colors';
import { Colors } from '../../Colors/Colors';

export const Filter = () => {
  return (
    <form className={styles.form} action="#" method="get">
      <h2 className={styles.title}>Фильтры</h2>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Цена</legend>
        <PriceInput />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Бренд</legend>
        <BrandSelect />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Цвет</legend>
        <Colors colors={COLORS} name="filter-color" isDarkBorder={false} />
      </fieldset>
      {/* <fieldset className={styles.form__block}>
          <legend className={styles.form__legend}>Объем</legend>
          <ul className={styles.check-list}>
            <li className={styles.check-list__item}>
              <label className={styles.check-list__label}>
                <input
                  className={styles.check-list__check secret}
                  type="checkbox"
                  name="volume"
                  value="64gb"
                  checked
                />
                <span className={styles.check-list__desc}>
                  64 GB <span>(313)</span>
                </span>
              </label>
            </li>
            <li className={styles.check-list__item}>
              <label className={styles.check-list__label}>
                <input
                  className={styles.check-list__check secret}
                  type="checkbox"
                  name="volume"
                  value="128gb"
                />
                <span className={styles.check-list__desc}>
                  128 GB <span>(461)</span>
                </span>
              </label>
            </li>
            <li className={styles.check-list__item}>
              <label className={styles.check-list__label}>
                <input
                  className={styles.check-list__check secret}
                  type="checkbox"
                  name="volume"
                  value="256gb"
                />
                <span className={styles.check-list__desc}>
                  256 GB <span>(313)</span>
                </span>
              </label>
            </li>
            <li className={styles.check-list__item}>
              <label className={styles.check-list__label}>
                <input
                  className={styles.check-list__check secret}
                  type="checkbox"
                  name="volume"
                  value="512gb"
                />
                <span className={styles.check-list__desc}>
                  512 GB <span>(313)</span>
                </span>
              </label>
            </li>
            <li className={styles.check-list__item}>
              <label className={styles.check-list__label}>
                <input className={styles.check-list__check secret} type="checkbox" name="volume" value="1TB" />
                <span className={styles.check-list__desc}>
                  1 TB <span>(313)</span>
                </span>
              </label>
            </li>
          </ul>
        </fieldset> */}
      {/* <button className={styles.filter__submit button button_primary} type="submit">
          Применить
        </button>
        <button className={styles.filter__reset button button_second} type="button">
          Сбросить
        </button> */}
    </form>
  );
};
