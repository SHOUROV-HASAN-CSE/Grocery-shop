'use client';

import { Search } from './search';
import { Logo } from '../../../../components/logo';
import { CgMenuRightAlt } from 'react-icons/cg';
import { navData } from '../../../../data/nav-data';
import { NavIconContainer } from './nav-icon-container';
import { CategoriesMenu } from '../../(home)/_components/categories-menu/categories-menu';
import {
  Root,
  Trigger,
  Overlay,
  Content,
  Portal,
} from '@radix-ui/react-dialog';

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

          <Root>
            <Trigger asChild>
              <CgMenuRightAlt className='block cursor-pointer text-4xl lg:hidden' />
            </Trigger>
            <Portal>
              <Overlay className='fixed inset-0 z-[1010] h-full w-full bg-gray-500/80'>
                <Content className='ml-auto h-full w-full max-w-[320px] border-0 bg-white'>
                  <CategoriesMenu />
                </Content>
              </Overlay>
            </Portal>
          </Root>
        </div>
      </nav>
    </>
  );
};
