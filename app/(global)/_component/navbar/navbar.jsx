'use client';
import Link from 'next/link';
import { Search } from './search';
import { Logo } from '@/components/logo';
import * as Dialog from '@radix-ui/react-dialog';
import { CgMenuRightAlt } from 'react-icons/cg';
import { navData } from '../../../../data/nav-data';
import { NavIconContainer } from './nav-icon-container';
import { CategoriesMenu } from '../../(home)/_components/categories-menu/categories-menu';

export const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-primary py-3 text-white'>
        <div className='container flex gap-6 whitespace-nowrap'>
          <Logo />
          <Search />

          <div className='hidden items-center gap-5 xl:flex'>
            {navData.map((el, index) => (
              <NavIconContainer
                url={el.url}
                key={index}
                className={el.className}
                icon={el.icon}
                title={el.title}
                subtitle={el.subtitle}
              />
            ))}
          </div>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <CgMenuRightAlt className='block cursor-pointer text-4xl lg:hidden' />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className='fixed inset-0 z-[1010] h-full w-full bg-gray-500/80'>
                <Dialog.Content className='ml-auto h-full w-full max-w-[320px] border-0 bg-white'>
                  <CategoriesMenu />
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </>
  );
};
