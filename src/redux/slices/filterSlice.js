import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  currentPage: 1,
  filters: {
    color: '',
    brand: 0,
    volume: []
  },
  localFilters: {
    color: '',
    brand: 0,
    volume: []
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
    setNavigate(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.filters.color = action.payload.filters.color;
      state.filters.brand = Number(action.payload.filters.brand );
      state.filters.volume = action.payload.filters.volume;
    }
  },
})

export const { setSortType, setCurrentPage, setFilters, setLocalFilters,  setNavigate} = filterSlice.actions

export default filterSlice.reducer