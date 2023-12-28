'use client';
import * as Menubar from '@radix-ui/react-menubar';
import { MenuContainer } from './menu-container';
import { navMenuData } from '../../../../../data/nav-data';

export const NavMenubar = () => {
  return (
    <Menubar.Root className='container flex items-center justify-center gap-5'>
      {navMenuData.map((menu, index) => (
        <MenuContainer key={index} menus={menu.menus} title={menu.title} />
      ))}
    </Menubar.Root>
  );
};
