const getUsers = async () => {
  const users = await fetch(`/api/users`).then(res => res.json());

  return users;
};

export { getUsers };
