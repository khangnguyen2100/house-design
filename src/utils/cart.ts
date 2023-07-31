import { CartProduct } from '@/contexts/Cart/CartContextProvider';

export function calculateTotalQuantity(items: CartProduct[]) {
  return items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}
export function calculateTotalPay(items: CartProduct[]) {
  return items.reduce((total, item) => {
    return total + item.pay;
  }, 0);
}
