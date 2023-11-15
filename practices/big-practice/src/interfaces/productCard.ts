import { IProduct } from './product';

export type ProductCard = Pick<IProduct, 'title' | 'thumbnail' | 'price'>;
