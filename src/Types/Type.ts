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
