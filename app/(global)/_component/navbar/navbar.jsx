'use client';
import Link from 'next/link';
import { Search } from './search';
import { navData } from '../../../../data/nav-data';
import { NavMenubar } from './nav-menubar/nav-menubar';
import { NavIconContainer } from './nav-icon-container';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const headerStyle = {
    transition: 'transform 0.3s ease',
    transform: isScrolled ? 'translateY(0)' : 'translateY(-100%)',
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShow =
        currentScrollPos < prevScrollPos || currentScrollPos < 100;

      setIsScrolled(shouldShow);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
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
                key={index}
                className={el.className}
                icon={el.icon}
                title={el.title}
                subtitle={el.subtitle}
              />
            ))}
          </div>

          <button className='navButton btn'>Whish List</button>
        </div>
      </nav>
      <div
        className='sticky top-0 z-10 w-full bg-white py-3 text-sm shadow-md'
        style={headerStyle}
      >
        <NavMenubar />
      </div>
    </>
  );
};
