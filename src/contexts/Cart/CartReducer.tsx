import { calculateTotalPay, calculateTotalQuantity } from '@/utils/cart';

import { CartProduct } from './CartContextProvider';
interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: CartProduct;
}

// Action update quantity
interface UpdateQuantityAction {
  type: 'UPDATE_QUANTITY';
  payload: {
    id: string;
    newQuantity: number;
  };
}

interface DeleteFromCart {
  type: 'DELETE_FROM_CART';
  payload: {
    id: string;
  };
}
type CartAction = AddToCartAction | UpdateQuantityAction | DeleteFromCart;

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
        product => product.id === action.payload.id,
      );
      if (isExisted) {
        newCartProducts = state.items.map(product => {
          let newQuantity = product.quantity + 1;
          return product.id === action.payload.id
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
      newCartProducts = state.items.map((item, index) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.newQuantity;
          item.pay = action.payload.newQuantity * item.price;
        }
        return item;
      });

      return updateCartState(state, newCartProducts);
    }
    case 'DELETE_FROM_CART': {
      newCartProducts = state.items.filter(item => {
        return item.id !== action.payload.id;
      });
      return updateCartState(state, newCartProducts);
    }
    default:
      return state;
  }
}
