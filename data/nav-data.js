import Link from 'next/link';
import { BsLightningFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoGiftSharp } from 'react-icons/io5';

export const navData = [
  {
    className: 'ml-auto',
    url: '/',
    icon: <IoGiftSharp />,
    title: 'Winter Fest',
    subtitle: 'Latest Offers',
  },
  {
    url: '/',
    icon: <BsLightningFill />,
    title: 'Mobile Deals',
    subtitle: 'Special Deals',
  },
  {
    icon: <FaUser />,
    title: 'Account',
    subtitle: (
      <>
        <Link href={'/login'}>Register</Link> or <Link href={'/'}>Login</Link>
      </>
    ),
  },
];

export const navMenuData = [
  {
    title: 'Desktop',
    menus: [
      {
        title: 'Desktop Offer',
        url: '/desktop-offers',
      },
      {
        title: 'Star PC',
        subMenus: [
          { title: 'Intel PC', url: '/intel-pc' },
          { title: 'AMD PC', url: '/amd-pc' },
        ],
      },
      {
        title: 'Gaming PC',
        subMenus: [
          { title: 'Intel PC', url: '/intel-pc' },
          { title: 'AMD PC', url: '/amd-pc' },
        ],
      },
    ],
  },
  {
    title: 'Laptop',
    menus: [
      {
        title: 'All Laptop',
        subMenus: [
          { title: 'Lenovo', url: '/lenovo' },
          { title: 'HP', url: '/hp' },
        ],
      },
      {
        title: 'Gaming PC',
        subMenus: [
          { title: 'Intel PC', url: '/intel-pc' },
          { title: 'AMD PC', url: '/amd-pc' },
        ],
      },
    ],
  },
  {
    title: 'Components',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/lenovo' },
          { title: 'HP', url: '/hp' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/intel-cpu' },
          { title: 'AMD', url: '/amd-ryzen' },
        ],
      },
    ],
  },
];
