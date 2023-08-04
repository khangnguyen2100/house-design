import { OrderInputProps } from '@/Types/Type';
import { API_URL } from '@/constants';

const createOrder = async (data: OrderInputProps) => {
  const response = await fetch(`${API_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
const getAllOrders = async () => {
  const response = await fetch(`${API_URL}/order`);
  return await response.json();
};
const getOrderById = async (id: string) => {
  const response = await fetch(`${API_URL}/order/${id}`);
  return await response.json();
};

export { createOrder, getAllOrders, getOrderById };
