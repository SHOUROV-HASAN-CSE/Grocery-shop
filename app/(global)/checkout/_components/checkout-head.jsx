import { CircleContainer } from '@/components/circle-container';
import { IoStar } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { orange } from 'tailwindcss/colors';
export const CheckoutHead = () => {
  return (
    <>
      <div className='rounded bg-[#DDEDEC] px-10 py-2 font-semibold italic'>
        You should have a credit card of the back specified for EMI!
      </div>
      <h3 className='my-6 font-semibold'>Checkout</h3>
      <div className='grid grid-cols-1 items-center gap-6 rounded bg-white p-4 shadow lg:grid-cols-3'>
        <div className='mx-auto text-center lg:mx-0 lg:text-left'>
          <h3 className='font-semibold'>Star Point</h3>
          <p>Earn Star Point and use on your next order</p>
        </div>
        <div className='mx-auto  flex h-fit w-fit items-center gap-4 rounded-full bg-orange-100 p-3'>
          <CircleContainer
            radius={'32px'}
            bgColor={orange[500]}
            fontColor={'white'}
          >
            <IoStar />
          </CircleContainer>
          <div>
            <span className='text-xl font-semibold'>450</span> Star Points
          </div>
        </div>
        <button
          className={twMerge(
            'blueButton',
            'mx-auto h-fit w-fit text-sm lg:mx-0 lg:ml-auto',
          )}
        >
          Login to Avail
        </button>
      </div>
    </>
  );
};
