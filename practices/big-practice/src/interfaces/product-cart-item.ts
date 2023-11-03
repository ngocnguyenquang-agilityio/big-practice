import { IProduct } from './product';

export interface IProductCartItem {
  id: string;
  product: IProduct;
  quantity: number;
}
