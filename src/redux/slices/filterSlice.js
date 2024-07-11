import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  brandType: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  currentPage: 1,
  filters: {
    color: '',
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrandType (state, action){
      state.brandType = action.payload;
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
  },
})

export const { setBrandType, setSortType, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer