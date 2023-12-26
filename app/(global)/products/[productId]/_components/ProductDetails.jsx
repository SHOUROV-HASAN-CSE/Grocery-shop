import Description from './Description';
import LatestPrice from './LatestPrice';
import FocusPoint from './FocusPoint';
import QuickLinks from './QuickLinks/QuickLinks';
import SimilarProducts from './SimilarProducts/SimilarProducts';

import Questions from './questions/Questions';

import Reviews from './Reviews/Reviews';
import Specifications from './specifications/Specifications';

const product = {
  model: 'Dell D1918H Monitor',
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
    title,
    keyFeatures,
    reviews,
    questions,
  } = product;

  return (
    <div className='mx-auto w-full px-4 lg:w-[75%] lg:px-[unset] '>
      <FocusPoint
        price={price}
        brand={brand}
        images={images}
        productCode={productCode}
        regularPrice={regularPrice}
        status={status}
        title={title}
        keyFeatures={keyFeatures}
      />

      <div className='flex flex-col gap-5 lg:flex-row '>
        <div className='flex w-full flex-col gap-8 lg:w-[75%]'>
          <QuickLinks questions={questions} reviews={reviews} />

          <Specifications />

          <Description description={description} />
          <LatestPrice model={model} price={price} />

          <Questions questions={questions} />

          <Reviews reviews={reviews} />
        </div>

        {/* releted products */}

        <div className='w-full lg:w-[25%] '>
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
