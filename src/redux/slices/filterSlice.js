import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  currentPage: 1,
  filters: {
    color: '',
    brand: 0
  },
  localFilters: {
    color: '',
    brand: 0
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
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
  },
})

export const { setSortType, setCurrentPage, setFilters, setLocalFilters } = filterSlice.actions

export default filterSlice.reducer