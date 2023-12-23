import Link from 'next/link';
import { Search } from './search';
import { NavIconContainer } from './nav-icon-container';
import { navData } from '../../../../data/nav-data';
import { NavMenubar } from './nav-menubar/nav-menubar';

export const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-primary py-3 text-white'>
        <div className='container flex gap-6 whitespace-nowrap'>
          <Link className='text-xl font-bold' href={'/'}>
            <span className='text-orange-600'>Star</span>{' '}
            <span className='text-sky-600'>Tech</span>
          </Link>
          <Search />

          {navData.map((el, index) => (
            <NavIconContainer
              key={index}
              className={el.className}
              icon={el.icon}
              title={el.title}
              subtitle={el.subtitle}
            />
          ))}

          <button className='navButton btn'>PC Builder</button>
        </div>
      </nav>
      <div className='sticky top-0 z-10 bg-white py-2 text-sm shadow-md'>
        <NavMenubar />
      </div>
    </>
  );
};
