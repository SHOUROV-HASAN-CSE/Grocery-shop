import Link from 'next/link';
import { Search } from './search';
import { NavIconContainer } from './nav-icon-container';
import { IoGiftSharp } from 'react-icons/io5';
import { BsLightningFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className='navbar bg-primary py-3 text-white'>
      <div className='container mx-auto flex gap-6'>
        <Link className='text-2xl font-bold' href={'/'}>
          <span className='text-orange-600'>Star</span>{' '}
          <span className='text-sky-600'>Tech</span>
        </Link>
        <Search />
        <NavIconContainer
          className='ml-auto'
          url={'/'}
          icon={<IoGiftSharp />}
          title='Winter Fest'
          subtitle='Latest Offers'
        />
        <NavIconContainer
          url={'/'}
          icon={<BsLightningFill />}
          title='Mobile Deals'
          subtitle='Special Deals'
        />
        <NavIconContainer
          icon={<FaUser />}
          title='Account'
          subtitle={
            <>
              <Link href={'/login'}>Register</Link> or{' '}
              <Link href={'/'}>Login</Link>
            </>
          }
        />
        <button className='navButton btn'>PC Builder</button>
      </div>
    </nav>
  );
};
