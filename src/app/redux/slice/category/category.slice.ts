import { createSlice } from '@reduxjs/toolkit';
import { ICategoryList } from '../../../utils/types';

interface SCategorySlice {
  category: ICategoryList[];
}

const initialState: SCategorySlice = {
  category: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const CategoryReducer = categorySlice.reducer;
