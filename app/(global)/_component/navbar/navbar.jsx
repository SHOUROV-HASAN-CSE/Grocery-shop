'use client';
import Link from 'next/link';
import { Search } from './search';
import { navData } from '../../../../data/nav-data';
import { NavIconContainer } from './nav-icon-container';

export const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-primary py-3 text-white'>
        <div className='container flex gap-6 whitespace-nowrap'>
          <Link className='text-xl font-bold' href={'/'}>
            <span className='text-orange-600'>LOGO</span>{' '}
            <span className='text-sky-600'>HERE</span>
          </Link>
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
        </div>
      </nav>
    </>
  );
};
