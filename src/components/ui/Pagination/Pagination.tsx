import styles from './Pagination.module.scss';

import ReactPaginate from 'react-paginate';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={(event) => onChangePage(event.selected + 1)}
        forcePage={currentPage - 1} //начальная страница, -1 потому что нужно передавать индекс
        pageCount={7} //сколько всего страниц
        pageRangeDisplayed={2} // отображение двух страниц в диапазоне
        marginPagesDisplayed={2} // отображение двух страниц на краях
        renderOnZeroPageCount={null}
      />
    </>
  );
};
