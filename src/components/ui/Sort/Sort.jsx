import styles from './Sort.module.scss';

import { useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, sortTypeSelector } from '../../../redux/slices/filterSlice';

export const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'алфавиту', sortProperty: 'title' },
  { name: 'возрастанию цены', sortProperty: 'priceMin' },
  { name: 'убыванию цены', sortProperty: '-priceMin' },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const sortType = useSelector(sortTypeSelector);
  const sortRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const onClickListItem = (index) => {
    dispatch(setSortType(index));
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
