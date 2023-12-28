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
        url: '/category-details',
      },
      {
        title: 'Star PC',
        subMenus: [
          { title: 'Intel PC', url: '/category-details' },
          { title: 'AMD PC', url: '/category-details' },
        ],
      },
      {
        title: 'Gaming PC',
        subMenus: [
          { title: 'Intel PC', url: '/category-details' },
          { title: 'AMD PC', url: '/category-details' },
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
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'Gaming PC',
        subMenus: [
          { title: 'Intel PC', url: '/category-details' },
          { title: 'AMD PC', url: '/category-details' },
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
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Electronics',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Clothing',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Business Services',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Groceries',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Camera',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Software',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
  {
    title: 'Office Equipment',
    menus: [
      {
        title: 'Processors',
        subMenus: [
          { title: 'Lenovo', url: '/category-details' },
          { title: 'HP', url: '/category-details' },
        ],
      },
      {
        title: 'CPU',
        subMenus: [
          { title: 'Intel', url: '/category-details' },
          { title: 'AMD', url: '/category-details' },
        ],
      },
    ],
  },
];
