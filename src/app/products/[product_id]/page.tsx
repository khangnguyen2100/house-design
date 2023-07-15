import NotFound from '@/components/ProductDetail/NotFound';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import RelatedProducts from '@/components/ProductDetail/RelatedProducts';

import { productsMock } from '../page';

type PropsType = {
  params: { product_id: string };
};

export async function generateMetadata({ params }: PropsType) {
  const productDetailData = productsMock.find(
    product => product.id === params.product_id,
  );
  return {
    title: productDetailData?.name || 'Không tìm thấy sản phẩm',
    description: productDetailData?.description || '',
  };
}

export async function generateStaticParams() {
  return productsMock.map(product => ({
    product_id: product.id,
  }));
}

export default function Page({ params }: PropsType) {
  const productDetailData = productsMock.find(
    product => product.id === params.product_id,
  );
  const category = productDetailData?.category || '';
  const relatedProducts = productsMock.filter(
    product => product.category === category,
  );

  return (
    <div className='flex w-full max-w-large justify-center px-4'>
      {productDetailData ? (
        <section className='mt-5 flex flex-col'>
          <ProductDetail {...productDetailData} />
          <RelatedProducts relatedProducts={relatedProducts} />
        </section>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
