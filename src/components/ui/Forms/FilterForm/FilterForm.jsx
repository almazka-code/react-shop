import styles from './FilterForm.module.scss';

import { PriceInput } from './PriceInput/PriceInput';
import { BrandSelect } from './BrandSelect/BrandSelect';
import { Colors } from '../../Colors/Colors';
import { VolumeCheckbox } from './VolumeCheckbox/VolumeCheckbox';
import { SubmitButton } from '../../Buttons/Submit/SubmitButton';
import { Fieldset } from './Fieldset/Fieldset';

export const Filter = () => {
  const COLORS = ['blue', 'yellow', 'pink', 'green', 'purple', 'natural', 'black'];

  return (
    <form className={styles.form} action="#" method="get">
      <h2 className={styles.title}>Фильтры</h2>

      <Fieldset legend="Цена">
        <PriceInput />
      </Fieldset>

      <Fieldset legend="Бренд">
        <BrandSelect />
      </Fieldset>

      <Fieldset legend="Цвет">
        <Colors colors={COLORS} name="filter-color" isDarkBorder={false} />
      </Fieldset>

      <Fieldset legend="Объем">
        <VolumeCheckbox />
      </Fieldset>

      <SubmitButton
        className={styles.submit}
        text="Применить"
        isColor={true}
        // onClick={() => addItemToCart()}
      />
      <SubmitButton
        className={styles.reset}
        text="Сбросить"
        isColor={false}
        // onClick={() => addItemToCart()}
      />
    </form>
  );
};
