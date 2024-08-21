import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

type ColorFilter = string;
type BrandFilter = number;
type SizeFilter = string[];

export enum SortPropertyEnum {
  RATING = 'rating',
  TITLE = 'title',
  PRICEMIN = 'priceMin',
  PRICEMAX = '-priceMin'
}

export type SortType = {
  name: string;
  sortProperty: SortPropertyEnum;
}

type Filters = {
  color: ColorFilter;
  brand: BrandFilter;
  sizes: SizeFilter;
}

interface LocalFilters {
  sizes?: SizeFilter;
  color?: ColorFilter;
  brand?: BrandFilter;
}

interface LocalFiltersPayload {
  filterName: 'sizes' | 'color' | 'brand';
  value: SizeFilter | ColorFilter | BrandFilter;
}

export interface FilterSliceState {
  searchValue: string;
  sortType: SortType;
  currentPage: number;
  filters: Filters;
  localFilters: LocalFilters;
}

const initialState: FilterSliceState = {
  searchValue: '',
  sortType: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING
  },
  currentPage: 1,
  filters: {
    color: '',
    brand: 0,
    sizes: []
  },
  localFilters: {
    color: '',
    brand: 0,
    sizes: []
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue (state, action: PayloadAction<string>){
      state.searchValue = action.payload;
    },
    setSortType (state, action: PayloadAction<SortType>){
      state.sortType = action.payload;
    },
    setCurrentPage (state, action: PayloadAction<number>){
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    // setLocalFilters(state, action) {
    //   const { filterName, value } = action.payload;
    //   state.localFilters[filterName] = value;
    // },
    setLocalFilters(state, action: PayloadAction<LocalFiltersPayload>) {
      const { filterName, value } = action.payload;

      if (filterName === 'sizes') {
        state.localFilters.sizes = value as SizeFilter;
      } else if (filterName === 'color') {
        state.localFilters.color = value as ColorFilter;
      } else if (filterName === 'brand') {
        state.localFilters.brand = value as BrandFilter;
      }
    },
    // setNavigate(state, action) {
    //   state.currentPage = Number(action.payload.currentPage);
    //   state.sort = action.payload.sort;
    //   state.filters.color = action.payload.filters.color;
    //   state.filters.brand = Number(action.payload.filters.brand );
    //   state.filters.sizes = action.payload.filters.sizes;
    // }
  },
})

export const filterSelector = (state: RootState) => state.filter;
export const sortTypeSelector = (state: RootState) => state.filter.sortType;
export const localFiltersSelector = (state: RootState) => state.filter.localFilters;

export const { setSearchValue, setSortType, setCurrentPage, setFilters, setLocalFilters } = filterSlice.actions

export default filterSlice.reducer