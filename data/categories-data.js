import {
  MdOutlineMapsHomeWork,
  MdOutlineLinkedCamera,
  MdOutlineElectricalServices,
} from 'react-icons/md';
import { GiDeliveryDrone, GiProcessor } from 'react-icons/gi';
import { TbBatteryAutomotive } from 'react-icons/tb';
import { PiOfficeChairBold, PiTelevisionDuotone } from 'react-icons/pi';
import { AiOutlineLaptop, AiTwotoneMobile } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiDesktop, CiCamera } from 'react-icons/ci';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { LiaMicrosoft } from 'react-icons/lia';
import { PiDressThin } from 'react-icons/pi';

export const categories = [
  {
    url: '/category-details',
    icon: <MdOutlineMapsHomeWork />,
    title: 'Home Appliances',
  },
  { url: '/category-details', icon: <GiDeliveryDrone />, title: 'Drone' },
  {
    url: '/category-details',
    icon: <MdOutlineLinkedCamera />,
    title: 'Digital Camera',
  },
  { url: '/category-details', icon: <TbBatteryAutomotive />, title: 'Battery' },
  { url: '/category-details', icon: <PiTelevisionDuotone />, title: 'TV' },
  {
    url: '/category-details',
    icon: <AiTwotoneMobile />,
    title: 'Mobile Phone',
  },
  {
    url: '/category-details',
    icon: <IoGameControllerOutline />,
    title: 'Game Console',
  },
];

export const categoriesList = [
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
    icon: <PiDressThin />,
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
    icon: <CiCamera />,
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
    icon: <LiaMicrosoft />,
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
