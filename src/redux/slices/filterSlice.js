import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  brandType: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  currentPage: 1,
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
    }
  },
})

export const { setBrandType, setSortType, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer