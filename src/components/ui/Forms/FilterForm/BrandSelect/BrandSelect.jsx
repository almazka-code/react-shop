import styles from './BrandSelect.module.scss';
import { useState } from 'react';

// export const BrandSelect = () => {
//   const brands = ['Все бренды', 'Apple', 'Huawei', 'Samsung', 'Xiaomi'];

//   return (
//     <label className={styles.label}>
//       <select className={styles.select} type="text" name="category">
//         {brands.map((brand) => (
//           <option key={brand} value={brand}>
//             {brand}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// };

export const BrandSelect = ({ selectedBrand, onBrandChange }) => {
  const brands = ['Все бренды', 'Apple', 'Huawei', 'Samsung', 'Xiaomi'];

  const [isOpen, setIsOpen] = useState(false);

  const onClickBrand = (index) => {
    onBrandChange(index);
    setIsOpen(false);
  };

  return (
    <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.wrapper}>
        <span>{brands[selectedBrand]}</span>
        <span className={styles.arrow}></span>
      </div>

      {isOpen && (
        <ul className={styles.popup}>
          {brands.map((value, index) => (
            <li
              key={value}
              onClick={() => onClickBrand(index)}
              className={`${styles.item} ${selectedBrand === index ? styles.active : ''}`}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
