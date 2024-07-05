import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    setSortType (state, action){
      state.sortType = action.payload;
    },
    setCurrentPage (state, action){
      state.currentPage = action.payload;
    }
  },
})

export const { setSortType, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer