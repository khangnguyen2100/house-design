/* eslint-disable no-unused-vars */
'use client';
import { createContext, useContext, useReducer, useEffect } from 'react';

import { ProductProps } from '@/Types/Type';

import CartReducer, { CartState } from './CartReducer';
interface ICartContext {
  cartState: CartState;
  addToCart(newProduct: ProductProps): void;
  updateQuantity(newQuantity: number, _id: string): void;
  removeFromCart(productId: string): void;
  resetCart(): void;
}
export interface CartProduct extends ProductProps {
  quantity: number;
  pay: number;
}
const CartContext = createContext<ICartContext | undefined>(undefined);
type Props = {
  children?: React.ReactNode;
};
const initCartState: CartState = {
  items: [],
  totalPay: 0,
  totalQuantity: 0,
};

const CartContextProvider = ({ children }: Props) => {
  const [cartState, dispatch] = useReducer(CartReducer, initCartState);
  useEffect(() => {
    const cart = window && window.localStorage.getItem('cart');
    if (cart) {
      dispatch({
        type: 'INIT_CART',
        payload: JSON.parse(cart),
      });
    } else
      dispatch({
        type: 'INIT_CART',
        payload: initCartState,
      });
  }, []);
  const addToCart = (newProduct: ProductProps) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: newProduct,
    });
  };
  const updateQuantity = (newQuantity: number = 1, _id: string) => {
    if (newQuantity <= 0) newQuantity = 1;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { newQuantity, _id },
    });
  };
  const removeFromCart = (productId: string) => {
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: {
        _id: productId,
      },
    });
  };
  const resetCart = () => {
    dispatch({
      type: 'RESET_CART',
    });
  };
  const CartContextValue: ICartContext = {
    cartState,
    addToCart,
    updateQuantity,
    removeFromCart,
    resetCart,
    // updateQuantity,
  };
  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  const context = useContext(CartContext);
  if (typeof context === 'undefined')
    throw new Error('useGallery must be used within a GalleryProvider');
  return context;
};

export { CartContextProvider, useCartContext };
