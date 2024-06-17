import { useState } from 'react';

import styles from './Sort.module.scss';

export const Sort = () => {
  const sortList = ['популярности', 'цене', 'алфавиту'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);

  const onClickListItem = (index) => {
    setSelectedSort(index);
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
      <span className={styles.sort__text}>Сортировка по:</span>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.sort__selected}>{sortList[selectedSort]}</span>
        <span className={`${styles.sort__arrow} ${isOpen ? styles.transform : ''}`}></span>
      </div>

      {isOpen && (
        <ul className={styles.sort__popup}>
          {sortList.map((value, index) => (
            <li
              key={value}
              onClick={() => onClickListItem(index)}
              className={`${styles.sort__item} ${selectedSort === index ? styles.active : ''}`}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
