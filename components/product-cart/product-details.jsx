import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { VscDebugBreakpointFunction } from 'react-icons/vsc';

export const ProductDetails = ({ image, title, details }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <span className='absolute -bottom-10 left-0 z-10 w-full bg-primary p-2 text-sm text-white transition-all duration-300 group-hover:bottom-0'>
          Quick Overview
        </span>
      </Dialog.Trigger>
      <Dialog.DialogPortal>
        <Dialog.Overlay className='fixed inset-0 z-[1010] flex items-center justify-center bg-gray-900/80'>
          {/* modal body */}
          <Dialog.Content className='w-[95%] max-w-[560px] rounded bg-white'>
            {/* modal header */}
            <div className='flex items-center justify-between gap-4 p-2'>
              <h4 className='truncate font-semibold'>Product Details</h4>
              <Dialog.Close asChild>
                <IoClose className='cursor-pointer text-xl transition hover:text-gray-500' />
              </Dialog.Close>
            </div>
            {/* main content */}
            <section className='max-h-[70vh] overflow-y-auto'>
              <div className='relative h-[300px]'>
                <Image
                  className='bg-center object-cover'
                  src={image}
                  fill
                  alt={title}
                />
              </div>
              <div className='p-4'>
                <p className='text-justify font-semibold'>{title}</p>
                <ul className='mt-3'>
                  {details &&
                    Object.keys(details).map((key, i) => (
                      <li className='flex items-center gap-3 text-sm' key={i}>
                        <span className='flex items-center gap-2 font-semibold'>
                          <VscDebugBreakpointFunction className='text-sm' />{' '}
                          {key}
                          {' : '}
                        </span>
                        {details[key]}
                      </li>
                    ))}
                </ul>
              </div>
            </section>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};
