// Stores
import { useCartStore } from '@stores/cartStore';

// Components
import { Button } from '@components/Button/Button';

// Types
import { IProduct } from '@interfaces';

const ProductDetail = ({ product }: { product: IProduct }) => {
  const { addToCart, toggleCart } = useCartStore();

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity: 1,
      });
      toggleCart();
    }
  };

  return (
    <div className='flex flex-col w-full justify-between rounded-lg border p-8 border-neutral-800 bg-black md:p-12 lg:flex-row lg:gap-8'>
      <div className='h-full w-full basis-full'>
        <div className='relative h-full max-h-[500px] w-full overflow-hidden flex items-center justify-between mx-auto'>
          <img
            src={product.thumbnail}
            width={600}
            height={500}
            className='object-cover w-[600px] h-[500px]'
            alt={`${product.title} - ${product.category}`}
            loading='lazy'
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
        <div className='prose mx-auto max-w-6xl text-base leading-7 prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:underline hover:prose-a:text-neutral-300 prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 text-white prose-headings:text-white prose-a:text-white prose-strong:text-white mb-6 text-sm leading-tight text-white/[60%]'>
          {product.description}
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
