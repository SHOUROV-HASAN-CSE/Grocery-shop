'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AiFillStar } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineViewGrid } from 'react-icons/hi';
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineSupportAgent,
} from 'react-icons/md';
const Sidebar = ({ isVisible }) => {
  const path = usePathname();

  const menuItems = [
    {
      href: '/dashboard',
      icon: <MdOutlineProductionQuantityLimits className='h-5 w-5' />,
      label: 'Dashboard',
    },
    {
      href: '/dashboard/vendor',
      icon: <MdOutlineSupportAgent className='h-5 w-5' />,
      label: 'Vendor',
    },
    {
      href: '/dashboard/order',
      icon: <FiShoppingCart className='h-5 w-5' />,
      label: 'Order',
    },
    {
      href: '/dashboard/bundle-order',
      icon: <BiSolidOffer className='h-5 w-5' />,
      label: 'Bundle Order',
    },
    {
      href: '/dashboard/brand',
      icon: <AiFillStar className='h-5 w-5' />,
      label: 'Brand',
    },
    {
      href: '/dashboard/category',
      icon: <HiOutlineViewGrid className='h-5 w-5' />,
      label: 'Category',
    },
  ];

  return (
    <aside
      className={`transition-width z-50 w-64 flex-shrink-0 overflow-y-auto bg-white shadow-sm duration-500 ease-in-out lg:block dark:bg-gray-800 `}
    >
      <div className='  py-4 text-gray-500 dark:text-gray-400'>
        <Link className='flex  justify-center  text-xl font-bold' href={'/'}>
          <span className='text-orange-600'>LOGO </span>{' '}
          <span className='text-sky-600'>HERE</span>
        </Link>

        <ul className='mt-6'>
          {menuItems.map((menuItem, index) => (
            <li className='relative px-6 py-3' key={index}>
              <Link href={menuItem.href}>
                <div
                  className={`inline-flex w-full items-center px-6 py-4 text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200 ${
                    path === menuItem.href ? 'text-emerald-500' : ''
                  }`}
                >
                  {path === menuItem.href && (
                    <span
                      className='absolute inset-y-0 left-0 w-1 rounded-br-lg rounded-tr-lg bg-emerald-500'
                      aria-hidden='true'
                    ></span>
                  )}
                  {menuItem.icon}
                  <span className='ml-4 '>{menuItem.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
