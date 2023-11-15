import { ProductCard } from '@interfaces';

const ProductCard = ({ title, price, thumbnail }: ProductCard): JSX.Element => {
  return (
    <div className='relative inline-block h-full w-full'>
      <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 bg-black relative border-neutral-800'>
        <img
          className='relative h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105'
          loading='lazy'
          alt={title}
          src={thumbnail}
        />
        <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4'>
          <div className='flex items-center rounded-full border p-1 text-xs font-semibold backdrop-blur-md border-neutral-800 bg-black/70 text-white'>
            <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>{title}</h3>
            <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
              {price}
              <span className='ml-1 inline @[275px]/label:inline'>USD</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
