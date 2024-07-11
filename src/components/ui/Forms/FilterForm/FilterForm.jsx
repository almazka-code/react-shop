import styles from './FilterForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../../../redux/slices/filterSlice';

import { PriceInput } from './PriceInput/PriceInput';
import { BrandSelect } from './BrandSelect/BrandSelect';
import { Colors } from '../../Colors/Colors';
import { VolumeCheckbox } from './VolumeCheckbox/VolumeCheckbox';
import { Button } from '../../Buttons/Button/Button';
import { Fieldset } from './Fieldset/Fieldset';

export const FilterForm = () => {
  const COLORS = ['blue', 'yellow', 'pink', 'green', 'purple', 'natural', 'black'];
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(0);
  const dispatch = useDispatch();

  const onColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const onBrandChange = (index) => {
    setSelectedBrand(index);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilters({ color: selectedColor, brand: selectedBrand }));
  };

  return (
    <form className={styles.form} action="#" method="get" onSubmit={onSubmit}>
      <h2 className={styles.title}>Фильтры</h2>

      <Fieldset legend="Цена">
        <PriceInput value="От" name="min-price" placeholder="0" />
        <PriceInput value="До" name="max-price" placeholder="12345" />
      </Fieldset>

      <Fieldset legend="Бренд">
        <BrandSelect selectedBrand={selectedBrand} onBrandChange={onBrandChange} />
      </Fieldset>

      <Fieldset legend="Цвет">
        <Colors
          colors={COLORS}
          name="filter-color"
          onColorChange={onColorChange}
          isDarkBorder={false}
          defaultChecked={false}
        />
      </Fieldset>

      <Fieldset legend="Объем">
        <VolumeCheckbox />
      </Fieldset>

      <Button
        className={styles.submit}
        text="Применить"
        isColor={true}
        type="submit"
        // onClick={() => addItemToCart()}
      />
      <Button
        className={styles.reset}
        text="Сбросить"
        isColor={false}
        type="reset"
        // onClick={() => addItemToCart()}
      />
    </form>
  );
};
