import styles from './Sort.module.scss';

import { useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, sortTypeSelector } from '../../../redux/slices/filterSlice';

type SortListItem = {
  name: string;
  sortProperty: string;
}

export const sortList: SortListItem[] = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'алфавиту', sortProperty: 'title' },
  { name: 'возрастанию цены', sortProperty: 'priceMin' },
  { name: 'убыванию цены', sortProperty: '-priceMin' },
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
