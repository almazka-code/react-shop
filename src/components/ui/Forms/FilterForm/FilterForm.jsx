import styles from './FilterForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setLocalColor, setLocalBrand } from '../../../../redux/slices/filterSlice';

import { PriceInput } from './PriceInput/PriceInput';
import { BrandSelect } from './BrandSelect/BrandSelect';
import { Colors } from '../../Colors/Colors';
import { VolumeCheckbox } from './VolumeCheckbox/VolumeCheckbox';
import { Button } from '../../Buttons/Button/Button';
import { Fieldset } from './Fieldset/Fieldset';

export const FilterForm = () => {
  const COLORS = ['blue', 'yellow', 'pink', 'green', 'purple', 'natural', 'black'];
  const { color: selectedColor, brand: selectedBrand } = useSelector(
    (state) => state.filter.localFilters,
  );
  const dispatch = useDispatch();

  const onColorChange = (event) => {
    dispatch(setLocalColor(event.target.value));
  };

  const onBrandChange = (index) => {
    dispatch(setLocalBrand(index));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilters({ color: selectedColor, brand: selectedBrand }));
  };

  const onReset = () => {
    dispatch(setLocalColor(''));
    dispatch(setLocalBrand(0));
    dispatch(setFilters({ color: '', brand: 0 }));
  };

  return (
    <form className={styles.form} action="#" method="get" onSubmit={onSubmit} onReset={onReset}>
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

      <Button className={styles.submit} text="Применить" isColor={true} type="submit" />
      <Button className={styles.reset} text="Сбросить" isColor={false} type="reset" />
    </form>
  );
};
