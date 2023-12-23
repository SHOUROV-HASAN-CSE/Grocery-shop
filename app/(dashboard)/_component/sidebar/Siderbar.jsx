"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { AiFillStar } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineViewGrid } from 'react-icons/hi';
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineSupportAgent,
} from 'react-icons/md';
const Sidebar = () => {
  const router = useRouter()

  const menuItems = [
    {
      href: '/dashboard',
      icon: <MdOutlineProductionQuantityLimits className='h-5 w-5' />,
      label: 'Dashboard',
    },
    {
      href: '/vendor',
      icon: <MdOutlineSupportAgent className='h-5 w-5' />,
      label: 'Vendor',
    },
    {
      href: '/order',
      icon: <FiShoppingCart className='h-5 w-5' />,
      label: 'Order',
    },
    {
      href: '/bundle-order',
      icon: <BiSolidOffer className='h-5 w-5' />,
      label: 'Bundle Order',
    },
    {
      href: '/brand',
      icon: <AiFillStar className='h-5 w-5' />,
      label: 'Brand',
    },
    {
      href: '/category',
      icon: <HiOutlineViewGrid className='h-5 w-5' />,
      label: 'Category',
    },
  ];

  return (
    <aside className='z-30 hidden w-64 flex-shrink-0 overflow-y-auto bg-white shadow-sm lg:block dark:bg-gray-800 transition-width duration-500 ease-in-out '>
      <div className='h-16 py-4 text-gray-500 dark:text-gray-400'>
        <Link href='/' className='ps-5 text-2xl font-bold'>
          Grocery Shop
        </Link>
        <ul className='mt-6'>
      {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link href={menuItem.href}>
              <div
                className={`inline-flex w-full items-center px-6 py-4 text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200 ${
                  router.pathname === menuItem.href ? 'bg-emerald-500' : ''
                }`}
              >
                <span className="absolute inset-y-0 left-0 w-1 rounded-br-lg rounded-tr-lg bg-emerald-500" aria-hidden="true"></span>
                {menuItem.icon}
                <span className="ml-4">{menuItem.label}</span>
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
