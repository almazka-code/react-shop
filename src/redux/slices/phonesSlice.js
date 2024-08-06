import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhones = createAsyncThunk(
  'phones/fetchPhonesStatus',
  async (params) => {
    const {brandFilter, colorFilter, volumeFilter, order, sortBy, search, currentPage} = params;
    const url = `https://66715424e083e62ee43b17a5.mockapi.io/items?${brandFilter}&${colorFilter}&${volumeFilter}&page=${currentPage}&limit=6&${search}&sortBy=${sortBy}&order=${order}`;
    const {data} = await axios.get(url);
    return data;
  },
)

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
}

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    setItems (state, action){
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPhones.pending, (state) => {
      state.status = "loading"
      state.items = []
    })
    .addCase(fetchPhones.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = "success"
    })
    .addCase(fetchPhones.rejected, (state) => {
      state.status = "error"
      state.items = []
    })
  }
})

export const phonesSelector = (state) => state.phones;

export const { setItems } = phonesSlice.actions

export default phonesSlice.reducer