import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { SortPropertyEnum } from './filterSlice';

type Size = '64gb'| '128gb'| '256gb'| '512gb'| '1tb';
type Color = 'blue' | 'yellow'| 'pink'| 'green'| 'purple'| 'natural'| 'black';

interface PhoneItem {
  id: number;
  title: string;
  brand: number;
  model: string;
  rating: number;
  colors: Color[];
  sizes: Size[];
  price: Record<Size, number>;
  priceMin: number;
  images: Record<Color, string>;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PhonesSliceState {
  items: PhoneItem[];
  status: Status;
}

const initialState: PhonesSliceState = {
  items: [],
  status: Status.LOADING
}

export type SearchPhonesParams = {
  brandFilter: string,
  colorFilter: string,
  volumeFilter: string,
  order: string,
  sortBy: SortPropertyEnum,
  search: string,
  currentPage: number
}

export const fetchPhones = createAsyncThunk(
  'phones/fetchPhonesStatus',
  async (params: SearchPhonesParams) => {
    const {brandFilter, colorFilter, volumeFilter, order, sortBy, search, currentPage} = params;
    const url = `https://66715424e083e62ee43b17a5.mockapi.io/items?${brandFilter}&${colorFilter}&${volumeFilter}&page=${currentPage}&${search}&sortBy=${sortBy}&order=${order}`;
    const {data} = await axios.get<PhoneItem[]>(url);
    return data;
  },
)

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    setItems (state, action: PayloadAction<PhoneItem[]>){
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPhones.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })
    .addCase(fetchPhones.fulfilled, (state, action: PayloadAction<PhoneItem[]>) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    .addCase(fetchPhones.rejected, (state) => {
      state.status = Status.ERROR
      state.items = []
    })
  }
})

export const phonesSelector = (state: RootState) => state.phones;

export const { setItems } = phonesSlice.actions

export default phonesSlice.reducer