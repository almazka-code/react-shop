import styles from './BrandSelect.module.scss';
import { useState, useRef } from 'react';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

type BrandSelectsProps = {
  brands: string[];
  selectedBrand: number;
  onBrandChange: (index: number) => void;
}

export const BrandSelect: React.FC<BrandSelectsProps> = ({ brands, selectedBrand, onBrandChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const brandRef = useRef<HTMLDivElement>(null);

  const onClickBrand = (index: number) => {
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
