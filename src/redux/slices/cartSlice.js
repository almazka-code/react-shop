import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem (state, action){
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.color === action.payload.color &&
          obj.size === action.payload.size)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    removeItem (state, action){
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.color !== action.payload.color ||
          obj.size !== action.payload.size
      );
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    clearItems (state){
      state.items = [];
      state.totalPrice = 0;
    },
    plusItemCount(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.color === action.payload.color &&
          obj.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    minusItemCount(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.color === action.payload.color &&
          obj.size === action.payload.size
      );

      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else if (findItem && findItem.count === 1) {
        state.items = state.items.filter(
          (obj) =>
            obj.id !== action.payload.id ||
            obj.color !== action.payload.color ||
            obj.size !== action.payload.size
        );
      }

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },

  },
})

export const cartSelector = (state) => state.cart;
export const cartItemsSelector = (state) => state.cart.items;

export const { addItem,  removeItem, clearItems, plusItemCount, minusItemCount } = cartSlice.actions

export default cartSlice.reducer