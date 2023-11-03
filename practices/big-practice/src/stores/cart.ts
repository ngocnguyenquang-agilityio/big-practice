// Libs
import { create } from 'zustand';

// Types
import { IProductCartItem } from '@interfaces';

type Store = {
  cartItems: IProductCartItem[];
  isOpenCart: boolean;
  toggleCart: () => void;
  addToCart: (item: IProductCartItem) => void;
  removeFromCart: (id: string) => void;
};

export const useCart = create<Store>((set) => ({
  cartItems: [],
  isOpenCart: false,
  toggleCart: () => set((state) => ({ isOpenCart: !state.isOpenCart })),
  addToCart: (item: IProductCartItem) =>
    set((state) => {
      const findItem = state.cartItems.find((it) => it.product.id === item.product.id);
      if (!!findItem) {
        const newItem = {
          id: findItem.id,
          product: findItem.product,
          quantity: findItem.quantity + 1,
        };
        return {
          cartItems: [...state.cartItems.filter((it) => it.product.id !== item.product.id), newItem],
        };
      }
      return {
        cartItems: [...state.cartItems, item],
      };
    }),
  removeFromCart: (id: string) =>
    set((state) => {
      const newCartItems = state.cartItems.filter((it) => it.id !== id);
      return {
        cartItems: newCartItems,
      };
    }),
}));
