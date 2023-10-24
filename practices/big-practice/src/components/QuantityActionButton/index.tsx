// Icons
import { MinusIcon, PlusIcon } from '@assets/icons';

// Components
import { Button } from '@components/Button';

// Types
import { IQuantityActionButton } from '@interfaces';

const QuantityActionButton = ({ quantity, handleDecrease, handleIncrease }: IQuantityActionButton) => {
  return (
    <div className='ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-700'>
      <Button
        className='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto'
        variant='link'
        onClick={handleDecrease}
      >
        <MinusIcon />
      </Button>
      <p className='w-6 text-center'>
        <span className='w-full text-sm text-white'>{quantity}</span>
      </p>
      <Button
        className='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80'
        variant='link'
        onClick={handleIncrease}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default QuantityActionButton;
