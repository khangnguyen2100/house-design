'use client';
import { createContext, useContext, useReducer } from 'react';

import { ProductProps } from '@/Types/Type';

import CartReducer, { CartState } from './CartReducer';
interface ICartContext {
  cartState: CartState;
  addToCart(newProduct: ProductProps): void;
  updateQuantity(newQuantity: number, id: string): void;
  removeFromCart(productId: string): void;
}
export interface CartProduct extends ProductProps {
  quantity: number;
  pay: number;
}
const CartContext = createContext<ICartContext | undefined>(undefined);
type Props = {
  children?: React.ReactNode;
};
const initCartState = {
  items: [],
  totalPay: 0,
  totalQuantity: 0,
};
const CartContextProvider = ({ children }: Props) => {
  const [cartState, dispatch] = useReducer(CartReducer, initCartState);

  const addToCart = (newProduct: CartProduct) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: newProduct,
    });
  };
  const updateQuantity = (newQuantity: number = 1, id: string) => {
    if (newQuantity <= 0) newQuantity = 1;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { newQuantity, id },
    });
  };
  const removeFromCart = (productId: string) => {
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: {
        id: productId,
      },
    });
  };
  const CartContextValue: ICartContext = {
    cartState,
    addToCart,
    updateQuantity,
    removeFromCart,
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
