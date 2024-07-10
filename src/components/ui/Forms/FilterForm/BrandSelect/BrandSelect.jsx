import styles from './BrandSelect.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBrandType } from '../../../../../redux/slices/filterSlice';

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

export const BrandSelect = () => {
  const brands = ['Все бренды', 'Apple', 'Huawei', 'Samsung', 'Xiaomi'];

  const dispatch = useDispatch();
  const brandType = useSelector((state) => state.filter.brandType);

  const [isOpen, setIsOpen] = useState(false);

  const onClickBrand = (index) => {
    dispatch(setBrandType(index));
    setIsOpen(false);
  };

  return (
    <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.wrapper}>
        <span>{brands[brandType]}</span>
        <span className={styles.arrow}></span>
      </div>

      {isOpen && (
        <ul className={styles.popup}>
          {brands.map((value, index) => (
            <li
              key={value}
              onClick={() => onClickBrand(index)}
              className={`${styles.item} ${brandType === index ? styles.active : ''}`}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
