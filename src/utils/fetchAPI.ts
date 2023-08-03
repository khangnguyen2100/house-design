import { API_URL } from '@/constants';

export const getProducts = async () => {
  const products = await fetch(`${API_URL}/products`).then(res => res.json());
  console.log(products.length);
  return products;
};
export const getCategories = async () => {
  const categories = await fetch(`${API_URL}/categories`).then(res =>
    res.json(),
  );

  return categories;
};
