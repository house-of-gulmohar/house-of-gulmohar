import { configureStore } from '@reduxjs/toolkit';
import { CategoryReducer } from './slice/category/category.slice';

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
