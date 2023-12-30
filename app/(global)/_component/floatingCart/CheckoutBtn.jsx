import { Description } from '@radix-ui/react-dialog';

const CheckoutBtn = () => {
  return (
    <Description className='absolute bottom-0 w-full '>
      <div className='flex flex-col gap-2 px-5  text-sm font-semibold'>
        <div className='flex items-center justify-between border-b py-2'>
          <p className='w-1/2 text-end text-gray-600'>Sub-Total</p>
          <p className='w-1/2 text-end'>50000৳</p>
        </div>
        <div className='flex items-center justify-between py-2'>
          <p className='w-1/2 text-end text-gray-600'>Total</p>
          <p className='w-1/2 text-end'>50000৳</p>
        </div>
      </div>
      <button className='w-full bg-[#EF4A23] py-3 text-sm font-semibold text-white'>
        Checkout
      </button>
    </Description>
  );
};

export default CheckoutBtn;
