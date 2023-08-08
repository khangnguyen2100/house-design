import { OrderInputProps } from '@/Types/Type';

const createOrder = async (data: OrderInputProps) => {
  const response = await fetch(`/api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
const getAllOrders = async () => {
  const response = await fetch(`/api/order`);
  return await response.json();
};
const getOrderById = async (id: string) => {
  const response = await fetch(`/api/order/${id}`);
  return await response.json();
};

export { createOrder, getAllOrders, getOrderById };
