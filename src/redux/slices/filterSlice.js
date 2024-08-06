import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  currentPage: 1,
  filters: {
    color: '',
    brand: 0,
    sizes: []
  },
  localFilters: {
    color: '',
    brand: 0,
    sizes: []
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue (state, action){
      state.searchValue = action.payload;
    },
    setSortType (state, action){
      state.sortType = action.payload;
    },
    setCurrentPage (state, action){
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setLocalFilters(state, action) {
      const { filterName, value } = action.payload;
      state.localFilters[filterName] = value;
    },
    setNavigate(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.filters.color = action.payload.filters.color;
      state.filters.brand = Number(action.payload.filters.brand );
      state.filters.sizes = action.payload.filters.sizes;
    }
  },
})

export const filterSelector = (state) => state.filter;
export const sortTypeSelector = (state) => state.filter.sortType;
export const localFiltersSelector = (state) => state.filter.localFilters;

export const { setSearchValue, setSortType, setCurrentPage, setFilters, setLocalFilters,  setNavigate} = filterSlice.actions

export default filterSlice.reducer