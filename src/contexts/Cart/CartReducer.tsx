import { calculateTotalPay, calculateTotalQuantity } from '@/utils/cart';
import { ProductProps } from '@/Types/Type';

import { CartProduct } from './CartContextProvider';
interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: ProductProps;
}
interface ResetCartAction {
  type: 'RESET_CART';
}
// Action update quantity
interface UpdateQuantityAction {
  type: 'UPDATE_QUANTITY';
  payload: {
    _id: string;
    newQuantity: number;
  };
}

interface DeleteFromCart {
  type: 'DELETE_FROM_CART';
  payload: {
    _id: string;
  };
}
type CartAction =
  | AddToCartAction
  | UpdateQuantityAction
  | DeleteFromCart
  | ResetCartAction;

export type CartState = {
  items: CartProduct[];
  totalPay: number;
  totalQuantity: number;
};
const updateCartState = (state: CartState, items: CartProduct[]) => {
  const totalQuantity = calculateTotalQuantity(items);
  const totalPay = calculateTotalPay(items);
  return {
    ...state,
    items,
    totalQuantity,
    totalPay,
  };
};
export default function CartReducer(
  state: CartState,
  action: CartAction,
): CartState {
  let newCartProducts: CartProduct[] = [];
  switch (action.type) {
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
      return {
        ...state,
        items: [],
        totalPay: 0,
        totalQuantity: 0,
      };
    }
    default:
      return state;
  }
}
