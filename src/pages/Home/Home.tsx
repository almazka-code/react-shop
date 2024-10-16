import styles from './Home.module.scss';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { filterSelector, setCurrentPage, setFilters, setSearchValue, setSortType } from '../../redux/slices/filterSlice';
import { fetchPhones, phonesSelector, SearchPhonesParams } from '../../redux/slices/phonesSlice';
import { useEffect, useState, useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

//Components
import { Sort, sortList } from '../../components/ui/Sort/Sort';
import { PhoneCard } from '../../components/elements/PhoneCard/PhoneCard';
import { Skeleton } from '../../components/elements/PhoneCard/Skeleton';
import { FilterForm } from '../../components/ui/Forms/FilterForm/FilterForm';
import { NeutralButton } from '../../components/ui/Buttons/Neutral/NeutralButton';
import { Pagination } from '../../components/ui/Pagination/Pagination';
import { Error } from '../../components/elements/Error/Error';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const { searchValue, sortType, currentPage, filters } = useSelector(filterSelector);
  const { items, status } = useSelector(phonesSelector);

  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);
  useOutsideClick(filterRef, () => setIsFiltersVisible(false));

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const onApplyFilters = (newFilters: {
    color: string,
    brand: number,
    sizes: string[]
  }) => {
    dispatch(setFilters(newFilters));
    setIsFiltersVisible(false);
  };

  const getPhones = async () => {
    const brandFilter = filters.brand > 0 ? `brand=${filters.brand}` : ''; //фильтр по бренду
    const colorFilter = filters.color ? `colors=${filters.color}` : ''; //фильтр по цвету
    // const volumeFilter = filters.sizes.length > 0 ? `sizes=${filters.sizes.join(',')}` : ''; //фильтр по объему
    const volumeFilter =
      filters.sizes.length > 0 ? filters.sizes.map((size: string) => `sizes=${size}`).join('&') : ''; //фильтр по объему
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc'; //desc по убыванию, asc по возрастанию
    const sortBy = sortType.sortProperty.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      fetchPhones({ brandFilter, colorFilter, volumeFilter, order, sortBy: sortType.sortProperty, search, currentPage }),
    );
  };

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        currentPage,
        brand: filters.brand,
        color: filters.color,
        sizes: filters.sizes,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortType, currentPage, filters]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в redux
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPhonesParams;

  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(setSearchValue(params.search));
  //     dispatch(setSortType(sort || sortList[0]));
  //     dispatch(setCurrentPage(params.currentPage));

  //     dispatch(setFilters({
  //       color: params.colorFilter,
  //       brand: Number(params.brandFilter),
  //       sizes: params.volumeFilter ? params.volumeFilter.split(',') : [],
  //     }));

  //     isSearch.current = true;
  //   }
  // }, []);

  // Если был первый рендер, то запрашиваем телефоны
  useEffect(() => {
    window.scrollTo(0, 0); //чтобы при переходе с других страниц на Home,
    // не сохранялся скролл браузера и страница Home не открывалась где-то внизу
    if (!isSearch.current) {
      getPhones();
    }

    isSearch.current = false;
  }, [sortType, searchValue, currentPage, filters]);

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPhones = items.slice(startIndex, startIndex + itemsPerPage);

  const phones = paginatedPhones.map((product) => (
    <PhoneCard
      key={product.model}
      id={product.id}
      title={product.title}
      model={product.model}
      colors={product.colors}
      sizes={product.sizes}
      price={product.price}
      images={product.images}
      selectedColor={filters.color}
    />
  ));
  // после items добавить .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
  //вариант поиска для неменяющихся вещей (типа списка стран, для товаров не подходит)
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.catalog}>
      <div className={styles.top}>
        <h2 className={styles.title}>Каталог</h2>
        {/* <span className={styles.subtitle}>152 товара</span> */}
      </div>

      <div className={styles.content}>
        <div
          ref={filterRef}
          className={`${styles.filter} ${isFiltersVisible ? styles.active : ''}`}>
          <FilterForm onApplyFilters={onApplyFilters} />
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
          {status === 'error' ? (
            <Error />
          ) : (
            <ul className={styles.list}>{status === 'loading' ? skeletons : phones}</ul>
          )}
          <Pagination currentPage={currentPage} onChangePage={onChangePage} totalItems={items.length} itemsPerPage={itemsPerPage}/>
        </section>
      </div>
    </div>
  );
};
