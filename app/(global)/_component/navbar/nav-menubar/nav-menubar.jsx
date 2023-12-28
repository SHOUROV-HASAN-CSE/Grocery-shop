'use client';
import * as Menubar from '@radix-ui/react-menubar';
import { MenuContainer } from './menu-container';
import { navMenuData } from '../../../../../data/nav-data';
import { useHorizontalScrolling } from '../../../../hooks/useHorizontal-scroll';

export const NavMenubar = () => {
  const ref = useHorizontalScrolling();
  return (
    <Menubar.Root
      ref={ref}
      className='no-scrollbar container flex items-center justify-center gap-5 overflow-x-auto'
    >
      {navMenuData.map((menu, index) => (
        <MenuContainer key={index} menus={menu.menus} title={menu.title} />
      ))}
    </Menubar.Root>
  );
};
