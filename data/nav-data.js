import Link from 'next/link';
import { FaUser, FaUserSecret } from 'react-icons/fa';
import { IoGiftSharp } from 'react-icons/io5';
import { MdOutlineDashboard } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import { BsHandbag } from 'react-icons/bs';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { LuLayoutList } from 'react-icons/lu';

export const navData = [
  {
    className: 'ml-auto',
    url: '/shop',
    icon: <IoGiftSharp />,
    title: 'Shop',
    subtitle: <Link href={'/shop'}> All Products</Link>,
  },

  {
    icon: <FaUser />,
    url: '/login',
    title: 'Account',
    subtitle: (
      <>
        <Link href={'/register'}>Register</Link> or{' '}
        <Link href={'/login'}>Login</Link>
      </>
    ),
  },
];

export const sidebarData = [
  { title: 'Dashboard', url: '/dashboard', icon: <MdOutlineDashboard /> },
  { title: 'Products', url: '/dashboard/products', icon: <TiShoppingCart /> },
  { title: 'Vendors', url: '/dashboard/vendors', icon: <FaUserSecret /> },
  { title: 'Orders', url: '/dashboard/orders', icon: <BsHandbag /> },
  {
    title: 'Brands',
    url: '/dashboard/brands',
    icon: <MdOutlineBrandingWatermark />,
  },
  { title: 'Categories', url: '/dashboard/categories', icon: <LuLayoutList /> },
];
