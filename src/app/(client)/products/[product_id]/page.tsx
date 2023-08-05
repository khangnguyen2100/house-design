import NotFound from '@/components/ProductDetail/NotFound';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import RelatedProducts from '@/components/ProductDetail/RelatedProducts';
import {
  getProductById,
  getProducts,
  getProductsInCategory,
} from '@/services/productServices';

type PropsType = {
  params: { product_id: string };
};

export async function generateMetadata({ params }: PropsType) {
  const productDetailData = await getProductById(params.product_id);
  return {
    title: productDetailData?.name || 'Không tìm thấy sản phẩm',
    description: productDetailData?.description || '',
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  const paths = products.map((product: any) => ({
    params: { product_id: product._id },
  }));
  return paths;
}

export default async function Page({ params }: PropsType) {
  const productData = await getProductById(params.product_id);
  const relatedProducts = await getProductsInCategory(productData.category._id);

  return (
    <div className='mx-auto flex w-full max-w-large justify-center px-4'>
      {productData ? (
        <section className='mt-5 flex flex-col'>
          <ProductDetail {...productData} />
          <RelatedProducts relatedProducts={relatedProducts} />
        </section>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
