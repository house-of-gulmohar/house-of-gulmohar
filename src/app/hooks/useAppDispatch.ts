/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
