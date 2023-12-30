'use client';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';

import { BsFillHandbagFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const FloatingCart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <Root>
        <Trigger asChild>
          <div className='indicator fixed bottom-3 right-3 z-[1000] flex cursor-pointer  flex-col items-center gap-1  rounded-sm bg-gray-700 px-2 pb-1 pt-2 text-white duration-500 hover:bg-gray-800 lg:bottom-8 lg:right-5'>
            <BsFillHandbagFill className='text-lg' />
            <span className='text-[12px] font-semibold'>CART</span>
            <div className='absolute -right-2 -top-2  h-5 w-6  rounded-full bg-[#EA580C]   text-center text-sm font-semibold'>
              {cart.length}
            </div>
          </div>
        </Trigger>

        <Portal>
          <Overlay className='bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0' />

          <Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[1001] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
            <Title className='text-mauve12 m-0 text-[17px] font-medium'>
              Your Cart
            </Title>

            <Description className='text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal'>
              Make changes to your profile here. Click save when you're done.
            </Description>

            <Close asChild>
              <button
                className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
                aria-label='Close'
              >
                <IoClose />
              </button>
            </Close>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export default FloatingCart;
