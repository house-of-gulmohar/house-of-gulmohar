import { IProduct } from '../../../utils/types';

export interface IConfirmProducts {
  [key: string]: {
    product: IProduct;
    quantity: number;
  };
}
