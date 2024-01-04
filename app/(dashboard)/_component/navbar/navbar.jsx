import Link from 'next/link';
import { userData } from '@/data/user-data';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { ProfileIcon } from '@/components/profile-icon';

export const Navbar = () => {
  return (
    <nav className='flex w-full items-center gap-5 px-5 py-2 shadow'>
      <HiOutlineMenuAlt1 className='block text-2xl md:hidden' />
      <Link className='text-xl font-bold' href={'/'}>
        <span className='text-orange-600'>LOGO</span>{' '}
        <span className='text-sky-600'>HERE</span>
      </Link>
      <div className='ml-auto h-10 w-[2px] bg-gray-500' />
      <ProfileIcon image={userData.image} name={userData.name} size={'50px'} />
    </nav>
  );
};
