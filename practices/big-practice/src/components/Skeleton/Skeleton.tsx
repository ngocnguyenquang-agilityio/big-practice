const Skeleton = ({ pagination = 1 }: { pagination?: number }) => {
  const listItems = [];

  for (let i = 1; i <= pagination; i++) {
    listItems.push(
      <li
        className='aspect-square transition-opacity animate-fadeIn'
        key={i}
      >
        <div className='relative inline-block h-full w-full animate-pulse'>
          <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 bg-black relative border-neutral-800'>
            <div className='flex items-center justify-center w-full h-full rounded sm:w-96 bg-gray-700'>
              <svg
                className='w-10 h-10 text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
          </div>
        </div>
      </li>,
    );
  }

  return (
    <ul
      className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      aria-label='skeleton'
    >
      {listItems}
    </ul>
  );
};

export default Skeleton;
