// Stores
import { useCartStore } from '@stores/cartStore';

// Components
import { Button } from '@components/Button';

// Types
import { IProduct } from '@interfaces';

const ProductDetail = ({ product }: { product: IProduct }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity: 1,
      });
    }
  };

  return (
    <div className='flex flex-col rounded-lg border p-8 border-neutral-800 bg-black md:p-12 lg:flex-row lg:gap-8'>
      <div className='h-full w-full basis-full'>
        <div className='relative h-full max-h-[500px] w-full overflow-hidden flex items-center justify-between mx-auto'>
          <img
            src={product.thumbnail}
            width={600}
            height={500}
            className='mx-auto'
            alt={`${product.title} - ${product.category}`}
          />
        </div>
        <ul className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
          <li className='h-20 w-20'>
            <div className='cursor-pointer group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 bg-black border-2 border-blue-600'>
              <img
                className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className='basis-full lg:basis-2/6'>
        <div className='mb-6 flex flex-col border-b pb-6 border-neutral-700'>
          <h1 className='mb-2 text-5xl text-white font-medium'>{product.title}</h1>
          <p className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
            {'$' + `${product.price}`}
            <span className='ml-1 inline'>USD</span>
          </p>
        </div>
        <Button
          size='xl'
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
