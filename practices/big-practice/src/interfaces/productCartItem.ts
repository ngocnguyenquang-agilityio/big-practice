import { IProduct } from './product';

export interface IProductCartItem extends IProduct {
  quantity: number;
}
