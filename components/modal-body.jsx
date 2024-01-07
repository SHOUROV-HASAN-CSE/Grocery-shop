import { IoClose } from 'react-icons/io5';
import { Close, Overlay, Portal, Content } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

export const ModalBody = ({
  children,
  title,
  className,
  headerClass,
  bodyClass,
}) => {
  return (
    <Portal>
      <Overlay className='absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-gray-500/60'>
        <Content
          className={twMerge(
            'w-[90%] max-w-[550px] rounded bg-white py-5 outline-none sm:w-2/3',
            className,
          )}
        >
          <div
            className={twMerge(
              'flex items-center justify-between border-b border-gray-400 px-5 pb-2',
              headerClass,
            )}
          >
            <h4 className='font-semibold'>{title}</h4>
            <Close asChild>
              <IoClose className='cursor-pointer text-xl' />
            </Close>
          </div>
          <div
            className={twMerge(
              'max-h-[70vh] overflow-y-auto px-5 pt-3',
              bodyClass,
            )}
          >
            {children}
          </div>
        </Content>
      </Overlay>
    </Portal>
  );
};
