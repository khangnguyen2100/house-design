export const getProducts = async () => {
  const res = await fetch(`/api/products`);
  const result = await res.json();
  return result;
};
export const getProductById = async (productId: string) => {
  const res = await fetch(`/api/products/${productId}`);
  const result = await res.json();
  return result;
};

export const getProductsInCategory = async (categoryId: string) => {
  const res = await fetch(`/api/categories/${categoryId}`);
  const result = await res.json();
  return result;
};
