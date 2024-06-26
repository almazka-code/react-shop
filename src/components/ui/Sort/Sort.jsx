import { useState } from 'react';

import styles from './Sort.module.scss';

export const Sort = ({ value, onChangeSort }) => {
  const sortList = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'алфавиту', sortProperty: 'title' },
    { name: 'возрастанию цены', sortProperty: 'priceMin' },
    { name: 'убыванию цены', sortProperty: '-priceMin' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const onClickListItem = (index) => {
    onChangeSort(index);
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
      <span className={styles.text}>Сортировка по:</span>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.selected}>{value.name}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.transform : ''}`}></span>
      </div>

      {isOpen && (
        <ul className={styles.popup}>
          {sortList.map((obj) => (
            <li
              key={obj.name}
              onClick={() => onClickListItem(obj)}
              className={`${styles.item} ${
                value.sortProperty === obj.sortProperty ? styles.active : ''
              }`}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
