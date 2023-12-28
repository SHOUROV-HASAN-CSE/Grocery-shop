import { MdOutlineMapsHomeWork, MdOutlineLinkedCamera } from 'react-icons/md';
import { GiDeliveryDrone } from 'react-icons/gi';
import { TbBatteryAutomotive } from 'react-icons/tb';
import { PiTelevisionDuotone } from 'react-icons/pi';
import { AiTwotoneMobile } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';

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
