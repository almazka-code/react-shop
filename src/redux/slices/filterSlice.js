import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortType (state, action){
      state.sortType = action.payload;
    }
  },
})

export const { setSortType } = filterSlice.actions

export default filterSlice.reducer