import { IoClose } from 'react-icons/io5';
import * as Dialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

export const ModalBody = ({ children, title, className }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-gray-500/60'>
        <Dialog.Content
          className={twMerge(
            'w-2/3 max-w-[550px] rounded bg-white py-5 outline-none',
            className,
          )}
        >
          <div className='flex items-center justify-between border-b border-gray-400 px-5 pb-2 '>
            <h4 className='font-semibold'>{title}</h4>
            <Dialog.Close asChild>
              <IoClose className='cursor-pointer text-xl' />
            </Dialog.Close>
          </div>
          <div className='px-5 pt-3'>{children}</div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
