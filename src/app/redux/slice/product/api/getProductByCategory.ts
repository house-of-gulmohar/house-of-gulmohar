import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from '../../../../service/axios';
import { ENDPOINTS } from '../../../../utils/constants';
import { IProduct } from '../../../../utils/types';

interface Payload {
  category: string;
  limit?: number;
  offset?: number;
}

type Error = {
  message: string;
};

export const getProductByCategory = createAsyncThunk<IProduct[], Payload>(
  'product/category',
  async (payload: Payload) => {
    const { category, limit, offset } = payload;
    httpService
      .get(ENDPOINTS.PRODUCT.MAIN, {
        params: {
          category,
          limit,
          offset,
        },
      })
      .then(({ data, status }) => {
        if (status === 200) {
          return data;
        }
        return [] as IProduct[];
      });
  }
);

export const getProductByCategoryReducer = {};
