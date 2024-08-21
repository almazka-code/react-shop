import styles from './Sort.module.scss';

import { useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, SortPropertyEnum, sortTypeSelector } from '../../../redux/slices/filterSlice';

type SortListItem = {
  name: string;
  sortProperty: SortPropertyEnum;
}

export const sortList: SortListItem[] = [
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING },
  { name: 'алфавиту', sortProperty: SortPropertyEnum.TITLE },
  { name: 'возрастанию цены', sortProperty: SortPropertyEnum.PRICEMIN },
  { name: 'убыванию цены', sortProperty: SortPropertyEnum.PRICEMAX },
];

export const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sortType = useSelector(sortTypeSelector);
  const sortRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickListItem = (obj: SortListItem) => {
    dispatch(setSortType(obj));
    setIsOpen(false);
  };

  useOutsideClick(sortRef, () => setIsOpen(false));

  return (
    <div ref={sortRef} className={styles.sort}>
      <span className={styles.text}>Сортировка по:</span>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.selected}>{sortType.name}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.transform : ''}`}></span>
      </div>

      {isOpen && (
        <ul className={styles.popup}>
          {sortList.map((obj) => (
            <li
              key={obj.name}
              onClick={() => onClickListItem(obj)}
              className={`${styles.item} ${
                sortType.sortProperty === obj.sortProperty ? styles.active : ''
              }`}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
