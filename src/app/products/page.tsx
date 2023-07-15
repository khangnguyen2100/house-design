import ProductBanner from '/public/images/banner/product-banner.jpg';

import type { Metadata } from 'next';

import ProductsList from '@/components/Products/ProductsList';
import Banner from 'components/common/Banner/Banner';

export const metadata: Metadata = {
  title: 'Sản phẩm',
};
export const productsMock = [
  {
    id: '1',
    name: 'Sofa',
    rate: 5,
    price: 2299000,
    salePrice: 1839000,
    image:
      'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-MB-23-03-768x511.jpg',
    description: 'A comfortable sofa for your living room.',
    category: 'sofa',
    createdAt: '2021-09-05T00:00:00.000Z',
  },
  {
    id: '2',
    name: 'Coffee Table',
    rate: 3.5,
    price: 3432000,
    salePrice: 2745600,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-1-667x400.jpg',
    description: 'A stylish coffee table for your home.',
    category: 'table',
    createdAt: '2022-09-01T00:00:00.000Z',
  },
  {
    id: '3',
    name: 'Bookshelf',
    rate: 2.8,
    price: 1739000,
    salePrice: 1391200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/07/Armchair-Royal-mau-do-204117-300x200.jpg',
    description: 'A bookshelf to store and display your books and decor.',
    category: 'shelf',
    createdAt: '2021-03-01T00:00:00.000Z',
  },
  {
    id: '4',
    name: 'Bed',
    rate: 3.8,
    price: 5209000,
    salePrice: 4166400,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/08/GHE-RELAX-CHAIR-LEONARD-LEAT-META-37528P-1-300x194.jpg',
    description: "A comfortable bed for a good night's sleep.",
    category: 'bed',
    createdAt: '2021-09-21T00:00:00.000Z',
  },
  {
    id: '5',
    name: 'Dining Table',
    rate: 5,
    price: 1099000,
    salePrice: 1099000,
    image:
      'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-BOC-VAI-MAU-XANH-MB833-21-300x200.jpg',
    description: 'A sturdy dining table for your home.',
    category: 'table',
    createdAt: '2021-09-11T00:00:00.000Z',
  },
  {
    id: '6',
    name: 'Office Chair',
    rate: 4.5,
    price: 1529000,
    salePrice: 1223200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-MB-23-03-1-300x200.jpg',
    description: 'A comfortable chair for your office space.',
    category: 'chair',
    createdAt: '2021-06-01T00:00:00.000Z',
  },
  {
    id: '7',
    name: 'Wardrobe',
    rate: 1.5,
    price: 3879000,
    salePrice: 3099200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/08/GHE-RELAX-CHAIR-LEONARD-LEAT-META-37528P-1-300x194.jpg',
    description: 'A spacious wardrobe to store your clothes and accessories.',
    category: 'cabinet',
    createdAt: '2023-09-01T00:00:00.000Z',
  },
  {
    id: '8',
    name: 'TV Stand',
    rate: 3.6,
    price: 2759000,
    salePrice: 2207200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/07/Armchair-Royal-mau-do-204117-300x200.jpg',
    description: 'A stand for your TV and media devices.',
    category: 'cabinet',
    createdAt: '2020-09-01T00:00:00.000Z',
  },
  {
    id: '9',
    name: 'Side Table',
    rate: 3.5,
    price: 1019000,
    salePrice: 1019000,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-4-300x200.jpg',
    description: 'A small table to place beside your sofa or bed.',
    category: 'table',
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: '10',
    name: 'Curtains',
    rate: 4.5,
    price: 4029000,
    salePrice: 3223200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-BOC-VAI-MAU-XANH-MB833-21-300x200.jpg',
    description: "Beautiful curtains to enhance your room's decor.",
    category: 'shelf',
    createdAt: '2021-02-01T00:00:00.000Z',
  },
  {
    id: '11',
    name: 'Rug',
    rate: 1,
    price: 4029000,
    salePrice: 1759200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-MB-23-03-1-300x200.jpg',
    description: 'A soft and cozy rug to add warmth to your floor.',
    category: 'shelf',
    createdAt: '2021-05-01T00:00:00.000Z',
  },
  {
    id: '12',
    name: 'Desk',
    rate: 5,
    price: 2199000,
    salePrice: 1759200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-4-300x200.jpg',
    description: 'A functional desk for your home office or study area.',
    category: 'table',
    createdAt: '2021-09-22T00:00:00.000Z',
  },
  {
    id: '13',
    name: 'Accent Chair',
    rate: 2,
    price: 1689000,
    salePrice: 1351200,
    image:
      'https://nhaxinh.com/wp-content/uploads/2023/05/ARMCHAIR-BOC-VAI-MAU-XANH-MB833-21-300x200.jpg',
    description: "A stylish chair to enhance your room's decor.",
    category: 'chair',
    createdAt: '2021-09-23T00:00:00.000Z',
  },
  {
    id: '14',
    name: 'Wall Art',
    rate: 3,
    price: 4029000,
    salePrice: 4029000,
    image:
      'https://nhaxinh.com/wp-content/uploads/2022/08/GHE-RELAX-CHAIR-LEONARD-LEAT-META-37528P-1-300x194.jpg',
    description: 'Beautiful artwork to adorn your walls.',
    category: 'shelf',
    createdAt: '2021-01-01T00:00:00.000Z',
  },
];

const Products = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Sản phẩm'
        height='large'
        overlay
      />
      <ProductsList products={productsMock} />
    </div>
  );
};

export default Products;
