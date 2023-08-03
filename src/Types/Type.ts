export interface projectItem {
  id: number;
  title: string;
  img: string;
  slug: string;
}
export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  category: CategoryProps;
  price: number;
  salePrice: number;
  thumbnail: string;
  images: string[];
  remainingItem: number;
  createdAt: string;
  updatedAt: string;
  rate: number;
  information: {
    wide: string;
    long: string;
    high: string;
    material: string;
  };
}
export interface CategoryProps {
  _id: string;
  name: string;
  description: string;
  thumbnail: string;
  totalProducts: number;
}
export interface UserProps {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'block';
  phoneNumber: string;
  address: string;
  avatar: string;
}
