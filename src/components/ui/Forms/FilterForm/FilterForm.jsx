import styles from './FilterForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setLocalFilters } from '../../../../redux/slices/filterSlice';

//Components
import { BrandSelect } from './BrandSelect/BrandSelect';
import { Colors } from '../../Colors/Colors';
import { VolumeCheckbox } from './VolumeCheckbox/VolumeCheckbox';
import { Button } from '../../Buttons/Button/Button';
import { Fieldset } from './Fieldset/Fieldset';
// import { PriceInput } from './PriceInput/PriceInput';

export const FilterForm = () => {
  const BRANDS = ['Все бренды', 'Apple', 'Huawei', 'Samsung', 'Xiaomi'];
  const COLORS = ['blue', 'yellow', 'pink', 'green', 'purple', 'natural', 'black'];
  const VOLUMES = ['64gb', '128gb', '256gb', '512gb', '1tb'];

  const {
    color: selectedColor,
    brand: selectedBrand,
    volume,
  } = useSelector((state) => state.filter.localFilters);

  const dispatch = useDispatch();

  const onVolumeChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    let newVolume;

    if (checked) {
      newVolume = [...volume, value];
    } else {
      newVolume = volume.filter((item) => item !== value);
    }

    newVolume.sort((a, b) => {
      const numA = parseInt(a);
      const numB = parseInt(b);
      return numA - numB;
    });

    console.log(newVolume);

    dispatch(setLocalFilters({ filterName: 'volume', value: newVolume }));
  };

  const onColorChange = (event) => {
    dispatch(setLocalFilters({ filterName: 'color', value: event.target.value }));
  };

  const onBrandChange = (index) => {
    dispatch(setLocalFilters({ filterName: 'brand', value: index }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const filters = { color: selectedColor, brand: selectedBrand, volume };
    dispatch(setFilters(filters));
  };

  const onReset = () => {
    dispatch(setLocalFilters({ filterName: 'color', value: '' }));
    dispatch(setLocalFilters({ filterName: 'brand', value: 0 }));
    dispatch(setLocalFilters({ filterName: 'volume', value: [] }));
    dispatch(setFilters({ color: '', brand: 0, volume: [] }));
  };

  return (
    <form className={styles.form} action="#" method="get" onSubmit={onSubmit} onReset={onReset}>
      <h2 className={styles.title}>Фильтры</h2>

      {/* <Fieldset legend="Цена">
        <PriceInput caption="От" name="min-price" placeholder="0" />
        <PriceInput caption="До" name="max-price" placeholder="990 990" />
      </Fieldset> */}

      <Fieldset legend="Бренд">
        <BrandSelect brands={BRANDS} selectedBrand={selectedBrand} onBrandChange={onBrandChange} />
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
        <VolumeCheckbox volumes={VOLUMES} onVolumeChange={onVolumeChange} />
      </Fieldset>

      <Button className={styles.submit} text="Применить" isColor={true} type="submit" />
      <Button className={styles.reset} text="Сбросить" isColor={false} type="reset" />
    </form>
  );
};
