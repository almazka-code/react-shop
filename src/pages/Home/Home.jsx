import styles from './Home.module.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

import { Sort } from '../../components/ui/Sort/Sort';
import { PhoneCard } from '../../components/elements/PhoneCard/PhoneCard';
import { useEffect, useState, useContext } from 'react';
import { Skeleton } from '../../components/elements/PhoneCard/Skeleton';
import { Filter } from '../../components/ui/Forms/FilterForm/FilterForm';
import { NeutralButton } from '../../components/ui/Buttons/Neutral/NeutralButton';
import { Pagination } from '../../components/ui/Pagination/Pagination';
import { SearchContext } from '../../App';

export const Home = () => {
  const dispatch = useDispatch();
  const { brandType, sortType, currentPage } = useSelector((state) => state.filter);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const brandBy = brandType > 0 ? `brand=${brandType}` : '';
  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc'; //desc по убыванию, asc по возрастанию
  const sortBy = sortType.sortProperty.replace('-', '');
  const search = searchValue ? `search=${searchValue}` : '';
  const url = `https://66715424e083e62ee43b17a5.mockapi.io/items?${brandBy}&page=${currentPage}&limit=6&${search}&sortBy=${sortBy}&order=${order}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setItems([]);
        } else {
          console.error('Произошла ошибка:', error);
        }
        setIsLoading(false);
      });
    window.scrollTo(0, 0); //чтобы при переходе с других страниц на Home,
    // не сохранялся скролл браузера и страница Home не открывалась где-то внизу
  }, [brandBy, sortType, searchValue, currentPage]);

  const phones = items.map((product) => <PhoneCard key={product.model} product={product} />);
  // после items добавить .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
  //вариант поиска для неменяющихся вещей (типа списка стран, для товаров не подходит)
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.catalog}>
      <div className={styles.top}>
        <h2 className={styles.title}>Каталог</h2>
        <span className={styles.subtitle}>152 товара</span>
      </div>

      <div className={styles.content}>
        <div className={`${styles.filter} ${isFiltersVisible ? styles.active : ''}`}>
          <Filter />
        </div>

        <section className={styles.section}>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <NeutralButton
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                text="Фильтры"
              />
            </div>
            <Sort />
          </div>
          <ul className={styles.list}>
            {/* пока идет загрузка создать фейковый массив из 6 элементов (все значения будут underfined) для того,
            чтобы рендерился массив скелетонов, так как массив с данными ещё не пришел  */}
            {isLoading ? skeletons : phones}
          </ul>

          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </section>
      </div>
    </div>
  );
};
