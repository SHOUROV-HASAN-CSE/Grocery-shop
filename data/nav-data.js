import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { IoGiftSharp } from 'react-icons/io5';
import { CiDesktop } from 'react-icons/ci';
import { AiOutlineLaptop } from 'react-icons/ai';
import { GiProcessor, GiClothes } from 'react-icons/gi';
import {
  MdOutlineElectricalServices,
  MdOutlinePhotoCamera,
} from 'react-icons/md';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { SiPaloaltosoftware } from 'react-icons/si';
import { PiOfficeChairBold } from 'react-icons/pi';

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

export const navMenuData = [
  {
    title: 'Desktop',
    icon: <CiDesktop />,
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
    icon: <AiOutlineLaptop />,
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
    icon: <GiProcessor />,
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
    icon: <MdOutlineElectricalServices />,
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
    icon: <GiClothes />,
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
    icon: <RiCustomerServiceLine />,
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
    icon: <TfiShoppingCartFull />,
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
    icon: <MdOutlinePhotoCamera />,
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
    icon: <SiPaloaltosoftware />,
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
    icon: <PiOfficeChairBold />,
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
