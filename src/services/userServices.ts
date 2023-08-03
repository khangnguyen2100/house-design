import { API_URL } from '@/constants';

const getUsers = async () => {
  const users = await fetch(`${API_URL}/users`).then(res => res.json());

  return users;
};

export { getUsers };
