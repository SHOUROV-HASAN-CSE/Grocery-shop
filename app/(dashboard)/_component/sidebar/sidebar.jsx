'use client';

import { Logo } from '../../../../components/logo';
import { sidebarData } from '../../../../data/nav-data';
import { SidebarLink } from './sidebar-link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const activeLink = usePathname();
  return (
    <aside className='sticky left-0 top-0 h-screen w-fit bg-white px-6 py-3 shadow'>
      <div className=''>
        <Logo />
      </div>
      <div className='mt-5 space-y-1'>
        {sidebarData.map(({ url, title, icon }) => (
          <SidebarLink
            key={url}
            url={url}
            title={title}
            icon={icon}
            activeUrl={activeLink}
          />
        ))}
      </div>
    </aside>
  );
};
