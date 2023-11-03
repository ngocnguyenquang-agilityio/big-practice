export interface IProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  images?: string[];
  thumbnail: string;
  description?: string;
}
