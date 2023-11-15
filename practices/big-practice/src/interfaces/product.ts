export interface IProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  images?: string[];
  thumbnail: string;
  description?: string;
}

export interface IProductQueryParam {
  standingPage?: string;
  searchKeyword?: string;
  productId?: string | number;
  category?: string;
}
