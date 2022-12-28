import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../utils/types';

interface IProductState {
  product: IProduct;
  products: IProduct[];
}

const initialState: IProductState = {
  product: {},
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const ProductReducer = productSlice.reducer;
