// Libs
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
import { IProductCartItem } from '@interfaces';

type CartStore = {
  cartItems: IProductCartItem[];
  isOpenCart: boolean;
  toggleCart: () => void;
  addToCart: (item: IProductCartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export const useCartStore = create<CartStore, [['zustand/persist', CartStore]]>(
  persist(
    (set) => ({
      cartItems: [],
      isOpenCart: false,

      toggleCart: () => set((state) => ({ isOpenCart: !state.isOpenCart })),

      addToCart: (productItem: IProductCartItem) =>
        set((state) => {
          let isProductExistInCart = false;

          const updateCartItems = state.cartItems.map((item) => {
            if (item.id === productItem.id) {
              isProductExistInCart = true;
              return { ...item, quantity: item.quantity + 1 };
            }

            return item;
          });

          if (!isProductExistInCart) {
            updateCartItems.push(productItem);
          }

          return { cartItems: updateCartItems };
        }),

      removeFromCart: (id: number) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),

      increaseQuantity: (id: number) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) => (item.id !== id ? item : { ...item, quantity: item.quantity + 1 })),
        })),

      decreaseQuantity: (id: number) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) => (item.id !== id ? item : { ...item, quantity: item.quantity - 1 })),
        })),
    }),
    {
      name: 'cart-storage',
    },
  ),
);
