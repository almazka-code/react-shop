import styles from './Home.module.scss';
import { Sort } from '../../components/ui/Sort/Sort';
import { PhoneCard } from '../../components/elements/PhoneCard/PhoneCard';
import { useEffect, useState } from 'react';
import { Skeleton } from '../../components/elements/PhoneCard/Skeleton';
import { Filter } from '../../components/ui/Forms/FilterForm/FilterForm';
import { NeutralButton } from '../../components/ui/Buttons/Neutral/NeutralButton';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });

  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc'; //desc по убыванию, asc по возрастанию
  const sortBy = sortType.sortProperty.replace('-', '');
  const url = `https://66715424e083e62ee43b17a5.mockapi.io/items?sortBy=${sortBy}&order=${order}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); //чтобы при переходе с других страниц на Home,
    // не сохранялся скролл браузера и страница Home не открывалась где-то внизу
  }, [sortType]);

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
            <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
          </div>
          <ul className={styles.list}>
            {/* пока идет загрузка создать фейковый массив из 6 элементов (все значения будут underfined) для того,
            чтобы рендерился массив скелетонов, так как массив с данными ещё не пришел  */}
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((product) => <PhoneCard key={product.model} product={product} />)}
          </ul>
        </section>
      </div>
    </div>
  );
};
