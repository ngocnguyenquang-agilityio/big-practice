interface IProductDetailLayout {
  productDetail: React.ReactNode;
  relatedProduct?: React.ReactNode;
}

const ProductDetailLayout = ({ productDetail, relatedProduct }: IProductDetailLayout): JSX.Element => {
  return (
    <div className='w-full max-w-screen-2xl px-4'>
      {productDetail}
      {relatedProduct && (
        <div className='py-8'>
          <h2 className='mb-4 text-2xl font-bold text-white'>Related Products</h2>
          {relatedProduct}
        </div>
      )}
    </div>
  );
};

export default ProductDetailLayout;
