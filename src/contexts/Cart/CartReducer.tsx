import { calculateTotalPay, calculateTotalQuantity } from '@/utils/cart';
import { ProductProps } from '@/Types/Type';

import { CartProduct } from './CartContextProvider';
interface InitCartAcion {
  type: 'INIT_CART';
  payload: CartState;
}
interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: ProductProps;
}
interface ResetCartAction {
  type: 'RESET_CART';
}
interface UpdateQuantityAction {
  type: 'UPDATE_QUANTITY';
  payload: {
    _id: string;
    newQuantity: number;
  };
}

interface DeleteFromCartAction {
  type: 'DELETE_FROM_CART';
  payload: {
    _id: string;
  };
}
type CartAction =
  | InitCartAcion
  | AddToCartAction
  | UpdateQuantityAction
  | DeleteFromCartAction
  | ResetCartAction;

export type CartState = {
  items: CartProduct[];
  totalPay: number;
  totalQuantity: number;
};
const updateCartState = (state: CartState, items: CartProduct[]) => {
  const totalQuantity = calculateTotalQuantity(items);
  const totalPay = calculateTotalPay(items);
  const cartValue = {
    ...state,
    items,
    totalQuantity,
    totalPay,
  };
  window.localStorage.setItem('cart', JSON.stringify(cartValue));
  return cartValue;
};
export default function CartReducer(
  state: CartState,
  action: CartAction,
): CartState {
  let newCartProducts: CartProduct[] = [];

  switch (action.type) {
    case 'INIT_CART': {
      return action.payload;
    }
    case 'ADD_TO_CART': {
      const isExisted = state.items.find(
        product => product._id === action.payload._id,
      );
      if (isExisted) {
        newCartProducts = state.items.map(product => {
          let newQuantity = product.quantity + 1;
          return product._id === action.payload._id
            ? {
                ...product,
                quantity: newQuantity,
                pay: product.price * newQuantity,
              }
            : product;
        });
        return updateCartState(state, newCartProducts);
      } else {
        newCartProducts = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
            pay: action.payload.price,
          },
        ];
        return updateCartState(state, newCartProducts);
      }
    }
    case 'UPDATE_QUANTITY': {
      newCartProducts = state.items.map(item => {
        if (item._id === action.payload._id) {
          item.quantity = action.payload.newQuantity;
          item.pay = action.payload.newQuantity * item.price;
        }
        return item;
      });

      return updateCartState(state, newCartProducts);
    }
    case 'DELETE_FROM_CART': {
      newCartProducts = state.items.filter(item => {
        return item._id !== action.payload._id;
      });
      return updateCartState(state, newCartProducts);
    }
    case 'RESET_CART': {
      return updateCartState(state, newCartProducts);
    }
    default:
      return state;
  }
}
