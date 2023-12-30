'use client';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
} from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';

import { BsFillHandbagFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutBtn from './CheckoutBtn';
import CartProduct from './CartProduct';
import { removeFromCart } from '../../../../redux/slices/cartSlice';

const FloatingCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = async (item) => {
    const newCart = cart.filter((cartItem) => cartItem?.id !== item?.id);

    await dispatch(removeFromCart(newCart));
  };

  return (
    <div>
      <Root>
        <Trigger asChild>
          <div className='indicator fixed bottom-3 right-3 z-[1000] flex cursor-pointer  flex-col items-center gap-1  rounded-sm bg-gray-700 px-2 pb-1 pt-2 text-white duration-500 hover:bg-gray-800 lg:bottom-8 lg:right-5'>
            <BsFillHandbagFill className='text-lg' />
            <span className='text-[12px] font-semibold'>CART</span>
            <div className='absolute -right-2 -top-2  h-5 w-6  rounded-full bg-[#EA580C]   text-center text-sm font-semibold'>
              {cart?.length}
            </div>
          </div>
        </Trigger>

        <Portal>
          <Overlay className='bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0' />

          <Content className='data-[state=open]:animate-contentShow bg-red-100focus:outline-none fixed right-[0%] top-[50%] z-[1001]  h-full w-full translate-y-[-50%] rounded-[6px] bg-white  md:w-96 '>
            <div className='flex items-center justify-between bg-gray-800 px-5 py-3 text-white'>
              <Title className='text-mauve12 m-0 text-[17px] font-medium'>
                Your Cart
              </Title>

              <Close asChild>
                <button
                  className='text-violet11 hover:bg-violet4 focus:shadow-violet7  rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
                  aria-label='Close'
                >
                  <IoClose className='text-xl' />
                </button>
              </Close>
            </div>

            {cart?.length === 0 ? (
              <p className='py-20 text-center'>Your shopping cart is empty!</p>
            ) : (
              <div className='flex h-[75vh] flex-col gap-2 overflow-y-auto '>
                {cart?.map((item, i) => (
                  <CartProduct
                    item={item}
                    key={i}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </div>
            )}

            {cart?.length !== 0 && <CheckoutBtn cart={cart} />}
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export default FloatingCart;
