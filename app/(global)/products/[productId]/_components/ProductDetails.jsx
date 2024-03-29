import Description from './Description';
import LatestPrice from './LatestPrice';
import FocusPoint from './FocusPoint';
import QuickLinks from './QuickLinks/QuickLinks';
import SimilarProducts from './SimilarProducts/SimilarProducts';

import { TiHome } from 'react-icons/ti';

import Questions from './questions/Questions';

import Reviews from './Reviews/Reviews';
import Specifications from './specifications/Specifications';
import Link from 'next/link';
import VendorInfo from './VendorInfo';

const product = {
  model: 'Dell D1918H Monitor',
  id: '9889',
  price: 9900,
  description:
    'Dell D1918H Screen Size 18.5 inch (47 cm) HD Ready (1366 X 768) TN Panel.It has Feature of Connectivity 1 VGA Port, 1 HDMI Port,Aspect Ratio 16:9, Brightness (Typical): 200 cd/mÂ².Refresh Rate: 60 Hz, Response Time 5 ms. Viewing Angle 90 degree horizontal 65 degree vertical.Flicker Free Technology.',
  images: [
    'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-01-500x500.webp',
    'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-03-500x500.webp',
    'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-05-500x500.webp',
  ],
  regularPrice: '10,500',
  status: 'In Stock',
  productCode: '10585',
  category: 'monitor',
  brand: 'Dell',
  title: 'Dell D1918H 18.5 Inch LED Monitor (VGA, HDMI)',
  keyFeatures: [
    'Model: Dell D1918H',
    'Resolution: HD (1366 x 768)',
    'Display: TN, 60Hz, 5ms',
    'Ports: HDMI, VGA',
    'Features: Flicker Free',
  ],

  reviews: [
    {
      rating: 4,
      comment:
        'Colorful GeForce GT710-2GD3-V 2GB Graphics Card is a very good product. I play free fire on my PC but does not face any problem yet.',
      user: 'Nahiyan Hossain',
      date: '19 Oct 2023',
    },
    {
      rating: 5,
      comment:
        'Colorful GeForce GT710-2GD3-V 2GB Graphics Card is a very good product. I play free fire on my PC but does not face any problem yet.',
      user: 'Nahiyan Hossain',
      date: '19 Oct 2023',
    },
    {
      rating: 3,
      comment:
        'Colorful GeForce GT710-2GD3-V 2GB Graphics Card is a very good product. I play free fire on my PC but does not face any problem yet.',
      user: 'Nahiyan Hossain',
      date: '19 Oct 2023',
    },
  ],
  questions: [
    {
      question: 'Is this GPU can work with Amd ryzen 5 3500x?',
      answer:
        'Yes sir, Colorful GeForce GT710-2GD3-V 2GB Graphics Card will work with Amd ryzen 5 3500x.',
      user: 'Nahiyan Hossain',
      date: '19 Oct 2023',
    },
    {
      question: 'Will it run with i3 4130 and asus H81 motherboard?',
      answer:
        'Sorry Sir, the Colorful GeForce GT710-2GD3-V 2GB Graphics Card will not be supported by the Core i3 4130 Processor. The bottleneck percentage of the Processor and Graphics Card is 100%. This means that you will not get any performance out of the Graphics Card.',
      user: 'Nahiyan Hossain',
      date: '19 Oct 2023',
    },
    {
      question: 'Is this GPU can work with Amd ryzen 5 3500x?',
      answer:
        'Yes sir, Colorful GeForce GT710-2GD3-V 2GB Graphics Card will work with Amd ryzen 5 3500x.',
      user: 'Nahiyan Hossain',
      date: '19 Oct 2023',
    },
  ],
  vendorInfo: {
    id: '12',
    store: 'Kyc Limited Store',
    verified: true,
  },
};

const ProductDetails = ({ productId }) => {
  const {
    model,
    description,
    images,
    price,
    regularPrice,
    status,
    productCode,
    brand,
    category,
    title,
    keyFeatures,
    reviews,
    questions,
    vendorInfo,
  } = product;

  return (
    <div className='mx-auto w-full px-4 xl:w-[80%] xl:px-[unset] '>
      {/* breadcrumb */}

      <div className='mt-4  flex items-center gap-2 text-sm text-gray-600'>
        <Link className='flex items-center' href={'/'}>
          <TiHome />
        </Link>
        <Link href={'/category'}>
          / <span className='capitalize hover:underline'>{category}</span>
        </Link>
        <Link href={'/brand'}>
          / <span className='capitalize hover:underline'>{brand}</span>
        </Link>
        <Link href={'/title'}>
          / <span className='capitalize hover:underline'>{title}</span>
        </Link>
      </div>

      <FocusPoint product={product} />

      <div className='flex flex-col gap-5 lg:flex-row '>
        <div className='gap- flex w-full flex-col lg:w-[60%] xl:w-[70%]'>
          <QuickLinks questions={questions} reviews={reviews} />

          <Specifications />

          <Description description={description} />
          <VendorInfo vendorInfo={vendorInfo} />

          <div className='lg:mt-10'>
            <LatestPrice model={model} price={price} />
          </div>

          <Questions questions={questions} />

          <Reviews reviews={reviews} />
        </div>

        {/* releted products */}

        <div className='w-full lg:w-[40%] xl:w-[30%] '>
          <div className='flex flex-col gap-5'>
            <SimilarProducts title={'Related Products'} />
            <SimilarProducts title={'Recently Viewed'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
