import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price:number;
  color: string;
  size: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: []
}

type ProductAction = {
  id: number;
  color: string;
  size: string
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem (state, action: PayloadAction<CartItem>){
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
    removeItem (state, action: PayloadAction<ProductAction>){
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
    plusItemCount(state, action: PayloadAction<ProductAction>) {
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
    minusItemCount(state, action: PayloadAction<ProductAction>) {
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

export const cartSelector = (state: RootState) => state.cart;
export const cartItemsSelector = (state: RootState) => state.cart.items;

export const { addItem,  removeItem, clearItems, plusItemCount, minusItemCount } = cartSlice.actions

export default cartSlice.reducer