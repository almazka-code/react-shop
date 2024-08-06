import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { useCallback, useState } from 'react';
import { setSearchValue } from '../../../redux/slices/filterSlice';

import { useDispatch } from 'react-redux';

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <svg
        className={styles.icon}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.9113 22.8136L19.8536 18.3573C21.341 16.3763 22.1457 13.9543 22.1457 11.4068C22.1457 8.35737 20.9904 5.49807 18.9013 3.34219C16.8123 1.18631 14.0293 0 11.0728 0C8.11639 0 5.33342 1.19011 3.24434 3.34219C1.15157 5.49427 0 8.35737 0 11.4068C0 14.4524 1.15527 17.3193 3.24434 19.4714C5.33342 21.6273 8.1127 22.8136 11.0728 22.8136C13.5458 22.8136 15.8932 21.9847 17.8162 20.4562L22.8739 24.9086C22.902 24.9376 22.9354 24.9606 22.9721 24.9762C23.0088 24.9919 23.0482 25 23.088 25C23.1277 25 23.1671 24.9919 23.2038 24.9762C23.2406 24.9606 23.2739 24.9376 23.302 24.9086L24.9113 23.2546C24.9394 23.2257 24.9617 23.1913 24.9769 23.1535C24.9922 23.1156 25 23.0751 25 23.0341C25 22.9931 24.9922 22.9526 24.9769 22.9147C24.9617 22.8769 24.9394 22.8425 24.9113 22.8136ZM16.9193 17.4296C15.3543 19.0379 13.28 19.9238 11.0728 19.9238C8.86565 19.9238 6.79134 19.0379 5.22638 17.4296C3.66511 15.8174 2.80512 13.6805 2.80512 11.4068C2.80512 9.13303 3.66511 6.99236 5.22638 5.384C6.79134 3.77565 8.86565 2.88972 11.0728 2.88972C13.28 2.88972 15.358 3.77184 16.9193 5.384C18.4806 6.99616 19.3406 9.13303 19.3406 11.4068C19.3406 13.6805 18.4806 15.8212 16.9193 17.4296Z"
          fill="#9D9D9D"
        />
      </svg>
      <input
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="search"
        placeholder="Поиск смартфона..."
      />
    </div>
  );
};
