'use client';
import { Logo } from '@/components/logo';
import { userData } from '@/data/user-data';
import * as Dialog from '@radix-ui/react-dialog';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { ProfileIcon } from '@/components/profile-icon';
import { Sidebar } from './sidebar/sidebar';

export const Navbar = () => {
  return (
    <nav className='sticky top-0 z-30 flex w-full items-center gap-5 px-5 py-2 shadow backdrop-blur'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <HiOutlineMenuAlt1 className='block cursor-pointer text-2xl lg:hidden' />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed top-0 z-40 h-screen w-screen bg-gray-500/60 transition delay-300 duration-500'>
            <Dialog.Content className='w-fit border-none outline-none'>
              <Sidebar />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      <Logo className={'md:hidden'} />
      <div className='ml-auto h-8 w-[1px] bg-gray-500' />
      <ProfileIcon image={userData.image} name={userData.name} size={'40px'} />
    </nav>
  );
};
