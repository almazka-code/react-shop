import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../../../redux/slices/filterSlice';

import styles from './Sort.module.scss';

const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'алфавиту', sortProperty: 'title' },
  { name: 'возрастанию цены', sortProperty: 'priceMin' },
  { name: 'убыванию цены', sortProperty: '-priceMin' },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sortType);

  const [isOpen, setIsOpen] = useState(false);

  const onClickListItem = (index) => {
    dispatch(setSortType(index));
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
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
