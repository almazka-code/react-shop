import styles from './BrandSelect.module.scss';
import { useState, useRef } from 'react';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

export const BrandSelect = ({ brands, selectedBrand, onBrandChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const brandRef = useRef();

  const onClickBrand = (index) => {
    onBrandChange(index);
    setIsOpen(false);
  };

  useOutsideClick(brandRef, () => setIsOpen(false));

  return (
    <div ref={brandRef} className={styles.select} onClick={() => setIsOpen(!isOpen)}>
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
