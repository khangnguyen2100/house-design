const getCategories = async () => {
  const categories = await fetch(`/api/categories`).then(res => res.json());

  return categories;
};

export { getCategories };
