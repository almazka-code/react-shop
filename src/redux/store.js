import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import phones from './slices/phonesSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    phones,
  },
})