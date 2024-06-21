import styles from './BrandSelect.module.scss';

export const BrandSelect = () => {
  const brands = ['Все бренды', 'Apple', 'Huawei', 'Samsung', 'Xiaomi'];

  return (
    <label className={styles.label}>
      <select className={styles.select} type="text" name="category">
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </label>
  );
};
