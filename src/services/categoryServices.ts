import { API_URL } from '@/constants';

const getCategories = async () => {
  const categories = await fetch(`${API_URL}/categories`).then(res =>
    res.json(),
  );

  return categories;
};

export { getCategories };
