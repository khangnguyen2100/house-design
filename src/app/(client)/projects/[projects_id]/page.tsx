import Banner from '@/components/common/Banner/Banner';

import ProductBanner from '/public/images/banner/product-banner.jpg';
type PropsType = {
  params: { product_id: string };
};
function ProjectDetailPage({ params }: PropsType) {
  const { product_id } = params;
  return (
    <>
      <Banner
        background={ProductBanner}
        title='Nhà phố Long Biên'
        height='large'
        overlay
      />
    </>
  );
}

export default ProjectDetailPage;
