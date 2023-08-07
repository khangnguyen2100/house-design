import { API_URL } from '@/constants';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  const result = await res.json();
  return result;
};
export const getProductById = async (productId: string) => {
  const res = await fetch(`${API_URL}/products/${productId}`);
  const result = await res.json();
  return result;
};

export const getProductsInCategory = async (categoryId: string) => {
  const res = await fetch(`${API_URL}/categories/${categoryId}`);
  const result = await res.json();
  return result;
};
